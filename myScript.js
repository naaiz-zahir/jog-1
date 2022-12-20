// Variable for storing the full text of the order
var fullText = "";

// Function for generating the text for a single item
function generateText() {
    // Get the selected coffee type
    var coffeeType = document.getElementById("coffee-type").value;

    // Get the selected flavor
    var coffeeFlavor = document.getElementById("coffee-flavor").value;

    // Get the selected addons
    var coffeeAddons = "";
    var addons = document.getElementsByName("coffee-addons");
    for (var i = 0; i < addons.length; i++) {
        if (addons[i].checked) {
            coffeeAddons += addons[i].value + ", ";
        }
    }
    coffeeAddons = coffeeAddons.slice(0, -2); // remove the last comma and space

    // Get the custom requests
    var coffeeCustom = document.getElementById("coffee-custom").value;

    // Get the quantity
    var coffeeQuantity = document.getElementById("coffee-quantity").value;

    // Generate the text
    var text = "I would like to order " + coffeeQuantity + " " + coffeeType;
    if (coffeeFlavor !== "none") {
        text += " with " + coffeeFlavor + " flavor";
    }
    if (coffeeAddons !== "") {
        text += " and the following addons: " + coffeeAddons;
    }
    if (coffeeCustom !== "") {
        text += ". " + coffeeCustom;
    }
    text += ".";

    return text;
}

// Function for adding an item to the order
function addItem() {
    // Generate the text for the current item
    var itemText = generateText();

    // Add the text to the full text of the order
    fullText += "\n" + itemText;

    // Display the full text in the textarea
    document.getElementById("generated-text").value = fullText;
}

// Function for completing the order
function completeOrder() {
    // Clear the form
    document.getElementById("coffee-form").reset();

    // Clear the full text of the order
    fullText = "";

    // Clear the textarea
    document.getElementById("generated-text").value = "";
}