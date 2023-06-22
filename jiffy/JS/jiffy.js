const API_KEY = 'MOIksznjmmbtOSX5eO9JQbT6Z1pCRJFh'
const videosEl = document.querySelector('.videos')
const searchEl = document.querySelector('.search-input')
const hintEl = document.querySelector('.search-hint')
const clearEl = document.querySelector('.search-clear')

// From Stack Overflow (https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array)
const randomChoice = arr => {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

const createVideo = src => {
  const video = document.createElement('video')
  video.src = src
  video.autoplay = true
  video.loop = true
  video.className = 'video'
  return video
}

// Toggle page between loading/not loading states
const toggleLoading = state => {
  if (state) {
    document.body.classList.add('loading')
    // Disables input so user cannot interfere with it while search loads
    searchEl.disabled = true
  } else {
    document.body.classList.remove('loading')
    // Enable input while page is not loading
    searchEl.disabled = false
    searchEl.focus()
  }
}

const searchGiphy = searchTerm => {
  // Toggle loading state
  toggleLoading(true)

  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=50&offset=0&rating=PG-13&lang=en`
  )
    .then(response => {
      return response.json()
    })
    .then(json => {
      // randomChoice gives us random result from array
      const gif = randomChoice(json.data)
      const src = gif.images.original.mp4
      const video = createVideo(src)
      videosEl.appendChild(video)
    
      // Toggle off loading state
    toggleLoading(false)

      video.addEventListener('loadeddata', event => {
        // Toggle fade-in animation for video result
        video.classList.add('visible')
        // Add 'has-results' class to toggle close button
        document.body.classList.add('has-results')
        // Change hint text to see more results
        hintEl.innerHTML = `Hit enter to see more ${searchTerm}`
      })
    })

    // If there is an error, disable loading state and tell user nothing was found in hint text
    .catch(error => {
      toggleLoading(false)
      hintEl.innerHTML = `Nothing found for ${searchTerm}`
    })
}

const doSearch = event => {
  const searchTerm = searchEl.value

// Show search hint when searchTerm exceeds 2 characters
  if (searchTerm.length > 2) {
    hintEl.innerHTML = `Hit enter to search ${searchTerm}`
    document.body.classList.add('show-hint')
  } else {
    document.body.classList.remove('show-hint')
  }

  // Run searchGiphy when searchTerm exceeds 2 characters and user presses 'Enter' key
  if (event.key === 'Enter' && searchTerm.length > 2) {
    searchGiphy(searchTerm)
  }
}

// clearSearch resets video and hint elements
const clearSearch = event => {
  document.body.classList.remove('has-results')
  videosEl.innerHTML = ''
  hintEl.innerHTML = ''
  searchEl.value = ''

  // Focus input cursor back onto input
  searchEl.focus()
}

document.addEventListener('keyup', event => {
  // Pressing 'Escape' key runs clearSearch  
  if (event.key === 'Escape') {
    clearSearch()
  }
})

searchEl.addEventListener('keyup', doSearch)
clearEl.addEventListener('click', clearSearch)
 
