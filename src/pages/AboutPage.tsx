const technologies = [
  'Typescript',
  'React',
  'GraphQL',
  'Tailwind CSS',
  'Node.js',
  'Playwright',
  'GraphQL',
  'Multi Agent AI Orchiestration',
  'Google Gemini LLM',
  'Grafana',
  'Contentstack',
  'Optimizely',
]

type CodeToken = {
  text: string
  kind?: 'keyword' | 'property' | 'string' | 'accent' | 'plain'
}

const codePreviewLines: CodeToken[][] = [
  [
    { text: 'const ', kind: 'keyword' },
    { text: 'developer ', kind: 'plain' },
    { text: '= ', kind: 'plain' },
    { text: '{', kind: 'accent' },
  ],
  [
    { text: '  name', kind: 'property' },
    { text: ': ', kind: 'plain' },
    { text: '"Tomasz Duda"', kind: 'string' },
    { text: ',', kind: 'plain' },
  ],
  [
    { text: '  role', kind: 'property' },
    { text: ': ', kind: 'plain' },
    { text: '"Full-stack Developer"', kind: 'string' },
    { text: ',', kind: 'plain' },
  ],
  [
    { text: '  location', kind: 'property' },
    { text: ': ', kind: 'plain' },
    { text: '"Leeds, UK"', kind: 'string' },
    { text: ',', kind: 'plain' },
  ],
  [
    { text: '  contact', kind: 'property' },
    { text: ': ', kind: 'plain' },
    { text: '"tomdud9907@gmail.com"', kind: 'string' },
    { text: ',', kind: 'plain' },
  ],
  [
    { text: '  stack', kind: 'property' },
    { text: ': ', kind: 'plain' },
    { text: '[', kind: 'accent' },
    { text: '"React"', kind: 'string' },
    { text: ', ', kind: 'plain' },
    { text: '"TypeScript"', kind: 'string' },
    { text: ', ', kind: 'plain' },
    { text: '"GraphQL"', kind: 'string' },
    { text: ', ', kind: 'plain' },
    { text: '"Node.js"', kind: 'string' },
    { text: '],', kind: 'accent' },
  ],
  [
    { text: '  mission', kind: 'property' },
    { text: ': ', kind: 'plain' },
    { text: '() => ', kind: 'accent' },
    { text: '"Ship production-ready apps"', kind: 'string' },
  ],
  [{ text: '};', kind: 'accent' }],
]

export function AboutPage() {
  return (
    <section className="mx-auto mt-16 w-full max-w-6xl">
      <p className="mb-2 text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">About Me</p>
      <h1 className="text-4xl font-bold sm:text-5xl">Learn more about my background, skills, and professional journey.</h1>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="max-w-3xl text-[color:var(--text-muted)] sm:text-lg">
            Full-stack developer with strong React.js expertise and a focus on AI-driven productivity. Proven track
            record in large-scale systems and experience leveraging OpenCode CLI and agents to accelerate the
            transition from concept to production-ready code.
          </p>
          <p className="mt-4 max-w-3xl text-[color:var(--text-muted)] sm:text-lg">
            Based in Leeds, UK, I specialize in building accessible, high-performance web applications.
          </p>

          <a
            href="https://tomaszduda.vercel.app/Tomasz%20Duda_CV_Final.pdf"
            className="mt-6 inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-3 text-sm font-semibold text-[color:var(--text-main)]"
          >
            View CV
          </a>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Technologies</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-xs text-[color:var(--text-main)]/85"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="code-card overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)]">
          <div className="code-topbar flex items-center gap-2 border-b border-[color:var(--border)] px-4 py-3">
            <span className="dot dot-red" aria-hidden="true" />
            <span className="dot dot-yellow" aria-hidden="true" />
            <span className="dot dot-green" aria-hidden="true" />
            <span className="ml-3 text-xs text-[color:var(--text-muted)]">developer.ts</span>
          </div>

          <pre className="code-body m-0 p-4 text-sm leading-7 text-[color:var(--text-main)]/88">
            {codePreviewLines.map((line, index) => (
              <code key={`line-${index}`} className="code-line block" style={{ animationDelay: `${index * 320}ms` }}>
                {line.map((token, tokenIndex) => (
                  <span key={`token-${index}-${tokenIndex}`} className={`code-token ${token.kind ? `code-${token.kind}` : ''}`}>
                    {token.text}
                  </span>
                ))}
              </code>
            ))}
          </pre>
        </aside>
      </div>
    </section>
  )
}
