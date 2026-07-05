export const sections = [
  {
    id: 'issues',
    label: 'Issues',
    title: 'Issue writing guide',
    content: (
      <>
        <p>
          A good issue lets anyone understand the problem and start working
          on it without having to ask questions.
        </p>
        <h3>Recommended structure</h3>
        <ul>
          <li><strong>Title</strong>: short, precise, action-oriented (e.g. "Transfer data from Firebase to Supabase").</li>
          <li><strong>Context</strong>: Short explanation to give a reason to this issue.</li>
          <li><strong>To-dos</strong>: List of key actions and changes to do to complete the issue (e.g. "Set up the Supabase DB", "Automate data transfer", "Modify API keys and back access to DB"...)</li>
          <li><strong>Criterias of acceptance</strong>: Ideally verifiable (e.g. "Data is sent from the Supabase DB", "Data is cached effectively removing unnecessary requests"...).</li>
        </ul>
        <h3>Best practices</h3>
        <ul>
          <li>One issue = one problem. Do not mix multiple topics (e.g. "Supabase transfer and data access optimization").</li>
          <li>Always check that a similar issue doesn't already exist.</li>
          <li>Close the issue with a link to the PR that resolves it.</li>
          <li>Never <u><strong>DELETE</strong></u> an issue when closed, nor a branch ! It serves as archives.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'milestones',
    label: 'Milestones',
    title: 'Milestones',
    content: (
      <>
        <p>
          Milestones group issues around a same goal.
        </p>
        <h3>Rules</h3>
        <ul>
          <li>A milestone must have a realistic target date. <small><i>(Only needed if target dates are an actual need)</i></small></li>
          <li>All issues that make it up must be estimated before it is opened.</li>
          <li>A milestone is closed only when 100% of its blocking issues are closed.</li>
          <li>If a deadline slips, rename/adjust the date rather than leaving a stale milestone open.</li>
        </ul>
        <h3>Naming example</h3>
        <ul>
          <li><code>v1.2 - Auth &amp; onboarding</code></li>
          <li><code>Q3 2026 - Perf pass</code></li>
        </ul>
      </>
    ),
  },
  {
    id: 'code-quality',
    label: 'Code Quality',
    title: 'Code quality',
    content: (
      <>
        <h3>Principles</h3>
        <ul>
          <li>Code should be readable before being clever. Only optimize once it's been measured as necessary. The compiler is more efficient than you'll (probably) ever be.</li>
          <li>No abstraction before at least 3 concrete use cases.</li>
          <li>A function does one thing and its name describes what it does.</li>
          <li>Every PR must pass lint and tests before review.</li>
        </ul>
        <h3>Review checklist</h3>
        <ul>
          <li>Are variable/function names explicit?</li>
          <li>No obvious duplication (DRY without over-abstraction)?</li>
          <li>Error handling consistent with the rest of the codebase?</li>
          <li>Tests added or updated for the change? <small><i>(Only needed if tests are made)</i></small></li>
          <li>No dead / commented-out code left behind?</li>
        </ul>
      </>
    ),
  },
  {
    id: 'comments',
    label: 'Comments',
    title: 'Code comments',
    content: (
      <>
        <p>
          Code should explain itself first (clear naming, short functions).
          A comment is the exception, not the rule.
          That being said, some codes can be hard to dive into, which is where comments come in handy.
        </p>
        <h3>When to comment</h3>
        <ul>
          <li>To explain <strong>why</strong>, and if needed, <strong>what</strong>.</li>
          <li>Hidden constraint, workaround for a specific bug, surprising behavior.</li>
          <li>Link to a ticket/issue when that context is essential long-term.</li>
        </ul>
        <h3>When not to comment</h3>
        <ul>
          <li>If the comment just repeats what the code already says.</li>
          <li>To explain a one-off task or fix (that belongs in the PR, not in the code).</li>
          <li>Systematic multi-line docstrings: reserve those for public APIs.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'architecture',
    label: 'Architecture',
    title: 'Favorite architecture',
    content: (
      <>
        <h3>Guiding principles</h3>
        <ul>
          <li>Split by business domain rather than by technical type.</li>
          <li>Dependencies point inward: <strong>UI</strong> <i>to</i> <b>business logic</b> <i>to</i> <b>data</b>.</li>
          <li>A public module exposes a minimal interface. Implementation details stay private.</li>
          <li>Prefer composition over inheritance.</li>
        </ul>
        <h3>Typical frontend project structure</h3>
        <ul>
          <li><code>src/components</code> — reusable UI components, no business logic.</li>
          <li><code>src/features</code> — one folder per feature (UI + logic + state).</li>
          <li><code>src/lib</code> / <code>src/utils</code> — shared pure functions.</li>
          <li><code>src/api</code> — API / data access.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'git',
    label: 'Git & PR',
    title: 'Commits & Pull Requests',
    content: (
      <>
        <h3>Commits</h3>
        <ul>
          <li>Convention: <code>type: short present-tense description</code> (e.g. <code>fix: handle empty cart state</code>).</li>
          <li>Common types: <code>feat</code>, <code>fix</code>, <code>refactor</code>, <code>chore</code>, <code>docs</code>, <code>test</code>.</li>
          <li>One commit = one coherent logical change, not a mix of topics.</li>
          <li>Try to segment your commit as much as possible</li>
          <li>All commit must be self-containing (No commit relies on another for the overall app to be functional)</li>
        </ul>
        <h3>Pull Requests</h3>
        <ul>
          <li>Clear title, description that explains why, not just what.</li>
          <li>Keep PRs a reasonable size: prefer multiple small PRs over one huge one.</li>
          <li>Always link the PR to its corresponding issue.</li>
          <li>At least one approved review before merging.</li>
          <li>No merge into prod without passing through main !</li>
        </ul>
      </>
    ),
  },
]
