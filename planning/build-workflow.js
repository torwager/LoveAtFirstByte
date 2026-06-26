export const meta = {
  name: 'lafb-build-site',
  description: 'Research + author all content pages for the Love at First Byte Quarto workshop site',
  phases: [
    { title: 'Research', detail: 'workshop-design review + free AI tool research (beginner & advanced)' },
    { title: 'Content', detail: 'author overview, toolkit, facilitator guide, challenge menu, and 14 challenge pages with custom SVGs' },
  ],
}

const REPO = '/Users/f003vz1/Documents/GitHub/LoveAtFirstByte'

// ---------------------------------------------------------------------------
//  Shared house style — injected into every content-authoring agent
// ---------------------------------------------------------------------------
const STYLE = [
  'You are authoring ONE page of a Quarto website called "Love at First Byte" — a 90-minute hands-on workshop on using AI in pain science and academia, for NAPS (North American Pain School) graduate students with widely varying AI experience.',
  '',
  'OUTPUT FORMAT — a Quarto .qmd file:',
  '- Begin with YAML front matter delimited by triple-dashes: title, subtitle, and (optional) description. Keep titles short; the title renders as the page H1 automatically, so do NOT repeat it as a heading in the body.',
  '- After the front matter, write the body in Markdown. You MAY embed raw HTML directly (Quarto passes block-level HTML through when it is surrounded by blank lines). Use this for the SVG and the styled boxes.',
  '- IMPORTANT: do NOT use Markdown code-fences for example prompts. Instead wrap example prompt text in: <div class="prompt"> ... </div>. (Code fences are reserved and clutter the design.)',
  '- Use real em-dashes and curly quotes sparingly; plain ASCII is fine.',
  '',
  'DESIGN SYSTEM — a dark, glowing, AI-x-neuroscience aesthetic. Palette: deep navy background (#0b1020), synapse cyan (#22d3ee), teal (#36e0d0), rose/"love" (#ff4d8d), pink (#f472b6), violet (#8b5cf6), amber (#fbbf24), light text (#e6ebff), muted (#9aa6c7).',
  '',
  'REUSABLE CSS CLASSES (already defined globally — just use them):',
  '- Pills (inline tags): <span class="pill cyan">…</span> — variants: cyan, rose, violet, amber, teal. Group them in <div class="meta-row"> … </div>.',
  '- Labelled boxes: <div class="box goal"><span class="box-label">The Goal</span> …text… </div>. Variants: goal (cyan), tip (teal), bad (rose, for weak prompts), good (violet, for strong prompts), ethics (amber).',
  '- Prompt text: <div class="prompt">…the literal prompt a participant would type…</div>',
  '- Run-of-show timeline: <ul class="timeline"><li><span class="t">0–5 min · Phase title</span><br>description</li> … </ul>',
  '- Card grids (for menu/links): <div class="card-grid"><a class="lafb-card" href="…"><h3>Title</h3><p>blurb</p></a> … </div>',
  '',
  'EVERY CHALLENGE/SECTION PAGE OPENS WITH A BESPOKE INLINE SVG HERO that visually represents the page metaphor, in the palette above. Requirements for the SVG:',
  '- <svg viewBox="0 0 800 220" width="100%" style="max-height:220px;display:block;margin:0 0 1.2rem;border-radius:16px;background:linear-gradient(135deg,#0e1530,#141a30);border:1px solid #273258"> … </svg>',
  '- Define a gradient with a UNIQUE id per page (e.g. id="g-SLUG") to avoid collisions, using stops #22d3ee -> #ff4d8d -> #8b5cf6.',
  '- Build an abstract, tasteful composition (nodes + synapse lines, flowing shapes, motif glyphs) that nods to the specific challenge — NOT generic clipart. Use opacity, glow (via a soft drop-shadow or layered translucent shapes), and a few accent dots. Keep it lightweight (no external refs, no scripts).',
  '',
  'TONE: lively, encouraging, intellectually serious, a little witty. Lower the intimidation factor for AI newcomers while staying useful for experts. Pain-neuroscience and academic flavor throughout (grants, peer review, neuroimaging, opioids, hypotheses, journal clubs).',
  '',
  'Write polished, specific, ready-to-teach content — never placeholders or "TODO". When a page calls for starter materials, INVENT realistic, paste-ready artifacts (a messy data table, a mock harsh review, a brief study description, a surprising null result, etc.).',
].join('\n')

