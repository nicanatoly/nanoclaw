# Agentic Payment Receipt Examples

Status: draft example.

This folder defines a tiny, wallet-free receipt format for future NanoClaw
experiments around agentic payments, provenance, collector access, and
human-approved AI actions.

The examples do not mint NFTs, move funds, connect wallets, or represent legal
ownership. They are plain JSON records for documenting intended actions before
any real payment or onchain step exists.

## Design Goals

- Separate proposal, approval, execution, and settlement states.
- Keep human approval explicit.
- Allow hash-based references to collection objects without exposing private
  source assets.
- Make future x402 or wallet integrations auditable before they become active.

## Examples

- `nc-ph-2026-001-01-receipt.json`: draft provenance preview receipt.
- `nc-collector-preview-request.json`: draft collector-preview request where
  the agent can prepare public-safe metadata but cannot publish assets, connect
  wallets, mint NFTs, or execute payment.
- `nc-public-catalog-entry-review.json`: draft catalog-entry review where the
  agent can prepare a public-safe record but cannot publish private source
  assets or make custody, rights, payment, or edition claims.
- `nc-combined-tool-workflow-wallet-approval.example.json`: fake combined
  receipt mapping an MCP-style tool proposal to a Cloudflare-style workflow
  state, an AgentKit-style wallet-action draft, and a NanoClaw human approval
  boundary.

See also: [Provenance Receipts](../../docs/PROVENANCE_RECEIPTS.md).

## Status Values

- `draft`: a proposed action, not approved.
- `approved`: reviewed by a human, still not executed.
- `executed`: action was performed by an approved tool.
- `void`: action was cancelled or superseded.

## Rule

No real payment, wallet, mint, transfer, or public publication should happen
from this schema alone. It is an audit surface, not an authority surface.
