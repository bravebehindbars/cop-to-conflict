function sendEmail() {
	let email=document.getElementById('email').value;
	 let danemail=''
	 let danemail2=''
	console.log(email)
	const name = document.getElementById('name').name; 
const message = document.getElementById('comment').value;
const encodedSubject = encodeURIComponent(name); 
const encodedMessage = encodeURIComponent(message);
const mailtoLink = `mailto:${danemail}?subject=${encodedSubject}&body=${encodedMessage}&cc=${danemail2}`;
console.log(mailtoLink)
window.location.href = mailtoLink
}