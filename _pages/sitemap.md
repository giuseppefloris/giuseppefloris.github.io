---
layout: archive
title: "Sitemap"
description: "Explore Giuseppe Floris's research profile, publications, and academic CV."
permalink: /sitemap/
author_profile: false
---

- [Research profile]({{ '/' | relative_url }})
- [Publications]({{ '/publications/' | relative_url }})
- [Academic CV]({{ '/cv/' | relative_url }})

## Publication pages

{% for publication in site.publications reversed %}
- [{{ publication.title }}]({{ publication.url | relative_url }})
{% endfor %}

[XML sitemap for search engines]({{ '/sitemap.xml' | relative_url }})
