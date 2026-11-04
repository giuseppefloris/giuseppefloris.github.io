# Research profile and indexing

This revision keeps the existing GitHub Pages/Jekyll setup, public URLs, English language, and academic focus. Template examples remain in the repository but are excluded from publication. The generated XML sitemap contains nine URLs: the home page, CV, publications list, four publication pages, human sitemap, and the actual CV PDF.

## Changes

- Concise introduction, prominent Google Scholar/ORCID links, a link to all publications, and a compressed WebP portrait (175,022 to 12,346 bytes).
- ProfilePage/Person structured data on the home page and ScholarlyArticle/citation metadata on the four paper pages. This describes existing public facts; it does not guarantee rich results or Google Scholar inclusion.
- Unique home title, one description per page, social sharing metadata, and a `noindex` directive on the 404 page.
- Fix research filters to bind only to actual topic buttons. Add functional privacy/LLM filters, keyboard-operable theme control, a skip link, dark-theme contrast improvements, and sufficient space for the mobile menu button.
- Disable the unconfigured legacy Google Analytics provider. No replacement tracking is added.
- Add short paper overviews and verify author metadata for the three DOI publications against Crossref. ModSec-Learn was presented at DCAI 2024; its proceedings chapter was published in 2025. Its existing `/publication/2024-modsec-learn` URL is retained.

## Google Search Console: account steps still required

1. Open <https://search.google.com/search-console/> with the Google account that should manage the site.
2. Add or select the **URL-prefix** property `https://giuseppefloris.github.io/`. A Domain property would require control of DNS records for the GitHub-hosted domain.
3. If ownership is not verified, choose the HTML tag method and put the exact provided token in `google_site_verification` in `_config.yml`. Alternatively, add Google's exact verification HTML file to the published root. Do not invent a token. Publish it, then verify in Search Console.
4. After this revision is published, submit `https://giuseppefloris.github.io/sitemap.xml` in Sitemaps.
5. Inspect `https://giuseppefloris.github.io/`, run the live test, and use **Request indexing** if available. Inspect the publications list and paper pages as needed.
6. Monitor Page indexing and Performance. Public search results alone are not a definitive check of Google's indexing state.

The public verification token in `_config.yml` belongs to the Google account authorized by the site owner for this property. Source changes alone do not certify Search Console verification or Google's index status; those must be checked in Search Console after deployment. Requesting a crawl does not guarantee indexing, a particular ranking, or immediate updates. Windsor.ai is an optional way to read Search Console reporting; it is not required for ownership verification or requesting indexing.

## Validation performed

- Built with GitHub Pages 233 / Jekyll 3.10.0 and Ruby 3.4.2.
- Checked all 12 generated HTML files: one H1/description/canonical per non-redirect page, valid JSON-LD, four article records, no broken internal links, and no example URLs in the nine-entry sitemap.
- Browser checks cover the topic filters, static topic behavior, keyboard theme switch, and mobile navigation/layout at 390px.

References: [Google recrawling guidance](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [ProfilePage markup](https://developers.google.com/search/docs/appearance/structured-data/profile-page), [Google Scholar inclusion requirements](https://scholar.google.com/intl/en/scholar/inclusion.html).
