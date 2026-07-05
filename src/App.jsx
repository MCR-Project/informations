import { useRef, useState } from 'react'
import { sections } from './data/sections.jsx'
import './App.css'

function App() {
  const [activeId, setActiveId] = useState(sections[0].id)
  const [copied, setCopied] = useState(false)
  const bodyRef = useRef(null)
  const activeSection = sections.find((section) => section.id === activeId)

  const handleCopy = async () => {
    const text = `${activeSection.title}\n\n${bodyRef.current.innerText}`

    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const range = document.createRange()
      range.selectNodeContents(bodyRef.current)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      document.execCommand('copy')
      selection.removeAllRanges()
    }

    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="layout">
      <header className="header">
        <h1>Team Guide</h1>
      </header>

      <nav className="tabs" aria-label="Sections">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={section.id === activeId ? 'tab tab-active' : 'tab'}
            onClick={() => {
              setActiveId(section.id)
              setCopied(false)
            }}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <main className="content">
        <div className="content-header">
          <h2>{activeSection.title}</h2>
          <button type="button" className="copy-button" onClick={handleCopy}>
            <svg className="copy-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="9" y="9" width="12" height="12" rx="2" />
              <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
            </svg>
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <div ref={bodyRef}>{activeSection.content}</div>
      </main>
    </div>
  )
}

export default App
