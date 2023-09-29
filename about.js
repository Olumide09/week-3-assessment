console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("form has been submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let rubbduckImg = document.querySelector('#rubduc')

rubbduckImg.addEventListener('mouseover', () => {
	alert("Give User a Compliment")
})