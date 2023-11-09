function checkForm(){
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('new-password').value;
  const companyName = document.getElementById('company-name').value;

  const regexEmail = /^\S+@\S+\.\S+$/;

  if(firstName != "" && lastName != "" &&
    email != "" && regexEmail.test(email) && password.length>=8 ){
      alert(` ${firstName} ${lastName} , you are successfully sighned up! \n
      Email: ${email} \n
      Password: ${"*".repeat(password.length)} \n
      ${companyName != "" ? ("Company name: " + companyName) : "" }`);  
  } 
}