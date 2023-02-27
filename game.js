const data = {
    "Magician":"A Person who performs magic",
    "Carpenter": "A Person who works with wood",
    "Black Smith": "A Person who shapes iron"
}

let chosen_word = getChosenWord()

console.log(chosen_word)

function getChosenWord() {
    let keys = Object.keys(data);
    let index = getRandomNumber(keys.length);
    return keys[index]
}


function getRandomNumber(range) {
    return Math.floor(Math.random() * range)
}

function lettersToShow(){
    return Math.floor(chosen_word.length * 0.3)
}

function positionsOfDisplay() {
    let positions = []
    let letters = lettersToShow()
    let already_exists = new Set()
    for(let i=0 ; i<letters; ++i) {
        let position = getRandomNumber(chosen_word.length)
        if(already_exists.has(position)){
            --i;
            continue;
        }
        positions.push(position)
        already_exists.add(position)
    }
    return positions
}

