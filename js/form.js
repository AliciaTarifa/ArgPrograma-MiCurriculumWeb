// El DOM está listo para recibir acciones
document.addEventListener("DOMContentLoaded", function (event) {

    /*** Click en la foto para cargar otro archivo ***/
    document.getElementById("fotoPerfil-crear").addEventListener('click', function () {
        document.getElementById("attachFileInput").click();
    });

    /*** Click en la boton cargar foto para cargar un archivo ***/
    document.getElementById("attachFileButton").addEventListener('click', function () {
        document.getElementById("attachFileInput").click();
    });

    /*** Cuando el archivo de foto es seleccionado lo muestro en el ag <img> ***/
    document.getElementById('attachFileInput').onchange = function (evt) {
        var tgt = evt.target || window.event.srcElement,
            files = tgt.files;

        // FileReader support
        if (FileReader && files && files.length) {
            var fr = new FileReader();
            fr.onload = function () {
                document.getElementById("fotoPerfil-crear").src = fr.result;
            }
            fr.readAsDataURL(files[0]);
        }

        // Not supported
        else {
            // fallback -- perhaps submit the input to an iframe and temporarily store
            // them on the server until the user's session ends.
        }
    }

    /*** Capturo evento click del boton guardar ***/
    document.getElementById("form-save-button").addEventListener('click', function (e) {
        // Obtengo los inputs
        const cv_nombreCompleto = document.getElementById('cv_nombreCompleto');
        const cv_nacionalidad = document.getElementById('cv_nacionalidad');
        const cv_fechaNacimiento = document.getElementById('cv_fechaNacimiento');
        const cv_telefono = document.getElementById('cv_telefono');
        const cv_email = document.getElementById('cv_email');
        const cv_linkedin = document.getElementById('cv_linkedin');
        const cv_expLaboral = document.getElementById('cv_expLaboral');
        const cv_habilidades = document.getElementById('cv_habilidades');

        // Obtengo los valores
        const cv_nombreCompleto_value = cv_nombreCompleto.value.trim();
        const cv_nacionalidad_value = cv_nacionalidad.value.trim();
        const cv_fechaNacimiento_value = cv_fechaNacimiento.value.trim();
        const cv_telefono_value = cv_telefono.value.trim();
        const cv_email_value = cv_email.value.trim();
        const cv_linkedin_value = cv_linkedin.value.trim();
        const cv_expLaboral_value = cv_expLaboral.value.trim();
        const cv_habilidades_value = cv_habilidades.value.trim();

        if (
            validRequiredInpout(cv_nombreCompleto_value) && validRequiredInpout(cv_nacionalidad_value) &&
            validRequiredInpout(cv_fechaNacimiento_value) && validRequiredInpout(cv_telefono_value) &&
            validRequiredInpout(cv_email_value) && validRequiredInpout(cv_linkedin_value) &&
            validRequiredInpout(cv_expLaboral_value) && validRequiredInpout(cv_habilidades_value)) {
            const now = new Date();
            document.getElementById("toast-small").innerHTML = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
            let toastElList = [].slice.call(document.querySelectorAll('.toast'))
            let toastList = toastElList.map(function (toastEl) {
                return new bootstrap.Toast(toastEl)
            })
            toastList.forEach(toast => toast.show());
            e.preventDefault();
        }
    });
});

const validRequiredInpout = (value) => {
    return value.length;
};


