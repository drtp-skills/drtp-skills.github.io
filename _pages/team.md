---
title: "The Team"
permalink: /team/
layout: single
classes: wide
---


{% for project_team_member in site.project_team %}
  <div>
    {% if project_team_member.profile_image and project_team_member.profile_image != "" %}
    <img  src="{{ site.baseurl }}{{ project_team_member.profile_image }}"
    {% else %}
    <img  src="{{ site.baseurl }}/assets/images/team/profile_placeholder.png"
    {% endif %}
          style="border-radius: 50%;
                 float: left;
                 width: 96px;
                 margin-right: 15px;
                 margin-bottom: 10px;">
    <p style="font-size: 0.9em; margin-bottom: 0;">
      <strong>
        {% if project_team_member.homepage %}
          <a href="{{ project_team_member.homepage }}" target="_blank" rel="noopener noreferrer">
            {{ project_team_member.name }}
          </a>
        {% else %}
          {{ project_team_member.name }}
        {% endif %}
      </strong>
    </p>
    <p style="font-size: 0.7em; margin-bottom: 0;">{{ project_team_member.position }}</p>
    <p style="font-size: 0.7em; margin-bottom: 8px;">{{ project_team_member.affiliation }}</p>
    {% if project_team_member.project_role and project_team_member.project_role != "" %}
      <p style="font-size: 0.7em;"><strong>CHARTED Roles: </strong>{{ project_team_member.project_role }}</p>
    {% endif %}
  </div>
  
  <div style="font-size: 0.7em; clear: both;">
    <p>{{ project_team_member.content | markdownify }}</p>
  </div>
  <hr/>
{% endfor %}