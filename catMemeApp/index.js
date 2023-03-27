import {catsData} from './data.js'

// selectors
const emotionRadios = document.querySelector('#emotion-radios')
const getImgButton = document.querySelector('#get-image-btn')
const form = document.querySelector('form')
const memeModalInner = document.querySelector('#meme-modal-inner')
const memeModal = document.querySelector('#meme-modal')
const memeModalCloseBtn = document.querySelector('#meme-modal-close-btn')

function getEmotionsArray(cats){
    const allEmotionsArray = cats.map(item => item.emotionTags).flat()
    const uniqueEmotionsArray = [...new Set(allEmotionsArray)]
    return uniqueEmotionsArray
}
const emotionsArray = getEmotionsArray(catsData)

    // display emotions in form
emotionsArray.forEach(item=>{
    const radioContainer = document.createElement('div')
    radioContainer.classList.add('radio')
    radioContainer.innerHTML = (
        `<label for=${item}>${item}</label>
      <input type="radio" id=${item} name='catEmotion' value=${item}>`)
 emotionRadios.append(radioContainer)
})

// highlighted checked radio 
emotionRadios.addEventListener('change', function(e){

const allRadios = document.querySelectorAll('.radio')
allRadios.forEach(item => item.classList.remove('highlight'))
document.getElementById(e.target.id).parentElement.classList.add('highlight')
})



getImgButton.addEventListener('click', (e)=>{
    e.preventDefault()
    const userInput = getFormData()
   const catDataToDisplay = getCatDataToDisplay(userInput)
    
displayModal(catDataToDisplay)
})


function getFormData(){
      const formData = new FormData(form)
    const userInput = {
        selectedMood:formData.get('catEmotion'),
        gifOnly:formData.get('gifs-only-option') === 'on'? true : false
    }
    return userInput
}

function getCatDataToDisplay(userInput){
    const filteredData = catsData.filter(item => item.emotionTags.includes(userInput.selectedMood)).filter(item => item.isGif === userInput.gifOnly)
const randomNum = Math.floor(Math.random()* filteredData.length)
const randomItemToDisplay = filteredData[randomNum]
return randomItemToDisplay
   
}

function displayModal(catDataToDisplay){
    console.log(catDataToDisplay)
    memeModal.classList.add('display-modal')
   const img = document.createElement('img')
   img.src = `./images/${catDataToDisplay.image}`
   img.alt = catDataToDisplay.alt
   img.classList.add('cat-img')
//    .innerHTML =`<img src=${catDataToDisplay.image} alt=${catDataToDisplay.alt}/>`
   memeModalInner.appendChild(img) 
}

memeModalCloseBtn.addEventListener('click',()=>{
     memeModal.classList.remove('display-modal')
     memeModalInner.innerHTML = ''
})