// ---------------------------------------------------------------------------
//  PHASE 1 — research
// ---------------------------------------------------------------------------
phase('Research')

const ORIGINAL_PLAN = [
  'ORIGINAL ORGANIZER NOTES (verbatim essentials):',
  'Theme: "AI in Academia: Love at first byte?" Quote: "In the era of AI, answers have become cheap. It is judgment that is expensive." (Santiago Schnell, Provost, Dartmouth).',
  'Schedule: Intro 20 min (10 min audience discussion: "what do you use AI for at work?"; 10 min Tor on ideas/possibilities), then Challenge 1 (35 min) and Challenge 2 (35 min). Total ~90 min.',
  'Challenge match format (AI Challenge Match): Phase 1 (5 min) instructor introduces the challenge — specifies the GOAL but not the algorithm — plus group brainstorming; Phase 2 (15 min) breakout groups work and post prompts + key findings in a shared doc; Phase 3 (10 min) show results and debrief. (Note tension: 5+15+10=30 but slots are 35 — reconcile this.)',
  'Strategy tips: think creatively about high-level goals and subtasks; identity-based prompting (give the agent a role / Soul.md, e.g. "You are an open-source coding GOD"); adversarial thinking (have the AI evaluate and score confidence in / find flaws in its own output); ask the AI how to improve your prompting.',
  'Facilitation tip: open each challenge by demoing a BAD prompt live, show the mediocre output, then challenge groups to beat it. Have each group post their single best prompt on a shared slide before the debrief (the prompt-share is often more valuable than the output-share).',
  'Access strategy: skip ChatGPT-only; assign each breakout group a DIFFERENT free tool (Claude, Gemini, Copilot, Perplexity, Meta AI) so the debrief becomes "which AI handled this best and why".',
  'Also wants to showcase what is possible with more advanced models (Claude Code / Codex / Gemini CLI).',
].join('\n')

const DESIGN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['scheduleMarkdown', 'challengeTimingHtml', 'corePicks', 'principlesMarkdown', 'facilitationMarkdown', 'auxiliaryMarkdown', 'improvementsMarkdown'],
  properties: {
    scheduleMarkdown: { type: 'string', description: 'A refined, realistic 90-minute run-of-show as Markdown (a table or timeline). Must total 90 min.' },
    challengeTimingHtml: { type: 'string', description: 'The canonical per-challenge run-of-show as a <ul class="timeline">…</ul> HTML block, reconciling the 5/15/10 vs 35-min discrepancy (e.g. add buffer/setup/share). Reused on every challenge page.' },
    corePicks: {
      type: 'array',
      description: 'The 2 recommended live challenges for a mixed-background cohort, plus 1 backup. 3 items.',
      items: {
        type: 'object', additionalProperties: false,
        required: ['slug', 'title', 'why'],
        properties: { slug: { type: 'string' }, title: { type: 'string' }, why: { type: 'string' } },
      },
    },
    principlesMarkdown: { type: 'string', description: 'Markdown for a "Prompting & strategy principles" section: creative goal decomposition, identity/role prompting, adversarial self-evaluation, asking the AI to improve your prompt. Use the box/pill classes where helpful.' },
    facilitationMarkdown: { type: 'string', description: 'Markdown facilitation guidance: the bad-prompt demo, the prompt-share-on-a-slide ritual, debrief structure, managing mixed experience levels, the tool-assignment access strategy.' },
    auxiliaryMarkdown: { type: 'string', description: 'Markdown listing recommended auxiliary materials to prepare (shared doc templates, scoring rubrics, prompt cards, sample datasets/texts, a results slide template).' },
    improvementsMarkdown: { type: 'string', description: 'Markdown: concrete suggested improvements and alternatives to the original plan, tuned for 90 min and varied AI backgrounds (e.g. pairing novices with power users, a warm-up, a shared prompt library, accessibility).' },
  },
}

