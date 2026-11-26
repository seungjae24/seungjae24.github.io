# Seungjae Lee · Academic homepage

English-language academic homepage based on [al-folio](https://github.com/alshedivat/al-folio). Content is limited to public research and public career information.

- `_pages/about.md`: short bio
- `_projects/`: five project cards with public sources
- `_bibliography/papers.bib`: selected publications
- `_pages/cv.md`: education, internship history, awards
- `_data/socials.yml`: public links

## Preview locally

With the theme dependencies installed (see [al-folio setup](https://github.com/alshedivat/al-folio)), run:

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open `http://127.0.0.1:4000/`.

## Publish

In the `seungjae24/seungjae24.github.io` repository, select GitHub Actions under Settings → Pages. Pushing to `master` runs the Pages deployment workflow.

Theme code is provided under the upstream license in `LICENSE`.
