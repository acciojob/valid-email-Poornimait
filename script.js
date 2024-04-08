function validEmail(str) {
  //your JS code here.
	if(str.length===0){
		return false;
	}
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
