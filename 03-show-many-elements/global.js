const hideMeElements = document.querySelectorAll(".show_me")
const button = document.querySelector("#button")


button.addEventListener('click', function(e) {
    hideMeElements.forEach(function(element) {
        element.style.display = "initial";
    })
})