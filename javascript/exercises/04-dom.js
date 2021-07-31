// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
document.getElementById("copy").onclick = function() {
    let text = document.getElementById("userInput1").value
    document.getElementById("output").textContent = text
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
let newOutput = document.createElement("div")
newOutput.style.backgroundColor = 'lightyellow'
newOutput.style.height = '20px'
newOutput.style.width = '150px'
newOutput.id = 'newOutput'
document.getElementById('inputEventExample').append(newOutput)

document.getElementById("userInput2").onkeyup = function() {
    let text = document.getElementById("userInput2").value
    document.getElementById("newOutput").textContent = text
}
