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
    bank -= 100
    autoClick()
})

buy[1].addEventListener('click', () => {
    bank-=50
    clickPlusOne()
})

buy[2].addEventListener('click', () => {
    bank-=1000
    autoClickTen()
})

buy[3].addEventListener('click', () => {
    bank-=1500
    clickPlusFive()
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