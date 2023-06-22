const menuToggle = document.querySelector('a.menu-toggle')
const menuTag = document.querySelector('nav')
const mainTag = document.querySelector('main')

/*
1. Clicking menuToggle toggles 'open' class on mainTag, translating 
mainTag to the right to reveal menuTag

2. menuToggle takes on close.svg and says 'Close'  

3. Clicking menuToggle again toggles 'open' class from mainTag, translating
mainTag to the left to obscure menuTag

4. menuToggle takes on menu.svg and says 'Menu'
*/

menuToggle.addEventListener('click', function() {
  mainTag.classList.toggle('open')

  if (mainTag.classList.contains('open')) {
    menuToggle.innerHTML = `<img src="close.svg">Close`
  } else {
    menuToggle.innerHTML = `<img src="menu.svg">Menu`
  }
})
