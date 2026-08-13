// Show welcome message
window.onload = function () {
    console.log("Welcome to Gayathri Portfolio");
};

// Contact Form Validation


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.querySelector("input[type='text']").value;
        const email = document.querySelector("input[type='email']").value;
        const message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {

            alert("Please fill all the fields.");

        } else {

            alert("Message Sent Successfully!");

            form.reset();

        }

    });

}


// Resume Download Button


const resumeBtn = document.querySelector(".btn");

if (resumeBtn) {

    resumeBtn.addEventListener("click", function () {

        console.log("Resume Downloaded");

    });

}


// Social Icons

const icons = document.querySelectorAll(".social-icons a");

icons.forEach(function(icon){

    icon.addEventListener("mouseenter",function(){

        icon.style.transform="scale(1.2)";

    });

    icon.addEventListener("mouseleave",function(){

        icon.style.transform="scale(1)";

    });

});


// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "45px";
topBtn.style.height = "45px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#00bcd4";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",function(){

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

// Active Navigation

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(function(link){

    link.addEventListener("click",function(){

        navLinks.forEach(function(item){

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});