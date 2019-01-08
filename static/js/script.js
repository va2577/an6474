/**
 * script.js
 */
const getItem = k => {
  if (!localStorage) return null
  return localStorage.getItem(k)
}

const setItem = (k, v) => {
  if (!localStorage) return
  localStorage.setItem(k, v)
}

document.addEventListener('DOMContentLoaded', event => {
  const colors = ['default', 'dark', 'light']
  const links = colors.map(x => document.getElementById(`link-${x}`))
  const anchors = colors.map(x => document.getElementById(`anchor-${x}`))
  const f = color => {
    links.map(x => x.disabled = x.id.replace('link-', '') !== color)
    setItem('color', color)
  }
  anchors.map(x => x.addEventListener('click', event => {
    event.preventDefault()
    f(event.target.id.replace('anchor-', ''))
  }))
  const c1 = getItem('color')
  const c2 = !c1 ? 'default' : c1
  f(c2)
})

document.addEventListener('DOMContentLoaded', event => {
  const tables = document.querySelectorAll('table')
  const f = e => {
    const div = document.createElement('div')
    div.classList.add("overflow-auto")
    e.parentElement.insertBefore(div, e)
    div.appendChild(e)
  }
  [].map.call(tables, x => f(x))
})
