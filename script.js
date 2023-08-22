function getFormvalue(event) {
	event.preventDefault();
    //Write your code here
	const fname=document.getElementsByName("fname")[0].value;
	const lname=document.getElementsByName("lname")[0].value;
	alert(fname+" "+lname);
}
