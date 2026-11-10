import { useEffect } from 'react'

/*
  Site-wide typesetting.
  - Binds the first three words of every new sentence together, so a sentence never
    starts with a lone word stranded at the end of a line.
  - Binds the last two words of a text block, so a paragraph never ends on a single word.
  Uses non-breaking spaces on rendered text nodes and re-applies when React updates the DOM.
*/
const NBSP = ' '
const SKIP = new Set(['SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'OPTION', 'SELECT', 'NOSCRIPT', 'CODE'])
const BLOCKS = new Set(['P', 'H1', 'H2', 'H3', 'H4', 'LI', 'BLOCKQUOTE', 'FIGCAPTION', 'DD', 'DT'])

function setText(text, isLast) {
  // Only glue words inside the same sentence, never across a full stop.
  let out = text.replace(/([.!?:;]["”’)]?)\s+([^\s.!?]+)\s+([^\s.!?]+)\s+(?=\S)/g, `$1 $2${NBSP}$3${NBSP}`)
  if (isLast) out = out.replace(/\s+(\S+)\s*$/, `${NBSP}$1`)
  return out
}

function isLastText(node) {
  let n = node
  while (n && !BLOCKS.has(n.nodeName)) {
    if (n.nextSibling && (n.nextSibling.nodeType === 1 || n.nextSibling.nodeValue.trim())) return false
    n = n.parentNode
  }
  return !!n
}

function process(root) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if (!node.nodeValue || node.nodeValue.trim().split(/\s+/).length < 4) return NodeFilter.FILTER_REJECT
      for (let p = node.parentNode; p && p !== root.parentNode; p = p.parentNode) {
        if (SKIP.has(p.nodeName)) return NodeFilter.FILTER_REJECT
      }
      return NodeFilter.FILTER_ACCEPT
    },
  })
  const nodes = []
  while (walker.nextNode()) nodes.push(walker.currentNode)
  nodes.forEach((node) => {
    const next = setText(node.nodeValue, isLastText(node))
    if (next !== node.nodeValue) node.nodeValue = next
  })
}

export default function TypeSetter() {
  useEffect(() => {
    let frame = 0
    const run = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => process(document.body))
    }
    run()
    const mo = new MutationObserver(run)
    mo.observe(document.body, { childList: true, subtree: true, characterData: true })
    return () => {
      mo.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [])
  return null
}
