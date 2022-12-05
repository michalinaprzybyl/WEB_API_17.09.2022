// Ćwiczenie 3.
// a) Stwórz funkcję displayForm()
// W funkcji:
// b) stwórz element <form> i nadaj mu id 'contact-form'
// c) stwórz element <h2> i nadaj mu textContent 'Contact us!'
// d) stwórz element <input> i nadaj mu type'email' oraz id 'contact-form-input-email'
// e) stwórz element <textarea> i nadaj mu id 'contact-form-textarea'
// f) stwórz element <button> i nadaj mu type 'submit', id 'contact-form-submit-button' oraz textContent na 'Send'
// g) podepnij wszystkie elementy do elementu form, a sam form podepnij do diva content
// h) testowo wywołaj funkcję (podepnij ją pod Page 1)

// a) 
export default function () {
    // b)
    const formElement = document.createElement("form");
    formElement.setAttribute("id", "contact-form");
    // c)
    const h2Element = document.createElement("h2");
    h2Element.textContent = "Contact us!";
    // d)
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "email");
    inputElement.setAttribute("id", "contact-form-input-email");
    // e)
    const textareaElement = document.createElement("textarea");
    textareaElement.setAttribute("id", "contact-form-textarea");
    // f)
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute("type", "submit");
    buttonElement.setAttribute("id", "contact-form-submit-button");
    buttonElement.textContent = "Send";
    // g)
    formElement.appendChild(h2Element);
    formElement.appendChild(inputElement);
    formElement.appendChild(textareaElement);
    formElement.appendChild(buttonElement);
    const divContent = document.getElementById("content");
    divContent.appendChild(formElement);

    //SUBMIT THEORY
    formElement.addEventListener("submit", function (event) {  //każda funkcja w addEventListenerze ma event jako 1 arg. defaultowo, ten event to obiekt reprezentujący dane zdarzenie
        event.preventDefault();   //  tylko przy reakcji na submit, służy do powstrzymania odświeżenia strony
        console.log(event);

        const inputValue = inputElement.value;
        const textareaValue = textareaElement.value;
        console.log(inputValue);
        console.log(textareaValue);
    });
}
