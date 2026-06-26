---
title: "Love at First Byte — Facilitator Guide"
subtitle: "Run-of-show, rituals, and prep checklist for the 90-minute workshop"
---

# Facilitator Guide

**NAPS · AI for Academia · 2026.** This guide is for the facilitator only — it is intentionally not published on the student site.

**Goal.** Run a fast, inclusive session in which a student who has never used AI and an experienced power user both leave with something they can use the next day. The session teaches *judgment over answers*: the skill is deciding what to ask and telling good output from bad, not fluency with any one tool. The facilitator's job is to keep the arc tight, keep the bar visible, and let the room do the comparing.

At a glance: 90 minutes · 2 challenge matches · mixed experience · browser-only (no installs required).

---

## Run of show

A tight arc: a fast, inclusive opening, then two challenge matches with built-in buffers so the timing actually closes. The ethics beat and the advanced-model showcase are folded into existing blocks, so there is no extra time to find. Group formation happens *during* the warm-up so Challenge 1 starts at full speed.

- **0:00–0:10 — Warm-up discussion (10 min).** "What do you *actually* use AI for at work?" Run it round-robin at tables (not whole-room). Each table posts one use and one frustration to a shared slide. This doubles as the group-formation and tool-assignment step — by minute 10 every table knows its people and its assigned tool.
- **0:10–0:20 — Ideas and possibilities (10 min).** The judgment-vs-answers framing, and the four prompting moves: decompose, assign a role, use adversarial self-critique, and ask the AI to improve your prompt. Include a brief (about 60-second) live look at an advanced agent (e.g., Claude Code) doing something a chat app cannot — to watch, not to replicate. Close by confirming each table's assigned tool.
- **0:20–0:55 — Challenge Match 1 (35 min).** Recommended core pick: *Picture This* (visual, immediate payoff, no domain knowledge required). Run it on the per-challenge timeline below.
- **0:55–1:30 — Challenge Match 2 (35 min).** Recommended core pick: *Plain-Language Gauntlet* (no code, universally relevant). Same timeline; the debrief pivots to "which AI handled this best, and why." Reserve the last two minutes for the ethics moment and one "what's possible next" pointer to the command-line tools.

### The per-challenge timeline (use for both matches)

Honest arithmetic: 5 + 15 + 10 = 30, not 35. The extra five minutes are a 2-minute locked prompt-post (the most valuable artifact of the day) and a 3-minute reset buffer between matches. The buffers are not slack — they are what keep the schedule from collapsing.

- **0:00–0:05 — Set the bar (5 min).** Run the bad-prompt demo live. Leave the mediocre output on screen as the baseline. Hand out (or point to) the strategy cards and stimulus materials.
- **0:05–0:20 — Build (15 min).** Groups work on their assigned tool. Circulate: unstick the stuck, nudge power users toward the stretch goal, and remind everyone the clock is the constraint, not the AI.
- **0:20–0:22 — Lock the prompt (2 min).** Each group pastes its single best prompt into its box on the results slide. Once posted, it is locked — no edits.
- **0:22–0:32 — Debrief (10 min).** Show, compare, name the move, ethics. Structure below.
- **0:32–0:35 — Reset buffer (3 min).** Rotate tool assignments, swap stimulus materials, reset. Match 2 starts on time.

---

### Which challenges to run

If you only run two challenges, run the first two below. The third is a strong backup if a table finishes early or a tool misbehaves.

- **Picture This (core).** Rescue an ugly data table — turn a messy export into a figure that actually communicates. Visual, immediate payoff, no domain knowledge required.
- **Plain-Language Gauntlet (core).** One dense paragraph, three audiences — translate without distorting. No code, universally relevant.
- **Hypothesis Roulette (backup).** Five mechanistic hypotheses from a single surprising null result. Slightly more domain-dependent; best if the room is research-experienced.

## The bad-prompt demo

Open every challenge with it. Spend about two minutes typing a lazy prompt live — "make a graph of this," "explain this paper" — and show the mediocre result. Do not fix it. The weak output is the point: it makes the task concrete, sets a visible bar, and lowers the intimidation factor for newcomers because the starting line is obviously low.

