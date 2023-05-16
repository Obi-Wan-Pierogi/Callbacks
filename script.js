// capture my handles
let redInput = document.getElementById("redInput");
let greenInput = document.getElementById("greenInput");
let blueInput = document.getElementById("blueInput");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");



let buttons = document.querySelectorAll("button");

// add event listeners

buttons.forEach((elem) => {

    elem.onclick = () => {

        // function that will create a new list item, change it's color, 
        // and append it to the list-group based on the button pressed

        function createListItem(color) {
            let li = document.createElement("li");
            li.innerText = color;
            li.style.color = elem.dataset['color'];
            document.getElementById("list-group").appendChild(li);
        }
        if (elem.dataset['color'] === "red") {
            // console.log("red button pressed", redInput.value);

            // create an element, color the text according to the dataset color
            // and append it to our list-group
            // let li = document.createElement("li");
            // li.innerText = redInput.value;
            // li.style.color = "red";
            // document.getElementById("list-group").appendChild(li);
            createListItem(redInput.value);
            
        } else if (elem.dataset['color'] === "green") {
            // console.log("green button pressed", greenInput.value);

            // let li = document.createElement("li");
            // li.innerText = greenInput.value;
            // li.style.color = elem.dataset['color'];
            // document.getElementById("list-group").appendChild(li);
            createListItem(greenInput.value);

        } else if (elem.dataset['color'] === "blue") {
            // console.log("blue button pressed", blueInput.value);

            // let li = document.createElement("li");
            // li.innerText = blueInput.value;
            // li.style.color = "blue";
            // document.getElementById("list-group").appendChild(li);
            createListItem(blueInput.value);

        } else {
            console.log("I don't know what button you pressed");
        }
    }
});







