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
    var addonsElements = document.getElementsByName("addons");
    for (var i = 0; i < addonsElements.length; i++) {
        if (addonsElements[i].checked) {
            addons += addonsElements[i].value + ", ";
        }
    }
    if (addons !== "") {
        addons = addons.slice(0, -2); // remove the last comma and space
    }

    // Get the custom requests
    var jugoCustom = document.getElementById("jugo-custom").value;

    // Get the quantity
    var jugoQuantity = document.getElementById("jugo-quantity").value;

    // Generate the text
    var text = jugoQuantity + " " + jugoFlavor.toUpperCase();
    if (icecreamFlavor !== "none") {
        text += " with " + icecreamFlavor.toUpperCase() + " ice cream";
    }
    if (addons !== "") {
        if (icecreamFlavor == "none") {
            text += " with " + addons.toUpperCase();
        } else {
            text += " and " + addons.toUpperCase();
        }
        // text += " and " + addons.toUpperCase();
    }
    if (jugoCustom !== "") {
        text += ". " + jugoCustom.toUpperCase();
    }
    text += ".";

    return text;
}

// Function for adding an item to the order
function addItem() {
    // Generate the text for the current item
    var itemText = generateText();

    // Add the text to the full text of the order
    //fullText += "\n" + itemText;
    fullText += itemText + "\n";

    // if (document.getElementById("generated-text").value = " ") {
    //    fullText += itemText;
    // } else {
    //    fullText += "\n" + itemText;
    //}

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

function copy() {
    let textarea = document.getElementById("generated-text");
    textarea.select();
    document.execCommand("copy");
}