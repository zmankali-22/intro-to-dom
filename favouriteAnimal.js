let animals = [
  "cat",
  "koala",
  "turtle",
  "drop bear",
  "tiger",
  "rat",
  "lion",
  "tiger",
  "fox",
];

function createAnimalList() {
    animals.forEach((animal) => {
        console.log("animal", animal)
        let newList = document.createElement("li")
        newList.textContent = animal
        // newList.id = animal

        let rootOlNode = document.querySelector("ol")
        rootOlNode.appendChild(newList)


    })
}

createAnimalList()