**The weak prompt (say it aloud, type it live):**

> make a graph of this data

…then paste the messy table and let the tool produce a default, mislabeled, unit-confused chart. Resist the urge to improve it.

**The challenge to the room (reusable script):**

> "That's what you get for free, and it isn't good enough to put in a talk. It guessed the units, dropped a label, and has no idea what story we're telling. For the next 15 minutes, your job is to beat this — same data, same tool, make something you'd actually show your PI."

Use the same three beats every time: show the lazy result, decline to fix it, and challenge the room to beat it.

---

## The prompt-share ritual

This is the most valuable two minutes of the session. Before any output is shown, each group pastes its single best prompt into its box on one shared results slide — one slide, one box per group, locked once posted. In the debrief, read the prompts aloud and name the move that made each one work: a role, decomposition, an adversarial critique step, or an "improve my prompt" pass.

**Why the prompt-share beats the output-share.** The output is a souvenir; the prompt is the recipe. A great chart teaches the room nothing reproducible, but "we told it to act as a colorblind reviewer and flag anything it couldn't read" is a move anyone can reuse. The prompt is the transferable artifact, so make it the headline.

A useful bonus: the locked prompts from both matches become a one-page shared prompt library the cohort keeps — turning 90 minutes into a reusable asset, and reinforcing that prompts matter more than any single output.

---

## Running a great debrief

Use the same structure every time, in 10 minutes. Predictability is a feature — groups know what is coming and prepare for it.

- **Step 1 — Show (3–4 min).** Have two or three groups show output. Choose contrasting tools rather than the "best" one; the disagreement is the lesson.
- **Step 2 — Compare (3–4 min).** "Which AI handled this best, and why?" Push for specifics: refusals, formatting, citation behavior, code quality, and how each tool handled the deliberate typo or the missing label.
- **Step 3 — Name the move (2 min).** Read the winning prompts aloud and label the strategy each used. This is where the prompt-share pays off.
- **Step 4 — Ethics and limits (1 min).** One honest caution per challenge — hallucinated citations, fabricated statistics, IP and consent. Short and specific, not a lecture.

---

## Managing mixed experience levels

A room that ranges from "never opened an AI tool" to "builds agents for a living" is an asset if you stage it.

1. **Pair, don't sort.** Seed every breakout with at least one confident user as the driver (who types) and route newcomers to navigator roles (decide what to ask, judge the output). Judgment is the real curriculum, and it does not require fluency.
2. **A floor and a ceiling.** Strategy cards give newcomers a concrete next step. An optional stretch goal — runnable code, a self-critique pass — keeps power users engaged.
3. **An outlet for power users.** Point the one or two most advanced people at the advanced command-line track (*Reviewer 4*, *Who Are My Friends?*, *Junkyard Dog*) as optional stretch work, so they do not dominate the core debrief.

**Tool-assignment / access strategy.** Skip ChatGPT and turn the access constraint into the main event. Assign each breakout a different free tool — Claude, Gemini, Copilot, Perplexity, Meta AI. The same task on several engines makes the debrief a genuine comparison ("which AI won, and why") rather than several near-identical outputs. Assign tools during the warm-up so no time is lost, and rotate assignments between Match 1 and Match 2 so every group sees two tools. Check logins in advance only where an account is needed; otherwise it is all browser-based.

---

## Prep checklist and auxiliary materials

Build these once and the room largely runs itself. Pre-filling and pre-vetting removes the setup friction that otherwise eats the first five minutes of every challenge.

