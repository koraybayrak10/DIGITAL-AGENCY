function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

function validateForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name === "" || email === ""){
    alert("Lütfen tüm alanları doldurun");
    return false;
  }
  alert("Form gönderildi!");
  return true;
}
