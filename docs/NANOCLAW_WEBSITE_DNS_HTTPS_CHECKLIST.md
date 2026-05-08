# NanoClaw Website DNS And HTTPS Checklist

Status: planning checklist.
Updated: 2026-05-08.

This checklist prepares `nanoclaw.website` for GitHub Pages and HTTPS. It does
not authorize DNS changes. DNS, registrar, nameserver, and production website
changes require explicit confirmation.

## Current State

- Repository: `nicanatoly/nanoclaw`
- Domain: `nanoclaw.website`
- Website issue: <https://github.com/nicanatoly/nanoclaw/issues/5>
- GitHub Pages expected source: repository Pages configuration.
- `CNAME` should contain: `nanoclaw.website`

## GitHub Pages Checks

Before editing DNS:

1. Confirm the Pages source branch and folder in GitHub settings.
2. Confirm the repository contains `CNAME`.
3. Confirm custom domain is set to `nanoclaw.website`.
4. Confirm GitHub Pages reports DNS readiness or expected records.
5. Confirm whether HTTPS enforcement is available.
6. Confirm no private content is being published on the website.

## DNS Records To Prepare

For the apex domain:

```text
A @ 185.199.108.153
A @ 185.199.109.153
A @ 185.199.110.153
A @ 185.199.111.153
```

For `www`:

```text
CNAME www nicanatoly.github.io
```

Verify these records against the current GitHub Pages UI before applying them.

## Verification Commands

After DNS is changed and propagated:

```bash
nslookup nanoclaw.website
nslookup www.nanoclaw.website
curl -I https://nanoclaw.website
curl -I https://www.nanoclaw.website
```

Expected:

- apex domain resolves to GitHub Pages IPs;
- `www` resolves through CNAME;
- HTTPS certificate is issued;
- HTTPS can be enforced;
- no mixed-content warnings on the site.

## GitHub Issue Update

After verification, update:

<https://github.com/nicanatoly/nanoclaw/issues/5>

Include:

- DNS records applied;
- propagation status;
- HTTPS status;
- any remaining issue.

## Do Not Do Without Confirmation

- Do not change DNS.
- Do not change registrar settings.
- Do not change nameservers.
- Do not publish private website content.
- Do not claim official website launch until HTTPS works.
