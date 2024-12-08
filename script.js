const HTML_HAPPINESS = document.getElementById("happiness")
const HTML_ENERGY = document.getElementById("energy")
const HTML_TREAT_BTN = document.getElementById("treat")
const HTML_MEAL_BTN = document.getElementById("meal")
const HTML_VAGETABLE_BTN = document.getElementById("vagetable")
const HTML_MESSAGE = document.getElementById("messages")
const HTML_PET = document.getElementById("pet")
// TODO 1: Create petState object with happiness and energy properties (both starting at 50)
let petState = {
    happiness: 70,
    energy: 70
};

// TODO 2: Implement this function that determines what each food does
// It should return an object with: happiness (number), energy (number), message (string)
// Example foods effects:
// - treat: happiness +15, energy +5, message: "Yummy treat! Your pet is super happy! 😊"
// - meal: happiness +10, energy +20, message: "A nutritious meal! Your pet feels energized! 💪"
// - vegetable: happiness -5, energy +15, message: "Healthy but not too tasty... Your pet is being good! 😇"
function calculateFoodEffects(foodType) {
    const effects = {
        happiness: 0,
        energy: 0,
        message: ""
    }
    // Your code here
    if (foodType === "treat") {
        effects.happiness = 15
        effects.energy = 5
        effects.message = "Yummy treat! Your pet is super happy! 😊"
    } else if (foodType === "meal") {
        effects.happiness = 10
        effects.energy = 20
        effects.message = "A nutritious meal! Your pet feels energized! 💪"
    } else {
        effects.happiness = -5
        effects.energy = 15
        effects.message = "Healthy but not too tasty... Your pet is being good! 😇"
    }
    return effects;
}

// TODO 3: Implement function to update pet stats
// Keep stats between 0-100
// Update the DOM elements: 'happiness', 'energy', and 'messages'
function updatePetStats(effects) {
    // petState 업데이트
    petState.happiness = petState.happiness + effects.happiness
    if (petState.happiness >= 100) {
        petState.happiness = 100
    } else if (petState.happiness <= 0) {
        petState.happiness = 0
    }
    petState.energy = petState.energy + effects.energy
    if (petState.energy >= 100) {
        petState.energy = 100
    } else if (petState.energy <= 0) {
        petState.energy = 0
    }




    // Your code here
    HTML_HAPPINESS.innerText = petState.happiness
    HTML_ENERGY.innerText = petState.energy
    HTML_MESSAGE.innerText = effects.message
    updatePetMood()



}
// TODO 4: Implement function to update pet's emoji based on stats
// Use these emojis: 😸 🐱 😿 🙀
// Calculate average of happiness & energy to determine which emoji to show
// >= 75 😸
// >= 50 🐱
// >= 25 😿
// 🙀
function updatePetMood() {
    // Your code here
    const averageNumber = (petState.happiness + petState.energy) / 2
    if (averageNumber >= 75) {
        HTML_PET.innerText = "😸"
        // }
    } else if (averageNumber >= 50) {
        HTML_PET.innerText = "🐱"
    }
    else if (averageNumber >= 25) {
        HTML_PET.innerText = "😿"
    } else {
        HTML_PET.innerText = "🙀"
    }


}

// TODO 5: Implement main feeding function that:
// 1. Gets food effects
// 2. Updates pet stats and mood
function feedPet(foodType) {
    // Your code here
    const effects = calculateFoodEffects(foodType)

    // 1. 효과 계산하기
    // const effects = calculateFoodEffects(...);
    updatePetStats(effects)
    // 2. updatePetStats
    // HTML 업데이트
    // petState 업데이트

    // 3. updatePetMood
    updatePetMood()

}

// TODO 6: Add setInterval to decrease stats over time
// Decrease happiness and energy every 3 seconds
// setInterval(() => {
//     Your code here
// }, 3000);

setInterval(() => {

    petState.happiness = petState.happiness - 1
    if (petState.happiness < 0) {
        HTML_HAPPINESS.innerText = 0
    } else { HTML_HAPPINESS.innerText = petState.happiness }

    petState.energy = petState.energy - 1
    if (petState.energy <= 0) {
        HTML_ENERGY.innerText = 0
    } else {
        HTML_ENERGY.innerText = petState.energy
    }

    updatePetMood()
}, 3000);

HTML_MEAL_BTN.addEventListener(`click`, () => {
    feedPet("meal")
})
HTML_TREAT_BTN.addEventListener(`click`, () => {
    feedPet("treat")
})
HTML_VAGETABLE_BTN.addEventListener(`click`, () => {
    feedPet("vegetable")
})

HTML_HAPPINESS.innerText = petState.happiness
HTML_ENERGY.innerText = petState.energy
