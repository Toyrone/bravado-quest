export default ({ app }, inject) => {
  inject('highlight', (value, query) => {
    if (!query) return value
    const regex = new RegExp(query, 'gi')
    return value.replace(regex, `<span class="highlight">${query}</span>`)
  }
)}
