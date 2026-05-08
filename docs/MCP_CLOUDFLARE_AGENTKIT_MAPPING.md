# MCP, Cloudflare Agents, And AgentKit Mapping

Status: research and integration planning note.
Updated: 2026-05-08.

This document maps three adjacent agent ecosystems into NanoClaw's safety and
integration vocabulary:

- Model Context Protocol (MCP): tool discovery, tool invocation, schemas, and
  human-visible tool boundaries.
- Cloudflare Agents: state, workflows, durable execution, human-in-the-loop
  patterns, and edge-agent runtime structure.
- Coinbase AgentKit: wallet providers, action providers, framework extensions,
  and onchain action boundaries.

This is not a production integration claim. NanoClaw does not connect wallets,
move funds, mint NFTs, list assets, change DNS, or execute payments as part of
this mapping.

## Primary Sources

| Ecosystem | Source | What it supports |
| --- | --- | --- |
| MCP | [Tools specification](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) | Tools can be listed, described with schemas, and invoked through `tools/call`; clients should keep humans in the loop for trust and safety. |
| Cloudflare Agents | [Workflows](https://developers.cloudflare.com/agents/concepts/workflows/) | Workflows can update Agent state at milestones and synchronize state to connected clients. |
| Cloudflare Agents | [Store and sync state](https://developers.cloudflare.com/agents/api-reference/store-and-sync-state/) | Agents can keep state and per-agent SQL-backed history; state should stay small while larger data belongs in SQL. |
| Cloudflare Agents | [Human in the Loop](https://developers.cloudflare.com/agents/concepts/human-in-the-loop/) | Agent tools can pause for user approval before execution using approval patterns such as `needsApproval`. |
| Coinbase AgentKit | [Welcome to AgentKit](https://docs.cdp.coinbase.com/agent-kit/welcome) | AgentKit enables agents to interact with blockchain networks through wallet management and onchain actions. |
| Coinbase AgentKit | [Architecture Explained](https://docs.cdp.coinbase.com/agent-kit/core-concepts/architecture-explained) | AgentKit is modular around core interfaces, wallet providers, action providers, and framework extensions. |

## Shared Vocabulary

| NanoClaw concept | MCP analogue | Cloudflare Agents analogue | AgentKit analogue |
| --- | --- | --- | --- |
| Tool boundary | Tool definition, input schema, output schema, `tools/call` | Agent tools and callable methods | Action providers and framework-wrapped tools |
| Human approval | Confirmation prompt around tool invocation | Human-in-the-loop approval pattern, `needsApproval` | Wallet/action approval before onchain execution |
| Agent state | Tool result plus local receipt/context | Agent state, SQL history, workflow state updates | Wallet/action state and framework context |
| Receipt | Tool call record and result metadata | Workflow milestone plus state update | Proposed onchain action record |
| Public-safe example | Fake tool input and output | Fake state/workflow event | Fake wallet/action draft without keys or transactions |
| Risk boundary | Tool can affect external systems | Workflow can persist state and trigger retries | Action can sign or submit onchain operations |

## Integration Shape

```text
MCP
  describes what tools exist and how they are invoked

Cloudflare Agents
  provides durable state, workflows, and human-in-the-loop runtime patterns

AgentKit
  provides wallet/action-provider vocabulary for onchain agent capabilities

NanoClaw
  records approval boundaries, provenance receipts, public-safe examples, and
  human-reviewed publication decisions
```

## Proposed NanoClaw Mapping

### 1. MCP Tool Boundary

NanoClaw can model an external capability as a tool-like contract:

- name;
- description;
- input schema;
- output schema;
- risk level;
- approval requirement;
- receipt fields;
- public/private data classification.

NanoClaw should treat tool annotations and descriptions as advisory unless the
server or source is trusted. This matches the safety posture that tool metadata
is useful but not enough for irreversible action.

### 2. Cloudflare Agent State And Workflows

NanoClaw can borrow Cloudflare Agents vocabulary for stateful runtime notes:

- current state for active UI/session state;
- SQL or durable storage for history;
- workflow steps for long-running operations;
- state updates at milestones;
- approval checkpoints before execution.

For NanoClaw, this maps cleanly to:

- scheduled task receipts;
- collection publication review states;
- edition draft lifecycle;
- external contribution lifecycle;
- website/DNS readiness state.

### 3. AgentKit Wallet Approval Boundary

AgentKit's architecture separates wallet providers and action providers. For
NanoClaw, that becomes a useful boundary:

- wallet provider means custody/signing capability exists somewhere;
- action provider means an onchain or wallet-related operation can be proposed;
- human approval means NanoClaw may draft or review the action but must not
  execute it automatically.

NanoClaw's public docs should model wallet-capable actions as drafts only:

- connect wallet: human-approved;
- sign transaction: human-approved;
- transfer funds: human-approved;
- mint NFT: human-approved;
- list NFT: human-approved;
- revoke/rotate permissions: human-approved.

## Public-Safe Receipt Pattern

A future receipt can combine the three layers:

| Field | Meaning |
| --- | --- |
| `source_protocol` | `mcp`, `cloudflare-agents`, `agentkit`, or `nanoclaw` |
| `capability_name` | Tool/action/workflow name |
| `input_schema_ref` | Public schema or docs link |
| `state_before` | Public-safe state summary |
| `proposed_action` | Draft action, not execution proof |
| `approval_required` | `true` for risky actions |
| `approval_reason` | Wallet, payment, minting, DNS, private asset, legal claim, etc. |
| `execution_status` | `drafted`, `reviewed`, `approved`, `rejected`, or `executed_by_human` |
| `public_private_boundary` | What was safe to publish and what stayed private |

## Future Integration Candidates

| Candidate | First safe artifact | Do not do yet |
| --- | --- | --- |
| MCP tool boundary note | Public-safe tool schema example | Run arbitrary external tools |
| Cloudflare Agents workflow note | State/workflow receipt example | Deploy production workflows with private data |
| AgentKit wallet approval note | Wallet-action draft receipt | Connect wallets or submit transactions |
| Combined receipt schema | One fake example spanning tool, state, and approval | Claim production integration |

## Review Checklist

Before turning this mapping into code or an external PR:

1. Check the latest official docs.
2. Keep examples fake and public-safe.
3. Do not include API keys, wallet addresses, seeds, webhooks, private assets,
   buyer data, or local paths.
4. Do not claim partnership, endorsement, custody, yield, investment value,
   legal rights clearance, or production integration.
5. Keep wallet, minting, listing, payment, transfer, DNS, and private asset
   publication behind explicit human approval.

## Next NanoClaw Step

The next public-safe artifact should be a fake combined receipt example:

```text
MCP tool proposal
  -> Cloudflare-style workflow state update
  -> AgentKit-style wallet action draft
  -> NanoClaw human approval boundary
```

That example should remain documentation-only and should not connect to any
wallet, remote agent runtime, or payment rail.
