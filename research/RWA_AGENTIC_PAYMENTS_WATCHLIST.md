# RWA Agentic Payments Watchlist

Status: active watchlist.

Purpose: track the convergence of tokenized real-world assets, institutional
collateral, agentic payments, decentralized AI services, and programmable
markets.

Companion memo: [RWA_AGENTIC_PAYMENTS_SCENARIOS.md](RWA_AGENTIC_PAYMENTS_SCENARIOS.md).

## Watchlist

| Signal | GitHub link | Why it matters | Possible NanoClaw/NFT relevance | Follow-up action |
| --- | --- | --- | --- | --- |
| BlackRock open-source infrastructure | [blackrock](https://github.com/blackrock) | BlackRock is central to the tokenized fund/RWA signal, even if BUIDL itself does not appear to have a public repo. | Watch how major institutions expose developer surfaces without exposing regulated product internals. | Watch org and scan for tokenization or Aladdin-related public tooling. |
| BlackRock AladdinSDK | [blackrock/aladdinsdk](https://github.com/blackrock/aladdinsdk) | Aladdin is BlackRock's institutional operating surface; public SDK patterns matter. | Reference point for how serious financial infrastructure documents SDK surfaces. | Read docs for API/documentation style; no outreach yet. |
| OKX agent trading stack | [okx/agent-trade-kit](https://github.com/okx/agent-trade-kit) | Exchange tooling is moving toward agent-native trading interfaces. | Possible model for NanoClaw agent boundaries around trading/payment actions. | Watch releases; look for docs issues or safety-boundary questions. |
| OKX agent skills | [okx/agent-skills](https://github.com/okx/agent-skills) | Shows how exchanges package discrete actions for AI agents. | Compare with NanoClaw skills-as-branches and permission design. | Study skill manifests and safety notes. |
| OKX OnchainOS skills | [okx/onchainos-skills](https://github.com/okx/onchainos-skills) | Wallet/token discovery/swap skills imply agents as onchain operators. | Useful for future NanoClaw payment/wallet action policies. | Track for permission language and examples. |
| OKX payments | [okx/payments](https://github.com/okx/payments) | Payments infrastructure can shape agent settlement flows. | Relevant to NFT collector checkout and agentic service payment. | Watch for docs/release activity. |
| OKX proof of reserves | [okx/proof-of-reserves](https://github.com/okx/proof-of-reserves) | Proof/reserve patterns matter for trust and collateral credibility. | Could inform collection proof/certificate/manifest design. | Study cryptographic disclosure style. |
| Standard Chartered custody signal | [StandardChartered](https://github.com/StandardChartered) | Standard Chartered matters in the BUIDL collateral/custody signal, but this GitHub presence should not be treated as an official developer surface without separate confirmation. | Relevant as institutional custody vocabulary, not as an integration target yet. | Verify an official open-source/developer channel before any outreach. |
| Franklin BENJI API docs | [FTdigitalassets/Benji-API-Documentation](https://github.com/FTdigitalassets/Benji-API-Documentation) | BENJI is a regulated tokenized-fund blueprint with transferability and yield mechanics. | Reference for regulated tokenized asset API language. | Watch docs changes; avoid assuming consumer availability. |
| Franklin BENJI contracts | [FTdigitalassets/Benji-Solidity-Smart-Contracts](https://github.com/FTdigitalassets/Benji-Solidity-Smart-Contracts) | Public contracts can show regulated token design choices. | Compare metadata, transfer, and compliance patterns with NFT edition design. | Review contract structure for publication notes. |
| JPMorgan Kinexys SSI SDK | [jpmorganchase/Kinexys-ssi-sdk](https://github.com/jpmorganchase/Kinexys-ssi-sdk) | Institutional identity tooling is a key part of compliant token flows. | Relevant to future collector identity, credential, and entitlement workflows. | Watch SDK updates and examples. |
| JPMorgan Kinexys examples | [jpmorganchase/Kinexys-ssi-sdk-examples](https://github.com/jpmorganchase/Kinexys-ssi-sdk-examples) | Examples reveal intended developer workflows better than product pages. | Could inform NanoClaw demos around verifiable credentials. | Look for a small docs-fix opportunity. |
| JPMorgan PADL | [jpmorganchase/PADL](https://github.com/jpmorganchase/PADL) | Private/auditable ledger patterns matter for institutional rails. | Useful mental model for private provenance and auditable publication. | Study architecture notes. |
| HSBC OpenWallet Android | [hsbc/OpenWallet-aOS](https://github.com/hsbc/OpenWallet-aOS) | Wallet UX and institutional mobile patterns matter for tokenized assets. | Future wallet/custody UX reference; do not integrate yet. | Watch quietly. |
| HSBC OpenWallet iOS | [hsbc/OpenWallet-iOS](https://github.com/hsbc/OpenWallet-iOS) | Same signal on iOS wallet surface. | Reference for wallet UX, not for near-term NanoClaw action. | Watch quietly. |
| State Street Digital Asset Platform | No verified official GitHub repo found; [statestreet](https://github.com/statestreet) appears unverified/inactive. | The platform signal is important for tokenized MMFs, ETFs, tokenized deposits, stablecoins, custody, wallets, and cash controls, even if no public developer repo is visible yet. | Useful for watching institutional infrastructure language; not a current NanoClaw integration target. | Re-check official developer/open-source presence before following, posting, or citing as GitHub source. |
| Centrifuge protocol | [centrifuge/protocol](https://github.com/centrifuge/protocol) | Core RWA-DeFi infrastructure for onchain asset management. | Strongest DeFi-side reference for programmable collateral and fund infrastructure. | Track releases and docs; study permission/governance model. |
| Centrifuge SDK | [centrifuge/sdk](https://github.com/centrifuge/sdk) | SDKs show practical developer integration points. | Possible long-term reference for NanoClaw research adapters. | Watch API changes. |
| Centrifuge documentation | [centrifuge/documentation](https://github.com/centrifuge/documentation) | Docs define how RWA concepts are explained to builders. | Source for our RWA glossary and education notes. | Look for docs issue/PR only if useful. |
| Centrifuge liquidity pools | [centrifuge/liquidity-pools](https://github.com/centrifuge/liquidity-pools) | Liquidity and cross-chain pool logic matter for collateralization. | Helps reason about NFTs as provenance assets vs collateral assets. | Watch architecture docs. |
| Centrifuge governance proposals | [centrifuge/cps](https://github.com/centrifuge/cps) | Governance artifacts show how protocol change is documented. | Model for NanoClaw public proposals and decision memos. | Read proposal format. |
| Aave V3 core | [aave/aave-v3-core](https://github.com/aave/aave-v3-core) | Aave is central to collateral and lending primitives. | Reference for permissioned vs open collateral boundaries. | Watch for RWA/Horizon-related signals. |
| Aave interface | [aave/interface](https://github.com/aave/interface) | UI surfaces show how complex DeFi risk is presented. | Useful for future dashboard UX around agent permissions and risk. | Study risk disclosure style. |
| SingularityNET developer portal | [singnet/dev-portal](https://github.com/singnet/dev-portal) | Directly relevant to publishing AI services and developer onboarding. | Possible blueprint for NanoClaw service publication and docs. | Track docs; compare service onboarding. |
| SingularityNET platform contracts | [singnet/platform-contracts](https://github.com/singnet/platform-contracts) | Registry/payment contracts are core to decentralized AI services. | Relevant to expert AI-agent marketplace design. | Review registry and escrow concepts. |
| SingularityNET daemon | [singnet/snet-daemon](https://github.com/singnet/snet-daemon) | Daemon bridges AI services to blockchain authorization/payment. | Strong reference for exposing NanoClaw services behind payment/auth layers. | Watch and study service boundary model. |
| SingularityNET CLI | [singnet/snet-cli](https://github.com/singnet/snet-cli) | CLI shows operational workflows for publishing/using AI services. | Reference for future NanoClaw CLI publishing flows. | Look for docs/setup improvements. |
| SingularityNET marketplace service | [singnet/snet-marketplace-service](https://github.com/singnet/snet-marketplace-service) | Marketplace indexing and curation are key for AI service discovery. | Could inform AI service registry around NanoClaw. | Watch architecture. |
| SingularityNET SDKs | [snet-sdk-python](https://github.com/singnet/snet-sdk-python), [snet-sdk-js](https://github.com/singnet/snet-sdk-js) | SDKs enable service consumption. | Reference for client-side access patterns and examples. | Track API shape. |
| ASI Chain core | [asi-alliance/asi-chain](https://github.com/asi-alliance/asi-chain) | ASI Chain is relevant, but current public materials indicate DevNet maturity. | Watch, but do not build critical economics on it yet. | Monitor mainnet maturity and docs. |
| ASI Chain docs | [asi-alliance/asi-chain-docs-portal](https://github.com/asi-alliance/asi-chain-docs-portal) | Docs clarify what is real vs DevNet/test. | Important for avoiding premature architecture bets. | Watch for mainnet/production language changes. |
| ASI wallet SDK | [asi-alliance/asi-chain-wallet-sdk](https://github.com/asi-alliance/asi-chain-wallet-sdk) | Wallet SDK maturity indicates developer readiness. | Possible future payment/wallet research input. | Watch releases. |
| x402 Foundation | [x402-foundation/x402](https://github.com/x402-foundation/x402) | x402 is the clearest agentic payments standard signal. | Very relevant to paid NanoClaw skills, expert agents, and collector-gated services. | Study spec and examples; identify docs contribution. |
| Coinbase x402 | [coinbase/x402](https://github.com/coinbase/x402) | Coinbase implementation reinforces x402 as a practical payment rail. | Possible future NanoClaw x402 adapter. | Watch examples and SDK changes. |
| Coinbase AgentKit | [coinbase/agentkit](https://github.com/coinbase/agentkit) | Agent wallets are moving into developer tooling. | Reference for safe wallet action design and approvals. | Watch permission and safety patterns. |
| Coinbase Payments MCP | [coinbase/payments-mcp](https://github.com/coinbase/payments-mcp) | MCP payments are directly relevant to agentic commerce. | Possible future integration with NanoClaw MCP/payment boundaries. | Study installation and security model. |
| Coinbase agentic wallet skills | [coinbase/agentic-wallet-skills](https://github.com/coinbase/agentic-wallet-skills) | Wallet skills can show how actions are packaged for agents. | Compare with NanoClaw skills and human review. | Watch for safe action conventions. |
| Cloudflare Agents | [cloudflare/agents](https://github.com/cloudflare/agents) | Cloudflare is building a production agent runtime surface. | Reference for hosted agent architecture and state. | Track docs/releases. |
| Cloudflare MCP | [cloudflare/mcp](https://github.com/cloudflare/mcp) | MCP server patterns matter for tool access. | Useful for NanoClaw tool boundary design. | Watch examples and security language. |
| Cloudflare Skills | [cloudflare/skills](https://github.com/cloudflare/skills) | Skills are a common packaging layer for agents. | Compare with NanoClaw exhibition/skills-as-branches idea. | Watch skill format evolution. |
| Stripe Link CLI | [stripe/link-cli](https://github.com/stripe/link-cli) | Payment credentials for agents with user approval is a key pattern. | Strong reference for human-approved agent spending. | Study approval UX and safety model. |
| Stripe AI | [stripe/ai](https://github.com/stripe/ai) | Stripe is packaging AI-commerce guidance and tools. | Useful for future collector checkout or paid AI-service docs. | Watch examples and docs. |
| Circle | [circlefin](https://github.com/circlefin) | USDC/stablecoin rails underpin many agentic payment and settlement designs. | Watch only; no wallet integration yet. | Track official developer repos. |
| Solana Labs | [solana-labs](https://github.com/solana-labs) | Solana ecosystem is often involved in low-cost payment/token experiments. | Possible later chain comparison for NFTs/payments. | Watch for x402/payment-related activity. |

## Watching Rule

Read first. Do not post public comments unless there is a precise contribution,
question, or docs fix. Prefer one useful issue/PR over ten generic greetings.
