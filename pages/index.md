---
layout: default
title: Overview
---

This website is meant to help students pick a concentration in Computer Science.

Your concentration summarizes what courses you have taken and is an important part of "selling" your CS degree to employers.

You pick a concentration based on your interests.

If you don't end up liking your career, you can change later on - it's not forcing you into a life-long decision.
However, the sooner you figure out what you want to do, the more fun you will have in Computer Science!

# The Core

Every UD Computer Science degree starts out the same way.

Start by reading about the [core](core).

# Concentration List

<ul>
{% for concentration in site.concentrations %}
    <li><a href="{{ concentration.url | relative_url }}">{{ concentration.title }}</a>  - {{ concentration.question }}</li>
{% endfor %}
</ul>

<!-- <p>{{ concentration.content | markdownify }}</p> -->