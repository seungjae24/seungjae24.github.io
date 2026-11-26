---
layout: page
title: Visual Place Recognition
description: Lfin · Sep 2021 – Dec 2022
role: I used image retrieval to narrow down a robot’s possible locations by matching its camera image against reference images from known locations. I masked dynamic objects to reduce their influence on the visual descriptors used for retrieval.
importance: 1
category: research
img: assets/project-cards/lfin.jpg
---

{{ page.role }}

<figure>
  <img src="{{ '/assets/project-cards/lfin.jpg' | relative_url }}" alt="Two Grad-CAM heatmaps of the same street scene, with parked cars in front of a storefront.">
  <figcaption>I used Grad-CAM to visualize how dynamic objects influenced the retrieval descriptor before masking (left) and after masking (right).</figcaption>
</figure>