const designPromptText = [
  'You are an expert workshop designer and learning scientist who also knows the current AI-tools landscape well.',
  'Review the plan below and design the strongest possible 90-minute workshop for NAPS graduate students whose AI experience ranges from "never used it" to "power user".',
  '',
  ORIGINAL_PLAN,
  '',
  'Deliver structured output per the schema. Be concrete and opinionated. Reconcile the timing math. Recommend exactly 2 core live challenges (plus 1 backup) that work for a mixed-background room from this candidate slug list: picture-this, model-horserace, plain-language-gauntlet, hypothesis-roulette, the-rebuttal, irb-speed-round, experiment-generator, rapid-review, flash-debate, meet-the-speaker, policy-wonk. (Advanced Claude-Code challenges exist too: reviewer-4, who-are-my-friends, junkyard-dog — these are for a demo/optional track, generally not the 2 core picks.)',
  'All Markdown may use the site CSS classes (pill, box, timeline) but keep it clean. Do not write files; return only the structured object.',
].join('\n')

const beginnerToolsPromptText = [
  'You are a research assistant producing a current (2026) buyer-guide of FREE chat-based AI assistants for beginners — people who will just open an app or website in a browser, no install/coding.',
  'First load web tools: call ToolSearch with the query "select:WebSearch,WebFetch", then use WebSearch/WebFetch to verify current free-tier details, default models, and getting-started URLs as of 2026. Do not invent limits — check.',
  'Cover at least: ChatGPT (free), Claude (free, Anthropic), Google Gemini, Microsoft Copilot, Perplexity, Meta AI. Optionally mention DeepSeek and Grok if relevant.',
  'For EACH tool give: a 1-2 sentence description; which model(s) the FREE tier gives you; pros; cons/limits (rate limits, login requirements); the getting-started URL; and one line on what a paid upgrade adds (and rough price) — but keep the focus on free workshop use.',
  'Then add a short "Best for the workshop" note and a compact comparison table (tool | free model | best at | gotcha | link).',
  'Return ONLY clean Markdown (no YAML, no file write). You may use the site classes: <span class="pill cyan">free</span>, <div class="box tip">…</div>, etc. Make links real and clickable Markdown links.',
].join('\n')

const advancedToolsPromptText = [
  'You are a research assistant producing a current (2026) guide to AGENTIC AI coding/CLI assistants for advanced users at a research workshop.',
  'First load web tools: call ToolSearch with the query "select:WebSearch,WebFetch", then use WebSearch/WebFetch to verify current install commands, free tiers, and getting-started URLs as of 2026.',
  'Cover at least: Claude Code (Anthropic), OpenAI Codex CLI / Codex, Google Gemini CLI. Also briefly: Cursor, Windsurf, GitHub Copilot (agent mode), Aider, and Cline (or current equivalents).',
  'For EACH: a 1-2 sentence description of what it is and the killer use-case; pros; cons; whether it can be used FREE in a workshop (and how — e.g. Gemini CLI free tier, free trials, or a free model via API) vs requiring a paid subscription; the install command / getting-started URL; and one line on what the paid tier unlocks and rough price.',
  'Add a short "Can I use it free during a 90-minute workshop?" verdict for each, and a "if you only try one" recommendation for newcomers to agentic tools.',
  'Return ONLY clean Markdown (no YAML, no file write). Use the site classes where helpful. Make links real Markdown links. Note the current best Anthropic models (e.g. the Claude Opus/Sonnet/Haiku family) only if you verify naming via search.',
].join('\n')

const [design, beginnerTools, advancedTools] = await parallel([
  () => agent(designPromptText, { label: 'design-review', phase: 'Research', schema: DESIGN_SCHEMA }),
  () => agent(beginnerToolsPromptText, { label: 'tools-beginner', phase: 'Research' }),
  () => agent(advancedToolsPromptText, { label: 'tools-advanced', phase: 'Research' }),
])

log('Research done. Core picks: ' + (design && design.corePicks ? design.corePicks.map(p => p.slug).join(', ') : 'n/a'))

// ---------------------------------------------------------------------------
//  PHASE 2 — content authoring (one agent per page)
// ---------------------------------------------------------------------------
phase('Content')

