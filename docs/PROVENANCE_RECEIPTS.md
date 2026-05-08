# Provenance Receipts

Status: draft public pattern.
Updated: 2026-05-04.

NanoClaw uses provenance receipts to describe reviewable cultural-collection
actions without turning them into payments, custody claims, or investment
claims. A receipt is a small audit record for what an agent proposed, what a
human reviewed, and what stayed private.

## What A Receipt Can Prove

| Field | Useful public meaning | Not a claim of |
| --- | --- | --- |
| `receipt_id` | Stable reference for a draft or reviewed action. | Ownership, title, or legal registration. |
| `status` | Whether the action is draft, approved, executed, or void. | Permission to bypass human review. |
| `asset_reference` | Public-safe object id and optional hash reference. | Publication of the source asset. |
| `human_review` | Who must review the action class and whether a decision exists. | Legal advice or rights clearance by itself. |
| `payment_reference` | Whether a payment rail is relevant to the proposed action. | Settlement, wallet control, or custody. |

## Safe Public Uses

- Catalog-entry review before publishing a public page.
- Collector-preview request where source files stay private.
- Edition metadata draft before any minting decision.
- Receipt for a docs-only or research-only publication action.
- Void receipt when a draft is cancelled or superseded.

## Stop Before

Receipts should stop and ask for explicit human confirmation before:

- publishing private images or source files;
- connecting a wallet;
- minting, transferring, listing, or burning an NFT;
- sending or requesting payment;
- changing DNS or production deployment settings;
- making custody, partnership, investment, yield, or guaranteed-value claims.

## Public-Safe Asset References

Use public-safe identifiers instead of private file names or local paths:

```json
{
  "object_id": "public-safe-example-object",
  "public_asset": false,
  "hash": "not_recorded_in_public_example"
}
```

If a hash is used, hash only a reviewed artifact that is allowed to be
referenced publicly. Do not publish hashes that reveal a private source file,
private filename, unreleased collection title, buyer data, or wallet data.

## Status Flow

1. `draft`: the agent prepared a proposed action.
2. `approved`: a human approved a specific action and boundary.
3. `executed`: an approved action was performed by an approved tool.
4. `void`: the proposal was cancelled or replaced.

The receipt is not an authority surface. It is a review trail. If the action
touches money, custody, rights, minting, private assets, or public claims, the
receipt should point to the required human approval instead of replacing it.

## Example

See `examples/agentic-payment-receipts/nc-public-catalog-entry-review.json` for
a catalog-entry review receipt that contains no private asset, wallet address,
payment, mint, or collector data.

See `examples/agentic-payment-receipts/nc-combined-tool-workflow-wallet-approval.example.json`
for a fake MCP tool proposal -> Cloudflare-style workflow state ->
AgentKit-style wallet-action draft -> NanoClaw approval-boundary receipt.

For structured catalog and edition drafts, see `examples/collection-schemas/`.
