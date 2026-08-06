const cursor = document.querySelector(".cursor-dot");

const desktop = window.matchMedia("(min-width: 769px)").matches;

if (desktop) {

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    const speed = 0.4;

    document.addEventListener("mousemove",(e)=>{
        mouseX=e.clientX;
        mouseY=e.clientY;
    });

    function updateCursor(){

        cursorX+=(mouseX-cursorX)*speed;
        cursorY+=(mouseY-cursorY)*speed;

        cursor.style.left=cursorX+"px";
        cursor.style.top=cursorY+"px";

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
const sxseWorksContainers = document.querySelector(".works-sxse-container")
if (sxseWorksContainers) {
    sxseWorksContainers.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(7)";
            sxseWorksContainers.style.border = "solid 20px #368EF3";  
        })
    } 

    sxseWorksContainers.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        sxseWorksContainers.style.border = "solid 2px white";
    })
    

const namasteWorksContainers = document.querySelector(".works-namaste-container")
if (namasteWorksContainers) {
    namasteWorksContainers.addEventListener("mouseover", () => {
            cursor.style.transform = "scale(7)";
            namasteWorksContainers.style.border = "solid 20px #368EF3";  
        })
    } 

    namasteWorksContainers.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        namasteWorksContainers.style.border = "solid 2px white";
    })

}
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




