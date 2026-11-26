---
layout: page
title: Projects
permalink: /projects/
description: Point cloud registration, field robotics, and LiDAR perception.
nav: true
nav_order: 3
---

<style>
  .projects .row-cols-md-3 > .col > a {
    display: block;
    height: 100%;
  }
  .projects .card > figure {
    aspect-ratio: 16 / 9;
    position: relative;
    flex: none;
    margin: 0;
    background: white;
  }
  .projects .card > figure picture,
  .projects .card > figure .card-img-top {
    display: block;
    width: 100%;
    height: 100%;
  }
  .projects .card > figure picture {
    position: absolute;
    inset: 0;
  }
  .projects .card .card-title {
    font-size: 1.25rem;
    line-height: 1.3;
    margin-bottom: 0.4rem;
  }
  .project-subtitle { font-size: 0.875rem; margin-bottom: 0.6rem; }
  .projects .card-img-top {
    object-fit: contain;
  }
</style>
<div class="projects">
  {% assign sorted_projects = site.projects | sort: "importance" | reverse %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      <div class="col">
        <a href="{{ project.url | relative_url }}">
          <article class="card h-100 hoverable">
            {% if project.img %}
              {% include figure.liquid path=project.img sizes="250px" alt="" class="card-img-top" %}
            {% endif %}
            <div class="card-body">
              <h2 class="card-title">{{ project.title | escape }}</h2>
              <p class="project-subtitle">{{ project.description | escape }}</p>
              <p class="card-text">{{ project.role | escape }}</p>
            </div>
          </article>
        </a>
      </div>
    {% endfor %}
  </div>
</div>
