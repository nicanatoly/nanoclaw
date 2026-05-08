# Evidence And Source Index

NanoClaw should keep research claims traceable. This index defines how sources,
citations, literature notes, and verification status should be recorded before
they influence docs, examples, integrations, or public comments.

## Purpose

- Keep technical claims checkable.
- Separate facts, interpretations, and future-facing hypotheses.
- Make research useful for students, developers, researchers, maintainers, and
  partners.
- Avoid hype, fake authority, and implied partnerships.

## Source Types

| Type | Preferred examples | Use |
| --- | --- | --- |
| Primary documentation | Official project docs, API references, specifications | Implementation and integration notes |
| Source repositories | README, examples, issues, PRs, releases | Open-source behavior and contribution fit |
| Standards and specs | Protocol specs, security models, telemetry specs | Vocabulary and interoperability |
| Academic literature | Papers, preprints, conference proceedings | Conceptual framing and research history |
| Public company posts | Engineering blogs, product docs, official announcements | Current product signals |
| Maintainer comments | Issue/PR replies, discussions | Project-specific intent and review feedback |

## Verification States

| State | Meaning | Public use |
| --- | --- | --- |
| `unverified` | Found but not checked against primary source | Do not cite as fact |
| `primary-source-confirmed` | Checked against official docs, repo, spec, or maintainer statement | Safe for factual notes |
| `secondary-source-context` | Useful commentary, not authoritative | Use only as context |
| `hypothesis` | NanoClaw interpretation or future scenario | Label clearly |
| `deprecated` | Source no longer current | Keep only for history |

## Literature Index Template

| Topic | Source | Type | Verification state | NanoClaw relevance | Follow-up |
| --- | --- | --- | --- | --- | --- |
| x402 payment flow | Official x402 docs or repo | Primary docs/source repo | `primary-source-confirmed` after review | Agentic payment boundaries | Keep PR #2186 monitored |
| MCP tool vocabulary | MCP docs/spec repo | Specification/source repo | `unverified` until reviewed | Tool calls and approval language | Create local mapping note |
| OpenTelemetry traces | OTel specification | Specification | `unverified` until reviewed | Action receipts and audit vocabulary | Extract receipt terms |
| Cloudflare Agents state/workflows | Cloudflare Agents docs | Primary docs | `primary-source-confirmed` after review | Durable state and workflow vocabulary | Keep mapping note current |
| AgentKit wallet/action providers | Coinbase AgentKit docs | Primary docs | `primary-source-confirmed` after review | Wallet approval and onchain action boundaries | Keep mapping note public-safe |

## Claim Discipline

Every public research or integration note should answer:

1. What is the source?
2. Is it primary or secondary?
3. What exactly does it support?
4. What is NanoClaw's interpretation?
5. What remains speculative?
6. What action, if any, follows from it?

## Citation Rules

- Prefer official docs, source repos, specs, and maintainer statements.
- Link to exact docs, issues, PRs, releases, or files when possible.
- Do not cite broad homepages when a precise source exists.
- Do not treat marketing language as a technical guarantee.
- Do not imply partnership, endorsement, custody, regulated status, yield, or
  investment value unless a primary source explicitly supports the claim and
  the claim is legally safe to make.

## Relationship To Existing Research

Use this index with:

- `research/RWA_AGENTIC_PAYMENTS_WATCHLIST.md`
- `research/RWA_AGENTIC_PAYMENTS_SCENARIOS.md`
- `docs/INTEGRATION_SURFACES.md`
- `docs/WEEKLY_OPERATING_LOOP.md`
- `docs/TRUST_ARCHITECTURE.md`