const TIMING = (design && design.challengeTimingHtml) || (
  '<ul class="timeline">' +
  '<li><span class="t">0-5 min - Phase 1: Frame & brainstorm</span><br>Instructor names the goal (not the method). Groups brainstorm angles.</li>' +
  '<li><span class="t">5-25 min - Phase 2: Breakout sprint</span><br>Groups prompt, iterate, and post their best prompt + key findings to the shared doc.</li>' +
  '<li><span class="t">25-35 min - Phase 3: Show & debrief</span><br>Quick shares, then debrief on what prompting actually moved the needle.</li>' +
  '</ul>'
)

const CORE_SLUGS = (design && design.corePicks ? design.corePicks.map(p => p.slug) : ['picture-this', 'the-rebuttal'])

// --- canonical challenge catalogue -----------------------------------------
const challenges = [
  { slug: 'picture-this', dir: 'challenges', title: 'Picture This', subtitle: 'Rescue an ugly data table and turn it into the most informative figure in the room.',
    diff: 'Beginner-friendly', mode: 'Any chat AI',
    source: 'Take a messy/ugly data table and prompt the AI to produce the most INFORMATIVE visualization, not just a pretty one: correct axis labels, error bars, colorblind-friendly palette, clear title, the right chart type. The real lesson is what instructions were actually needed to get there. Provide a deliberately ugly, realistic pain-science data table as starter material (e.g. messy column names, mixed units, missing-value codes) that groups can paste in.' },
  { slug: 'model-horserace', dir: 'challenges', title: 'Model Horserace', subtitle: 'Same task, five different free AIs. Which one wins, and why?',
    diff: 'Beginner-friendly', mode: 'Assigned tools',
    source: 'Assign each breakout group a DIFFERENT free AI tool (Claude, Google Gemini, Microsoft Copilot, Perplexity, Meta AI). Give every group the identical prompt/task, then debrief on "which AI handled this best and why". Turns the access problem into the lesson. Provide a single shared task that exercises reasoning + formatting so differences show. Include a scoring rubric (accuracy, usefulness, formatting, hallucination) as starter material.' },
  { slug: 'plain-language-gauntlet', dir: 'challenges', title: 'Plain Language Gauntlet', subtitle: 'One dense methods paragraph, three very different audiences.',
    diff: 'Beginner-friendly', mode: 'Any chat AI',
    source: 'Give all groups the same dense methods paragraph from a pain-neuroimaging paper. Task: prompt the AI to explain it to three audiences - a 10th grader, a patient advocate, and a non-specialist NIH program officer - then pick the best version for ONE audience to share. Directly useful for grant writing and patient engagement. Provide a realistic dense methods paragraph (fMRI / QST / connectivity jargon) as the starter artifact.' },
  { slug: 'hypothesis-roulette', dir: 'challenges', title: 'Hypothesis Roulette', subtitle: 'A surprising null result walks in. Spin up five testable mechanisms.',
    diff: 'Intermediate', mode: 'Any chat AI',
    source: 'Give groups a surprising NULL result and have them prompt the AI to generate 5 testable mechanistic hypotheses. The room votes on the most creative vs the most feasible. Provide a concrete, surprising null result from pain science as the starter (with enough method detail to reason about). Emphasize using the AI to stress-test feasibility and propose a discriminating experiment.' },
  { slug: 'the-rebuttal', dir: 'challenges', title: 'The Rebuttal', subtitle: 'Reviewer 2 was brutal. Draft the response that wins the day.',
    diff: 'Intermediate', mode: 'Any chat AI',
    source: 'Give groups a harsh mock peer review and have them draft the most persuasive, professional point-by-point response. Provide a realistic, harsh-but-fair mock review (3-4 numbered critiques of a fictional pain-imaging manuscript) as starter material. Teach tone control, conceding gracefully, and using AI as an adversarial pre-reviewer.' },
  { slug: 'irb-speed-round', dir: 'challenges', title: 'IRB Speed Round', subtitle: 'Draft a risks & benefits section fast — and catch the AI when it bluffs.',
    diff: 'Intermediate', mode: 'Any chat AI',
    source: 'From a brief study description, draft a risks/benefits section. Great for SURFACING AI limitations and hallucinations (fabricated regs, invented risk numbers). Provide a brief, realistic human-subjects pain study description (e.g. QST + thermal pain + fMRI in chronic low back pain) as starter material. The debrief must spotlight hallucination-spotting and verification.' },
  { slug: 'experiment-generator', dir: 'challenges', title: 'Experiment Generator', subtitle: 'From a single finding to six experiments that nail the mechanism.',
    diff: 'Intermediate', mode: 'Any chat AI',
    source: 'Take a finding (e.g. "experience-dependent sensitization") and come up with THREE basic-science and THREE clinical/psychosocial experiments to define the mechanism of the phenomenon. Encourage exploring different aspects/levels of analysis. Provide the finding and a short background paragraph as the starter, and a template for an experiment card (hypothesis, design, prediction, confound).' },
  { slug: 'rapid-review', dir: 'challenges', title: 'Rapid Review', subtitle: 'A 2-page evidence brief with real references, built in minutes.',
    diff: 'Advanced', mode: 'Research-capable AI',
    source: 'Given a pain-neuroscience question, use AI tools to find the best answer and draft a 2-page review with key papers and references. Example questions: Does chronic opioid use cause remodeling of opioid receptors and related circuits in the brain? Does this remodeling cause adverse psychological/behavioral outcomes? Which aspects are reversible? Emphasize using search-grounded tools (Perplexity / Gemini) and VERIFYING every citation - hallucinated references are the trap. Provide the question set and a citation-verification checklist as starter material.' },
  { slug: 'flash-debate', dir: 'challenges', title: 'Flash Debate', subtitle: 'Build the evidence case for a contested claim — then argue it.',
    diff: 'Advanced', mode: 'Research-capable AI',
    source: 'Given a pain-neuroscience proposition, use AI tools to gather evidence for a debate. Example resolution: "Chronic opioid use causes remodeling of opioid receptors and related circuits in the brain, which mediates adverse psychological outcomes." Groups can be assigned PRO or CON. Teach using AI to find the strongest evidence AND the strongest counterarguments, with citation checking. Provide the resolution and a debate-prep scaffold (claim, evidence, mechanism, rebuttal) as starter material.' },
  { slug: 'meet-the-speaker', dir: 'challenges', title: 'Meet the Speaker', subtitle: 'Walk into a visit knowing exactly who to meet and what to say.',
    diff: 'Intermediate', mode: 'Research-capable AI',
    source: 'Two flavors, combine them. (1) Your team is giving a talk at a renowned university (e.g. McGill). Analyze faculty research interests in pain-relevant units and their match to your own work; propose a talk title and a ranked list of faculty to meet, with why. (2) Party Planner: given an itinerary of speakers you will meet, rapidly research them so you can have engaging, meaningful conversations. Provide a sample itinerary/scenario and a "match scorecard" template as starter material. Stress verification (AI invents affiliations).' },
  { slug: 'policy-wonk', dir: 'challenges', title: 'Policy Wonk', subtitle: 'Turn a dense federal rule change into an effective public comment.',
    diff: 'Advanced', mode: 'Research-capable AI',
    source: 'A federal agency (e.g. the U.S. Office of Management and Budget) has issued rule changes with a public comment period. Use AI tools to research the issues, find the response deadline, learn what kinds of comments tend to be most impactful, and produce a practical next-steps list to submit a comment. Provide a realistic (clearly fictional/illustrative) rule-change scenario relevant to research funding as starter material, plus an "effective comment" checklist. Stress verifying deadlines and facts against primary sources.' },
  // --- advanced track ---
  { slug: 'reviewer-4', dir: 'challenges/advanced', title: 'Reviewer 4', subtitle: 'Stand up a multi-agent grant clinic that critiques your R01 like a study section.',
    diff: 'Advanced · Claude Code / Codex', mode: 'Agentic CLI',
    source: 'You have written an R01 and want a great score. Use agentic AI tools to evaluate and improve it. In 10-15 min it is possible to set up a multi-task evaluation that: (1) provides a complete peer review with scores; (2) checks the review and gives a confidence rating; (3) identifies the best-fitting study section and standing members; (4) finds directly relevant work not cited; (5) flags concepts reviewers may not understand or object to and how to clarify; (6) analyzes logical flow and suggests reorganization; (7) gives line-by-line copyediting; (8) (for fun) revises the draft and checks formatting compliance. Students could use a sample grant (provided by the instructor) or their own. CRITICAL ETHICS: using this to perform ACTUAL assigned peer reviews is NOT allowed; it is only for improving your OWN drafts. Include a strong ethics box. Provide a Soul.md-style reviewer persona snippet and a task checklist as starter material; show how to orchestrate the subtasks.' },
  { slug: 'who-are-my-friends', dir: 'challenges/advanced', title: 'Who Are My Friends?', subtitle: 'Design a system that finds the reviewers who will love your paper.',
    diff: 'Advanced · Claude Code / Codex', mode: 'Agentic CLI',
    source: 'You have a paper you want seen by reviewers who will appreciate it. Design a SYSTEM (not just a prompt) to identify appropriate reviewers. Strategies to reveal after the attempt: (1) find authors with relevant expertise on related topics; (2) find who cites your prior papers, read the citing context, and assign a sentiment score per author; (3) find social-media posts mentioning your prior papers and score sentiment; (4) post a preprint, find interested experts, draft personalized emails, then watch who engages. Emphasize decomposing into agentic subtasks, data sources, and verification. Discuss ethics/etiquette (no manipulation; suggest-reviewers norms vary by journal). Provide a system-design scaffold as starter material.' },
  { slug: 'junkyard-dog', dir: 'challenges/advanced', title: 'Junkyard Dog', subtitle: 'Sniff out open pain datasets, fetch them, and wire them together with code.',
    diff: 'Advanced · Claude Code / Codex', mode: 'Agentic CLI',
    source: 'Search for OPEN datasets relevant to pain science, identify and summarize them, download them, and write code to integrate/harmonize them into a single analyzable table. Showcases agentic tools doing real multi-step work: search, fetch, inspect schemas, write and run code, reconcile variables. Provide a concrete goal (e.g. assemble a small cross-dataset table of pain ratings + demographics), a list of where to look for open data, and a data-provenance/verification checklist as starter material. Note licensing and data-use ethics.' },
]

