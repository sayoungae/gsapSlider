document.addEventListener("DOMContentLoaded", function() {

    let caneTit = ["Pear", "Apple", "Exotic"];
    let logoColors = [
        "var(--pear-logo)",
        "var(--apple-logo)",
        "var(--exotic-logo)"
    ];

    const sections = document.querySelectorAll(".section");
    const prevBtn = document.getElementById("prevButton");
    const nextBtn = document.getElementById("nextButton");
    const caneLabels = document.querySelector(".cane-labels");
    const sectionContainer = document.querySelector(".section-content");

    let index = 0;
    let currentIndex = 0;
    let currentPosition = 0;

    nextBtn.addEventListener("click", () => {
        if(currentPosition > -200){
            currentPosition -= 100;

            caneLabels.style.left = `${currentPosition}%`;
            sectionContainer.style.left = `${currentPosition}%`;
        }
        currentIndex++;

        if(currentIndex < caneTit.length){
            document.querySelector(".caneTit").innerHTML = caneTit[currentIndex];
        }

        gsap.to(".logo", {
            opacity: 1,
            duration: 1,
            color: logoColors[currentIndex]
        });
        gsap.from(".caneTit", { y: "20%", opacity: 0, duration: 0.5 });

        if (currentIndex === caneTit.length - 1) {
            nextBtn.style.display = "none";
        }
        if(currentIndex > 0){
            prevBtn.style.display ="block";
        }

        nextBtn.style.color = logoColors[currentIndex + 1];
        prevBtn.style.color = logoColors[currentIndex - 1];
    });

    prevBtn.addEventListener("click", () => {
        if(currentPosition < 0){
            currentPosition += 100;

            caneLabels.style.left = `${currentPosition}%`;
            sectionContainer.style.left = `${currentPosition}%`
            sectionContainer.style.transition = `all 0.5s ease-in-out`;
        }

        currentIndex --;

        if(currentIndex >= 0){
            document.querySelector('.caneTit').innerHTML = caneTit[currentIndex];
        }

        gsap.to(".logo", {
            duration: 1,
            color: logoColors[currentIndex]
        });
        gsap.from(".caneTit", { y: "20%", opacity: 0, duration: 0.5 });

        nextButton.style.display = "block";
        if(currentIndex === 0){
            prevBtn.style.display ="none";
        }

        nextBtn.style.color = logoColors[currentIndex + 1];
        prevBtn.style.color = logoColors[currentIndex - 1];
    });
});
