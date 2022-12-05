// Ćwiczenie 1: Zapisz w zmiennych wszystkie elementy występujące w naszym dokumencie HTML. Staraj się nie modyfikować samego kodu HTML, lecz jeżeli będzie to konieczne, zrób to. Postaraj się wykorzystać różne poznane metody.

const body = document.body;
console.log(body);

const nav = document.querySelector("nav");
console.log(nav);
const nav2 = document.querySelectorAll("nav");
console.log(nav2[0]);

const h1 = nav.firstElementChild;
console.log(h1);
const navChildNodes = nav.childNodes;
console.log(navChildNodes[1]);

const nav3 = h1.parentElement;
console.log(nav3);

const [firstNavSpan, secondNavSpan, thirdNavSpan, fourthNavSpan] = document.getElementsByClassName("nav-span");
console.log(firstNavSpan);
console.log(secondNavSpan);
console.log(thirdNavSpan);
console.log(fourthNavSpan);

const div = document.getElementById("content");
console.log(div);
const div2 = nav.nextElementSibling;
console.log(div2);

const [firstArticle, secondArticle, thirdArticle, fourthArticle] = div.children;
console.log(firstArticle);
console.log(secondArticle);
console.log(thirdArticle);
console.log(fourthArticle);

const firstH2 = firstArticle.firstElementChild;
console.log(firstH2);
const firstParagraph = firstArticle.lastElementChild;
console.log(firstParagraph);

const secondH2 = secondArticle.firstElementChild;
console.log(secondH2);
const secondParagraph = secondArticle.lastElementChild;
console.log(secondParagraph);

const thirdH2 = thirdArticle.firstElementChild;
console.log(thirdH2);
const thirdParagraph = thirdArticle.lastElementChild;
console.log(thirdParagraph);

const fourthH2 = fourthArticle.firstElementChild;
console.log(fourthH2);
const fourthParagraph = fourthH2.nextElementSibling;
console.log(fourthParagraph);

const list = document.querySelector("ul");
const [firstLi, secondLi, thirdLi] = list.children;
console.log(firstLi);
console.log(secondLi);
console.log(thirdLi);
