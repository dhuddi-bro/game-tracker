let lNum = document.getElementById("leftNum")
let rNum = document.getElementById("rightNum")
let incOne = document.getElementById("one")
let incTwo = document.getElementById("two")
let incThree = document.getElementById("three")
incOne = 0
incTwo = 0
incThree = 0

function inc1(){
    incOne += 1
    lNum.textContent = incOne
}

function inc2(){
    incTwo += 2
    lNum.textContent = incTwo
}

function inc3(){
    incThree += 3
    lNum.textContent = incThree
}
function rinc1(){
    incOne += 1
    rNum.textContent = incOne
}

function rinc2(){
    incTwo += 2
    rNum.textContent = incTwo
}

function rinc3(){
    incThree += 3
    rNum.textContent = incThree
}
