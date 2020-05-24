const firstName = 'Bóbr';

const age = 35;

console.log(`Cześć! Jestem ${firstName}. Witam Cię na mojej stronie :)`)

const image = document.querySelector('.notes__picture--js')

image.innerHTML = `<img src="wtf-wpidea.png" alt="wtf, co ten frontend">`



function greet(age, firstName) {
    console.log(`Cześć! Jestem ${firstName} i mam ${age} lat. Witam Cię na mojej stronie :)`);
}

greet (age)

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed bum!`)
    },
    commander: {
        name: 'Darth Vader',
        age: 44,
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
}
 console.log(deathStar.population)

 console.log(deathStar.commander)

 deathStar.fire('Rebel ship')
