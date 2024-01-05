const pokemon = document.getElementById('pikachu')
const score = document.getElementById('bank')
let bank = 0
let click = 1
const buy = document.getElementsByTagName('button')
let progress = 0
const progressBar = document.querySelector('.progress-bar')
let level = 1
const levelText = document.querySelector('.progress-container>p')

pokemon.addEventListener('click', () => {
    bank += click
    score.textContent = bank
    if(progress<=100){
        progress+=0.5
        progressBar.style.width = progress + '%'
        levelUp()
    }
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
        bank+=1
        score.textContent = bank
    }, 100)
}

function clickPlusOne(){
    click += 1
}

function clickPlusFive(){
    click += 5
}

function levelUp(){
    if(progress === 100){
        if(level === 1)level++
        switch (level) {
            case 2:
                pokemon.style.backgroundImage = "url('./img/Pikachu_baby.png')"
                progress = 0
                level++
                levelText.textContent = 'Уровень 2'
                break;
            case 3:
                pokemon.style.backgroundImage = "url('./img/Pikachu_middle.png')"
                progress = 0
                level++
                levelText.textContent = 'Уровень 3'
                break;
            case 4:
                pokemon.style.backgroundImage = "url('./img/Pikachu_middle.png')"
                progress = 0
                level++
                levelText.textContent = 'Уровень 4'
                break;
        
            default:
                levelText.textContent = 'Завершено'
                break;
        }
    }
}

