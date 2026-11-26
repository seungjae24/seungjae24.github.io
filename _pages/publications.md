---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications">

{% bibliography -f papers %}

<h2>Domestic Conferences</h2>
{% bibliography -f domestic --group_by none %}

</div>

<script defer src="{{ '/assets/js/publication-links.js' | relative_url }}"></script>
