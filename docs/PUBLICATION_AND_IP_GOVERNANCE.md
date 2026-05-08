# Publication And IP Governance

Status: project governance note.
Updated: 2026-05-08.

This document defines how NanoClaw decides what to publish, what to review
first, and what to keep private. It is project hygiene, not legal advice.

## Classification Rule

| Material type | Default action | Notes |
| --- | --- | --- |
| Educational material | Publish open source | Curricula, modules, exercises, glossary, tutorials, and public-safe examples should be reusable. |
| Research material | Publish as source-backed notes | Claims need sources, verification states, citations, and clear separation between facts and hypotheses. |
| Potentially patentable ideas | Route to IP review first | Do not publish until the open-source, defensive-publication, or patent-review decision is intentional. |
| Strategic or commercial material | Keep private | Business strategy, pricing, partner lists, buyer outreach, deal terms, and competitive plans stay out of the public repo. |
| Third-party material | Use links, citations, and annotations | Do not copy full third-party works into the repo. Prefer precise links and short source notes. |
| Important publications | Create releases | Releases make milestones timestamped, reviewable, and easy to cite. |
| Key ideas | Create timestamped whitepapers | Use dated docs/releases for public-safe technical positions and source-backed arguments. |
| Strong technical solutions | Consider provisional patent review | Do this before public disclosure if patent rights may matter. |
| Methods and text | Use copyright notices where appropriate | Keep authorship and publication history clear. |
| Code | Use a normal open-source license | NanoClaw currently uses MIT; evaluate alternatives only when there is a specific reason. |

## Publication Decision Tree

Before publishing, ask:

1. Is this educational?
   - If yes, publish open source when public-safe.
2. Is this research?
   - If yes, publish only with sources, citations, and verification status.
3. Could this be patentable?
   - If yes, stop and do IP review before public disclosure.
4. Is this strategic or commercial?
   - If yes, keep private.
5. Does this include third-party material?
   - If yes, use links, citations, and annotations rather than copying.
6. Is this important enough to cite later?
   - If yes, publish through a release or timestamped whitepaper.

## IP Review Gate

Use IP review before public disclosure when a draft includes:

- a new technical mechanism;
- a novel agent approval workflow;
- a distinctive provenance or receipt method;
- a collection/NFT publication mechanism that may have commercial value;
- a security, runtime, or orchestration design that is more than documentation;
- any idea where patent, defensive publication, or trade-secret strategy matters.

IP review should decide one of:

- `publish-open-source`;
- `publish-defensive-whitepaper`;
- `hold-private`;
- `seek-provisional-patent-review`;
- `revise-before-publication`.

Use `docs/IP_REVIEW_CHECKLIST.md` to record that decision before publishing a
patent-sensitive or commercially sensitive idea.

## Whitepaper Rule

Use timestamped whitepapers for key ideas that should be publicly traceable.

A whitepaper should include:

- title;
- date;
- status;
- authorship/copyright notice when appropriate;
- abstract;
- source-backed background;
- technical position;
- public-safe examples;
- limitations;
- explicit non-claims;
- links to related releases, issues, and docs.

Start from `docs/TIMESTAMPED_WHITEPAPER_TEMPLATE.md` for the public-safe
structure.

Do not use whitepapers to publish private assets, pricing strategy, buyer
outreach, partner negotiations, wallet credentials, or legal claims that have
not been reviewed.

## Source-Backed Research Rule

Research notes should include:

- primary sources when available;
- source type;
- verification state;
- what the source supports;
- what NanoClaw infers;
- what remains speculative.

Use `docs/EVIDENCE_AND_SOURCE_INDEX.md` for this structure.

## Copyright Notices

Use copyright notices for:

- substantial original whitepapers;
- distinctive methods;
- educational modules;
- public catalog text;
- certificate templates;
- exhibition text;
- long-form research notes.

Copyright notices should clarify authorship and publication date. They should
not imply rights in third-party material or private collection assets unless
that review has been completed.

## Code Licensing

NanoClaw currently uses the MIT License. Keep normal code contributions under
the repository license unless a separate reviewed decision is made.

If a future module needs explicit patent licensing or contributor patent terms,
review whether a separate repository, Apache-2.0 license, contributor agreement,
or patent policy is appropriate before publishing.

## Strategic And Commercial Private Zone

Keep these private by default:

- pricing;
- auction strategy;
- buyer and collector outreach;
- partner negotiation notes;
- sponsorship targets before public confirmation;
- investment theses;
- product positioning that is not ready for public release;
- private collection source assets;
- wallet, payment, and custody operations;
- domain/DNS control notes;
- Bitrix24 operational credentials or internal CRM data.

## Third-Party Material Rule

For outside work:

- link to the source;
- cite only the portion needed;
- annotate what it supports;
- avoid copying full documents, media, datasets, or proprietary examples;
- respect the source license;
- do not imply endorsement or partnership.

## Release Rule

Create a release when a publication:

- adds a new public layer;
- creates a milestone that should be cited;
- changes public-safe schemas or examples;
- adds a research or evidence package;
- adds a whitepaper;
- changes trust, safety, or publication governance.

## Non-Claims

Unless separately reviewed, NanoClaw public materials should not claim:

- partnership;
- endorsement;
- custody service status;
- yield;
- investment performance;
- rights clearance;
- legal advice;
- financial advice;
- production readiness for wallet, payment, minting, or listing workflows.

## Related Documents

- `docs/EVIDENCE_AND_SOURCE_INDEX.md`
- `docs/TRUST_ARCHITECTURE.md`
- `docs/PUBLICATION_PACK.md`
- `docs/HUMAN_APPROVAL_BOUNDARIES.md`
- `docs/IP_PUBLICATION.md`
- `docs/TIMESTAMPED_WHITEPAPER_TEMPLATE.md`
- `docs/IP_REVIEW_CHECKLIST.md`
