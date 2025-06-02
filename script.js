// 1
const button = document.querySelector('.button')
const text = document.querySelector('.text')
button.textContent = text.textContent
// 2
const image = document.querySelector('.imagea')
image.src = './football-2660585_1280.jpg'
// 3
const link = document.querySelector('.link')
link.href = './football-2660585_1280.jpg'
const linkImage = document.querySelector('.imageb')

linkImage.alt = 'american footbal is my life'
console.log(linkImage.alt)
// 4
const list = document.querySelector('.list')
list.firstElementChild.textContent = '1'
