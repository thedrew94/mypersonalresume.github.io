'use strict';


const navBar = document.querySelector('.navbar');
const profilePicture = document.querySelector('.my-picture');
const dateText = document.querySelector('.date-text');
const pictureDisplay = document.querySelector('.picture-main-container');

window.onscroll = () => {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        navBar.classList.add('navbar-display-class');
        profilePicture.classList.add('my-picture-display-class');
        // pictureDisplay.style.display = 'none';
    } else {
        navBar.classList.remove('navbar-display-class');
        profilePicture.classList.remove('my-picture-display-class');
        // pictureDisplay.style.display = 'flex';
    }
};

setInterval(() => {
    const now = new Date();
    dateText.textContent = now.toLocaleTimeString();
}, 1000);

//implementing a todolist style comment section :

const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let todos = [];

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const todoText = todoInput.value;
  todos.push(todoText);
  todoInput.value = '';

  displayTodos();
});

function displayTodos() {
  todoList.innerHTML = '';
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const li = document.createElement('li');
    li.innerHTML = todo;

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.addEventListener('click', () => {
      todos.splice(i, 1);
      displayTodos();
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  }
}

const resumeBtns = document.querySelectorAll('.resume-btns'); 
const resumeBtnsContainer = document.querySelector('.resume-btns-container');
const resumeTxt = document.querySelectorAll('.resume-txt');


//this will console the text ciao for each btn with the class resumebtns when press
// resumeBtns.forEach(t => t.addEventListener('click', () => {
//     console.log('Ciao');
// }))

resumeBtnsContainer.addEventListener('click', function(e) {
    const clicked = e.target.closest('.resume-btns');
    if(!clicked) return;
    resumeBtns.forEach(t => t.classList.remove('resume-btns-active'))
    clicked.classList.add('resume-btns-active');
    resumeTxt.forEach(c => c.classList.remove('txt-active'));
    //display what clicked
    // console.log(clicked);
    // console.log(clicked.dataset.tab);

    //activate the txt content tab
    document.querySelector(`.txt${clicked.dataset.tab}`).classList.add('txt-active')

})

const minSecond = document.querySelector('.min-time-displaysecond');
const secFirst = document.querySelector('.sec-time-displayfirst');
const secSecond = document.querySelector('.sec-time-displaysecond');

let count = 500;

const intervalId = setInterval(function() {
    count--;
    const minutes = Math.floor(count / 60);
    const secondsFirtsDigit = Math.floor((count % 60) / 10);
    const secondsSecondDigit = (count % 60) % 10;
    minSecond.textContent = minutes;
    secFirst.textContent = secondsFirtsDigit;
    secSecond.textContent = secondsSecondDigit;

    if (minutes === 0 && secondsFirtsDigit === 0 && secondsSecondDigit === 0) {
        clearInterval(intervalId);
        location.reload();
    }

}, 1000);



{/* <div class="navbar-btns-container">
<button class="navbar-btns">Summary</button>
<button class="navbar-btns">Job Experience</button>
<button class="navbar-btns">Skills</button>
</div> */}

// const btnsScrollTo = document.querySelector('.navbar-btns')
// const resumeSection = document.querySelector('.resume-btns-container');

// btnsScrollTo.addEventListener('click', function(e) {
//     const resumeCoords = resumeSection.getBoundingClientRect();
//     // window.scrollTo(resumeCoords.left + window.pageXOffset, resumeCoords.top +
//     //     window.pageYOffset);
//     window.scrollTo({
//         left: resumeCoords.left + window.pageXOffset,
//         top: resumeCoords.top + window.pageYOffset -170,
//         behavior: 'smooth',
//     })

    // this also works
    // resumeSection.scrollIntoView({ behavior: 'smooth' });
// });

const btnsScrollTo = document.querySelectorAll('.navbar-btns');
const resumeSection = document.querySelector('.resume-btns-container');

btnsScrollTo.forEach(btns => {
btns.addEventListener('click', function(e) {
const resumeCoords = resumeSection.getBoundingClientRect();
window.scrollTo({
left: resumeCoords.left + window.pageXOffset,
top: resumeCoords.top + window.pageYOffset - 250,
behavior: 'smooth',
});
});
});
