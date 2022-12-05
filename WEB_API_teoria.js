// 1. SELEKTORY (query methods)

// a) document.querySelector()
// Przyjmuje jako argument selektor CSSowy, zwraca pierwszy pasujacy element, jeżeli nie znajdzie nic to zwraca null.

// Wybieranie po ID
const navH1 = document.querySelector("#nav-h1");
console.log(navH1);
console.log(typeof navH1);

// Wybieranie po klasie
const firstNavSpan = document.querySelector(".nav-span");
console.log(firstNavSpan);

// Wybieranie po tagu
const nav = document.querySelector("nav");
console.log(nav);

// b) document.querySelectorAll()
// Przyjmuje jako argument selektor CSSowy, zwraca NodeList, jeżeli nie znajdzie nic to zwraca null.
const navSpans = document.querySelectorAll(".nav-span");
console.log(navSpans);
navSpans.forEach((el) => console.log(el));

// c) document.getElementById()
const contentDiv = document.getElementById("content");
console.log(contentDiv);

// d) document.getElementsByClassName()
// Zwraca HTMLCollection
const navSpans2 = document.getElementsByClassName("nav-span");
console.log(navSpans2);

// 2. SUB-SELEKTORY

// a) element.childNodes
// Dostęp do wszystkich node'ów dzieci danego elementu
const contentDivChildren = contentDiv.childNodes;
console.log(contentDivChildren);
// - childElementCount
console.log(contentDiv.childElementCount);
console.log(document.childNodes);

// b) element.firstElementChild
// Dostęp do pierwszego dziecka danego elementu
const contentDivFirstChild = contentDiv.firstElementChild;
console.log(contentDivFirstChild);

// c) element.lastElementChild
// Dostęp do ostatniego dziecka danego elementu
const contentDivLastChild = contentDiv.lastElementChild;
console.log(contentDivLastChild);

// d) element.nextElementSibling
console.log(contentDivFirstChild.nextElementSibling);

// e) element.parentElement
// Dostęp do elementu rodzica dla danego elementu
console.log(contentDivLastChild.parentElement);

// 3. TWORZENIE I DODAWANIE ELEMENTÓW

// a) document.createElement()
// Tworzy element w zależności od podanego argumentu, do argumentu wchodzi nazwa tagu
const additionalLi = document.createElement("li");
additionalLi.textContent = 'document.querySelectorAll("cssSelectorHere")';
console.log(additionalLi);

// b) element.appendChild()
// Dodaje podany w argumencie element jako ostatnie dziecko elementu na którym metoda została wywołana
const list = document.querySelector("ul");
list.appendChild(additionalLi);

// c) element.insertBefore()
// Dodaje podany w argumencie element w określonym miejscu
const li2 = document.createElement("li");
li2.textContent = "123";
list.insertBefore(li2, list.childNodes[2]);

// d) string + element.insertAdjacentHTML()
const html = '<li id="li-to-remove">Element inserted using insertAdjacentHTML method.</li>';
list.insertAdjacentHTML("beforeend", html);

// 4. USUWANIE ELEMENTÓW

// a) czyszczenie zawartości elementów przy pomocy innerHTML
const firstArticle = contentDiv.children;
console.log(firstArticle[0]);
firstArticle[0].innerHTML = "";

// b) element.remove()
const liToRemove = document.getElementById("li-to-remove");
console.log(liToRemove);
liToRemove.remove();

// c) element.removeChild()
// Usuwa podany element dziecko z elemetu na którym metoda została wywołana.
console.log(list.childNodes);  // zwraca NodeList
console.log(list.children);  // zwraca HTMLCollection
list.removeChild(list.firstElementChild);

// 5. ZAMIANA ELEMENTÓW - element.replaceChild()

// Metoda wywoływana na elemencie rodzicu, pierwszy argument to element nowy (do wstawienia), drugi argument to element stary (do usunięcia).
const li3 = document.createElement("li");
li3.textContent = "This is a replaced element.";
list.replaceChild(li3, additionalLi);

// 6. KLONOWANIE ELEMENTÓW - element.cloneNode()

// a) klonowanie płytkie
// <li id="1">123</li>
// <li id='1'></li>
const shallowClonedLi = li3.cloneNode(false);
console.log(shallowClonedLi);

// b) klonowanie głębokie
// <li id="1">123</li>
// <li id='1'>123</li>
const deepClonedLi = li3.cloneNode(true);
console.log(li3);    // DUPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
console.log(deepClonedLi);

// 7. AKTUALIZACJA/DODAWANIE/USUWANIE ZAWARTOŚCI

// a) element.textContent
// Dostęp do zawartości tekstowej danego elementu
deepClonedLi.textContent = "321";
// console.log(deepClonedLi.textContent);

// b) element.innerText
// Dostęp do zawartości tekstowej danego elementu
deepClonedLi.innerText = "ABC";
// console.log(deepClonedLi);

// c) element.innerHTML
console.log(firstArticle[1].innerHTML);
firstArticle[1].innerHTML = "<h3>XYZ</h3>";
console.log(firstArticle[1].innerHTML);

