/* Fixed project meta on scroll */
const projectMeta = document.getElementsByClassName("entry-meta")[0];

/* Function to add class on element when scrolling into view */
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    // Check if you have reached the element, then add or remove class
    if (entry.isIntersecting) {
      console.log("visible");
      entry.target.classList.add("visible");
    }  else {
      console.log("invisible");
      entry.target.classList.remove("visible");
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0
}
 

const observer = new IntersectionObserver(callback, options);

observer.observe(projectMeta);