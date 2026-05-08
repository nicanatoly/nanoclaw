# Ecosystem Operating Model

NanoClaw uses GitHub as a public engineering memory, not only as a source-code
host. The repository should show what the project is, what it is learning, what
is safe to publish, and which actions must remain human-approved.

## What GitHub Provides

| Surface | Role | Useful output |
| --- | --- | --- |
| Pull requests | Reviewable change history | Docs, schemas, examples, small fixes |
| Issues | Public work tracking | Research questions, website tasks, follow-up notes |
| Discussions | Low-pressure ecosystem questions | Approval-boundary and integration feedback |
| Releases | Public milestones | Versioned research/docs packages |
| GitHub Pages | Public website surface | `nanoclaw.website` after DNS/HTTPS setup |
| Examples | Reusable patterns | Receipts, catalog schemas, safe metadata drafts |
| Research notes | Structured learning | RWA, x402, MCP, provenance, DeepTech tracking |
| Source index | Evidence base | Citations, literature notes, verification states |
| Curriculum | Education layer | Modules, exercises, glossary, entrypoints |

## Operating Principle

NanoClaw should become visible by being useful:

1. read before acting;
2. publish small reviewable artifacts;
3. ask precise questions only when docs do not already answer them;
4. contribute docs/examples instead of generic outreach;
5. keep wallet, payment, minting, DNS, private assets, legal claims, and
   pricing behind explicit human approval.

## Public And Private Split

GitHub can contain public-safe structure:

- schemas;
- examples with placeholders;
- provenance receipt formats;
- publication checklists;
- research notes;
- integration maps;
- release history.

GitHub must not contain:

- source collection media;
- private buyer or collector data;
- wallet credentials, wallet addresses, seed phrases, API keys, or webhooks;
- prices, auction strategy, or guaranteed-value language;
- claims of partnership, custody, rights clearance, regulated financial
  activity, or investment performance.

## Current Public Tracks

| Track | Public artifact |
| --- | --- |
| Runtime and sandboxing | `docs/SAFETY_MODEL.md`, `docs/SPEC.md` |
| Human approvals | `docs/HUMAN_APPROVAL_BOUNDARIES.md` |
| RWA and agentic payments | `research/RWA_AGENTIC_PAYMENTS_WATCHLIST.md` |
| Futures reconstruction | `research/RWA_AGENTIC_PAYMENTS_SCENARIOS.md`, `docs/FUTURES_RECONSTRUCTION.md` |
| Provenance receipts | `docs/PROVENANCE_RECEIPTS.md`, `examples/agentic-payment-receipts/` |
| Collection schemas | `examples/collection-schemas/` |
| Public/private publication | `docs/PUBLICATION_PACK.md` |
| Ecosystem integrations | `docs/INTEGRATION_MAP.md`, `docs/INTEGRATION_SURFACES.md` |
| Evidence and citations | `docs/EVIDENCE_AND_SOURCE_INDEX.md` |
| Education and entrypoints | `docs/CURRICULUM_AND_LEARNING_PATHS.md`, `docs/CONTRIBUTOR_ENTRYPOINTS.md` |
| Trust architecture | `docs/TRUST_ARCHITECTURE.md` |

## Success Criteria

NanoClaw's GitHub presence is healthy when:

- the README points to clear current work;
- issues and releases tell a coherent story;
- examples are public-safe and reusable;
- external comments and PRs are narrow and useful;
- private collection assets stay private;
- each risky action has an explicit human-approval boundary;
- claims are backed by source-verification states;
- students, developers, researchers, maintainers, and partners each have a
  clear entrypoint.
