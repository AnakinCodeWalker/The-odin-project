const mountain = document.querySelector(".mountain");
const balloon = document.querySelector(".ballon");
const heading = document.getElementById("heading");
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("scroll", () => {
    const scrollY = wrapper.scrollTop;  // ← read wrapper’s scroll position

    // move at different speeds to create depth
    mountain.style.transform = `translateZ(-1000px) translateY(${scrollY * 0.2}px) scale(1.4)`;
    balloon.style.transform = `translateY(${scrollY * 0.5}px) scale(1.3)`;
    heading.style.transform = `translateY(${scrollY * 0.3}px)`;
});
