const headerTag = document.querySelector('header')

// Once scroll passes 60px threshold, add 'scrolled' class to header to make it white
const toggleHeader = function() {
  const pixels = window.pageYOffset
  if (pixels > 60) {
    headerTag.classList.add('scrolled')
  } else headerTag.classList.remove('scrolled')
}

// Deepen box shadow on header as you scroll down
const fadeBox = function(){
  const pixels = window.pageYOffset
  const alpha = Math.min(pixels/1000, 0.25)
  headerTag.style.boxShadow=`0 0 10px rgba(0,0,0,${alpha}`
}

// Run fadeBox and toggleHeader on scroll
document.addEventListener('scroll', function() {
  toggleHeader()
  fadeBox()
})
