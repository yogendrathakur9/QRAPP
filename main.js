

 let form = document.querySelector("form")
let input = document.querySelector("input")
let image = document.querySelector("img")



form.addEventListener("submit", MakeQR);

async function MakeQR(e){
    e.preventDefault();
    
    let inputValue = input.value;
let res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${inputValue}`)

let qrimg = res.url;


image.setAttribute("src",qrimg);

form.reset();

}