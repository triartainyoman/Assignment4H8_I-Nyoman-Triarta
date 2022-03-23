// Menghilangkan alert secara otomatis dengan duari 5 detik
setTimeout(() => {
  document.getElementById("alert").style.display = "none";
}, 5000);

// Menampilkan form ketika menekan tombol edit
function showForm() {
  let card = document.getElementById("card");
  card.style.display = "block";

  let val_name = document.getElementById("port_name").textContent;
  document.getElementById("name").value = val_name;

  let val_role = document.getElementById("port_role").textContent;
  document.getElementById("role").value = val_role;

  let val_availability =
    document.getElementById("port_availability").textContent;
  document.getElementById("availability").value = val_availability;

  let val_age = document.getElementById("port_age").textContent;
  document.getElementById("age").value = val_age;

  let val_location = document.getElementById("port_location").textContent;
  document.getElementById("location").value = val_location;

  let val_experience = document.getElementById("port_experience").textContent;
  document.getElementById("experience").value = val_experience;

  let val_email = document.getElementById("port_email").textContent;
  document.getElementById("email").value = val_email;
}

// Menyimpan perubahan profile ketika tombol submit ditekan
function submitForm() {
  let card = document.getElementById("card");
  card.style.display = "none";

  let new_name = document.getElementById("name").value;
  document.getElementById("port_name").innerHTML = new_name;

  let new_role = document.getElementById("role").value;
  document.getElementById("port_role").innerHTML = new_role;

  let new_availability = document.getElementById("availability").value;
  document.getElementById("port_availability").innerHTML = new_availability;

  let new_age = document.getElementById("age").value;
  document.getElementById("port_age").innerHTML = new_age;

  let new_location = document.getElementById("location").value;
  document.getElementById("port_location").innerHTML = new_location;

  let new_experience = document.getElementById("experience").value;
  document.getElementById("port_experience").innerHTML = new_experience;

  let new_email = document.getElementById("email").value;
  document.getElementById("port_email").innerHTML = new_email;
}
