const firstName = 'Andrzej';
const age = 41;



console.log(`Cześć, nazywam się ${firstName} i mam ${age} lat! Kałabanga i do przodu!`);

const header = document.querySelector('h1');

console.log(header);

const headerDescription = document.querySelector('.header__description--js')

headerDescription.innerHTML = 'Moja pierwsza strona internetowa'

const hello = () => {
    console.log(`Cześć, nazywam się ${firstName} i mam ${age} lat! Kałabanga i do przodu!`);
}

hello ();