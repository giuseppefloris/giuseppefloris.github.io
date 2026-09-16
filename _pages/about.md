---
layout: portfolio
permalink: /
title: "Giuseppe Floris — PhD Student in AI Security"
excerpt: "PhD student working on machine learning security, privacy, and applications of ML to cybersecurity."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<header class="profile-intro">
  <div>
    <p class="profile-eyebrow">AI security · Machine learning</p>
    <h1>Giuseppe Floris</h1>
    <p class="profile-role">PhD Student in Electronics and Computer Engineering</p>
    <h2 class="profile-about-heading">About Me</h2>
    <p class="profile-summary">I am a PhD student in Electronics and Computer Engineering at the University of Cagliari. My research focuses on machine learning security and privacy, and on applications of machine learning to cybersecurity. In particular, I work on adversarial robustness and privacy attacks and defenses. I am interested in evaluating security and privacy risks in machine learning systems and developing methods to mitigate them.</p>
    <ul class="profile-tags profile-tags--intro" aria-label="Research topics">
      <li><button class="research-topic" type="button" data-topic="adversarial-robustness" aria-pressed="false" aria-controls="selected-work-grid">Adversarial robustness</button></li>
      <li><span class="research-topic research-topic--static">Privacy attacks</span></li>
      <li><span class="research-topic research-topic--static">Differential privacy</span></li>
      <li><button class="research-topic" type="button" data-topic="ml-cybersecurity" aria-pressed="false" aria-controls="selected-work-grid">ML for cybersecurity</button></li>
      <li><span class="research-topic research-topic--static">LLM security</span></li>
      <li><button class="research-topic" type="button" data-topic="hyperparameter-optimization" aria-pressed="false" aria-controls="selected-work-grid">Hyperparameter optimization</button></li>
    </ul>
    <nav class="profile-links" aria-label="Profile links">
      <a class="profile-link--primary" href="/files/cv-giuseppe-floris.pdf">Download CV</a>
      <a href="/publications/">Publications</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/">LinkedIn</a>
      <a href="mailto:{{ site.author.email }}">Email</a>
    </nav>
  </div>
  <img class="profile-photo" src="/images/profile.png" alt="Portrait of Giuseppe Floris">
</header>

<section class="profile-section selected-work" aria-labelledby="selected-work-heading">
  <div class="section-heading-row">
    <div>
      <h2 id="selected-work-heading">Selected work</h2>
      <p id="work-filter-status" class="work-filter-status" aria-live="polite">A selection of publications and current research.</p>
    </div>
    <button id="work-filter-reset" class="work-filter-reset" type="button" hidden>Show selected work</button>
  </div>

  <div id="selected-work-grid" class="work-grid">
    <article class="work-card" data-topics="adversarial-robustness ml-cybersecurity" data-featured="true">
      <p class="work-card__type">Publication · TIFS 2025</p>
      <h3><a href="/publication/2025-modsec-advlearn">ModSec-AdvLearn</a></h3>
      <p>Robust machine learning for countering adversarial SQL injection attacks.</p>
      <ul class="work-card__topics" aria-label="Topics">
        <li>Adversarial robustness</li>
        <li>ML for cybersecurity</li>
      </ul>
      <a class="work-card__action" href="/publication/2025-modsec-advlearn">View publication <span aria-hidden="true">→</span></a>
    </article>

    <article class="work-card" data-topics="adversarial-robustness hyperparameter-optimization" data-featured="true">
      <p class="work-card__type">Publication · Neurocomputing 2025</p>
      <h3><a href="/publication/2025-ho-fmn">HO-FMN</a></h3>
      <p>Hyperparameter optimization for fast minimum-norm adversarial attacks.</p>
      <ul class="work-card__topics" aria-label="Topics">
        <li>Adversarial robustness</li>
        <li>Hyperparameter optimization</li>
      </ul>
      <a class="work-card__action" href="/publication/2025-ho-fmn">View publication <span aria-hidden="true">→</span></a>
    </article>

    <article class="work-card" data-topics="privacy-attacks llm-security" data-featured="true">
      <p class="work-card__type">Current research</p>
      <h3>Privacy in LLM pipelines</h3>
      <p>Privacy attacks and defenses in large language models and pipeline components, including tokenizers.</p>
      <ul class="work-card__topics" aria-label="Topics">
        <li>Privacy attacks</li>
        <li>LLM security</li>
      </ul>
      <span class="work-card__note">Ongoing work · not yet published</span>
    </article>

    <article class="work-card" data-topics="adversarial-robustness hyperparameter-optimization">
      <p class="work-card__type">Publication · ESANN 2023</p>
      <h3><a href="/publication/2023-improving-fmn-attacks-hyperparameter-optimization">Improving Fast Minimum-Norm Attacks</a></h3>
      <p>Improving adversarial attacks through automated hyperparameter optimization.</p>
      <ul class="work-card__topics" aria-label="Topics">
        <li>Adversarial robustness</li>
        <li>Hyperparameter optimization</li>
      </ul>
      <a class="work-card__action" href="/publication/2023-improving-fmn-attacks-hyperparameter-optimization">View publication <span aria-hidden="true">→</span></a>
    </article>

    <article class="work-card" data-topics="ml-cybersecurity">
      <p class="work-card__type">Publication · DCAI 2024</p>
      <h3><a href="/publication/2024-modsec-learn">ModSec-Learn</a></h3>
      <p>A machine-learning framework for enhancing SQL injection detection in ModSecurity.</p>
      <ul class="work-card__topics" aria-label="Topics">
        <li>ML for cybersecurity</li>
      </ul>
      <a class="work-card__action" href="/publication/2024-modsec-learn">View publication <span aria-hidden="true">→</span></a>
    </article>

  </div>
</section>

<section class="profile-section" aria-labelledby="experience-heading">
  <h2 id="experience-heading">Recent experience</h2>
  <div class="profile-experience">
    <details class="experience-card" open>
      <summary>
        <span>Visiting PhD · CISPA Helmholtz Center for Information Security</span>
        <time>Nov 2025 – Apr 2026</time>
      </summary>
      <p>SprintML Lab. Research on privacy attacks and defenses in LLMs and their pipeline components, including tokenizers.</p>
    </details>
    <details class="experience-card">
      <summary>
        <span>Research Intern · PLURIBUS ONE</span>
        <time>Jan 2025 – Jul 2025</time>
      </summary>
      <p>Development of API-Sec, a machine-learning-based threat detection framework for web APIs.</p>
    </details>
    <details class="experience-card">
      <summary>
        <span>PhD Student · University of Cagliari</span>
        <time>2023 – 2026</time>
      </summary>
      <p>DRIEI PhD Program. Supervisor: Prof. Battista Biggio; co-supervisor: Dr. Maura Pintor.</p>
    </details>
  </div>
</section>

<footer class="profile-contact">
  <p>University of Cagliari · sAIfer Lab · Cagliari, Italy</p>
  <a href="mailto:{{ site.author.email }}">giuseppe.floris@unica.it</a>
</footer>
