# Project Status

NanoClaw is an early public project with a practical core: a small personal
assistant runtime that keeps agents inside isolated containers and lets users
customize their own fork.

## Current Status

- Base runtime: active.
- Docker sandbox path: active.
- macOS Apple Container path: supported as an optional conversion.
- Windows WSL path: supported for Docker sandboxes.
- Linux path: expected through Docker, still needs more real-world reports.
- Skills-as-branches contribution model: active.
- Public website: GitHub Pages is configured; DNS for `nanoclaw.website` is
  still pending.

## Stable Enough To Try

- Forking and running setup through Claude Code.
- Adding supported channels through skills.
- Running agents in containerized workspaces.
- Scheduled tasks and per-group state.
- Reading the codebase and adapting it for a personal fork.

## Still Experimental

- New communication channels.
- Cross-platform edge cases around container runtimes.
- Larger agent swarms.
- Public website and exhibition kit.
- Integration notes with adjacent open-source projects.

## Near-Term Roadmap

1. Document the sandbox safety model in a short reviewable form.
2. Keep credential examples clearly fake.
3. Publish the website once DNS points to GitHub Pages.
4. Build an integration map for adjacent open-source projects.
5. Prepare a small exhibition/demo kit for public presentations.
6. Add publication governance notes for ideas, docs, and AI-assisted work.

## Contribution Fit

Good contributions are small and understandable:

- docs fixes;
- reproducible setup reports;
- security-boundary clarifications;
- skills for optional capabilities;
- tests around runtime and credential behavior.

Large feature PRs are usually a poor fit for the base repository. NanoClaw is
designed to stay small and fork-customizable.