// --- prompt builders -------------------------------------------------------
function challengePromptText(c) {
  const isCore = CORE_SLUGS.indexOf(c.slug) !== -1
  return [
    STYLE,
    '',
    '=== YOUR PAGE: challenge "' + c.title + '" ===',
    'Front matter title: "' + c.title + '"  | subtitle: "' + c.subtitle + '"',
    isCore ? 'NOTE: this is one of the recommended CORE live challenges — make it especially polished; you may add a <span class="pill rose">Recommended core challenge</span> pill in the meta row.' : '',
    '',
    'CHALLENGE BRIEF TO FLESH OUT:',
    c.source,
    '',
    'REQUIRED PAGE STRUCTURE (in this order):',
    '1. The bespoke inline SVG hero (unique gradient id g-' + c.slug + ').',
    '2. A one-line hook sentence, then a <div class="meta-row"> with pills: time (<span class="pill cyan">35 min</span>), difficulty (<span class="pill violet">' + c.diff + '</span>), group size (<span class="pill teal">teams of 3-5</span>), and AI mode (<span class="pill amber">' + c.mode + '</span>).',
    '3. "## The goal" inside <div class="box goal">…</div> — state the GOAL, deliberately NOT the method.',
    '4. "## Why it matters" — relevance to pain science / academic life.',
    '5. "## Run of show" — paste this exact timeline block:',
    TIMING,
    '6. "## Bad prompt to better prompt" — a <div class="box bad"> with a weak prompt (in a nested <div class="prompt">) and one line on why its output disappoints, then a <div class="box good"> with a strong improved prompt (nested <div class="prompt">) and why it works.',
    '7. "## Prompting moves to try" — a tight bulleted list tailored to THIS challenge, drawing on: creative goal decomposition, identity/role prompting, adversarial self-evaluation (ask the AI to critique and score its own confidence), and asking the AI to improve your prompt.',
    '8. "## Starter materials" — invent and include the realistic, paste-ready artifact(s) described in the brief (table/text/scenario/rubric/checklist/template). This is the most important section: make it genuinely usable in the room.',
    '9. "## Debrief questions" — 3 to 5 sharp questions.',
    '10. "## Level up" — 2 to 3 stretch goals.',
    (c.dir.indexOf('advanced') !== -1 || c.slug === 'irb-speed-round' || c.slug === 'reviewer-4') ? '11. "## Ethics" inside <div class="box ethics">…</div> — the relevant responsible-use note (for Reviewer 4: NEVER use on real assigned reviews; only your own drafts).' : '',
    'Close with a small links line back to the Challenge menu (../index.qmd or index.qmd as appropriate) and the AI Toolkit.',
    '',
    'Write the finished .qmd to this absolute path using the Write tool: ' + REPO + '/' + c.dir + '/' + c.slug + '.qmd',
    'Return ONLY a one-line confirmation (the path written). Do not print the file contents.',
  ].filter(Boolean).join('\n')
}

