// check if there's local storage colocr option
let mainColors = localStorage.getItem("color_option");
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main--color', localStorage.getItem("color_option"));
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
    });
});

// select landing page element
let landingPage = document.querySelector(".landing-page");
// get array of imgs
let imgsArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg",];
setInterval(function() { //setInterval(() => { 
    //get random number الرقم العشوائي
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    //change background image url
    landingPage.style.backgroundImage = 'url("img/' + imgsArray[randomNumber] + '")';
}, 4000);