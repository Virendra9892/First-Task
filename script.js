let string = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button1)=>{
    button1.addEventListener("click",(e)=>{
           console.log(e.target);
        //    string = string + e.target.innerHTML;
        //    document.querySelector("input").value = string;
    });
});