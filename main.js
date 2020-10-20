// When you select the element mobile-menu it recieves a click and 
// the header is equiped and the active is toggled

const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-menu').addEventListener('click', () => {
	selectElement('header').classList.toggle('active');
});

// Each Navigation List is selected in each different function
// As you add a new navigation element you must add a tag 
// and simply duplicate one of these function and change it to the name of the tag
// eg. nav-link4 that is the name you will place in the first selectElement

// nav-link1
selectElement('.exit-menu').addEventListener('click', function(){
	selectElement('header').classList.toggle('active');
});