// Variable for storing the full text of the order
var fullText = "";

// Function for generating the text for a single item
function generateText() {
    // Get the selected jugo type
    var jugoFlavor = document.getElementById("jugo-flavor").value;

    // Get the selected flavor
    var icecreamFlavor = document.getElementById("icecream-flavor").value;

    // Get the selected addons
    var addons = "";
    var addons = document.getElementsByName("addons");
    for (var i = 0; i < addons.length; i++) {
        if (addons[i].checked) {
            addons += addons[i].value + ", ";
        }
    }
    addons = addons.slice(0, -2); // remove the last comma and space

    // Get the custom requests
    var jugoCustom = document.getElementById("jugo-custom").value;

    // Get the quantity
    var jugoQuantity = document.getElementById("jugo-quantity").value;

    // Generate the text
    var text = "I would like to order " + jugoQuantity + " " + jugoFlavor;
    if (icecreamFlavor !== "none") {
        text += " with " + icecreamFlavor + " flavor";
    }
    if (addons !== "") {
        text += " and the following addons: " + addons;
    }
    if (jugoCustom !== "") {
        text += ". " + jugoCustom;
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
    document.getElementById("jugo-form").reset();

    // Clear the full text of the order
    fullText = "";

    // Clear the textarea
    document.getElementById("generated-text").value = "";
}