// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hidden = document.querySelector("#modal")
hidden.className = "hidden"

let heart = document.getElementsByClassName("like-glyph")
for (let i = 0; i < heart.length; i++) {
heart[i].addEventListener("click", (e) => {

    mimicServerCall()
      .then(() => {
        if(e.target.innerHTML===EMPTY_HEART){
          e.target.innerHTML=FULL_HEART;
          e.target.classList.add("activated-heart");
          console.log(e);
      } else{
        e.target.innerHTML=EMPTY_HEART;
        e.target.classList.remove("activated-heart");
        console.log(e);
      }
      })
      .catch(function (error) {
        document.querySelector('#modal').classList.remove('hidden')
        console.log(error)
        setTimeout(function () {
          document.querySelector('#modal').classList.add('hidden')
        }, 5000)
      });
  })
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
