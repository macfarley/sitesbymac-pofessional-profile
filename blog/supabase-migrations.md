---
title: "Supabase Migrations: The Silent Failure That Wasted My Morning"
date: 2026-03-10
tags: [supabase, debugging, postgres, migrations]
summary: "A real-world failure mode in Supabase migrations that silently discards your work with no errors, and how to avoid it."
---

I hit a Supabase failure mode that made me think I was losing my mind. The CLI kept telling me “Remote database is up to date,” but the dashboard showed zero tables. No errors, no warnings, no logs. Nothing.

After hours of digging, I finally figured out what was happening. Writing it down here so nobody else has to go through the same mess.

## The short version

Supabase CLI migrations only apply Postgres schema. If your migration file contains anything related to Storage—buckets, policies, RLS, triggers, anything referencing `storage.*`—the CLI silently ignores the entire file and reports success.

## What this looks like

You run:

```
npx supabase db push
```

The CLI says everything is fine.  
The dashboard shows nothing.  
You start doubting everything.

But the migration never ran.

## Why this happens

Supabase is really two systems:

- Postgres (tables, indexes, triggers, RLS on public tables)
- Storage (buckets, storage policies, storage RLS, metadata)

The migration engine only understands Postgres. Storage lives in a separate internal service. When the CLI sees Storage SQL in a migration file, it can’t apply it. Instead of erroring, it just skips the file and pretends everything is fine.

## How to fix it

Split your migrations into two parts.

### 1. Postgres schema (allowed in migrations)

This goes in `supabase/migrations/`:

- CREATE TABLE statements
- indexes
- triggers
- constraints
- RLS on your public tables

Apply with:

```
npx supabase db push
```

Your tables will finally appear.

### 2. Storage setup (not allowed in migrations)

Run this manually in the Supabase Dashboard SQL Editor:

- bucket creation
- storage policies
- storage RLS
- storage triggers
- anything referencing `storage.*`

There is no supported way to run this through migrations.

## The mental model

If it’s Postgres, put it in a migration.  
If it’s Storage, run it manually.

## Takeaway

Supabase’s silent failure mode around Storage SQL is real, undocumented, and easy to fall into. If your migrations “succeed” but nothing shows up in the dashboard, check for Storage statements in your SQL.