// d) element.appendChild()
// Modyfikacja elementu poprzez dodanie kolejnego elementu jako ostatnie dziecko.

// 8. DODAWANIE/AKTUALIZACJA/USUWANIE ATRYBUTÓW ELEMENTÓW.

// a) element.attributes
// Zwraca NameNodeMap
console.log(navH1.attributes);

// b) element.setAttribute()
// Metoda służy do dodawania atrybutów, pierwszy argument to nazwa atrybutu, drugi argument to wartość atrybutu.
deepClonedLi.setAttribute("id", "deep-cloned");
console.log(deepClonedLi);

// c) element.removeAttribute()
// Metoda usuwa podany w argumencie atrybut.
deepClonedLi.removeAttribute("id");
console.log(deepClonedLi);










import renderDisplayForm from "./renderDisplayForm.js";
import renderCalculator from "./renderCalculator.js";

// Ćwiczenie 2.
// a) Usuń wszystkie elementy HTML z body.
// b) Odtwórz interfejs przy pomocy wcześniej podanych metod (document.createElement, element.appendChild, setAttribute...).

// a)
const navElement = document.querySelector("nav");
navElement.remove();
const divElement = document.getElementById("content");
divElement.remove();

// b)
const body = document.body;
const navTag = document.createElement("nav");
body.appendChild(navTag);
const divTag = document.createElement("div");
body.appendChild(divTag);
divTag.setAttribute("id", "content");

const navH1Element = document.createElement("h1");
navTag.appendChild(navH1Element);
navH1Element.setAttribute("id", "nav-h1");
navH1Element.textContent = "DOM";

const homeSpan = document.createElement("span");
navTag.appendChild(homeSpan);
homeSpan.setAttribute("class", "nav-span");
homeSpan.textContent = "Home";

for (let i = 1; i < 4; i++) {
    const span = document.createElement("span");
    navTag.appendChild(span);
    span.setAttribute("class", "nav-span");
    span.textContent = `Page ${i}`;
}

const renderHomePage = () => {
    const firstArticle = document.createElement("article");
    divTag.appendChild(firstArticle);
    const firstH2 = document.createElement("h2");
    firstH2.textContent = "Introduction to JavaScript's Document Object Model.";
    firstArticle.appendChild(firstH2);
    const firstParagraph = document.createElement("p");
    firstParagraph.setAttribute("class", "article-paragraph");
    firstParagraph.textContent = "The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.";
    firstArticle.appendChild(firstParagraph);

    const secondArticle = document.createElement("article");
    divTag.appendChild(secondArticle);
    const secondH2 = document.createElement("h2");
    secondH2.textContent = "What's DOM?";
    secondArticle.appendChild(secondH2);
    const secondParagraph = document.createElement("p");
    secondParagraph.setAttribute("class", "article-paragraph");
    secondParagraph.textContent = "The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page. A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.";
    secondArticle.appendChild(secondParagraph);

    const thirdArticle = document.createElement("article");
    divTag.appendChild(thirdArticle);
    const thirdH2 = document.createElement("h2");
    thirdH2.textContent = "DOM and JavaScript.";
    thirdArticle.appendChild(thirdH2);
    const thirdParagraph = document.createElement("p");
    thirdParagraph.setAttribute("class", "article-paragraph");
    thirdParagraph.textContent = "The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript. The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime. The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language.";
    thirdArticle.appendChild(thirdParagraph);

    const lastArticle = document.createElement("article");
    divTag.appendChild(lastArticle);
    const lastH2 = document.createElement("h2");
    lastH2.textContent = "How to access the DOM?";
    lastArticle.appendChild(lastH2);
    const lastParagraph = document.createElement("p");
    lastParagraph.setAttribute("class", "article-paragraph");
    lastParagraph.textContent = "You don't have to install anything additional, just JavaScript will do. We have a few methods called 'selectors', these methods are used to access DOM elements and are found on the global 'document' object, which is an object representation of the whole HTML document. Here are some of them:"
    lastArticle.appendChild(lastParagraph);

    const ul = document.createElement("ul");
    lastParagraph.appendChild(ul);
    const firstLi = document.createElement("li");
    firstLi.textContent = "document.querySelector('cssSelectorHere')";
    ul.appendChild(firstLi);
    const secondLi = document.createElement("li");
    secondLi.textContent = "document.getElementById('elementsIdHere')";
    ul.appendChild(secondLi);
    const thirdLi = document.createElement("li");
    thirdLi.textContent = "document.getElementsByClassName('classNameHere')";
    ul.appendChild(thirdLi);
};
renderHomePage();


const navSpan = document.getElementsByClassName("nav-span");
const divContent = document.getElementById("content");

// Ćwiczenie 5. Po klinięciu na przycisk Home ma się wyświetlić Home Page.
navSpan[0].addEventListener("click", () => {
    divContent.innerHTML = "";
    renderHomePage();
});

navSpan[1].addEventListener("click", () => {
    divContent.innerHTML = "";
    renderDisplayForm();
});

navSpan[2].addEventListener("click", () => {
    divContent.innerHTML = "";
    renderCalculator();
});
