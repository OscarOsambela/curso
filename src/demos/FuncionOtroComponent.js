export const handleClick = (e) => {
    e.preventDefault()
    alert(`Hiciste click en un link en ${e.target.innerText}`)
  }
