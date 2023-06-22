const slideArea = document.querySelector('div.slides')
const images = slideArea.querySelectorAll('img')

// Track:
let currentSlide = 0
// First image has z-index of 1
let z = 1 

// Clicking slideArea changes slide based on z-index
slideArea.addEventListener('click', function() {
  currentSlide = currentSlide + 1
  z = z + 1

// Loop images by resetting currentSlide
  if (currentSlide > images.length - 1) {
    currentSlide = 0
  }

  // Remove animation from the style for every image 
  images.forEach(image => {
    image.style.animation = ''
  })

  // Add animation to currentSlide only 
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = 'fade 0.5s'
})

// Hovering over the image area, rearrange images randomly
slideArea.addEventListener('mouseover', function() {
  images.forEach(image => {
    // Ensure that image position is between -50 and 50 in both axes
    const x = 25 * Math.floor(Math.random() * 5) - 50
    const y = 25 * Math.floor(Math.random() * 5) - 50

    image.style.transform = `translate(${x}px, ${y}px)`
  })
})

// Without hovering, position images within slideArea deck
slideArea.addEventListener('mouseout', function() {
  images.forEach(image => {
    image.style.transform = ''
  })
})
