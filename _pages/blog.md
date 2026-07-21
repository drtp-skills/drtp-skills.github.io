---
title: "Blog"
permalink: /blog/
layout: single
classes: wide
sidebar: false
---

{% assign sorted_posts = site.posts | sort: "date" | reverse %}

{% for post in sorted_posts %}
  <article>
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    {% if post.date %}<p><strong>Published:</strong> {{ post.date | date: "%B %d, %Y" }}</p>{% endif %}
    {% if post.author %}<p><strong>Author:</strong> {{ post.author }}</p>{% endif %}
    <p>{{ post.excerpt }}</p>
    <a href="{{ post.url }}">Read more →</a>
    <hr>
  </article>
{% endfor %}
