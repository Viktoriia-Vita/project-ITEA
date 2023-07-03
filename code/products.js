/* Верстка має бути реалізована через HTML & CSS (Семантична, гумова або статична, валідна, адаптивна).
- Навігаційне меню має бути клікабельним та адаптивним.
- На сторінках є товари у вигляді карточок, реалізуйте додавання кожного товару по натиску кнопки ADD TO CART до кошика, використовуючи джс реалізуйте можливість фільтрації товарів
- Стилізація та реалізація кошика залишається на ваш вибір
- Товари можна також додати на свій розсуд та зберігати у JS з подальшою публікацією на сторінці. Кожен товар це окремий об'єкт зі своїм набором правил (кольори, розміри і т.д) товари можна знайти на різних сайтах продажу одягу.
- Перехід між каталогом товарів реалізується пагінацією як на макеті.  - Catalog Page
- Товарів має бути не менше 50-шт та по 10-шт на одну сторінку
- Натиск на карточку товару відкриває нову сторінку з детальним описом товару Product Page*/

class Product {
    constructor (id, type, name, scrimg, imga, imgb, item, rate, price, sizes, colorsArr, sale) {
    this.id = id,
    this.type = type,
    this.name = name,
    this.img = scrimg,
    this.imga = imga,
    this.imgb = imgb,
    this.item = item,
    this.rate = rate,
    this.price = parseFloat(price),
    this.sizes = sizes,
    this.colorsArr = colorsArr.join(""),
    this.sale = sale
}};

function createProduct (a) {
    const catalog = document.querySelector(".catalog");
    catalog.insertAdjacentHTML("beforeend", `
    <div class="card-item white" id=${a.id}>
        <div class="center">
            <img src="${a.img}" class = "product__foto" alt="product">
        </div>
        <div class="card__product">${a.name}</div>
        <div class="center">
            <img src="./image/stars.png" class = "stars"  alt="5stars">
        </div>
        <div class="card__price">As low as $ <span class="price">${a.price}</span></div>
        <div class="colors">${a.colorsArr}</div>
    <div class="card__buy">ADD TO CART</div>
    </div>`);
    if (a.rate===4) {
        document.querySelector(".stars").removeAttribute(".src");
        document.querySelector(".stars").setAttribute("src", "./image/4stars.png")
    }
}

