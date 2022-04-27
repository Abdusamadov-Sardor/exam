
const elForm = document.querySelector(".form");
const elSelect = document.querySelector(".form-select");

const elBox = document.querySelector(".box")
const elLow = document.querySelector(".low");
const elMiddile = document.querySelector(".middle");
const elHight = document.querySelector(".high")

const elLabel = document.querySelector(".low-box");
const elLabel1 = document.querySelector(".middle-box");
const elLabel2 = document.querySelector(".high-box")

const elTop = document.querySelector(".top")
const elLab1 = document.querySelector(".lab1");
const elLab2 = document.querySelector(".lab2");
const elLab3 = document.querySelector(".lab3");

const elTomoto = document.querySelector(".tomato");
const elMeat = document.querySelector(".meat");
const elZaytun = document.querySelector(".zaytun")

const elLab4 = document.querySelector(".lab4")
const elLab5 = document.querySelector(".lab5")
const elLab6 = document.querySelector(".lab6")

const elBottom = document.querySelector(".bottom")
const elPotato = document.querySelector(".potato");
const elQoriqorn = document.querySelector(".qoziqorn");
const elQazi = document.querySelector(".qazi");

const Label1 = document.querySelector(".label1")
const Label2 = document.querySelector(".label2")
const elAchchiq = document.querySelector(".achchiq");
const elSosiska = document.querySelector(".sosiska");




const elBread = document.querySelector(".span");
const elSize = document.querySelector(".span1")
const elAdd = document.querySelector(".span2");
const elExampl = document.querySelector(".span3");

elSelect.addEventListener("change", evt => {
    elBread.textContent = elSelect.value
})

elBox.addEventListener("click", evt => {
    if(evt.target.matches(".low")){
        elSize.textContent = elLabel.textContent
    }
    if(evt.target.matches(".middle")){
        elSize.textContent = elLabel1.textContent
    }
    if(evt.target.matches(".high")){
        elSize.textContent = elLabel2.textContent
    }
})

elTop.addEventListener("click" , evt => {
    if(evt.target.matches(".tomato")){
        elAdd.textContent = elLab1.textContent
    }
    if(evt.target.matches(".meat")){
        elAdd.textContent = elLab2.textContent
    }
    if(evt.target.matches(".zaytun")){
        elAdd.textContent = elLab3.textContent
    }
})
elBottom.addEventListener("click" , evt => {
    if(evt.target.matches(".potato")){
        elAdd.textContent = elLab4.textContent
    }
    if(evt.target.matches(".qoziqorn")){
        elAdd.textContent = elLab5.textContent
    }
    if(evt.target.matches(".qazi")){
        elAdd.textContent = elLab6.textContent
    }
})

elAchchiq.addEventListener("click", evt => {
    elExampl.textContent = Label1.textContent
})
elSosiska.addEventListener("click", evt => {
    elExampl.textContent = Label2.textContent
})
