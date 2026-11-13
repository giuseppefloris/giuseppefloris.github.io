---
layout: archive
title: "CV"
description: "Giuseppe Floris's academic CV: research experience at the University of Cagliari, CISPA and Pluribus One, education, publications, and technical skills."
permalink: /cv/
last_modified_at: 2026-11-13
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<a class="cv-download" href="{{ base_path }}/files/cv-giuseppe-floris.pdf">Download the complete CV (PDF)</a>

Profile
------
I am a member of <a href="https://www.saiferlab.ai/people/giuseppefloris">sAIferLab</a> and a PhD student in Electronics and Computer Engineering at the University of Cagliari. My research focuses on machine learning security and privacy, and on applications of machine learning to cybersecurity. In particular, I work on adversarial robustness and privacy attacks and defenses. I am interested in evaluating security and privacy risks in machine learning systems and developing methods to mitigate them.

**Research areas:** Adversarial robustness · Privacy attacks and defenses · Differential privacy · ML for cybersecurity · LLM security · Hyperparameter optimization

**Profiles:** [Email](mailto:{{ site.author.email }}) · [LinkedIn](https://www.linkedin.com/in/{{ site.author.linkedin }}/) · [Google Scholar]({{ site.author.googlescholar }}) · [ORCID]({{ site.author.orcid }}) · [GitHub](https://github.com/{{ site.author.github }})

<div class="cv-accordions">
  <details class="cv-accordion" open>
    <summary>Research Experience</summary>
    <div class="cv-accordion__content">
      <details class="cv-subaccordion" open>
        <summary>Current positions</summary>
        <div class="cv-subaccordion__content">
          <article class="cv-entry">
            <time>2024 – present</time>
            <div>
              <h3>Member · sAIfer Lab</h3>
              <p class="cv-entry__place">University of Cagliari</p>
              <p>PhD student member at the Department of Electrical and Electronic Engineering.</p>
            </div>
          </article>
        </div>
      </details>

      <details class="cv-subaccordion">
        <summary>Past positions</summary>
        <div class="cv-subaccordion__content">
          <article class="cv-entry">
            <time>Nov 2025 – Apr 2026</time>
            <div>
              <h3>Visiting PhD</h3>
              <p class="cv-entry__place">CISPA Helmholtz Center for Information Security · SprintML Lab</p>
              <p><strong>Supervisor:</strong> Prof. Franziska Boenisch.</p>
              <p>Research on privacy attacks and defenses in LLMs and their tokenizers.</p>
            </div>
          </article>
          <article class="cv-entry">
            <time>Jan 2025 – Jul 2025</time>
            <div>
              <h3>Research Intern</h3>
              <p class="cv-entry__place">PLURIBUS ONE S.r.l.</p>
              <p>Development of API-Sec, an ML-based threat detection framework for web APIs.</p>
            </div>
          </article>
          <article class="cv-entry">
            <time>Jun 2023 – Sep 2023</time>
            <div>
              <h3>Research Grant</h3>
              <p class="cv-entry__place">University of Cagliari</p>
              <p>Comparative analysis of image-classifier robustness against state-of-the-art perturbation models using PyTorch.</p>
            </div>
          </article>
        </div>
      </details>
    </div>
  </details>

  <details class="cv-accordion" open>
    <summary>Education</summary>
    <div class="cv-accordion__content">
      <article class="cv-entry">
        <time>2023 – 2026</time>
        <div>
          <h3>PhD in Electronics and Computer Engineering</h3>
          <p class="cv-entry__place">University of Cagliari · DRIEI PhD Program</p>
          <p><strong>Supervisor:</strong> Prof. Battista Biggio.</p>
          <p><strong>Co-supervisor:</strong> Dr. Maura Pintor.</p>
        </div>
      </article>
      <article class="cv-entry">
        <time>2021 – 2023</time>
        <div>
          <h3>MSc in Computer Engineering, Cybersecurity and Artificial Intelligence</h3>
          <p class="cv-entry__place">University of Cagliari</p>
          <p>110/110 with honors. Thesis: <em>Hyperparameter Optimization for Fast Minimum-norm Attacks</em>. Supervisor: Prof. Battista Biggio.</p>
        </div>
      </article>
      <article class="cv-entry">
        <time>2016 – 2020</time>
        <div>
          <h3>BSc in Electrical, Electronic and Computer Engineering</h3>
          <p class="cv-entry__place">University of Cagliari</p>
          <p>Thesis: <em>Mitigation of vulnerabilities in the evolution of open source software development</em>. Supervisor: Prof. Giorgio Giacinto.</p>
        </div>
      </article>
    </div>
  </details>
</div>

Technical Skills
------
* **Programming:** Python, including AI/ML and LLM libraries.
* **Machine learning and AI security:** applications to cybersecurity, hyperparameter optimization, adversarial attacks and robustness, privacy attacks, and differential privacy.

Languages
------
* **Italian:** native.
* **English:** B2.

{% include publications-under-review.html %}

Publications
------
<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>
