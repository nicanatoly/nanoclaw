# NanoClaw Public Publication Pack

Status: staging plan.
Updated: 2026-05-04.

Purpose: define what belongs in the public `nicanatoly/nanoclaw` repository and
what should stay private until review.

## Recommended Public Files

| Public file | Why publish | Review before publish |
| --- | --- | --- |
| `research/RWA_AGENTIC_PAYMENTS_WATCHLIST.md` | Shows that NanoClaw follows serious RWA, agentic-payments, and decentralized AI infrastructure. | Verify links and remove any source that looks unofficial. |
| `research/RWA_AGENTIC_PAYMENTS_SCENARIOS.md` | Gives the project a thoughtful futures/research layer with seven scenarios. | Keep "not investment advice" language. |
| `examples/agentic-payment-receipts/` | Demonstrates provenance/payment-action receipts without spending money. | Confirm examples contain no private asset URL, wallet address, or legal claim. |
| `examples/collection-schemas/` | Provides public-safe catalog object and edition draft schemas. | Confirm examples contain no private images, prices, buyer data, wallet data, or rights-clearance claims. |
| `docs/PROVENANCE_RECEIPTS.md` | Explains the public-safe receipt vocabulary for collection review, catalog entries, and edition drafts. | Confirm it does not imply custody, minting, payment, ownership transfer, or rights clearance. |
| `docs/PUBLICATION_PACK.md` | Makes the repo's publication boundary explicit. | Update this list as the public/private split changes. |

## Keep Private For Now

| Material | Reason |
| --- | --- |
| Original photo PDF and extracted full-resolution images | Private collection source assets. |
| Full NFT limited-edition media package | Needs final visual direction, rights review, and minting decision. |
| Private collector scripts or preview lists | Relationship data and outreach context. |
| Any `.env`, wallet, token, or account configuration | Secrets and account control data. |

## Proposed Public Repo Layout

```text
research/
  RWA_AGENTIC_PAYMENTS_WATCHLIST.md
  RWA_AGENTIC_PAYMENTS_SCENARIOS.md
examples/
  agentic-payment-receipts/
    README.md
    receipt.schema.json
    nc-ph-2026-001-01-receipt.json
    nc-public-catalog-entry-review.json
  collection-schemas/
    catalog-object.schema.json
    edition.schema.json
    public-safe-catalog-object.example.json
    limited-edition-draft.example.json
docs/
  PROVENANCE_RECEIPTS.md
  PUBLICATION_PACK.md
```

## First Release Note Addition

Add a short note to the next NanoClaw release:

> Added an RWA and agentic-payments research track covering tokenized
> collateral, x402-style payments, decentralized AI service registries, and
> cultural provenance. The track is research-only and does not mint NFTs,
> connect wallets, or move funds.

## Publication Checklist

1. Run secret scan on all files selected for public release.
2. Confirm no private collection source assets are included.
3. Confirm no wallet addresses, seed phrases, API keys, or account tokens are
   included.
4. Confirm no claims of partnership, endorsement, investment performance, or
   regulated financial activity.
5. Copy files into a clean public repo branch.
6. Open a local diff and review every line before pushing.
7. Publish as a docs/research update, not as a product launch.
