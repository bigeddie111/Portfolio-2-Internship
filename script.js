const cursor = document.querySelector(".cursor-dot");
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.4; // Adjust this value to control the speed of the cursor

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursor() {
    const dx = mouseX - cursorX;
    const dy = mouseY - cursorY;
    cursorX += dx * speed;
    cursorY += dy * speed;

    cursor.style.top = cursorY + "px";
    cursor.style.left = cursorX + "px";

    requestAnimationFrame(updateCursor);
}

updateCursor();


//Changing cursor on hovering over navingation elements
const navLinks = document.querySelectorAll(".items-div ul li a")

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(7)";
    })
});


navLinks.forEach((link) => {
    link.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
    })
});


//Changing cursor on hovering over sxse container and changing html source
const worksContainers = document.querySelector(".works-sxse-container")
if (worksContainers) {
    worksContainers.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(7)";
            worksContainers.style.border = "solid 20px #368EF3";  
        })
    } 

 worksContainers.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        worksContainers.style.border = "solid 2px white";
    })
    


//About text scrolling animation
window.addEventListener("scroll", () => {
    let reveal = document.querySelectorAll(".about-p")
    for (let i = 0; i < reveal.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveal[i].getBoundingClientRect().top;
        let revealPoint = 70;

        if (revealTop < windowHeight - revealPoint){
            reveal[i].classList.add('active');
        } else {
            reveal[i].classList.remove('active');
        }
    }
}) 