function overviewPromptText() {
  return [
    STYLE,
    '',
    '=== YOUR PAGE: "The Workshop" (overview / format) ===',
    'Front matter title: "The Workshop"  | subtitle: "How the 90 minutes works — and how to win at it."',
    'Open with a bespoke inline SVG hero (gradient id g-overview): a stylized arc/timeline of the session.',
    'Sections to include:',
    '- A short, warm intro paragraph framing the theme ("answers are cheap, judgment is expensive") and what participants will walk away with.',
    '- "## The 90-minute arc" — present this refined schedule:',
    (design && design.scheduleMarkdown) || 'Intro 20 min, Challenge 1 35 min, Challenge 2 35 min.',
    '- "## How a Challenge Match works" — explain Phase 1/2/3 using a <ul class="timeline"> based on this canonical timing:',
    TIMING,
    '- "## Prompting & strategy principles" — adapt and present this content with the box/pill classes:',
    (design && design.principlesMarkdown) || 'Creative decomposition; identity/role prompting; adversarial self-evaluation; ask the AI to improve your prompt.',
    '- "## What we suggest you try first" — point to the recommended core challenges: ' + (design && design.corePicks ? design.corePicks.map(p => p.title + ' (' + p.slug + ')').join('; ') : 'see the challenge menu') + ', as a <div class="card-grid"> of <a class="lafb-card" href="../challenges/SLUG.qmd"> cards.',
    '- A closing line linking to the AI Toolkit (../intro/tools.qmd) and the full Challenge menu (../challenges/index.qmd).',
    '',
    'Write the finished .qmd to: ' + REPO + '/intro/overview.qmd',
    'Return ONLY a one-line confirmation.',
  ].join('\n')
}

