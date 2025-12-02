---
title: "Events"
permalink: /events/
layout: single
classes: wide
sidebar: false
---

{% assign current_date = site.time | date: '%s' %}
{% assign mention_future = "no" %}
{% assign mention_previous = "no" %}
{% assign sorted_events = site.events | sort: "date" | reverse %}
{% assign all_tags = sorted_events | map: 'tags' | join: ',' | split: ',' | uniq | sort %}

{% if sorted_events.size > 0 %}
  {% assign first_event_date = sorted_events[0].date | date: '%s' %}
{% else %}
  {% assign first_event_date = "2000-01-01 00:00" | date: '%s' %}
{% endif %}

<div id="tag-filter-bar">
  <h3>Filter events by tag:</h3>
  <button class="tag-filter-btn" data-tag="all">All</button>
  {% for tag in all_tags %}
    <button class="tag-filter-btn" data-tag="{{ tag }}">{{ tag }}</button>
  {% endfor %}
</div>

{% if first_event_date < current_date %}
  <div>
    <h2>Upcoming Events</h2>
<div class="notice notice--info">
<strong>No upcoming events:</strong> We'll be running more events in the coming months so check back again soon to see what's coming up.
</div>
  </div>
{% endif %}


{% for event in sorted_events %}
  {% assign event_date = event.date | date: '%s' %}
  {% if mention_future == "no" and event_date >= current_date %}
  <h2>Upcoming Events</h2>
  {% assign mention_future = "yes" %}
  {% elsif mention_previous == "no" and event_date < current_date %}
  <h2>Past Events</h2>
  {% assign mention_previous = "yes" %}
  {% endif %}
  <div class="event-item" data-tags="{% if event.tags %}{{ event.tags | join: ',' }}{% endif %}">
    <h3><a href="{{ event.url }}">{{ event.title }}</a></h3>
    <p>{{ event.excerpt }}</p>
    {% if event.date %}<p><strong>Date:</strong> {{ event.date | date: "%B %d, %Y" }}</p>{% endif %}
    {% if event.tags %}<p><strong>Tags:</strong> {% for tag in event.tags %}<span style="background:#e0f7fa; color:#00796b; padding:2px 8px; margin-right:4px; border-radius:8px; font-size:0.9em;">{{ tag }}</span>{% endfor %}</p>{% endif %}
    <hr>
  </div>
{% endfor %}

<script>
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.tag-filter-btn');
  var events = document.querySelectorAll('.event-item');
  buttons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tag = btn.getAttribute('data-tag');
      buttons.forEach(function(b) { b.style.fontWeight = 'normal'; });
      btn.style.fontWeight = 'bold';
      events.forEach(function(ev) {
        var tags = ev.getAttribute('data-tags');
        if (tag === 'all' || (tags && tags.split(',').map(t => t.trim()).includes(tag))) {
          ev.style.display = '';
        } else {
          ev.style.display = 'none';
        }
      });
    });
  });
});
</script>
