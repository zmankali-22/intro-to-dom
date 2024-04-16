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
        newList.id = animal


        //  add a button to remove the element from the list
        let removeButton = document.createElement("button")
        removeButton.onclick =() => removeAnimalFromList(animal)
        removeButton.textContent = "Remove animal"
        newList.appendChild(removeButton)

        //  

        let rootOlNode = document.querySelector("ol")
        rootOlNode.appendChild(newList)


    })
}


function removeAnimalFromList(targetAnimalId) {
    // !. find element in list with matching id
    let targetListItem = document.getElementById(targetAnimalId)
    targetListItem.remove()
    // 2. check if id is in the array
    let isAnimalInList = animals.includes(targetAnimalId)
    if (!isAnimalInList) { 
        return
    }

    // 3. remove the animal from array
    animals = animals.filter(animal => {
        if(targetAnimalId === animal) {
            return false
        } else {
            return true
        }
    })

    //  4. update or wipe and rebuild the animal lsit HTML
}

createAnimalList()
