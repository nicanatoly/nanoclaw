# Integration Surfaces

NanoClaw's integrations are organized as surfaces. A surface can be public,
internal, or future-facing. Each surface has a different safety boundary.

## Surface Map

| Surface | Direction | Purpose | Boundary |
| --- | --- | --- | --- |
| GitHub | Public | Code, docs, schemas, examples, issues, PRs, releases | No secrets, private assets, wallet data, pricing, or legal/financial claims |
| Bitrix24 | Internal | Tasks, checklists, deadlines, files, operational status | No public claims; keep credentials out of shared files |
| GitHub Pages | Public website | Documentation and presentation layer for `nanoclaw.website` | DNS/HTTPS changes require explicit approval |
| Collection catalog | Private plus public-safe excerpts | Organize objects, editions, certificates, and provenance | Source media and collector data stay private |
| NFT platforms | Future external surface | Possible minting/listing after review | No wallet, minting, listing, transfer, or pricing without explicit approval |
| x402 and agentic payments | Public research plus external docs PRs | Study HTTP-native payments and agent approval boundaries | No payment execution or yield/custody claims |
| MCP and AgentKit | Public research plus optional docs PRs | Tool protocols, wallet-capable agents, approval vocabulary | No automatic wallet actions |
| OpenTelemetry | Public research vocabulary | Receipts, traces, action logs, audit language | No claim of formal compliance unless implemented |
| DeepTech repos | Public study/contribution layer | Materials, medicine, robotics, sensors, networks | Read first; contribute only precise docs/examples |

## Mutual Integration Pattern

```text
GitHub
  public source of truth for docs, schemas, examples, releases

Bitrix24
  internal task/control layer with links back to GitHub

nanoclaw.website
  public presentation layer generated from or linked to GitHub materials

Collection/NFT infrastructure
  private source assets plus public-safe metadata, receipts, and certificates

x402 / MCP / AgentKit / OpenTelemetry
  external vocabularies and protocols that inform NanoClaw examples
```

## Integration Rules

### GitHub To Bitrix24

- GitHub PRs, issues, releases, and discussions can be linked from Bitrix24
  tasks.
- Bitrix24 should track deadlines and checklists.
- Bitrix24 should not create public comments automatically.

### GitHub To Website

- GitHub remains the source of public docs and release history.
- The website can present curated pages, catalog previews, and project status.
- DNS and HTTPS changes require explicit approval.

### GitHub To Collection/NFT

- GitHub can publish schemas and examples.
- GitHub can publish public-safe provenance and edition receipt templates.
- GitHub should not publish source images, full-resolution files, private
  collector data, wallet data, or pricing.

### GitHub To External Open Source

- External work should be docs-only unless there is a very clear reason.
- Prefer one useful PR over many symbolic forks.
- Do not imply partnership, endorsement, investment advice, custody, or
  production readiness.

## Near-Term Integration Priorities

1. Keep NanoClaw releases coherent and owner-authored.
2. Restore Bitrix24 task updates after the internal credential is refreshed.
3. Prepare `nanoclaw.website` DNS/HTTPS checklist without changing DNS yet.
4. Study MCP and Cloudflare Agents for one precise docs or vocabulary gap.
5. Keep x402 PR #2186 monitored without generic follow-up comments.
6. Expand public-safe collection schemas only after private/public review.
7. Use `docs/MCP_CLOUDFLARE_AGENTKIT_MAPPING.md` as the planning map before
   drafting any MCP, Cloudflare Agents, or AgentKit integration example.