const short1 = new Product ("short1", "shorts", "Inlet Original Short", "./image/short1.jpg", "./image/short1-a.jpg", "./image/short1-b.jpg", "45785", 5, 39.99, [30, 32, 34, 38,40,42,44,46,48], ["&#11035", "&#129000", "&#128998", "&#129001"], false),
short2 = new Product ("short2", "shorts", "Marchal's  Cargo Short", "./image/short2.jpg",  "./image/short2-a.jpg", "./image/short2-b.jpg",  "47185", 5, 40.99, [32, 34, 36, 38,42,44,46,48], ["&#11036",, "&#129000", "&#128998", "&#129001"], false),
short3 = new Product ("short3", "shorts", "Jango Original Short", "./image/short3.jpg",  "./image/short3-a.jpg", "./image/short3-b.jpg",  "49685", 5, 38.99, [30, 34, 38, 40,42,44,46,48], ["&#11036", "&#11035", "&#129000", "&#128998", "&#129001"], false),
short4 = new Product ("short4", "shorts", "Sportif's Lauderdale Short", "./image/short4.jpg",  "./image/short4-a.jpg", "./image/short4-b.jpg",  "48525", 5, 67.99, [34, 36, 38, 40,42,46,48], ["&#11036", "&#11035", , "&#128998", "&#129001"], false),
short5 = new Product ("short5", "shorts", "Sportif's Original Short", "./image/short5.jpg",  "./image/short5-a.jpg", "./image/short5-b.jpg",  "49675", 4, 37.99, [34, 36, 38, 40,42,44,48], ["&#11036", "&#128998", "&#129001"], false),
short6 = new Product ("short6", "shorts", "Sportif's Hatteras Short", "./image/short6.jpg",  "./image/short6-a.jpg", "./image/short6-b.jpg",  "41475", 5, 38, [34, 38, 40,42,44,46,48], ["&#11036", "&#11035", "&#129000", "&#128998"], false),
short7 = new Product ("short7", "shorts", "Captain's Short", "./image/short7.jpg",  "./image/short7-a.jpg", "./image/short7-b.jpg", "41445", 4, 36, [34, 36, 38, 40,42,44,46,48], ["&#11036", "&#11035", "&#129000", "&#129001"], false),
short8 = new Product ("short8", "shorts", "Galapagos Plain Short", "./image/short8.jpg",  "./image/short8-a.jpg", "./image/short8-b.jpg", "46575", 5, 38.99, [34, 38, 40,48], [ "&#129000", "&#128998", "&#129001"], true),
short9 = new Product ("short9", "shorts", "Ecoths Gannon Short", "./image/short9.jpg",  "./image/short9-a.jpg", "./image/short9-b.jpg", "41575", 5, 48.99, [34, 38, 40,42,44,46,48], ["&#11036", "&#11035", "&#129000", "&#128998", "&#129001"], false),
short10 = new Product ("short10", "shorts", "Ecoths Ashcroft Short", "./image/short10.jpg",  "./image/short10-a.jpg", "./image/short10-b.jpg", "41875", 5, 50, [30, 32, 34, 38, 40,42,44,46,48], ["&#11036", "&#11035", "&#128998", "&#129001"], false),
pants1 = new Product ("pant1", "pants", "Inlet Original Pant", "./image/pant1.jpg", "./image/pant1-a.jpg", "./image/pant1-b.jpg", "31475", 4, 52.99, [34, 38, 40,42,44,46,48], ["&#11036", "&#129000", "&#128998", "&#129001"], false),
pants2 = new Product ("pant2", "pants", "TGIF Pant", "./image/pant2.jpg", "./image/pant2-a.jpg", "./image/pant2-b.jpg",  "32475", 4, 40.99, [30, 32, 34, 38, 40,42,44,46,48], ["&#11036", "&#11035", "&#128998", "&#129001"], true),
pants3 = new Product("pant3", "pants", "Inlet Cargo Pant", "./image/pant3.jpg", "./image/pant3-a.jpg", "./image/pant3-b.jpg",  "34875", 5, 54.99, [34, 36, 38, 42, 44, 46, 48], ["&#11036", "&#129000", "&#128998", "&#129001"], false),
pants4 = new Product ("pant4", "pants", "Haggar Men's Cool", "./image/pant4.jpg", "./image/pant4-a.jpg", "./image/pant4-b.jpg",  "38741", 5, 51.99, [36, 38, 44, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129001"], false),
pants5 = new Product ("pant5", "pants", "Signature Men Scrubs Pant", "./image/pant5.jpg", "./image/pant5-a.jpg", "./image/pant5-b.jpg",  "36141", 5, 42.99, [36, 38, 44, 46, 48], ["&#11036",  "&#129000", "&#11035", "&#128998", "&#129001"], false),
pants6 = new Product ("pant6", "pants", "Goodthreads Men's Straight-Fit ", "./image/pant6.jpg", "./image/pant6-a.jpg", "./image/pant6-b.jpg",  "36247", 5, 42.99, [36, 38, 40, 42, 46, 48], ["&#11036",  "&#129000", "&#11035", "&#128998"], true),
pants7 = new Product ("pant7", "pants", "Dockers Men's Classic", "./image/pant7.jpg", "./image/pant7-a.jpg", "./image/pant7-b.jpg",  "36140", 4, 47.99, [38, 40, 42, 44, 46, 48], ["&#11036",  "&#129000", "&#11035", "&#129001"], false),
pants8 = new Product ("pant8", "pants", "Lux Cotton Stretch Pants", "./image/pant8.jpg", "./image/pant8-a.jpg", "./image/pant8-b.jpg",  "36140", 5, 50.99, [38, 40, 42, 44, 46, 48], ["&#11036",  "&#129000", "&#11035", "&#129001"], false),
pants9 = new Product ("pant9", "pants", "Performance Pleated Chino Pants", "./image/pant9.jpg", "./image/pant9-a.jpg", "./image/pant9-b.jpg",  "38524", 5, 45.99, [36, 38, 40, 42, 44, 46, 48], ["&#11036",  "&#129000", "&#11035", "&#129001"], false),
pants10 = new Product ("pant10", "pants", "Performance Pleated Chino Pants", "./image/pant10.jpg", "./image/pant10-a.jpg", "./image/pant10-b.jpg",  "38544", 5, 51.99, [36, 38, 42, 44, 46, 48], [ "&#129000", "&#11035", "&#129001"], false),
shirt1 = new Product ("shirt1", "shirts", "Stretch Polo Shirt", "./image/shirt1.jpg", "./image/shirt1-a.jpg", "./image/shirt1-b.jpg",  "33698", 5, 14.99, [36, 38, 42, 44, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129000", "&#129001"], false),
shirt2 = new Product ("shirt2", "shirts", "Men's Slim-Fit Tech Shirt", "./image/shirt2.jpg", "./image/shirt2-a.jpg", "./image/shirt2-b.jpg",  "33148", 5, 15.99, [34, 36, 38, 42, 44, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129000", "&#129001"], false),
shirt3 = new Product ("shirt3", "shirts", "X-Temp Short Sleeve Polo Shirt", "./image/shirt3.jpg", "./image/shirt3-a.jpg", "./image/shirt3-b.jpg",  "33149", 5, 12.99, [34, 36, 38, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129000", "&#129001"], true),
shirt4 = new Product ("shirt4", "shirts", "Midweight Men's Shirt", "./image/shirt4.jpg", "./image/shirt4-a.jpg", "./image/shirt4-b.jpg",  "33129", 5, 16.99, [34, 36, 38, 40, 42, 46, 48], ["&#11036", "&#128998", "&#129000", "&#129001"], false),
shirt5 = new Product ("shirt5", "shirts", "Short Sleeve Button Shirt", "./image/shirt5.jpg", "./image/shirt5-a.jpg", "./image/shirt5-b.jpg",  "33349", 5, 15.99, [34, 38, 40, 42, 46,], ["&#11036", "&#128998", "&#129000", "&#129001"], false),
shirt6 = new Product ("shirt6", "shirts", "Down Check Shirt", "./image/shirt6.jpg", "./image/shirt6-a.jpg", "./image/shirt6-b.jpg",  "33479", 4, 11.99, [38, 40, 42, 46,], ["&#11036", "&#128998", "&#129001"], true),
shirt7 = new Product ("shirt7", "shirts", "Short Sleeve Polo Shirt", "./image/shirt7.jpg", "./image/shirt7-a.jpg", "./image/shirt7-b.jpg",  "33249", 5, 12.99, [34, 36, 38, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129000", "&#129001"], true),
shirt8 = new Product ("shirt8", "shirts", "Regular Fit Oxford Solid Shirt", "./image/shirt8.jpg", "./image/shirt8-a.jpg", "./image/shirt8-b.jpg",  "33244", 5, 16.99, [34, 36, 38, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129001"], false),
shirt9 = new Product ("shirt9", "shirts", "Van Heusen Men's Dress Shirt", "./image/shirt9.jpg", "./image/shirt9-a.jpg", "./image/shirt9-b.jpg",  "33254", 5, 18.99, [34, 36, 38, 40, 42, 44, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129001"], false),
shirt10 = new Product ("shirt10", "shirts", "Short-Sleeve Poplin Shirt", "./image/shirt10.jpg", "./image/shirt10-a.jpg", "./image/shirt10-b.jpg",  "33844", 5, 17.99, [38, 40, 42, 44, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129001"], false),
belt1 = new Product ("belt1", "belts", "Men's Double Loop Belt", "./image/belt1.jpg", "./image/belt1-a.jpg", "./image/belt1-b.jpg",  "88457", 5, 18.99, [38, 40, 42, 44, 46, 48], ["&#11036", "&#11035", "&#128998", "&#129001"], false),
belt2 = new Product ("belt2", "belts", "Belt-Casual Dress", "./image/belt2.jpg", "./image/belt2-a.jpg", "./image/belt2-b.jpg",  "88497", 4, 16.99, [38, 40, 42, 44, 46, 48], ["&#11036", "&#11035", "&#129000", "&#128998", "&#129001"], true),
belt3 = new Product ("belt3", "belts", "Three Interchangeable Belt Straps", "./image/belt3.jpg", "./image/belt3-a.jpg", "./image/belt3-b.jpg",  "88498", 5, 21.99, [38, 40, 42, 44, 46, 48], ["&#11036", "&#11035", "&#129000", "&#128998", "&#129001"], false),
belt4 = new Product ("belt4", "belts", "Timothy Leather Belt", "./image/belt4.jpg", "./image/belt4-a.jpg", "./image/belt4-b.jpg",  "88478", 5, 19.99, [38, 42, 44, 46, 48], ["&#11036", "&#129000", "&#128998", "&#129001"], false),
belt5 = new Product ("belt5", "belts", "Dockers Men's Leather Casual Belt", "./image/belt5.jpg", "./image/belt5-a.jpg", "./image/belt5-b.jpg",  "88578", 5, 23.99, [38, 40, 42, 44, 46, 48], ["&#11036", "&#129000", "&#128998", "&#129001"], false),
belt6 = new Product ("belt6", "belts", "Leather Double Prong Belt", "./image/belt6.jpg", "./image/belt6-a.jpg", "./image/belt6-b.jpg",  "88568", 5, 23.99, [38, 36,  40, 42, 44, 46], ["&#11035", "&#11036", "&#129000", "&#128998", "&#129001"], false),
belt7 = new Product ("belt7", "belts", "Cowhide Leather Belt", "./image/belt7.jpg", "./image/belt7-a.jpg", "./image/belt7-b.jpg",  "88768", 5, 23.99, [38, 40, 42, 44, 46], ["&#11035", "&#11036", "&#129000", "&#129001"], false),
belt8 = new Product ("belt8", "belts", "35mm Classic Jean Belt", "./image/belt8.jpg", "./image/belt8-a.jpg", "./image/belt8-b.jpg",  "88788", 5, 21.99, [34, 38, 40, 42, 44, 46], ["&#11035", "&#11036", "&#129000", "&#129001"], false),
belt9 = new Product ("belt9", "belts", "Every Day Leather Belt", "./image/belt9.jpg", "./image/belt9-a.jpg", "./image/belt9-b.jpg",  "88988", 5, 20.99, [34, 38, 40, 42, 44, 46], ["&#11035", "&#11036", "&#129000", "&#129001"], false),
belt10 = new Product ("belt10", "belts", "Men's Dress Casual Belt", "./image/belt10.jpg", "./image/belt10-a.jpg", "./image/belt10-b.jpg",  "88908", 5, 22.99, [34, 40, 42, 44, 46], ["&#11035", "&#11036", "&#128998", "&#129000", "&#129001"], false),
trunk1 = new Product ("trunk1", "trunks", " Men's Standard Swim Trunk", "./image/trunk1.jpg", "./image/trunk1-a.jpg", "./image/trunk1-b.jpg",  "55486", 4, 14.99, [34, 36, 40, 42, 44, 46], ["&#11035", "&#11036", "&#128998", "&#129000", "&#129001"], true),
trunk2 = new Product ("trunk2", "truns", "Classic Anchor Print Swim Trunk", "./image/trunk2.jpg", "./image/trunk2-a.jpg", "./image/trunk2-b.jpg",  "55482", 5, 17.99, [ 36, 40, 42, 44, 46, 48], ["&#11035", "&#11036", "&#128998", "&#129000", "&#129001"], false),
trunk3 = new Product ("trunk3", "trunks", "Essentials Men's Board Shorts", "./image/trunk3.jpg", "./image/trunk3-a.jpg", "./image/trunk3-b.jpg",  "55483", 5, 18.99, [34, 38, 40, 42, 44, 46, 48], ["&#11035", "&#11036", "&#128998", "&#129000", "&#129001"], false),
trunk4 = new Product ("trunk4", "trunks", "Quick Dry Solid Swim Trunk", "./image/trunk4.jpg", "./image/trunk4-a.jpg", "./image/trunk4-b.jpg",  "55484", 5, 16.99, [36, 38, 44, 46, 48], ["&#11035", "&#11036", "&#128998", "&#129000", "&#129001"], false),
trunk5 = new Product ("trunk5", "trunks", "Compression Lined Volley", "./image/trunk5.jpg", "./image/trunk5-a.jpg", "./image/trunk5-b.jpg",  "55485", 4, 13.99, [40, 44, 48], ["&#11035", "&#129000", "&#129001"], true),
trunk6 = new Product ("trunk6", "trunks", "Cargo Pocket Boardshort Swim Trunk", "./image/trunk6.jpg", "./image/trunk6-a.jpg", "./image/trunk6-b.jpg",  "55465", 5, 19.99, [38, 40, 44, 46, 48], ["&#11035", "&#129000", "&#11036", "&#128998"], false),
trunk7 = new Product ("trunk7", "trunks", "Uv Protected Quick Dry Swim Trunk", "./image/trunk7.jpg", "./image/trunk7-a.jpg", "./image/trunk7-b.jpg",  "55467", 5, 19.99, [34, 38, 40, 42, 44, 46, 48], [ "&#129000", "&#11036", "&#128998"], false),
trunk8 = new Product ("trunk8", "trunks", "Swim Trunk Bathing Suit", "./image/trunk8.jpg", "./image/trunk8-a.jpg", "./image/trunk8-b.jpg",  "55468", 5, 17.99, [34, 38, 40, 42, 44], ["&#11035", "&#129000", "&#11036", "&#128998"], false),
trunk9 = new Product ("trunk9", "trunks", "Board Short Swim Trunk", "./image/trunk9.jpg", "./image/trunk9-a.jpg", "./image/trunk9-b.jpg",  "55469", 5, 15.99, [34, 38, 42, 44], ["&#11035", "&#129000", "&#11036"], false),
trunk10 = new Product ("trunk10", "trunks", "Swimsuit Brief Endurance", "./image/trunk10.jpg", "./image/trunk10-a.jpg", "./image/trunk10-b.jpg",  "55409", 5, 18.99, [34, 38, 40, 42, 44, 46], ["&#11035", "&#129000", "&#11036", "&#128998"], false)



let productsAll =[short1, short2, short3, short4, short5, short6, short7, short8, short9, short10, pants1, pants2, pants3, pants4, pants5, pants6, pants7, pants8, pants9, pants10, shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, belt1, belt2, belt3, belt4, belt5, belt6, belt7, belt8, belt9, belt9, belt10, trunk1, trunk2, trunk3, trunk4, trunk5, trunk6, trunk7, trunk8, trunk9, trunk10];

const page1 = document.getElementById("page1"),
      page2 = document.getElementById("page2"),
      page3 = document.getElementById("page3"),
      page4 = document.getElementById("page4"),
      page5 = document.getElementById("page5"),
      catalog = document.getElementById("catalog");

window.onload = () => {
    for (let i=0; i<10; i++) {
        createProduct(productsAll[i]);
        page1.classList.add("red");
    };
    page1.onclick =()=>{
        catalog.innerHTML="";
        page1.classList.add("red");
        page2.classList.remove("red");
        page3.classList.remove("red");
        page4.classList.remove("red");
        page5.classList.remove("red");
        for (let i=0; i<10; i++) {
            createProduct(productsAll[i]);
        };
    };
    page2.onclick =()=>{
        catalog.innerHTML="";
        page1.classList.remove("red");
        page2.classList.add("red");
        page3.classList.remove("red");
        page4.classList.remove("red");
        page5.classList.remove("red");
        for (let i=10; i<20; i++) {
            createProduct(productsAll[i]);
        };
    };
    page3.onclick =()=>{
        catalog.innerHTML="";
        page1.classList.remove("red");
        page2.classList.remove("red");
        page3.classList.add("red");
        page4.classList.remove("red");
        page5.classList.remove("red");
        for (let i=20; i<30; i++) {
            createProduct(productsAll[i]);
        };
    };
    page4.onclick =()=>{
        catalog.innerHTML="";
        page1.classList.remove("red");
        page2.classList.remove("red");
        page3.classList.remove("red");
        page4.classList.add("red");
        page5.classList.remove("red");
        for (let i=30; i<40; i++) {
            createProduct(productsAll[i]);
        };
    };
    page5.onclick =()=>{
        catalog.innerHTML="";
        page1.classList.remove("red");
        page2.classList.remove("red");
        page3.classList.remove("red");
        page4.classList.remove("red");
        page5.classList.add("red");
        for (let i=40; i<51; i++) {
            createProduct(productsAll[i]);
        };
    };


    /*записати в змінну = прочитати атрибут id на a(те, на що клікаємо)
    //в масиві productsAll .find or.map згайти об'єкт по властивості і записати його в змінну objectCard
    //перенеправити на нову сторінку про товар з базовим js, потім додпти новий елемент html
    // в нього дпдати інфу з самого об'єкта по властивостям*/
    let [...cards] = document.getElementsByClassName("card-item");
    for(let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.onclick = (card)=> {
            let test = card.target.id;
            let thisObject = productsAll.find(element => element.id===test);
            //let indexObject = productsAll.indexOf(thisObject);
            localStorage.setItem("myObject", `${JSON.stringify(thisObject)}`);
            console.log(JSON.stringify(thisObject) );
            window.open (`http://127.0.0.1:5500/ProductPage.html`); 
        }
    }     
}
//фільтрація по розмірам
let filterAll=new Array,
filterSize, 
choosenSize;
let [...span] = document.getElementsByClassName("size");
for(let i = 0; i < span.length; i++) {
    let size = span[i];
        size.onclick = (size) =>{ 
        //при другому кліку прибрати фільтр з цього розміру
        size.target.style.background="#A04955";
        document.getElementById("screen").style.height="fit-content";
        document.getElementById("catalog").style.height="fit-content";
        choosenSize = parseInt((size.target.outerText));
        console.log(choosenSize);
        
        filterSize = productsAll.filter(product=>{   
            let arrSizes = product.sizes;
            return(arrSizes.includes(choosenSize)==true);
        })
        let choosenLength = filterSize.length;
        if ( filterAll.length==0 || filterAll[0].sizes.includes(choosenSize)==false){
        for (let x =0; x<filterSize.length; x++){
            filterAll.push(filterSize[x])}
            catalog.innerHTML="";
        for (let i=0; i<filterAll.length; i++) {
            createProduct(filterAll[i]);
            } 
        }
        
                
        else if (filterAll[0].sizes.includes(choosenSize===true)){
            size.target.style.background="#E5E5E5";    
            filterAll.splice((filterAll.length-choosenLength), choosenLength)   
            console.log(filterAll);     
            catalog.innerHTML="";     
            for (let i=0; i<filterAll.length; i++) {
                createProduct(filterAll[i]);
                }           
            }
        }
}


// фільтрація по кольору
const filter_khaki = document.getElementById("filter_khaki"),
filter_white = document.getElementById("filter_white"),
filter_black = document.getElementById("filter_black"),
filter_blue = document.getElementById("filter_blue"),
filter_beigh = document.getElementById("filter_beigh");

    filter_khaki.onclick =()=> {
        document.getElementById("screen").style.height="fit-content";
        document.getElementById("catalog").style.height="fit-content";
        document.querySelector(".chooseColors span:nth-child(6)").style.background="#A04955";
        let filterColor = productsAll.filter(product=>{   
            return (product.colorsArr).includes("&#129001")===true;
        })
        for (let x =0; x<filterColor.length; x++){
            filterAll.push(filterColor[x])
        }
        console.log(filterAll);
        catalog.innerHTML="";
        for (let i=0; i<filterAll.length; i++) {
        createProduct(filterAll[i]); 
        }
    }
    filter_white.onclick =()=> {
        document.querySelector(".chooseColors span:nth-child(2)").style.background="#A04955";
        document.getElementById("screen").style.height="fit-content";
        document.getElementById("catalog").style.height="fit-content";
        let filterColor = productsAll.filter(product=>{   
            return (product.colorsArr).includes("&#11036")===true;
        })
        for (let x =0; x<filterColor.length; x++){
            filterAll.push(filterColor[x])
        }
        console.log(filterAll);
        catalog.innerHTML="";
        for (let i=0; i<filterAll.length; i++) {
        createProduct(filterAll[i]); 
        }
    }
    filter_black.onclick =()=> {
        document.querySelector(".chooseColors span:nth-child(3)").style.background="#A04955"
        document.getElementById("screen").style.height="fit-content";
        document.getElementById("catalog").style.height="fit-content";
        let filterColor = productsAll.filter(product=>{   
            return (product.colorsArr).includes("&#11035")===true;
        })
        for (let x =0; x<filterColor.length; x++){
            filterAll.push(filterColor[x])
        }
        console.log(filterAll);
        catalog.innerHTML="";
        for (let i=0; i<filterAll.length; i++) {
        createProduct(filterAll[i]); 
        }
    }
    filter_beigh.onclick =()=> {
        document.querySelector(".chooseColors span:nth-child(4)").style.background="#A04955"
        document.getElementById("screen").style.height="fit-content";
        document.getElementById("catalog").style.height="fit-content";
        let filterColor = productsAll.filter(product=>{   
            return (product.colorsArr).includes("&#129000")===true;
        })
        for (let x =0; x<filterColor.length; x++){
            filterAll.push(filterColor[x])
        }
        console.log(filterAll);
        catalog.innerHTML="";
        for (let i=0; i<filterAll.length; i++) {
        createProduct(filterAll[i]); 
        }
    }
    filter_blue.onclick =()=> {
        document.querySelector(".chooseColors span:nth-child(5)").style.background="#A04955"
        document.getElementById("screen").style.height="fit-content";
        document.getElementById("catalog").style.height="fit-content";
        let filterColor = productsAll.filter(product=>{   
            return (product.colorsArr).includes("&#128998")===true;
        })
        for (let x =0; x<filterColor.length; x++){
            filterAll.push(filterColor[x])
        }
        console.log(filterAll)
        catalog.innerHTML="";
        for (let i=0; i<filterAll.length; i++) {
        createProduct(filterAll[i]); 
    }
}

    