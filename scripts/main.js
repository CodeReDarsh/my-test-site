const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/rick-roll.png") {
        myImage.setAttribute("src", "images/cute-cat.png");
    } else {
        myImage.setAttribute("src", "images/rick-roll.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello ${myName}, you've been RICK ROLLED`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}, you've been RICK ROLLED`;
}

myButton.onclick = () => { setUserName(); };