- **Shared collaborative doc (one per challenge).** A document or slide deck with a pre-built table: Group | Tool | Best prompt | Key finding | Surprise or limitation. Pre-filling the rows removes setup friction and makes the prompt-share automatic.
- **Results slide template.** One slide per challenge with five labeled boxes (one per group/tool) for the locked best prompt plus a thumbnail of the output. This is the backbone of the debrief.
- **Strategy cards (four, printed handout).** One per principle — Decompose, Role, Adversarial, Improve-my-prompt — each with a one-line "try this" stem groups can drop into a prompt.
- **Scoring rubrics (lightweight; 3–4 criteria, 0–2 scale so the room can vote quickly).**
  - *Picture This:* clarity · correct encoding · accessibility (colorblind-safe, labels) · honesty (no invented data).
  - *Plain-Language Gauntlet:* accuracy · jargon-free · right register for the audience · length discipline.
- **Sample materials, pre-vetted** (so no group spends time hunting inputs, and so the bad-prompt demo is reproducible):
  - *Picture This:* one deliberately messy data table (inconsistent units, missing labels, a typo), plus a clean version for checking.
  - *Plain-Language Gauntlet:* one dense pain-neuroimaging methods paragraph.
  - *Backup (Hypothesis Roulette):* one crisp, surprising null result.
- **Bad-prompt / good-prompt pair (per challenge).** Scripted so the live demo lands consistently.
- **Tool cheat-sheet and setup links.** Free-tier login notes for Claude, Gemini, Copilot, Perplexity, Meta AI; flag which require an account.
- **Ethics one-pager.** The grant-review and reviewer-finding cautions: improving your own draft is fine; using these tools to perform an actual assigned peer review is not.

---

## Suggested improvements and alternatives

Adjustments to consider when tuning the format for your room.

1. **Make the warm-up do double duty.** Run "what do you use AI for?" at tables rather than whole-room, and use it to surface frustrations you will address and to form groups and assign tools. This reclaims the few minutes usually lost to logistics at the start of Challenge 1.
2. **Reconcile the timing honestly.** 5 + 15 + 10 = 30, not 35. Rather than padding a phase, add a 2-minute locked prompt-post and a 3-minute reset buffer between matches.
3. **Pair newcomers with power users.** Keep them together. A driver who types plus navigators who decide what to ask keeps newcomers engaged on judgment — the actual point — and stops power users from monopolizing.
4. **Build a shared prompt library as you go.** The locked best prompts from both matches become a one-page cohort takeaway, turning 90 minutes into a reusable asset.
5. **Give power users a sanctioned stretch track.** Point the one or two most advanced people per group at the command-line challenges (*Reviewer 4*, *Who Are My Friends?*, *Junkyard Dog*) as optional work, with a brief showcase in the debrief.
6. **Choose the two lowest-barrier challenges as cores.** Lead with *Picture This* (visual, immediate payoff) and *Plain-Language Gauntlet* (no code, universal). Hold *Hypothesis Roulette* as backup. Defer *Rapid Review* and *Flash Debate* to a longer session — 15 minutes is not enough to manage their citation-hallucination risk responsibly, and that risk can discourage newcomers.
7. **Attend to accessibility and inclusion.** Bake colorblind-safe palettes and alt-text into the *Picture This* rubric (good practice and a teaching point). Provide all stimulus materials as plain text (screen-reader friendly), keep slide fonts large, allow voice-to-text, and ensure at least one assigned tool per match works with no account so nobody is blocked at the door.
8. **Don't run Model Horserace as a standalone.** Its value — "which AI won, and why" — is strongest when layered onto every challenge via tool assignment. Treat it as the meta-format rather than a separate slot.

---

## The ethics moment

Reserve the last minute of each debrief for a real, specific caution — not a disclaimer mumbled in passing. The line to hold: **using AI to improve your own draft is fine; using it to perform someone else's peer review, or to fabricate a record, is not.**

Be especially deliberate around the grant-review and reviewer-finding challenges. Name the live risks explicitly: hallucinated citations and DOIs (every reference is verified at the source, without exception); fabricated statistics presented as plausible numbers; confidentiality and IP (do not paste an unpublished manuscript or an embargoed grant into a tool whose data policy you have not read); and consent for any participant or clinical material. The aim is not to scare the room away from AI — it is to model the judgment that separates a careful scientist from a fast one. That judgment is the curriculum.
