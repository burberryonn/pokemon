const pokemon = document.getElementById('pikachu')
let score = document.getElementById('bank')
let bank = 0
let click = 1
const buy = document.getElementsByTagName('button')

pokemon.addEventListener('click', () => {
    bank += click
    score.textContent = bank
})

buy[0].addEventListener('click', () => {
    if(bank<100)return;
    bank -= 100
    autoClick()
    score.textContent = bank
})

buy[1].addEventListener('click', () => {
    if(bank<50)return;
    bank-=50
    clickPlusOne()
    score.textContent = bank
})

buy[2].addEventListener('click', () => {
    if(bank<1000)return;
    bank-=1000
    autoClickTen()
    score.textContent = bank
})

buy[3].addEventListener('click', () => {
    if(bank<1500)return;
    bank-=1500
    clickPlusFive()
    score.textContent = bank
})

function autoClick(){
    setInterval(() => {
        bank+=1
        score.textContent = bank
    }, 1000)
}

function autoClickTen(){
    setInterval(() => {
        bank+=10
        score.textContent = bank
    }, 1000)
}

function clickPlusOne(){
    click += 1
}

function clickPlusFive(){
    click += 5
}