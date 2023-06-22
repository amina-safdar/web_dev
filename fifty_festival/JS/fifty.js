function makeMarquee() {
  const title = 'FIFTY Music Festival — November 10–12, Desert Valley'
  // Make an empty array with 50 spaces, which we will fill with text from title and join using a ' — '
  const marqueeText = new Array(50).fill(title).join(' — ')
  const marquee = document.querySelector('.marquee span')
  marquee.innerHTML = marqueeText
}

// Run makeMarquee on load
makeMarquee()

// Random function from Stack Overflow (https://stackoverflow.com/questions/13997793/generate-random-number-between-2-numbers)
function random(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x
}

// Animate circles in a staggered delay
const circles = document.querySelectorAll('.circle')

circles.forEach((circle, index) => {
  circle.animate(
    [
      // Keyframes
      {transform: 'scale(1)'},
      {transform: 'scale(1.1)'},
      {transform: 'scale(1.2)'}
    ],
    {
      // Timing options
      delay: 300 * index,
      duration: 3000,
      iterations: Infinity
    }
  )
})

// Animate squiggles in a staggared, randomized delay
const squiggles = document.querySelectorAll('.squiggle')

squiggles.forEach((squiggle, index) => {
  const randomNumber = random(0, 45)
  squiggle.animate(
    [
      {transform: 'rotate(0deg)'},
      // Join randomNumber into rotate property
      {transform: `rotate(${randomNumber}deg)`},
      {transform: 'rotate(0deg)'}
    ],
    {
      // Animation delay:
      delay: 300 * index,
      duration: 5000,
      iterations: Infinity
    }
  )
})

// If section enters viewport, add class 'in-viewport'. When section exists, remove class.
inView('.section')
  .on('enter', section => {
    section.classList.add(`in-viewport`)
  })
  .on('exit', section => {
    section.classList.remove('in-viewport')
  })

// Class added only once we've scrolled 0.2s of section into viewport
inView.threshold(0.2)

// Add transition delays such that shapes only fade in after artists by looping through each section
const sections = document.querySelectorAll('.section')
sections.forEach((section, index) => {
  const artists = section.querySelectorAll('.lineup li')
  const shapes = section.querySelectorAll('.shape')

  artists.forEach((artist, index) => {
    const delay = index * 100
    artist.style.transitionDelay = `${delay}ms`
  })

  shapes.forEach((shape, index) => {
    const delay = (artists.length + index) * 100
    shape.style.transitionDelay = `${delay}ms`
  })
})

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Block the default browser behaviour of the link jumping to href attribute
    event.preventDefault()

    const href = link.getAttribute('href')
    // Use scrollIntoView to scroll to desired element smoothly
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
