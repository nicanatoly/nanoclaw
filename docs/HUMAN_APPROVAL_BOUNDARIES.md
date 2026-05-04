# Human Approval Boundaries

NanoClaw should make agent work easier without turning sensitive decisions into
silent automation. This note defines actions that can be drafted by an agent but
should remain human-approved before execution.

## Always Human-Approved

| Boundary | Why it matters | Agent role |
| --- | --- | --- |
| Wallet connection | A wallet can authorize custody, identity, payment, and signing flows. | Explain the request, prepare a checklist, and stop before connection. |
| Payment execution | Money movement needs intent, amount, recipient, network, and fee review. | Draft a payment receipt and leave settlement as `pending`. |
| NFT minting or transfer | Minting can create public claims, edition scarcity, and permanent metadata. | Prepare metadata, rights notes, and mint checklist only. |
| Private asset publication | Collection source files and previews can expose rights, provenance, or relationship context. | Build public-safe metadata and request owner review. |
| Custody or rights claims | Custody, ownership, licensing, and edition language can create legal expectations. | Separate factual catalog fields from claims that need review. |
| DNS or production deployment | Domain and deployment changes alter public availability. | Prepare records, status notes, and rollback steps. |
| Donations or sponsorships | Public support can imply endorsement or budget commitment. | Maintain a shortlist and rationale; do not spend. |
| External comments or PRs | Low-context public outreach can create noise or reputational drag. | Draft narrow comments/patches tied to a concrete issue. |

## Usually Safe For Agents

- Drafting issues, discussions, release notes, and docs.
- Updating research watchlists from public sources.
- Creating JSON schemas and local examples without secrets.
- Running validation, formatting, and link checks.
- Preparing public/private publication boundaries.
- Summarizing reactions and drafting replies.

## Approval Receipt Pattern

Use receipts to make the handoff visible:

1. `draft`: agent proposes the action.
2. `approved`: a human approves a specific action.
3. `executed`: an approved tool performs the action.
4. `void`: the proposal is cancelled or superseded.

The receipt should describe the tool boundary in plain language. If the action
touches money, custody, rights, publication, or public claims, the receipt is not
authority by itself. It is an audit surface.

## RWA And Provenance Boundary

NanoClaw can study tokenized collateral and RWA infrastructure without becoming
a tokenized fund or collateral protocol.

For cultural collections, the useful lane is provenance:

- what object exists;
- which edition or catalog record describes it;
- what was reviewed;
- what was published;
- which actions were explicitly approved.

That is different from yield-bearing collateral, investment exposure, or
regulated custody. NanoClaw documentation should keep those categories separate.

## Public Reply Rule

When someone reacts to NanoClaw research, reply only when there is something
specific to answer:

- a technical correction;
- a concrete example;
- a documentation suggestion;
- a reproducible issue;
- a narrow collaboration surface.

Do not send generic greetings, investment language, partnership claims, or
requests for confidential information.
