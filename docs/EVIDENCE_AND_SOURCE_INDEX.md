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

## Starter Source Index

Reviewed: 2026-05-08.

| Topic | Primary source | Verification state | What the source supports | NanoClaw use | Follow-up |
| --- | --- | --- | --- | --- | --- |
| MCP tool boundary | [MCP Tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) | `primary-source-confirmed` | Tool discovery, tool schemas, `tools/call`, and safety notes around human-visible tool use. | Define public-safe tool proposal records and approval boundaries. | Re-check when the MCP dated specification changes. |
| x402 protocol home | [x402 Foundation repository](https://github.com/x402-foundation/x402) | `primary-source-confirmed` | Open-source protocol repository, SDK layout, examples, and contribution surface. | Monitor docs-only contribution opportunities and map HTTP payment boundaries without moving funds. | Keep external PR monitoring low-noise and factual. |
| x402 governance signal | [Linux Foundation x402 announcement](https://www.linuxfoundation.org/press/linux-foundation-is-launching-the-x402-foundation-and-welcoming-the-contribution-of-the-x402-protocol) | `primary-source-confirmed` | Public announcement that x402 moved toward Linux Foundation stewardship. | Treat x402 as a serious source to watch, not as a NanoClaw partnership claim. | Cite only as ecosystem context. |
| x402 developer flow | [Coinbase x402 docs](https://docs.cdp.coinbase.com/x402/docs/welcome) | `primary-source-confirmed` | HTTP 402 payment flow, buyer/seller framing, and programmatic payment concept. | Build wallet-free receipts and human-approval gates for future payment-like actions. | Do not implement real payments without explicit approval. |
| Cloudflare Agents workflows | [Cloudflare Agents Workflows](https://developers.cloudflare.com/agents/concepts/workflows/) | `primary-source-confirmed` | Workflow steps, durable execution framing, and state updates at milestones. | Model long-running NanoClaw review states and publication checkpoints. | Keep examples fake until a deployment is explicitly approved. |
| Cloudflare Agents state | [Store and sync state](https://developers.cloudflare.com/agents/api-reference/store-and-sync-state/) | `primary-source-confirmed` | Agent state, SQL-backed history, and client synchronization vocabulary. | Separate small public state from larger private/internal records. | Avoid publishing internal CRM or private collection data. |
| Cloudflare human approval | [Human in the Loop](https://developers.cloudflare.com/agents/concepts/human-in-the-loop/) | `primary-source-confirmed` | Approval pauses before tool execution. | Align NanoClaw stop-points for DNS, wallets, minting, payments, and private assets. | Compare examples with NanoClaw receipts before coding. |
| AgentKit overview | [Coinbase AgentKit welcome](https://docs.cdp.coinbase.com/agent-kit/welcome) | `primary-source-confirmed` | Agent blockchain interaction framing and wallet/action vocabulary. | Define draft-only wallet action records without wallet access. | Do not connect wallets or sign transactions from docs examples. |
| AgentKit architecture | [AgentKit architecture explained](https://docs.cdp.coinbase.com/agent-kit/core-concepts/architecture-explained) | `primary-source-confirmed` | Wallet providers, action providers, and framework extension structure. | Map wallet/action providers to NanoClaw approval boundaries. | Re-check before any code integration. |
| OpenTelemetry specification | [OpenTelemetry specifications](https://opentelemetry.io/docs/specs/) | `primary-source-confirmed` | Specification index and stable telemetry vocabulary. | Borrow trace/span/event language for audit receipts and operational digests. | Keep NanoClaw wording compatible with current OTel docs. |
| OpenTelemetry source repository | [OpenTelemetry specification repository](https://github.com/open-telemetry/opentelemetry-specification) | `primary-source-confirmed` | Source location for specification updates and issue/PR history. | Track terminology changes before adding observability examples. | Prefer exact spec links over broad summaries. |

## Starter Literature Notes

These notes are intentionally conservative. They are not implementation claims,
partnership claims, or financial claims.

| Topic | Fact supported by source | NanoClaw interpretation | Public-safe artifact |
| --- | --- | --- | --- |
| MCP | Tools can be described by schemas and invoked through a protocol boundary. | A NanoClaw tool proposal should be reviewable before it touches external systems. | Fake tool proposal receipt. |
| x402 | x402 is a payment protocol and public open-source ecosystem to monitor. | NanoClaw can study payment-like approval boundaries without enabling payments. | Wallet-free payment receipt examples. |
| Cloudflare Agents | Agent state and workflows are useful patterns for durable agent operations. | NanoClaw can model publication, DNS, and collection-review checkpoints as workflow states. | Workflow-state section in combined receipt example. |
| AgentKit | Wallet/action providers are a useful vocabulary for onchain actions. | NanoClaw should keep wallet-capable actions draft-only until human approval. | AgentKit-style wallet-action draft. |
| OpenTelemetry | OTel provides shared observability terms and specs. | NanoClaw receipts can later become traceable operational events. | Future trace/span mapping note. |

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
