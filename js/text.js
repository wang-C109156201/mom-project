document.addEventListener("DOMContentLoaded", () => {
    const text1Element = document.querySelector(".text1");
    const text2Element = document.querySelector(".text2");

    text1Element.addEventListener("animationend", () => {
        text2Element.classList.remove("hidden");
        text2Element.classList.add("animate__bounceInLeft", "animate__animated", "animate__bounce");
    });
});
