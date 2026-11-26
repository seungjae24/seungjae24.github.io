---
layout: about
title: about
permalink: /
subtitle: PhD Candidate in Electrical Engineering · KAIST
profile:
  align: right
  image: profile-fieldwork.jpg
  image_circular: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

I am a PhD candidate in the [Urban Robotics Lab](https://urobot.kaist.ac.kr/url_teams/mr-seungjae-lee/) at KAIST, advised by Prof. Hyun Myung. I have led the lab’s LiDAR group since August 2025. I work on 3D point cloud registration and LiDAR SLAM, with a focus on reliable localization and mapping when the environment changes.

My work spans multiway point cloud registration, LiDAR perception, and localization for autonomous quadrupeds. See [projects]({{ '/projects/' | relative_url }}) for selected work or [CV]({{ '/cv/' | relative_url }}) for education, industry experience, and awards.

<h2><a href="{{ '/publications/' | relative_url }}" style="color: inherit">Publications</a></h2>
<div class="publications">
  {% bibliography -f papers --group_by none %}
</div>

<script defer src="{{ '/assets/js/publication-links.js' | relative_url }}"></script>
