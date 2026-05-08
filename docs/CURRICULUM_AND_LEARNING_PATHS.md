# Curriculum And Learning Paths

NanoClaw can serve as a small public learning lab for agent runtime safety,
open-source contribution, provenance receipts, and public/private publication
boundaries.

## Audience

| Audience | Entry point | Outcome |
| --- | --- | --- |
| Students | Glossary, exercises, simple docs tasks | Understand agent safety and GitHub workflow |
| Developers | Architecture, examples, schemas, issues | Contribute small docs/tests/examples |
| Researchers | Evidence index, watchlists, scenarios | Trace claims and compare protocols |
| Maintainers | PRs, issues, contribution rules | Review narrow useful changes |
| Partners | Releases, website, public-safe catalog docs | Understand scope without private access |

## Curriculum Structure

### Module 1: GitHub As Public Engineering Memory

Topics:

- commits, issues, PRs, discussions, releases;
- why small reviewable changes matter;
- how public activity differs from promotion.

Exercise:

- Read one NanoClaw release and identify the files, PR, issue update, and safety
  boundary behind it.

### Module 2: Agent Safety And Human Approval

Topics:

- container isolation;
- suggestion versus execution;
- human-approved actions;
- wallet, payment, DNS, minting, and private asset boundaries.

Exercise:

- Classify ten hypothetical agent actions as `safe to draft`,
  `safe to execute`, or `human approval required`.

### Module 3: Provenance Receipts

Topics:

- receipt schemas;
- public-safe catalog review;
- edition drafts;
- action logs and audit vocabulary.

Exercise:

- Create a fake public-safe provenance receipt using placeholder data only.

### Module 4: Collection And Edition Schemas

Topics:

- catalog object schema;
- edition schema;
- public/private split;
- certificate drafts.

Exercise:

- Validate a sample catalog object and remove any private fields before
  publication.

### Module 5: RWA, x402, And Agentic Payments

Topics:

- tokenized assets as research context;
- x402-style payment boundaries;
- wallet approval;
- no automatic transfers, listing, minting, or financial claims.

Exercise:

- Write a research note that separates source-confirmed facts from NanoClaw
  hypotheses.

### Module 6: External Open-Source Contribution

Topics:

- reading maintainer docs;
- finding one precise docs gap;
- opening a small PR;
- responding without generic outreach.

Exercise:

- Draft a docs-only PR description for a hypothetical one-line clarification.

## Glossary

| Term | Working definition |
| --- | --- |
| Agent receipt | A public-safe record of a proposed, reviewed, or completed agent action |
| Approval boundary | The point where an agent must stop and ask for human confirmation |
| Catalog object | A structured public-safe description of a collection item |
| Edition | A limited publication unit derived from a catalog object |
| Human-approved action | Any action that can create legal, financial, privacy, custody, or publication risk |
| Public-safe metadata | Metadata that can be published without private assets, buyer data, wallet data, or legal claims |
| Source verification | Checking a claim against primary docs, repos, specs, or maintainer statements |

## Assessment

A learner can use NanoClaw responsibly when they can:

- explain why public claims need sources;
- identify private fields in a catalog draft;
- distinguish docs-only contribution from outreach;
- write a safe issue update;
- describe why wallet, minting, payment, DNS, and private asset actions need
  explicit human approval.
