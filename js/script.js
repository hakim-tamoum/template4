// check if there's local storage colocr option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    
    document.documentElement.style.setProperty('--main--color', mainColors);
    // remove active class from all childrens
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        // add active class on element with data-color === local storage item
        if (element.dataset.color === mainColors)
        //add active class
        element.classList.add("active");
    });
    
};

//get array of img
let backgroundOption = true;
// variable to control the interval
let backgroundInterval;

//check if there's local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");

//check if random background local storage is not EMpty
if (backgroundLocalItem !== null) {
    if (backgroundLocalItem === 'true'){
        backgroundOption = true;
    }else {
        backgroundOption = false;
    }
    //remove active class from all spans
    document.querySelectorAll(".random-backgrounds span").forEach(element => {
        element.classList.remove("active");
    });
    if (backgroundLocalItem === 'true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    }else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}
// toggle spin icon gear
document.querySelector(".toggle-settings .fa-gear").onclick = function(){
    // toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");
    // toggle class open on main settings dox
    document.querySelector(".settings-box").classList.toggle("open");
};

//switch colors
const colorsLi = document.querySelectorAll(".colors-list li");
//loop on all list items
colorsLi.forEach(li => {
    //click on every list items
    li.addEventListener("click", (e) => {
        //set color on root
        document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
        // set color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);
        // remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        //add active class on seft
        e.target.classList.add("active");
    });
});

//switch random background
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
//loop on all span
randomBackEl.forEach(span => {
    //click on every list items
    span.addEventListener("click", (e) => {
        
        // remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        //add active class on seft
        e.target.classList.add("active");

        if (e.target.dataset.background === 'yes'){
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background_option", true);
        }else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }
    });
});

// select landing page element
let landingPage = document.querySelector(".landing-page");
// get array of imgs
let imgsArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",];

// function to randomize imgs
function randomizeImgs() {

    if (backgroundOption === true) {
        backgroundInterval = setInterval(function() { //setInterval(() => { 
            //get random number الرقم العشوائي
            let randomNumber = Math.floor(Math.random() * imgsArray.length);
            //change background image url
            landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';
        }, 3000);
    }
};
randomizeImgs();

// select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {  

//  skills outer height 
let skillsOuterHeight = ourSkills.offsetHeight;
// window height
let windowHeight = this.innerHeight;
//  window Scrolltop
let windowScrollTop = this.pageYOffset;

if (windowScrollTop > ( skillsoffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill => {
        skill.style.width = skill.dataset.progress;
    });
}
};