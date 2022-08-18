const inputs = document.querySelectorAll("input");
const submit = document.querySelector("form");
const password = document.getElementById("password");
let coPassword = document.getElementById("confirm-password")
const patterns = {
  phone:/^\d{11}$/,
  fname:/^[a-z\d]{5,12}$/i,
  lname:/^[a-z\d]{5,12}$/i,
  password:/^[\w@-]{8,20}$/,
  email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};


function validate(field,regex){
  if (regex.test(field.value)){
    field.className = 'valid';
  }else{
    field.className = 'invalid';
  }
}
inputs.forEach((input) => {
  input.addEventListener('keyup',(e) => {
    validate(e.target,patterns[e.target.attributes.name.value]);
  });
});
coPassword.addEventListener('input',()=>{
    if(password.value !== coPassword.value){
        coPassword.className = "invalid";
    }
    else{
        coPassword.className = "valid";
    }
});
submit.addEventListener('submit',(e)=> {
    if(coPassword.className === 'invalid'){
        e.preventDefault();
        coPassword.setCustomValidity("Password Not Match!");
    }
});