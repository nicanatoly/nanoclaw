# Exhibition Kit

This kit turns NanoClaw from a code repository into a small public exhibition
surface. It is designed for demos, partner conversations, online forums,
conference applications, and collection-adjacent presentations.

The kit is intentionally lightweight. It should be possible to review every
artifact before sharing it publicly.

## Exhibition Thesis

NanoClaw explores a simple question:

> What should a personal AI runtime look like when agents are powerful enough
> to act, but the user still needs inspectable boundaries, memory, and consent?

The exhibition should show NanoClaw as:

- a small agent runtime;
- a safety boundary around personal automation;
- a research object about local-first agents;
- a public notebook for future scenarios;
- a bridge between code, collection practice, and digital publication.

## Visitor Path

1. **Signal**: a short visual landing page at `nanoclaw.website`.
2. **Context**: repository README, project status, and safety model.
3. **Evidence**: tests, releases, issues, discussions, and small public fixes.
4. **Futures**: probabilistic scenarios in `FUTURES_RECONSTRUCTION.md`.
5. **Invitation**: narrow questions for maintainers, researchers, and partners.

## Demo Script

Use this script for a 5-7 minute public demo.

1. Open the repository and show the project status section.
2. Explain the safety model: agents run in scoped container workspaces.
3. Show the difference between base runtime and optional skills.
4. Show the futures reconstruction table.
5. Open the public discussion and invite one narrow response.
6. Close with the open questions: what should stay suggestion-only, and what
   should be allowed to execute?

Avoid live secrets, private channels, personal messages, production tokens, and
real collection files during demos.

## Display Objects

| Object           | Purpose                      | Public-safe version                    |
| ---------------- | ---------------------------- | -------------------------------------- |
| Runtime map      | Explain the system boundary  | Architecture diagram or README excerpt |
| Safety model     | Establish trust              | `docs/SAFETY_MODEL.md`                 |
| Futures table    | Invite discussion            | `docs/FUTURES_RECONSTRUCTION.md`       |
| Release note     | Show project maturity        | Latest GitHub release                  |
| Issue log        | Show active governance       | Closed and open roadmap issues         |
| Collection card  | Bridge to digital exhibition | Redacted/sample metadata card          |
| Certificate note | Explain edition logic        | Template without private owner data    |

## Collection And Rights Boundary

Collection materials should not be committed into this repository unless they
are explicitly approved for public release.

Before publishing any photograph, scan, NFT metadata, certificate, or review:

- confirm the acquisition rights;
- record allowed uses: digital print, NFT, catalog, exhibition, derivative
  metadata, partner gift, or archival use;
- remove private seller, buyer, and payment information;
- separate copyright statements from token ownership statements;
- keep high-resolution source files outside the public code repository unless
  public release is intentional.

## Partner Pack

A minimal partner pack can contain:

- one public repository link;
- one release link;
- one website link after DNS works;
- one futures reconstruction link;
- one safety model link;
- one collection/exhibition concept note;
- one clear question for the recipient.

Good first partner question:

> We are exploring small inspectable personal agent runtimes. Which actions do
> you think should remain suggestion-only even when the user owns the fork?

## Online Event Fit

The exhibition is a good fit for:

- open-source maintainer forums;
- AI safety and agent workflow meetups;
- digital humanities and collection provenance discussions;
- local-first software groups;
- small online demo nights;
- GitHub Discussions with adjacent projects.

It is not yet a good fit for large sponsorship asks, paid product demos, or
legal/IP claims beyond documented open-source publication hygiene.

## Readiness Checklist

- [x] Repository has a public README.
- [x] Repository has a first release.
- [x] Safety model is documented.
- [x] Futures scenarios are public.
- [x] GitHub discussion is open for feedback.
- [ ] DNS points `nanoclaw.website` to GitHub Pages.
- [ ] Website links back to this kit.
- [ ] Collection sample card is prepared with public-safe metadata.
- [x] First external docs-fix or small PR is submitted.

## Next Build

The next exhibition build should add:

1. a single public-safe collection card template;
2. a simple certificate template for limited editions;
3. a website section linking repository, release, futures, and discussion;
4. one recorded demo flow with screenshots;
5. one partner-facing note for a conference, webinar, or forum submission.
