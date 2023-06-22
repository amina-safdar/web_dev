const animatedTags = document.querySelectorAll('h2,h3,p,section img,a.button')

// Fade out on load
animatedTags.forEach(tag => {
  tag.style.opacity = 0
})

const fadeIn = function() {
  let delay = 0.25
  
  // Checks if each animatedTag is in the window.
  animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
// If an animatedTag is in the window, apply animation
    if (tagTop < window.innerHeight && tagBottom > 0) {
      tag.style.animation = `fadeIn 1s ${delay}s both`
      delay = delay + 0.25
    } else {
      tag.style.opacity = 0
      tag.style.animation = ''
    }
  })
}

// Runs fadeIn on load
fadeIn()

// Runs fadeIn on scroll
document.addEventListener('scroll', function() {
  fadeIn()
})

// Runs fadeIn on resize
document.addEventListener('resize', function() {
  fadeIn()
})
