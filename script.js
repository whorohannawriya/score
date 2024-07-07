/*let scrh = document.getElementsByClassName("scrh")
let scrg = document.getElementsByClassName("scrg")
let scoreH = 0
let scoreG = 0
function add1H(){
    scoreH+=1
    scrh.textContent = scoreH
}
function add2H(){
    scoreH+=2
    scrh.textContent = scoreH
}
function add3H(){
    scoreH+=3
    scrh.textContent = scoreH
}
 
function add1G(){
    scoreG+=1
    scrg.textContent = scoreG
}
function add2G(){
    scoreG+=2
    scrg.textContent = scoreG
}
function add3G(){
    scoreG+=3
    scrg.textContent = scoreG
}

function resetScore(){
    scrh.textContent = 0
    scrg.textContent = 0
    scoreH= 0
    scoreG= 0
}*/

/*gpt fix*/

let scrh = document.querySelector(".scrh");
let scrg = document.querySelector(".scrg");
let scoreH = 0;
let scoreG = 0;

function add1H() {
    scoreH += 1;
    scrh.textContent = scoreH;
}

function add2H() {
    scoreH += 2;
    scrh.textContent = scoreH;
}

function add3H() {
    scoreH += 3;
    scrh.textContent = scoreH;
}

function add1G() {
    scoreG += 1;
    scrg.textContent = scoreG;
}

function add2G() {
    scoreG += 2;
    scrg.textContent = scoreG;
}

function add3G() {
    scoreG += 3;
    scrg.textContent = scoreG;
}

function resetScore() {
    scoreH = 0;
    scoreG = 0;
    scrh.textContent = scoreH;
    scrg.textContent = scoreG;
}