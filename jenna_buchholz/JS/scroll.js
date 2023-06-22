const pixelsTag = document.querySelector('div.pixels')
const bodyTag = document.querySelector('body')
const progressTag = document.querySelector('div.progress-bar')
const sections = document.querySelectorAll('section')
const clientTag = document.querySelector('div.client')
const paginationTag = document.querySelector('div.pagination')
const headerTag = document.querySelector('header')

// Updates pixels scrolled on scroll
document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset
  pixelsTag.innerHTML = pixels
})

// Progress bar updates with scroll event
document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset

  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight
  const percentage = (pixels / totalScrollableDistance) * 100

  progressTag.style.width = percentage + '%'
})

// Check if section has passed and, if so, update text in header to reflect this
document.addEventListener('scroll', function() {
  const pixels = window.pageYOffset

  sections.forEach(section => {
    if (section.offsetTop - 60 <= pixels) {
      clientTag.innerHTML = section.getAttribute('data-client')
      paginationTag.innerHTML = section.getAttribute('data-page')

      if (section.hasAttribute('data-is-dark')) {
        headerTag.classList.add('white')
        progressTag.classList.add('white')
      } else {
        headerTag.classList.remove('white')
        progressTag.classList.remove('white')
      }
    }
  })
})

/* 
Introduce parallax effect in shapes based on how far away the shape is from the center of the section, so that parallax is more pronounced as we scroll away from the section center
*/

document.addEventListener('scroll', function() {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + window.innerHeight / 2

  sections.forEach(section => {
    const topSection = section.offsetTop
    const midSection = topSection + section.offsetHeight / 2

    const distanceToSection = midViewport - midSection

    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

    // Loop over each parallaxed tag
    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute('data-parallax'))
      tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
  })
})
