const multiplyElement = (element, quantity) => {
  const elementArray = new Array(quantity).fill(element.innerHTML).join('')
  element.innerHTML = elementArray
}

// Box 1: Conveyor belt //
// Translate conveyor belt half its width to the left until the animation loops //
anime({
  targets: '.conveyor',
  translateX: '-50%',
  duration: 1500,
  loop: true,
  easing: 'linear'
})

// Box 2: Wave path //
// Length of the path in waveOffset lets us trace the wave path //
const wave = document.querySelector('#wave path')
const waveOffset = anime.setDashoffset(wave)
wave.setAttribute('stroke-dashoffset', waveOffset)
anime({
  targets: wave,
  strokeDashoffset: [waveOffset, 0],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// Box 2: Rotating crosses //
// Make 10 copies of the cross svg and rotate each at a staggered delay //
multiplyElement(document.querySelector('#crosses'), 10)
anime({
  targets: '#crosses path',
  rotate: '1turn',
  delay: (el, i, l) => i * 100,
  duration: 1200,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// Box 3: Rotating dots //
// Make 40 dots and rotate each randomly for a random duration //
multiplyElement(document.querySelector('#dots'), 40)
const allDots = document.querySelectorAll('#dots .dot')
allDots.forEach(dot => {
  anime({
    targets: dot,
    rotate: (el, i) => anime.random(90, 360),
    duration: (el, i) => anime.random(250, 750),
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  })
})

// Box 4: Tunnel //
// Scale concentric circles at staggered delays to create "tunnel" effect//
anime({
  targets: '#tunnel circle',
  scale: 1.1,
  direction: 'alternate',
  loop: true,
  duration: 250,
  easing: 'easeInOutSine',
  delay: (el, index) => index * 50
})

// Box 5: Zigzag path //
// Length of the path in zigZagOffset lets us trace the zigzag path //
const zigZag = document.querySelector('#zigzag path')
const zigZagOffset = anime.setDashoffset(zigZag)
zigZag.setAttribute('stroke-dashoffset', zigZagOffset)
anime({
  targets: zigZag,
  strokeDashoffset: [zigZagOffset, 0],
  duration: 3000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// Box 6: Flashing boxes //
// Background colours of diagonally opposing boxes switch to create "flashing" effect //
anime({
  targets: '#flashes .flash',
  backgroundColor: (el, i) => ['#fff636', '#cb89fc', '#fc3035', '#77ebfd'][i],
  // Random delay//
  delay: (el, i) => anime.random(50, 100),
  duration: 500,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

// Box 6: Disappearing circles //
// Make 20 circles and grow and shrink each at a staggered delay //
multiplyElement(document.querySelector('#circles'), 20)
const allCircles = document.querySelectorAll('#circles')
allCircles.forEach(circle => {
  anime({
    targets: '#circles .dot',
    scale: [0, 1.2],
    delay: (el, i) => i * 100,
    duration: 250,
    loop: true,
    easing: 'easeInOutSine',
    direction: 'alternate'
  })
})

// Box 6: Tilting squares //
// Rotate concentric squares by delaying each incrementally by 100ms //
anime({
  targets: '#squares rect',
  // Center squares //
  translateX: ['-50%', '-50%'],
  translateY: ['-50%', '-50%'],
  rotate: [45, 0, -45],
  delay: (el, i) => 100 * i,
  duration: (el, i) => 750,
  loop: true,
  easing: 'easeInOutSine',
  direction: 'alternate'
})
