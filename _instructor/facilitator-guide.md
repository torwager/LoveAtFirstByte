---
title: "Love at First Byte — Facilitator Guide"
subtitle: "Run-of-show, rituals, and prep checklist for the 90-minute workshop"
---

# Facilitator Guide

**NAPS · AI for Academia · 2026.** This guide is for the facilitator only — it is intentionally not published on the student site.

**Goal.** Run a fast, inclusive session in which a student who has never used AI and an experienced power user both leave with something they can use the next day. The session teaches *judgment over answers*: the skill is deciding what to ask and telling good output from bad, not fluency with any one tool. The facilitator's job is to keep the arc tight, keep the bar visible, and let the room do the comparing.

At a glance: 90 minutes · 2 collaborative challenges · mixed experience · browser-only for most tools (one challenge benefits from a research-capable tool). The two **set challenges** are **The Next Step** (Challenge 1) and **This is not a drill.** (Challenge 2).

---

## Run of show

A tight arc: a fast, inclusive opening, then two collaborative challenges with built-in buffers so the timing actually closes. The ethics beat and the advanced-model showcase are folded into existing blocks, so there is no extra time to find. Group formation happens *during* the warm-up so Challenge 1 starts at full speed.

- **0:00–0:10 — Warm-up discussion (10 min).** "What do you *actually* use AI for at work?" Run it round-robin at tables (not whole-room). Each table posts one use and one frustration to a shared slide. This doubles as the group-formation and tool-assignment step — by minute 10 every table knows its people and its assigned tool.
- **0:10–0:20 — Ideas and possibilities (10 min).** The judgment-vs-answers framing, and the four prompting moves: decompose, assign a role, use adversarial self-critique, and ask the AI to improve your prompt. Include a brief (about 60-second) live look at an advanced agent (e.g., Claude Code) doing something a chat app cannot — to watch, not to replicate. Close by confirming each table's assigned tool.
- **0:20–0:55 — Challenge 1 (35 min): *The Next Step.*** Set challenge — use AI to rapidly understand a complex recent paper (Livrizzi, Chang-Weinberg et al., *Neuron* 2026, on placebo analgesia), build a usable explainer, and propose one follow-up experiment. Have the PDF ready to share. Run it on the per-challenge timeline below.
- **0:55–1:30 — Challenge 2 (35 min): *This is not a drill.*** Set challenge — use AI to understand a live federal rule change (OMB's proposed rule, 91 FR 32198) and draft a substantive public comment before the July 13, 2026 deadline. Same timeline; the debrief turns to what made comments impactful and what each tool did well. Reserve the last two minutes for the ethics moment and one "what's possible next" pointer to the command-line tools.

### The per-challenge timeline (use for both matches)

Honest arithmetic: 5 + 15 + 10 = 30, not 35. The extra five minutes are a 2-minute locked prompt-post (the most valuable artifact of the day) and a 3-minute reset buffer between matches. The buffers are not slack — they are what keep the schedule from collapsing.

- **0:00–0:05 — Set the bar (5 min).** Run the bad-prompt demo live. Leave the mediocre output on screen as the baseline. Hand out (or point to) the strategy cards and stimulus materials.
- **0:05–0:20 — Build (15 min).** Groups work on their assigned tool. Circulate: unstick the stuck, nudge power users toward the stretch goal, and remind everyone the clock is the constraint, not the AI.
- **0:20–0:22 — Lock the prompt (2 min).** Each group pastes its single best prompt into its box on the results slide. Once posted, it is locked — no edits.
- **0:22–0:32 — Debrief (10 min).** Show, compare, name the move, ethics. Structure below.
- **0:32–0:35 — Reset buffer (3 min).** Rotate tool assignments, swap stimulus materials, reset. Challenge 2 starts on time.

---

### Which challenges to run

The two **set challenges** are fixed:

- **Challenge 1 — The Next Step.** Use AI to understand a complex recent paper (Livrizzi, Chang-Weinberg et al., *Neuron* 2026) and propose a follow-up experiment. Have the open-access PDF ready to hand out. Any chat AI that accepts a PDF works; a research-capable tool helps with the novelty check in Part 2.
- **Challenge 2 — This is not a drill.** Use AI to understand OMB's live proposed grants rule (91 FR 32198) and draft a substantive public comment before the July 13, 2026 deadline. A research-capable tool helps; the page links the rule and a hints page.

If you need a gentler or shorter alternate (a table finishes early, a tool misbehaves, or the room is AI-shy), good swaps from **Other Challenges** are **Picture This** (visual, instant payoff, no domain knowledge), **Plain-Language Gauntlet** (no code, universal), or **Hypothesis Roulette** (lively, vote-driven).

## The bad-prompt demo

Open every challenge with it. Spend about two minutes typing a lazy prompt live and show the mediocre result. Do not fix it. The weak output is the point: it makes the task concrete, sets a visible bar, and lowers the intimidation factor for newcomers because the starting line is obviously low.

**The weak prompt (say it aloud, type it live):**

- *For The Next Step:* paste the paper and type **"Summarize this paper."** You'll get a polished paragraph that mirrors the abstract, skips the techniques, never explains *why* each experiment was run, and surfaces none of the assumptions you'd need to design what comes next.
- *For This is not a drill:* **"Summarize this 108-page rule and write me a public comment opposing it."** You'll get a vague summary (often with invented or misnumbered sections) and a comment with no docket or section citations, no evidence, and no specific alternative — exactly the kind an agency can wave away as non-substantive.

Resist the urge to improve it on screen.

**The challenge to the room (reusable script):**

> "That's what you get for free, and it isn't good enough to act on. It skipped the techniques / cited nothing / has no idea what story we're telling. For the next 15 minutes, your job is to beat this — same source, same tool, make something you'd actually use."

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
- **Step 2 — Compare (3–4 min).** "What did each AI do well, and where did it struggle?" Push for specifics: refusals, formatting, citation behavior, how faithfully it described a method, and whether it invented a section number, statistic, or reference.
- **Step 3 — Name the move (2 min).** Read the winning prompts aloud and label the strategy each used. This is where the prompt-share pays off.
- **Step 4 — Ethics and limits (1 min).** One honest caution per challenge — hallucinated citations, fabricated statistics, IP and consent. Short and specific, not a lecture.

---

## Managing mixed experience levels

A room that ranges from "never opened an AI tool" to "builds agents for a living" is an asset if you stage it.

1. **Pair, don't sort.** Seed every breakout with at least one confident user as the driver (who types) and route newcomers to navigator roles (decide what to ask, judge the output). Judgment is the real curriculum, and it does not require fluency.
2. **A floor and a ceiling.** Strategy cards give newcomers a concrete next step. An optional stretch goal — runnable code, a self-critique pass — keeps power users engaged.
3. **An outlet for power users.** Point the one or two most advanced people at the advanced command-line track (*Reviewer 4*, *Who Are My Friends?*, *Junkyard Dog*) as optional stretch work, so they do not dominate the core debrief.

**Tool-assignment / access strategy.** Skip ChatGPT and turn the access constraint into the main event. Assign each breakout a different free tool — Claude, Gemini, Copilot, Perplexity, Meta AI. The same task on several engines makes the debrief a genuine comparison ("what did each AI do well, and where did it struggle?") rather than several near-identical outputs. Assign tools during the warm-up so no time is lost, and rotate assignments between Match 1 and Match 2 so every group sees two tools. Check logins in advance only where an account is needed; otherwise it is all browser-based.

---

## Prep checklist and auxiliary materials

Build these once and the room largely runs itself. Pre-filling and pre-vetting removes the setup friction that otherwise eats the first five minutes of every challenge.

- **Shared collaborative doc (one per challenge).** A document or slide deck with a pre-built table: Group | Tool | Best prompt | Key finding | Surprise or limitation. Pre-filling the rows removes setup friction and makes the prompt-share automatic.
- **Results slide template.** One slide per challenge with five labeled boxes (one per group/tool) for the locked best prompt plus a thumbnail of the output. This is the backbone of the debrief.
- **Strategy cards (four, printed handout).** One per principle — Decompose, Role, Adversarial, Improve-my-prompt — each with a one-line "try this" stem groups can drop into a prompt.
- **Scoring rubrics (lightweight; 3–4 criteria, 0–2 scale so the room can vote quickly).**
  - *The Next Step:* explainer clarity · technique accuracy (no misdescribed methods) · experiment logic captured · follow-up experiment (tests a real assumption, plausibly novel, feasible).
  - *This is not a drill:* targets a specific provision/section · concrete impact · evidence + a specific alternative · verified (no hallucinated section numbers or dates).
  - *Alternates — Picture This:* clarity · correct encoding · accessibility (colorblind-safe, labels) · honesty (no invented data). *Plain-Language Gauntlet:* accuracy · jargon-free · right register · length discipline.
- **Sample materials, pre-vetted** (so no group spends time hunting inputs, and so the bad-prompt demo is reproducible):
  - *The Next Step:* the open-access paper PDF, ready to hand out or drop into the shared doc — [download link](https://www.biorxiv.org/content/10.1101/2025.02.13.638185v1.full.pdf). Optionally pre-load it in one AI tool so the demo is instant.
  - *This is not a drill:* the rule link (91 FR 32198) and docket **OMB-2026-0034**, plus the challenge's hints page for groups that get stuck.
  - *Alternates:* a deliberately messy data table (Picture This), a dense methods paragraph (Plain-Language Gauntlet), or a surprising null result (Hypothesis Roulette).
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
6. **Adjust difficulty to the room.** The set challenges (*The Next Step*, *This is not a drill*) are meatier and reward a research-capable tool. If the room is AI-shy or short on time, swap in a lower-barrier alternate from Other Challenges — *Picture This* (visual, immediate payoff) or *Plain-Language Gauntlet* (no code, universal), with *Hypothesis Roulette* as a lively backup. Both set challenges carry a real hallucination risk (a misdescribed method or a fabricated citation/section), so make verification an explicit step rather than an afterthought.
7. **Attend to accessibility and inclusion.** Bake colorblind-safe palettes and alt-text into the *Picture This* rubric (good practice and a teaching point). Provide all stimulus materials as plain text (screen-reader friendly), keep slide fonts large, allow voice-to-text, and ensure at least one assigned tool per match works with no account so nobody is blocked at the door.
8. **Don't run Model Horserace as a standalone.** Its value — "what did each AI do well, and where did it struggle?" — is strongest when layered onto every challenge via tool assignment. Treat it as the meta-format rather than a separate slot.

---

## The ethics moment

Reserve the last minute of each debrief for a real, specific caution — not a disclaimer mumbled in passing. The line to hold: **using AI to improve your own draft is fine; using it to perform someone else's peer review, or to fabricate a record, is not.**

Be especially deliberate around the grant-review and reviewer-finding challenges. Name the live risks explicitly: hallucinated citations and DOIs (every reference is verified at the source, without exception); fabricated statistics presented as plausible numbers; confidentiality and IP (do not paste an unpublished manuscript or an embargoed grant into a tool whose data policy you have not read); and consent for any participant or clinical material. The aim is not to scare the room away from AI — it is to model the judgment that separates a careful scientist from a fast one. That judgment is the curriculum.
