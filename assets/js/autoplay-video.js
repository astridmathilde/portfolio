const video = document.querySelector("video");

/* Only play video when visible */
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Check if you have reached the element
    if (entry.isIntersecting) {
      entry.target.play();
      entry.target.classList.add("visible");
    }  else {
      entry.target.pause();
      entry.target.classList.remove("visible");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9
}

const observer = new IntersectionObserver(callback, options);

observer.observe(video);