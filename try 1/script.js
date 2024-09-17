const gameFill = document.getElementById('wrapper');

let cardsPair = 16;
const cardsPairArr = [];

let firstCard = null;
let secondCard = null;

for(let i = 1; i <= cardsPair; i++) {
    cardsPairArr.push(i, i)
}



for(let i = 0; i < cardsPairArr.length; i++) {
    let randomIndex = Math.floor(Math.random() * cardsPairArr.length)
    
    const temp = cardsPairArr[i];
    cardsPairArr[i] = cardsPairArr[randomIndex]
    cardsPairArr[randomIndex] = temp
    
}


for (const cardNum of cardsPairArr) {
    const card = document.createElement('div');
    card.textContent = cardNum;
    card.classList.add(`card`);

    card.addEventListener('click', function() {
        if(card.classList.contains('check') || card.classList.contains('checkSuccess')) {
            return
        }
        
        if(firstCard !== null && secondCard !== null){
            firstCard.classList.remove('check');
            secondCard.classList.remove('check');
            firstCard = null;
            secondCard = null;
        } 

            card.classList.add('check');
            
                if(firstCard === null) {
                    firstCard = card
                    firstCard.style.backgroundImage = `URL(../img/${cardNum}.png)`;
                } else {
                    secondCard = card
                    secondCard.style.backgroundImage = `URL(../img/${cardNum}.png)`;
                }
        
        if(firstCard !== null && secondCard !== null) {
            const firstCardClass = firstCard.textContent;
            const secondCardClass = secondCard.textContent;

            // const firstCardClass = firstCard.classList.contains('check');
            // const secondCardClass = secondCard.classList.contains('check');

            if(firstCardClass === secondCardClass) {
                firstCard.classList.add('checkSuccess');
                secondCard.classList.add('checkSuccess');
            } 
        }
        if(cardsPairArr.length === document.querySelectorAll('.checkSuccess').length) {
            setTimeout(() => {
                alert('Поздравляю, Вы победили!!!')
            }, 500);
        }        
    })

    gameFill.append(card)
}