function toolsPromptText() {
  return [
    STYLE,
    '',
    '=== YOUR PAGE: "AI Toolkit" ===',
    'Front matter title: "The AI Toolkit"  | subtitle: "The best FREE AI tools for the workshop — for total beginners and for power users."',
    'Open with a bespoke inline SVG hero (gradient id g-tools): a toolbox / constellation of app glyphs motif.',
    'Then a 2-sentence intro on the workshop philosophy: everything here is usable FREE with no subscription; we note paid upgrades only briefly.',
    'Section "## Start here: chat apps for everyone (free, no install)" — integrate, lightly edit, and beautifully format the following researched content (keep all real links; present each tool cleanly; keep the comparison table):',
    '----- BEGINNER RESEARCH START -----',
    beginnerTools || 'Claude, Gemini, Copilot, Perplexity, Meta AI — all free in a browser.',
    '----- BEGINNER RESEARCH END -----',
    '',
    'Section "## Level up: agentic tools for power users (Claude Code / Codex / Gemini CLI)" — integrate and format the following researched content (keep real links and install commands):',
    '----- ADVANCED RESEARCH START -----',
    advancedTools || 'Claude Code, OpenAI Codex CLI, Gemini CLI.',
    '----- ADVANCED RESEARCH END -----',
    '',
    'Add a final <div class="box tip"> with a quick "Set this up BEFORE the workshop" checklist (make a free account for at least one chat app; if trying agentic tools, install one in advance).',
    'Keep formatting consistent with the design system (pills for "free"/"paid", tables, boxes). Do not fabricate links — only keep links present in the research; if a link is missing, describe the tool without a broken link.',
    '',
    'Write the finished .qmd to: ' + REPO + '/intro/tools.qmd',
    'Return ONLY a one-line confirmation.',
  ].join('\n')
}

