const myIMG = document.querySelector("#myIMG");
const text = document.querySelector("h2");
const one  = document.querySelector("#one");
const two = document.querySelector("#two");


one.addEventListener("click", fiona);
two.addEventListener("click", home);

function fiona() {
    text.innerHTML = "Will they get married?"
    myIMG.setAttribute("src", "https://cdn.vox-cdn.com/thumbor/4PaWFwFKe62PBohXZ4R_HjBIK7M=/0x0:1280x700/1200x0/filters:focal(0x0:1280x700):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3946548/shrek_the_third13.0.jpg");
    one.innerHTML = "Yes, and live happily together";
    two.innerHTML = "No,  Fiona will choose a differ life";


    one.addEventListener("click", wedding);
    two.addEventListener("click", other);
}
function wedding () {
    myIMG.setAttribute("src", "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666268980_50-mykaleidoscope-ru-p-shrek-i-fiona-instagram-57.jpg");
    text.innerHTML = "They have their happy end!"
    one.style = "display: none";
    two.style = "display: none";
}

function other(){
    myIMG.setAttribute("src", "https://i.pinimg.com/originals/c6/ca/2e/c6ca2e9928c237074750ab5b18792dbc.jpg");
    text.innerHTML = "She is a warrior now";
    one.style = "display: none";
    two.style = "display: none";
}

function home () {
    myIMG.setAttribute("src", "https://phantom-marca.unidadeditorial.es/5ea2e6e38c4a308b2b1fe139baee71c7/resize/828/f/jpg/assets/multimedia/imagenes/2021/08/19/16293810719734.jpg");
    text.innerHTML = "Will he find a new friend?"
    one.innerHTML = "Yes";
    two.innerHTML = "No";

    one.addEventListener("click", newOne);
    two.addEventListener("click", lonely);
}


function newOne (){
    myIMG.setAttribute("src", "https://www.technochops.com/wp-content/uploads/2020/12/03_12_2019_11_49_53_152547.jpg");
    text.innerHTML = "Now he has friends to travel with"
    one.style = "display: none";
    two.style = "display: none";
}
function lonely(){
    myIMG.setAttribute("src", "https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666195801_33-mykaleidoscope-ru-p-boloto-shreka-krasivo-34.jpg");
    text.innerHTML = "He lives alone, but does not regret about a thing ";
    one.style = "display: none";
    two.style = "display: none";
}