$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        // console.log(data);
        const peopleData = data.results[0];
        document.getElementById("fotoPerfil").src = peopleData.picture.large;
        document.getElementById("nombreCompleto").innerHTML = `${peopleData.name.first} ${peopleData.name.last}`;
        document.getElementById("nacionalidad").innerHTML = peopleData.location.country;
        const fechaNacimiento = new Date(peopleData.dob.date);
        document.getElementById("fechaNacimiento").innerHTML = `${fechaNacimiento.getDate()}/${fechaNacimiento.getMonth() + 1}/${fechaNacimiento.getFullYear()}`;
        document.getElementById("email").innerHTML = peopleData.email;
        document.getElementById("telefono").innerHTML = peopleData.phone;
    }
});