function facilitatorPromptText() {
  return [
    STYLE,
    '',
    '=== YOUR PAGE: "Facilitator Guide" ===',
    'Front matter title: "Facilitator Guide"  | subtitle: "Everything you need to run the room with confidence."',
    'Open with a bespoke inline SVG hero (gradient id g-facil): a stage/podium-meets-network motif.',
    'Sections:',
    '- "## Run of show" — a minute-by-minute facilitator script for the full 90 min (use a table or timeline). Base it on this schedule: ' ,
    (design && design.scheduleMarkdown) || 'Intro 20 / Challenge 35 / Challenge 35.',
    '- "## The bad-prompt demo" — how to open each challenge by live-demoing a weak prompt, showing the mediocre result, then challenging the room to beat it. Give a reusable script.',
    '- "## The prompt-share ritual" — each group posts their single best prompt to a shared slide/doc before debrief; why the prompt-share beats the output-share.',
    '- "## Running a great debrief" and "## Managing mixed experience levels" — adapt this guidance:',
    (design && design.facilitationMarkdown) || 'Pair novices with power users; assign different tools per group; keep it psychologically safe.',
    '- "## Prep checklist & auxiliary materials" — adapt this:',
    (design && design.auxiliaryMarkdown) || 'Shared doc template, scoring rubric, prompt cards, sample datasets, results slide.',
    '- "## Suggested improvements & alternatives" — adapt this:',
    (design && design.improvementsMarkdown) || 'Warm-up, shared prompt library, pairing strategy.',
    '- "## The ethics moment" — a <div class="box ethics"> reminding facilitators to run the responsible-use discussion (esp. for the grant-review and reviewer-finding challenges).',
    '',
    'Write the finished .qmd to: ' + REPO + '/facilitation/facilitator-guide.qmd',
    'Return ONLY a one-line confirmation.',
  ].join('\n')
}

function indexPromptText() {
  const core = challenges.filter(c => c.dir === 'challenges')
  const adv = challenges.filter(c => c.dir === 'challenges/advanced')
  const list = (arr) => arr.map(c => '  - ' + c.title + ' (file ' + c.slug + '.qmd' + (c.dir.indexOf('advanced') !== -1 ? ' in advanced/ subfolder' : '') + '): ' + c.subtitle).join('\n')
  return [
    STYLE,
    '',
    '=== YOUR PAGE: "Challenges" menu ===',
    'Front matter title: "The Challenges"  | subtitle: "Pick your match. Every challenge fits the same 35-minute format."',
    'Open with a bespoke inline SVG hero (gradient id g-challenges): a grid/arena of glowing challenge tiles.',
    'Then a short intro, and note the recommended core picks for a mixed-background room: ' + (design && design.corePicks ? design.corePicks.map(p => p.title).join(' and ') : 'see below') + '.',
    'Render TWO card grids using <div class="card-grid"> with <a class="lafb-card" href="SLUG.qmd"> (advanced cards link to advanced/SLUG.qmd). Each card: an <h3> with the title (prefix a relevant emoji), and a <p> with the subtitle. Add a <span class="pill rose">Recommended</span> inside the card title area for the core picks.',
    'Grid 1 heading "## Core & foundational challenges":',
    list(core),
    'Grid 2 heading "## Advanced track — agentic tools (Claude Code / Codex / Gemini CLI)":',
    list(adv),
    'End with a line linking to the AI Toolkit (../intro/tools.qmd) for setup and The Workshop (../intro/overview.qmd) for format.',
    '',
    'Write the finished .qmd to: ' + REPO + '/challenges/index.qmd',
    'Return ONLY a one-line confirmation.',
  ].join('\n')
}

// --- fan out all content pages ---------------------------------------------
const contentTasks = [
  () => agent(overviewPromptText(),    { label: 'page:overview',        phase: 'Content' }),
  () => agent(toolsPromptText(),       { label: 'page:tools',           phase: 'Content' }),
  () => agent(facilitatorPromptText(), { label: 'page:facilitator',     phase: 'Content' }),
  () => agent(indexPromptText(),       { label: 'page:challenge-index', phase: 'Content' }),
]
for (const c of challenges) {
  contentTasks.push(() => agent(challengePromptText(c), { label: 'page:' + c.slug, phase: 'Content' }))
}

const results = await parallel(contentTasks)
const written = results.filter(Boolean).length

return {
  corePicks: design && design.corePicks,
  pagesAttempted: contentTasks.length,
  pagesWritten: written,
  confirmations: results,
}
