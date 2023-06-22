// Eye tags
const irisLeft = document.querySelector('div.iris-left')
const irisRight = document.querySelector('div.iris-right')

const moveEye = function(tag, mouseX, mouseY) {
  // Position of the center of the eye
  const eyeMidX = tag.getBoundingClientRect().left
  const eyeMidY = tag.getBoundingClientRect().top

  // Difference between the eye and the cursor on both axes
  const diffX = mouseX - eyeMidX
  const diffY = mouseY - eyeMidY
  
// Pythagoras' theorum:
  const diff = Math.sqrt(diffX * diffX + diffY * diffY)
  
// tanθ:
  const angle = Math.atan2(diffY, diffX)

  // Capped radius:
  const radius = Math.min(3, diff)

  // Position values at capped radius:
  const cappedX = radius * Math.cos(angle)
  const cappedY = radius * Math.sin(angle)

  const eyeTag = tag.querySelector('div')

  eyeTag.style.left = cappedX + 'px'
  eyeTag.style.top = cappedY + 'px'
}

document.addEventListener('mousemove', function(event) {
  moveEye(irisLeft, event.pageX, event.pageY)
  moveEye(irisRight, event.pageX, event.pageY)
})
