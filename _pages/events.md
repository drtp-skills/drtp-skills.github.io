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

{% if sorted_events.size > 0 %}
  {% assign first_event_date = sorted_events[0].date | date: '%s' %}
{% else %}
  {% assign first_event_date = "2000-01-01 00:00" | date: '%s' %}
{% endif %}

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
  
  <h3><a href="{{ event.url }}">{{ event.title }}</a></h3>
  {% if event.date %}<p><strong>Date:</strong> {{ event.date | date: "%B %d, %Y" }}</p>{% endif %}
  <p>{{ event.excerpt }}</p>
  <hr>
{% endfor %}
