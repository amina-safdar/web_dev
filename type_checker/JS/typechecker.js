const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector('textarea.output')
const originalText = outputTag.value

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector('span.typesize-output')

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector('span.lineheight-output')

const fontweightTag = document.querySelector(`input[name="fontweight"]`)
const fontweightOutput = document.querySelector('span.fontweight-output')

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const colourTag = document.querySelectorAll('div.colours span')

// Update outputTag as user types into input
sentenceTag.addEventListener('keyup', function() {
  if (this.value) {
    outputTag.value = this.value
  } else {
    outputTag.value = originalText
  }
})

// Update sentenceTag as user type into output
outputTag.addEventListener('keyup', function() {
  if (this.value) {
    sentenceTag.value = this.value
  } else {
    sentenceTag.value = originalText
  }
})

// Adjusting type size slider updates slider value and outputTag text size
typesizeTag.addEventListener('input', function() {
  outputTag.style.fontSize = this.value + 'px'
  typesizeOutput.innerHTML = this.value + ' px'
})

// Adjusting line height size slider updates slider value and outputTag text line height
lineheightTag.addEventListener('input', function() {
  outputTag.style.lineHeight = this.value
  lineheightOutput.innerHTML = this.value
})

// Adjusting font weight slider updates slider value and outputTag text font weight
fontweightTag.addEventListener('input', function() {
  outputTag.style.fontWeight = this.value
  fontweightOutput.innerHTML = this.value
})

// Update outputTag text style as italic/normal based on whether italicTag is checked
italicTag.addEventListener('change', function() {
  if (this.checked) {
    outputTag.style.fontStyle = 'italic'
  } else {
    outputTag.style.fontStyle = 'normal'
  }
})

// Update font family as user changes select for typeface
typefaceTag.addEventListener('input', function() {
  outputTag.style.fontFamily = this.value
})

// Clicking a colourTag modifies background colour and text colour
colourTag.forEach(tag => {
  tag.addEventListener('click', function() {
    outputTag.style.backgroundColor=this.style.backgroundColor
    outputTag.style.color=this.style.color
    
    // Reset classes
    colourTag.forEach(tag =>{
      tag.classList.remove("selected")
    })
    
    this.classList.add("selected")
  })
})
