let mainCon = document.getElementsByClassName("main_container");
let title = document.getElementById("main_title")
let story = document.getElementById("story-result")
let formm = document.getElementsByClassName("form_container")
let adlib = document.getElementsByClassName("adlib")
let titleInput = document.getElementById("title_input")
let noun = document.getElementById("noun")
let verb = document.getElementById("verb")
let adjective = document.getElementById("adjective")
let btn = document.getElementById("submit_button")

titleInput.addEventListener("input", function(){
    title.textContent = titleInput.value;
});

btn.addEventListener("click", e => {
    e.preventDefault();
    if (titleInput.value == "" || verb.value == "" || noun.value == "" || adjective.value == "" ) {
        alert("Please fill in all the boxes.")
    } else {
        let adlibbStory = `Last night I ate a ${noun.value}, and today I just had to ${verb.value}. What a ${adjective.value} day!`;
        formm[0].style.display = "none";
    story =  adlibbStory.innertext

        


    }
    
})
