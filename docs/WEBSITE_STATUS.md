# Website Status

Domain: `nanoclaw.website`

## GitHub Pages

- Branch: `gh-pages`
- Path: `/`
- Custom domain: `nanoclaw.website`
- Status: configured on GitHub

## DNS

DNS still needs to point from the domain provider to GitHub Pages.

Required records:

```text
A     @      185.199.108.153
A     @      185.199.109.153
A     @      185.199.110.153
A     @      185.199.111.153
CNAME www    nicanatoly.github.io
```

After DNS propagates, enable HTTPS enforcement in GitHub Pages settings.

## Role Of The Site

`nanoclaw.website` is intended as a visual landing page and exhibition surface.
The GitHub repository remains the canonical place for source code, issues, and
releases.
