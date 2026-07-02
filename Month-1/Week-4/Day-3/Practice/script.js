console.log("welcome to 3rd class")

// DOM manipulation 
// getElementsById
// getElementsByClassName()
// getElementsByTagName()

const p = document.getElementById("paragraph");
console.log(p);

const bold_tags= document.getElementsByClassName("bold-content");
console.log(bold_tags);

const h1_tags = document.getElementsByClassName("h1");
console.log(h1_tags);

// querySelector()
// querySelectorAll()


const bolds= document.querySelectorAll(".bold-content");
console.log(bolds)

bolds[0].innerText = "this is the bold tags"
console.log(bolds[0].innerText)
console.log(bolds[0].innerHTML)
console.log(bolds[0].parentNode)
console.log(bolds[0].className)

// bolds[0].className="hii"

console.log(bolds[0].getAttribute("class"));
bolds[0].setAttribute("id", "bold_id");
bolds[0].setAttribute("style", "color:red");
console.log(bolds[0].getAttribute("class"));

const div_box=document.querySelector(".box-container");
console.log(div_box);

// how to create the html element by javascript
const para = document.createElement("p");
para.innerText="this is the paragraph created by javascript"
para.style="background-color:blue;color:white"
div_box.append(para)

const para2=document.createElement("p");
para2.innerText="this is the paragraph 2 created by javascript"
div_box.append(para2)

// Event Handling
// target body
// event type
// event handler

const btn= document.querySelector("button");
console.log(btn);

btn.addEventListener("click", ()=>{
    console.log("button is pressed")
})

const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(e)
    console.log("form submitted")
})