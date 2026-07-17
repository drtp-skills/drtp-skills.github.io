var idx = lunr(function () {
  this.field('title')
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')

  this.pipeline.remove(lunr.trimmer)

  for (var item in store) {
    this.add({
      title: store[item].title,
      excerpt: store[item].excerpt,
      categories: store[item].categories,
      tags: store[item].tags,
      id: item
    })
  }
});

// Build a vocabulary from titles, tags, categories and excerpts for suggestions
var vocabulary = (function () {
  var s = new Set();
  var splitter = /[^A-Za-z0-9\u00C0-\u024F'-]+/;
  for (var i = 0; i < store.length; i++) {
    var item = store[i];
    (item.title || '').toLowerCase().split(splitter).forEach(function (w) { if (w) s.add(w); });
    (item.excerpt || '').toLowerCase().split(splitter).forEach(function (w) { if (w) s.add(w); });
    (item.tags || []).forEach(function (t) { (t || '').toLowerCase().split(splitter).forEach(function (w) { if (w) s.add(w); }); });
    (item.categories || []).forEach(function (c) { (c || '').toLowerCase().split(splitter).forEach(function (w) { if (w) s.add(w); }); });
  }
  return Array.from(s);
})();

// Small US -> GB mapping for common variants
var usToGb = {
  "color": "colour",
  "center": "centre",
  "organize": "organise",
  "organizing": "organising",
  "organised": "organised",
  "analyze": "analyse",
  "analyzing": "analysing",
  "behavior": "behaviour",
  "dialog": "dialogue",
  "catalog": "catalogue",
  "meter": "metre"
};

function toBritish(word) {
  var lw = word.toLowerCase();
  return usToGb[lw] || lw;
}

function levenshtein(a, b) {
  if (a === b) return 0;
  var la = a.length, lb = b.length;
  if (la === 0) return lb;
  if (lb === 0) return la;
  var matrix = [];
  for (var i = 0; i <= lb; i++) { matrix[i] = [i]; }
  for (var j = 0; j <= la; j++) { matrix[0][j] = j; }
  for (i = 1; i <= lb; i++) {
    for (j = 1; j <= la; j++) {
      var cost = a[j - 1] === b[i - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  return matrix[lb][la];
}

function bestMatch(word) {
  var best = { w: word, d: Infinity };
  var lw = word.toLowerCase();
  for (var i = 0; i < vocabulary.length; i++) {
    var cand = vocabulary[i];
    // skip very short candidates
    if (Math.abs(cand.length - lw.length) > 4) continue;
    var d = levenshtein(lw, cand);
    if (d < best.d) { best = { w: cand, d: d }; }
    if (best.d === 0) break;
  }
  // require a reasonably small distance to avoid odd suggestions
  if (best.d <= 2 && best.w !== lw) return best.w;
  return null;
}

$(document).ready(function() {
  function renderResults(result) {
    var resultdiv = $('#results');
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      else{
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt.split(" ").splice(0,20).join(" ")+'...</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  }

  function showSuggestion(originalQuery, suggestion) {
    var resultdiv = $('#results');
    // remove any existing suggestion
    $('#search-suggestion').remove();
    if (!suggestion || suggestion.trim() === '' || suggestion.toLowerCase() === originalQuery.toLowerCase()) return;
    var html = '<div id="search-suggestion" style="margin-bottom:0.5em;color:#69dae1;">Did you mean: <a href="#" id="search-suggestion-link">'+suggestion+'</a></div>';
    resultdiv.prepend(html);
    $('#search-suggestion-link').on('click', function (e) {
      e.preventDefault();
      $('input#search').val(suggestion).trigger('keyup');
    });
  }

  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val().toLowerCase();
    var terms = query.split(lunr.tokenizer.separator).filter(function(t){ return t && t.trim(); });

    var result = idx.query(function (q) {
      query.split(lunr.tokenizer.separator).forEach(function (term) {
        q.term(term, { boost: 100 })
        if(query.lastIndexOf(" ") != query.length-1){
          q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
        }
        if (term != ""){
          q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
        }
      })
    });

    if (result.length === 0 && terms.length > 0) {
      // Try British mapping first
      var gbTerms = terms.map(function(t){ return toBritish(t) });
      var gbQuery = gbTerms.join(' ');
      var gbResult = idx.query(function (q) {
        gbQuery.split(lunr.tokenizer.separator).forEach(function (term) {
          q.term(term, { boost: 100 })
          if(gbQuery.lastIndexOf(" ") != gbQuery.length-1){
            q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
          }
          if (term != ""){
            q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
          }
        })
      });
      if (gbResult.length > 0) {
        showSuggestion(query, gbQuery);
        renderResults(gbResult);
        return;
      }

      // Fallback: use bestMatch per-term against vocabulary
      var suggested = terms.map(function(t){
        var bm = bestMatch(t);
        return bm || t;
      }).join(' ');

      if (suggested && suggested.toLowerCase() !== query.toLowerCase()) {
        showSuggestion(query, suggested);
        var sugResult = idx.query(function (q) {
          suggested.split(lunr.tokenizer.separator).forEach(function (term) {
            q.term(term, { boost: 100 })
            if(suggested.lastIndexOf(" ") != suggested.length-1){
              q.term(term, {  usePipeline: false, wildcard: lunr.Query.wildcard.TRAILING, boost: 10 })
            }
            if (term != ""){
              q.term(term, {  usePipeline: false, editDistance: 1, boost: 1 })
            }
          })
        });
        renderResults(sugResult);
        return;
      }
    }

    // No suggestion or results found; render original results
    $('#search-suggestion').remove();
    renderResults(result);
  });
});
