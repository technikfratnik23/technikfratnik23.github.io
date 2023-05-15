// Define the function to choose a random message
function chooseRandomMessage(text) {
  // Split the string into an array of messages
  var messages = text.split("/");

  // Choose a random message
  var index = Math.floor(Math.random() * messages.length);
  var message = messages[index];

  // Return the chosen message
  return message;
}

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Set the URL of the file to read
var url = "motd.txt";

// Define the function to handle the response
xhr.onload = function() {
  // Check if the request was successful
  if (xhr.status === 200) {
    // Get the response text
    var allText = xhr.responseText;

    // Choose a random message
    var message = chooseRandomMessage(allText);

    // Display the message in the paragraph element
    var p = document.createElement("p");
    p.style.textAlign = "center";
    p.style.margin = "5px";
	p.style.fontSize = "20px";
	p.style.color = "rgb(255, 200, 255)";
    p.textContent = message;
    document.body.appendChild(p);
  }
};

// Send the request to the server
xhr.open("GET", url);
xhr.send();