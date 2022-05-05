const userImg = document.querySelector('.user-image')
const userReview = document.querySelector('.user-content')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.previous-btn')
const btnContainer = document.querySelectorAll('.btn-container img')

const users = [
    {
        img: './images/image-tanya.jpg',
        review: `" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreaams and so excited about the future. "`,
        name: "Tanya Sinclair",
        job: "UX Engineer"
    },

    {
        img: './images/image-john.jpg',
        review: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "`,
        name: "John Tarkpor",
        job: "Junior Front-end Developer"
    }
]

window.addEventListener('DOMContentLoaded', () => {
  userReview.innerHTML =  `<div class="quotes-div">
  <img src='./images/pattern-quotes.svg' class="quotes-img">
  </div>

  <div class="content">
    <p class="review-text"> ${users[0].review}</p>

    <div class="name-and-job">
        <p class="name"> ${users[0].name} </p>
        <p class="user-job">${users[0].job} </p>
    </div>
  </div>`

  userImg.setAttribute('src', `${users[0].img}`)

//   createTimer()
})


// console.log(btnContainer)

// btnContainer.forEach((item) => {
//     item.addEventListener('click', () => {
//         clearInterval(createTimer)
//     })
// })

let currentUser = 0

nextBtn.addEventListener('click', () => {
    // clearInterval(createTimer)

    if(currentUser === users.length-1){
       currentUser = 0
    }
    else{
        currentUser++;
    }

    userReview.innerHTML =  `<div class="quotes-div">
    <img src='./images/pattern-quotes.svg' class="quotes-img">
    </div>

    <div class="content">
        <p class="review-text"> ${users[currentUser].review}</p>

        <div class="name-and-job">
            <p class="name"> ${users[currentUser].name} </p>
            <p class="user-job">${users[currentUser].job} </p>
        </div>
    </div>`;

    userImg.setAttribute('src', `${users[currentUser].img}`); 
})

prevBtn.addEventListener('click', () => {
    // clearInterval(createTimer)

    if(currentUser === 0){
        currentUser = users.length-1
    }
     else{
         currentUser--
    }

    userReview.innerHTML =  `<div class="quotes-div">
    <img src='./images/pattern-quotes.svg' class="quotes-img">
    </div>

    <div class="content">
        <p class="review-text"> ${users[currentUser].review}</p>

        <div class="name-and-job">
            <p class="name"> ${users[currentUser].name} </p>
            <p class="user-job">${users[currentUser].job} </p>
        </div>
    </div>`

   userImg.setAttribute('src', `${users[currentUser].img}`)
})


const createTimer  =  () => {
    setInterval(() => {
        if(currentUser === users.length-1){
            currentUser = 0
        }
        else{
            currentUser++
        }

        userReview.innerHTML =  `<div class="quotes-div">
        <img src='./images/pattern-quotes.svg' class="quotes-img">
        </div>
    
        <div class="content">
            <p class="review-text"> ${users[currentUser].review}</p>
        
            <div class="name-and-job">
                <p class="name"> ${users[currentUser].name} </p>
                <p class="user-job">${users[currentUser].job} </p>
            </div>
        </div>`

       userImg.setAttribute('src', `${users[currentUser].img}`)
    }, 2000)
}

