let storageObject = JSON.parse(localStorage.getItem("myObject"));
console.log(storageObject);

let classStorage = document.querySelector(".storage");

function createStorage (a){
    classStorage.insertAdjacentHTML("beforeend", `
    <div class="storage_element">
        <img src=${a.img} id="element-img" class="imgStorage" alt="product">
        <div>
            <p id="element-name">You buy ${a.type} ${a.name}</p>
            <p id="element-item">${a.item}</p>
            <p id="element-size">Size:  ${localStorage.getItem("mySize")}</p>
        </div>
        <div class="storage_price">
        <span id="element-price">Price: $${a.price}</span>
        </div>
        <button id="delete">delete product</button>
    </div>`)
    }
createStorage(storageObject);   


document.getElementById("delete").onclick = () => {
    localStorage.removeItem(storageObject);
    classStorage.innerText="";
}




