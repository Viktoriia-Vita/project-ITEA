
let thisObject = JSON.parse(localStorage.getItem('myObject'));
console.log(thisObject);
let bigImg = document.getElementById("bigImage");
bigImg.setAttribute("src", `${thisObject.img}`);
let small1 = document.getElementById("smallImage1");
small1.setAttribute("src", `${thisObject.imga}`);
let small2 = document.getElementById("smallImage2");
small2.setAttribute("src", `${thisObject.imgb}`);
document.getElementById("Pagename").innerHTML = `${thisObject.name}`;
document.getElementById("Pageitem").innerHTML = ` #${thisObject.item}`;
if(thisObject.rate===4){
    document.getElementById("rating").setAttribute("src", `./image/4stars.png`);
};
document.getElementById("pricePage").innerHTML = `$${thisObject.price}`;
document.getElementById("colorPage").innerHTML = `${thisObject.colorsArr}`; 

small1.onclick = ()=>{
    bigImg.setAttribute("src", `${thisObject.imga}`);
    small1.setAttribute("src", `${thisObject.img}`);
};
small2.onclick = ()=>{
    bigImg.setAttribute("src", `${thisObject.imgb}`);
    small2.setAttribute("src", `${thisObject.imga}`);
};


let [...span] = document.getElementsByClassName("size");
for(let i = 0; i < span.length; i++) {
    let size = span[i];
size.onclick = (size) =>{
    size.target.setAttribute("class", "choosen");
    let choosenSize = size.target.outerText;
    console.log(choosenSize);
    localStorage.setItem("mySize", `${choosenSize}`);

 }};

let addToCart = document.getElementById("addToCart");
addToCart.onclick = () => { // добавить властивість до локал стораж об'єкту
    if (confirm("The product has been added to the cart. Want to open the cart?") == true) {
        window.open(`http://127.0.0.1:5500/storage.html`)
      } else {
        text = "Keep shopping";
      }

}