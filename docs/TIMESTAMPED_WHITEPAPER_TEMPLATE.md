# Timestamped Whitepaper Template

Status: template.
Updated: 2026-05-08.

Use this template for key NanoClaw ideas that should be public, source-backed,
timestamped, and easy to cite. Do not use it to publish strategic, commercial,
private, or potentially patentable material before review.

## Header Template

```md
# Whitepaper Title

Status: draft | source-backed | IP-review-required | approved-for-publication | published
Date: YYYY-MM-DD
Version: v0.0.0
Author:
Copyright:
Repository:
Related issue:
Related release:
IP review status: not-reviewed | not-patent-sensitive | needs-IP-review | defensive-publication | provisional-patent-review-candidate
Publication decision: hold-private | publish-open-source | publish-defensive-whitepaper | publish-after-review
```

## Abstract

Write a short summary of the idea, the problem it addresses, and what the
whitepaper does not claim.

## Problem

Describe the concrete problem. Keep it technical, educational, or
research-oriented. Do not include strategic or commercial plans.

## Background And Sources

Use source-backed notes:

| Claim | Source | Source type | Verification state |
| --- | --- | --- | --- |
|  |  | primary docs / spec / repo / paper / maintainer comment | unverified / primary-source-confirmed / hypothesis |

## Technical Position

State NanoClaw's interpretation. Separate:

- facts supported by sources;
- design choices;
- hypotheses;
- future work.

## Proposed Architecture

Describe the architecture at a safe level:

- components;
- interfaces;
- approval boundaries;
- receipts/logs;
- public/private split.

Do not disclose patent-sensitive implementation details unless IP review has
approved publication.

## Public-Safe Example

Use fake or placeholder data only. Avoid:

- private assets;
- wallet addresses;
- buyer/collector data;
- API keys or webhooks;
- local paths;
- prices;
- legal/financial claims.

## What This Does Not Claim

This whitepaper does not claim:

- partnership;
- endorsement;
- custody;
- yield;
- investment value;
- rights clearance;
- legal advice;
- financial advice;
- production readiness for wallet, payment, minting, listing, or DNS workflows.

## IP Review Status

| Question | Answer |
| --- | --- |
| Could this include a new technical mechanism? |  |
| Could this include a patentable workflow? |  |
| Is this only educational/public knowledge? |  |
| Should this be held private? |  |
| Should this be a defensive publication? |  |
| Should provisional patent review be considered? |  |

## Publication Decision

Choose one:

- `hold-private`;
- `publish-open-source`;
- `publish-source-backed-note`;
- `publish-defensive-whitepaper`;
- `seek-provisional-patent-review`;
- `revise-before-publication`.

## References

Use links, citations, and annotations. Do not copy full third-party works into
the repository.
