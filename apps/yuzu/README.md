# Yuzu 🍋

TanStack Start app starter running on Cloudflare Workers & Pages.

## Run locally

```sh
pnpm dev
```

The app will run locally on port `3001` (to avoid port conflicts with other apps in this monorepo).

## Build

```sh
pnpm build
```

## Deploy to Cloudflare

To deploy your application to Cloudflare Workers or Pages using Wrangler:

```sh
pnpm deploy
```

## Generate Cloudflare Types

To generate TypeScript types for bindings and environments:

```sh
pnpm cf-typegen
```

## Test

Run the unit tests:

```sh
pnpm test
```

## Check & Format

Run Ultracite checks (linter, formatter, type checker):

```sh
pnpm check
```

Automatically fix linting/formatting issues:

```sh
pnpm fix
```
