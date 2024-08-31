const sidebarButton = document.querySelector('.sidebar-btn')
const sidebar = document.querySelector('.sidebar')
const h1 = createElement('h1', 'Sidebar', 'white', sidebar)

setTimeout(() => h1.setText('Hi'), 2000)

sidebarButton.addEventListener('click', () => {
  if(sidebarButton.textContent === 'Ok') {
    sidebar.style.width = '3rem'
    sidebarButton.style.left = '1.5rem'
    sidebarButton.textContent = 'No'
    return
  }

  if(sidebarButton.textContent === 'No') {
    sidebar.style.width = '15rem'
    sidebarButton.style.left = '13.7rem'
    sidebarButton.textContent = 'Ok'
  }   
})

//Factory Function
function createElement(type, text, color, itemToAdd) {
  const el = document.createElement(type)
  el.innerText = text
  el.style.color = color
  itemToAdd.append(el)  
  return {
    el,
    setText(val) {
      el.innerText = val
    }
  }
}

// function mapArrayToString(array) {
//   return array.filter(item => Number.isInteger(item)).map(String)
// }

// console.log(mapArrayToString([1, 4, 6, 23]))

