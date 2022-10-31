var prev = document.querySelector('.left');
var next = document.querySelector('.right');

var quote = document.querySelector('.quote');
var name = document.querySelector('.name');
var what = document.querySelector('.what');
var photoDiv = document.querySelector('.photoDiv');

prev.addEventListener('click', () => {
    quote.innerHTML = 
    `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`
    name.innerHTML = `Tanya Sinclair `
    what.innerHTML = `UX Engineer`
    photoDiv.innerHTML = `<img src="images/image-tanya.jpg" alt="">`
})

next.addEventListener('click', () => {
  quote.innerHTML = 
  `“ If you want to lay the best foundation possible I’d recommend taking this course. 
  The depth the instructors go into is incredible. I now feel so confident about 
  starting up as a professional developer. ”`
  name.innerHTML = `John Tarkpor `
  what.innerHTML = `Junior Front-end Developer`
  photoDiv.innerHTML = `<img src="images/image-john.jpg" alt="">`
})