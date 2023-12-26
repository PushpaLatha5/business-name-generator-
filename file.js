// create a business name generator by combining list of adjectives and shop name and another word

// Adjectivs 
// Crazy , amazing and fire

// shop name
// Engine, foods , Garmets

// Another name
// Bros, Limted, Hub
let random=Math.random()
if (random <0.33){
    one="Crazy"
} else if (random <0.33 && random<0.66){
    one="Amazing"
} else {
    one="Fire"
}
let rand=Math.random()
if (random <0.33){
    two="Engine"
} else if (rand <0.33 && rand<0.66){
    two="Food"
} else {
    two="Garments"
}
let rando=Math.random()
if (random <0.33){
    three="latha"
} else if (random <0.33 && random<0.66){
    three="yash"
} else {
    three="shop"
}
console.log(`the random words are ${one} ${two} ${three}`)

