document.querySelectorAll(".our__button").forEach(event => {
    event.addEventListener("mouseover", e => {
       e.currentTarget.parentNode.parentNode.classList.add("our__button--hover")
       e.currentTarget.parentNode.parentNode.parentNode.classList.add("our__el__back--hover")
    });

    event.addEventListener("mouseout", e => {
        e.currentTarget.parentNode.parentNode.classList.remove("our__button--hover")
        e.currentTarget.parentNode.parentNode.parentNode.classList.remove("our__el__back--hover")
     });
})