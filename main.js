const validateEmail = (email) => {
   //Is a function expression, function is stored in variable.
   //The (email) is another variable (this is the id from input in HTML).
  
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
  //Checks if the string (stored in the email variable) matches the regular expression.
  //Returns the result (does it match, or does it not match? true or false)



const validate = () => {

  const result = document.getElementById('result');
  //Sets the variable 'result' (this is the id from the span that will show on invalid input).

  const email = document.getElementById('email').value;
  //Sets the variable 'email' and makes it so that it will return the submitted input from the form.

  result.innerHTML = '';
  //Unsets the value of the span.
  


  if (email == '') {
  	result.innerHTML = 'this field can not be empty';
  	//Adds a string. 

  	result.style.display="block";
  	
  	//Sets the display of the span to block, making it visbible.
  } else if (validateEmail(email)) {
  //If the input matches the regular expression.
  
  result.style.display="none";
  //Sets the display of the span to 'none', making it invisible.
  }

    else {
     result.innerHTML = email + ' is not valid';
     //Takes the value from email and adds string 'is not valid'. 

     result.style.display="block"; 
     //Sets the display of the span to block, making it visbible.
  }
  return false;
  //Makes it so the form does not submit when the email isn't formatted correctly.
}


const formButton = document.getElementById("formButton");
  //Sets variable for submit button of form.

formButton.addEventListener("click", validate);
//Makes it run the function 'validate' when submit button is clicked.
