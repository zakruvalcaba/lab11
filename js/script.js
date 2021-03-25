// ADD EVENT HANDLER TO EACH H2 ELEMENT
const toggle = (e) => {
    // GET THE CURRENTLY SELECTED H2
    let h2 = e.currentTarget;
    // GET THE H2 ELEMENT'S SIBLING DIV
    let div = h2.nextElementSibling;
    // HANDLE THE REMOVAL OF CLASS ATTRIBUTES FROM H2 AND DIV TAGS
    // GET H2 ELEMENTS AND THEN LOOP THROUGH THE ARRAY OF H2 ELEMENTS
    let h2Elements = faqs.getElementsByTagName('h2');
    for (let i = 0; i < h2Elements.length; i++) {
        // IF THE H2 ELEMENT IN THE ARRAY DOESN'T EQUAL THE CURRENTLY
        // CLICKED H2, HIDE ALL CLASS ATTRIBUTES FOR H2 AND CHILD DIVS
        if (h2Elements[i] !== e.currentTarget) {
            h2Elements[i].removeAttribute('class'); // REMOVE CLASS FROM H2
            h2Elements[i].nextElementSibling.removeAttribute('class'); // REMOVE CLASS FROM DIV
        }
    }
    // TOGGLE PLUS / MINUS ICON BY ADDING / REMOVING CLASS
    if (h2.hasAttribute('class')) {
        h2.removeAttribute('class');
    } else {
        h2.setAttribute('class', 'minus');
    }
    // TOGGLE DIV VISIBILITY BY ADDING / REMOVING CLASS
    if (div.hasAttribute('class')) {
        div.removeAttribute('class');
    } else {
        div.setAttribute('class', 'open');
    }
};

window.addEventListener('load', () => {
    // GET THE ACCORDION
    let faqs = document.querySelector('#faqs');
    // GET THE H2 ELEMENTS FROM THE ACCORDION
    let h2Elements = faqs.getElementsByTagName('h2');
    // ATTACH EVENT LISTENER AND HANDLER TO EACH H2 ELEMENT
    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].addEventListener('click', toggle);
    }
});