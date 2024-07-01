var drumButtons = document.getElementsByClassName("drum");



for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", (function(i) {
        return function() {
            handleClick(i);
            playSound(drumButtons[i].textContent.trim());
        };
    })(i));
}

var heading1 = $("h1");
    var originalText = heading1.text(); // Store the original text

    heading1.on("mouseover", function() {
        makered();
        heading1.text("Roll the 🥁 Drum also using keypresses"); // Change text to "Drum Roll"
    });

    heading1.on("mouseout", function() {
        resetColor();
        heading1.text(originalText); // Revert text to original
    });

    function makered() {
        heading1.css("color", "red");
    }

    function resetColor() {
        heading1.css("color", "");
    }





for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", (function(i) {
        return function() {
            handleClick(i);
            playSound(drumButtons[i].textContent.trim());
        };
    })(i));
}

// Add keydown event listener to the document
document.addEventListener("keydown", function(event) {
    handleKeyPress(event.key);
});

function handleKeyPress(key) {
    switch(key) {
        case "w":
            handleClick(0);
            break;
        case "a":
            handleClick(1);
            break;
        case "s":
            handleClick(2);
            break;
        case "d":
            handleClick(3);
            break;
        case "j":
            handleClick(4);
            break;
        case "k":
            handleClick(5);
            break;
        case "l":
            handleClick(6);
            break;
        default:
            console.log("No sound for this key");
            return;
    }

        playSound(key);
    
}

function handleClick(x) {
    drumButtons[x].classList.add("pressed");
    drumButtons[x].style.color = "white"; // Change text color to white

    // Remove the class and reset text color after a short delay
    setTimeout(function() {
        drumButtons[x].classList.remove("pressed");
        drumButtons[x].style.color = ""; // Reset text color
    }, 100);
}

function playSound(key) {
    var audio;

    switch(key) {
        case "w":
            audio = new Audio("./sounds/crash.mp3")
            break;
        case "a":
            audio = new Audio('./sounds/kick-bass.mp3');
            break;
        case "s":
            audio = new Audio('./sounds/snare.mp3');
            break;
        case "d":
            audio = new Audio('./sounds/tom-1.mp3');
            break;
        case "j":
            audio = new Audio('./sounds/tom-2.mp3');
            break;
        case "k":
            audio = new Audio('./sounds/tom-3.mp3');
            break;
        case "l":
            audio = new Audio('./sounds/tom-4.mp3');
            break;
        default:
            console.log("No sound for this key");
            return;
    }

    audio.play();
}
