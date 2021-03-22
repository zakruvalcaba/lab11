//Event handler for each h2 element
const toggle = (e) => {
    //The currently clicked h2 tag
    let h2 = e.currentTarget;
    //Get the h2 tag's sibling div tag to show or hide
    let div = h2.nextElementSibling;
    //Get the array of h2 elements
	let h2Elements = faqs.getElementsByTagName('h2');
    //Loop through the array of h2 elements
	for (let i = 0; i < h2Elements.length; i++) {
        //If the h2 element in the array doesn't equal the currently
        //clicked h2 then hide all class attributes for h2 and child divs
        if (h2Elements[i] !== e.currentTarget) {
            h2Elements[i].removeAttribute('class');
            h2Elements[i].nextElementSibling.removeAttribute('class');
        }
    }
    //Toggle plus and minus image in h2 elements by adding or removing a class
    if (h2.hasAttribute('class')) {
        h2.removeAttribute('class');
    } else {
        h2.setAttribute('class', 'minus');
    }
    //Toggle div visibility by adding or removing a class
    if (div.hasAttribute('class')) {
        div.removeAttribute('class');
    } else {
        div.setAttribute('class', 'open');
    }
};

window.addEventListener('load', () => {
    //Get the main accordion
    let faqs = document.getElementById('faqs');
    //Get the h2 tags from the accordion
    h2Elements = faqs.getElementsByTagName('h2');
    //Attach event handler to each of the h2 tags   
    for (let i = 0; i < h2Elements.length; i++) {
        h2Elements[i].addEventListener('click', toggle);
    }
    //Set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();
});