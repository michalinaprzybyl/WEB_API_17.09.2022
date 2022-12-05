// Ćwiczenie 4.
// 1. Stwórz funkcję renderCalculator.
// 2. Stwórz element <form> i ustaw jego id na 'calculator'.
// 3. Stwórz 2 elementy <input>, obu nadaj type 'number', pierwszemu nadaj id 'first-number-input', drugiemu 'second-number-input'.
// 4. Stwórz element <select>.
// 5. Stwórz zwykły array: ["+", "-", "*", "/"], nazwij go 'options'.
// 6. Metodą map przejedź po arrayu options i zapisz wynik do zmiennej optionElements. W metodzie map stwórz element <option>, nadaj mu textContent i atrybut value na aktualny element po którym iterujesz (pierwszy parametr metody map) oraz zwróć element przy pomocy słowa kluczowego return.
// 7. Wywołaj metode forEach na liście optionElements. W metodzie forEach podepnij element po którym aktulanie iterujesz (pierwszy parametr metody forEach) do wcześniej stworzonego elementu <select>
// 8. Stwórz element <button> i nadaj mu type 'submit', id 'calculator-submit-button' i textContent 'CALCULATE'
// 9. Stwórz element <span> i nadaj mu id 'result-span'
// 10. Stwórz element <h2> i nadaj mu textContent 'Calculator'
// 11. Podepnij wszystkie stworzone elementy do elementu <form> za pomocą metody appendChild, kolejność: h2, firstNumberInput, secondNumberInput, select, submit button, result span
// 12. Podepnij element <form> do content diva 
// 13. Wyświetlaj kalkulator w Page 2.


// 1.
export default function () {
    // 2.
    const form = document.createElement("form");
    form.setAttribute("id", "calculator");

    // 3.
    const firstNumberInput = document.createElement("input");
    firstNumberInput.setAttribute("type", "number");
    firstNumberInput.setAttribute("id", "first-number-input");

    const secondNumberInput = document.createElement("input");
    secondNumberInput.setAttribute("type", "number");
    secondNumberInput.setAttribute("id", "second-number-input");

    // 4.
    const select = document.createElement("select");

    // 5.
    const options = ["+", "-", "*", "/"];

    // 6.
    const optionElements = options.map((el) => {
        const option = document.createElement("option");
        option.setAttribute("value", el);
        option.textContent = el;
        return option;
    });

    // 7.
    optionElements.forEach((option) => select.appendChild(option));

    // 8.
    const button = document.createElement("button");
    button.setAttribute("type", "submit");
    button.setAttribute("id", "calculator-submit-button");
    button.textContent = "GO";

    // 9.
    const span = document.createElement("span");
    span.setAttribute("id", "result-span");

    // 10.
    const h2 = document.createElement("h2");
    h2.textContent = "Calculator";

    // 11.
    form.appendChild(h2);
    form.appendChild(firstNumberInput);
    form.appendChild(secondNumberInput);
    form.appendChild(select);
    form.appendChild(button);
    form.appendChild(span);

    // 12.
    const contentDiv = document.getElementById("content");
    contentDiv.appendChild(form);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const firstInputValue = +firstNumberInput.value;
        const secondInputValue = +secondNumberInput.value;
        const selectValue = select.value;
        if (selectValue === "+")
            span.textContent = firstInputValue + secondInputValue;
        if (selectValue === "-")
            span.textContent = firstInputValue - secondInputValue;
        if (selectValue === "*")
            span.textContent = firstInputValue * secondInputValue;
        if (selectValue === "/")
            span.textContent = firstInputValue / secondInputValue;
    });
};

