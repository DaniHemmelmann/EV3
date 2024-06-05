
function validar() {
    var retorno_correo = validar_correo();
    var retorno_nombre = validar_nombre();
    var retorno_contraseña = validar_contraseña();
    var retorno_confirmarcontraseña = validar_confirmarcontraseña();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_sitio = validar_sitio();
    var retorno_pasatiempo = validar_pasatiempo();
    return retorno_correo && retorno_contraseña && retorno_confirmarcontraseña && 
    retorno_direccion && retorno_comuna && retorno_telefono && retorno_pasatiempo;
}


function validar_correo() {
    var input_correo = document.getElementById("input-correo");
    var div_error_correo = document.getElementById("error-correo");
    var correo = input_correo.value.trim(); 
    var pos_arroba = correo.indexOf("@");
    var pos_punto = correo.lastIndexOf(".");
    var extension = correo.substring(pos_punto + 1);

    if (correo === "") {
        div_error_correo.innerHTML = "El correo es obligatorio";
        div_error_correo.className = "text-danger small mt-1";
        return false;
    } else if (pos_arroba > 0 && pos_punto > pos_arroba && extension.length <= 3 && contieneLetra(correo.charAt(pos_arroba - 1)) && contieneLetra(correo.charAt(pos_punto + 1))) {
        div_error_correo.innerHTML = "";
        return true;
    } else {
        div_error_correo.innerHTML = "El correo electrónico no tiene el formato correcto";
        div_error_correo.className = "text-danger small mt-1";
        return false;
    }
}

function contieneLetra(caracter) {
    return (caracter >= 'a' && caracter <= 'z') || (caracter >= 'A' && caracter <= 'Z');
}


function validar_nombre() {
    var input_nombre = document.getElementById("input-nombre");
    var div_error_nombre = document.getElementById("error-nombre");
    var nombre = input_nombre.value;
    
    if (nombre.length > 20) {
        div_error_nombre.innerHTML = "El nombre no puede tener más de 30 caracteres";
        div_error_nombre.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_nombre.innerHTML = "";
        return true;
    }
}


function validar_contraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var div_error_contraseña = document.getElementById("error-contraseña");
    var contraseña = input_contraseña.value;

    if (contraseña == "") {
        div_error_contraseña.innerHTML = "La contraseña es obligatoria";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else if (contraseña.length < 2 || contraseña.length > 6) {
        div_error_contraseña.innerHTML = "La contraseña debe tener entre 3 a 6 caracteres";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else if (!contieneNumeroYLetra(contraseña)) {
        div_error_contraseña.innerHTML = "La contraseña debe contener al menos un dígito y una letra";
        div_error_contraseña.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_contraseña.innerHTML = "";
        return true;
    }
}

function contieneNumeroYLetra(contraseña) {
    var tieneNumero = false;
    var tieneLetra = false;

    for (var i = 0; i < contraseña.length; i++) {
        var char = contraseña.charAt(i);
        if (esDigito(char)) {
            tieneNumero = true;
        } else if (esLetra(char)) {
            tieneLetra = true;
        }
    }

    return tieneNumero && tieneLetra;
}

function esDigito(char) {
    return char >= '0' && char <= '9';
}

function esLetra(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}


function validar_confirmarcontraseña() {
    var input_contraseña = document.getElementById("input-contraseña");
    var input_confirmarcontraseña = document.getElementById("input-confirmarcontraseña");
    var div_error_confirmarcontraseña = document.getElementById("error-confirmarcontraseña");
    var contraseña = input_contraseña.value;
    var confirmarcontraseña = input_confirmarcontraseña.value;

    if (confirmarcontraseña === "") {
        div_error_confirmarcontraseña.innerHTML = "La confirmación de la contraseña es obligatoria";
        div_error_confirmarcontraseña.className = "text-danger small mt-1";
        return false;
    } else if (confirmarcontraseña != contraseña) {
        div_error_confirmarcontraseña.innerHTML = "Las contraseñas no coinciden";
        div_error_confirmarcontraseña.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_confirmarcontraseña.innerHTML = "";
        return true;
    }
}

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;

    if (direccion === "") {
        div_error_direccion.innerHTML = "La dirección es obligatoria";
        div_error_direccion.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_direccion.innerHTML = "";
        return true;
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;

    if (comuna === "default") {
        div_error_comuna.innerHTML = "Debe seleccionar una comuna";
        div_error_comuna.className = "text-danger small mt-1";
        return false;
    } else {
        div_error_comuna.innerHTML = "";
        return true;
    }
}

function validar_telefono() {
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value.trim(); 
    if (telefono === "") {
        div_error_telefono.innerHTML = "El teléfono es obligatorio";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (telefono.length !== 12) {
        div_error_telefono.innerHTML = "El número de teléfono debe tener 12 caracteres en total, incluyendo el signo +";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else if (telefono.charAt(0) !== "+") {
        div_error_telefono.innerHTML = "El número de teléfono debe comenzar con el signo +";
        div_error_telefono.className = "text-danger small mt-1";
        return false;
    } else {
        for (var i = 1; i < telefono.length; i++) {
            if (!esDigito(telefono.charAt(i))) {
                div_error_telefono.innerHTML = "Los últimos diez caracteres deben ser dígitos";
                div_error_telefono.className = "text-danger small mt-1";
                return false;
            }
        }
        div_error_telefono.innerHTML = "";
        return true;
    }
}

function esDigito(caracter) {
    return caracter >= '0' && caracter <= '9';
}


function validar_sitio() {
    var input_sitio = document.getElementById("input-sitio");
    var div_error_sitio = document.getElementById("error-sitio");
    var sitio = input_sitio.value;

    if (
        sitio.startsWith("http://") ||
        sitio.startsWith("https://") ||
        sitio.startsWith("www.")
    ) {
        if (
            sitio.endsWith(".com") ||
            sitio.endsWith(".org") ||
            sitio.endsWith(".cl") ||
            sitio.endsWith(".net")
        ) {
            div_error_sitio.innerHTML = "";
            return true; 
        }
    }

    div_error_sitio.innerHTML = "El sitio web no tiene un formato válido";
    div_error_sitio.className = "text-danger small mt-1";
    return false; 
}

var hobbiesArray = [];

function validar_pasatiempo() {
    var div_error_pasatiempo = document.getElementById("error-pasatiempo");
    var pasatiempoInput = document.getElementById("pasatiempo");
    var pasatiempoValue = pasatiempoInput.value.trim();

    if (hobbie.length < 2) {
        div_error_pasatiempo.innerHTML = "Debe agregar al menos dos pasatiempos";
        div_error_pasatiempo.className = "text-danger small mt-1";
        return false;
    }   else {
        div_error_pasatiempo.innerHTML = "";
        hobbiesArray.push(pasatiempoValue);
        return true;
    }
}



//Botones 
var hobbie = [];

function actualizar() {
    var div = document.getElementById("pasatiempos-lista");
    div.innerHTML = "";
    for (var i = 0; i < hobbie.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = hobbie[i];
        li.className = "list-group-item";
        div.appendChild(li);
    }
}

function agregar() {
    var pasatiempo = document.getElementById("pasatiempo");
    var pasatiempoValue = pasatiempo.value.trim();
	var div_error_pasatiempo = document.getElementById("error-pasatiempo");
	div_error_pasatiempo.innerHTML = "";
	if (hobbie.includes(pasatiempoValue)) {
		div_error_pasatiempo.innerHTML = "El pasatiempo ya ha sido agregado";
		div_error_pasatiempo.className = "text-danger small mt-1";
		return false;
	}
    if (pasatiempoValue != "") {
        hobbie.push(pasatiempoValue);
        pasatiempo.value = "";
        actualizar();
    } else {
		div_error_pasatiempo.innerHTML = "El campo está vacío";
		div_error_pasatiempo.className = "text-danger small mt-1";
		return false;
	}
}

function togglePasswordVisibility1() {
    var passwordInput = document.getElementById("input-contraseña");
    var passwordIcon = document.getElementById("passwordIcon1");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove("bi-eye");
        passwordIcon.classList.add("bi-eye-slash");
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove("bi-eye-slash");
        passwordIcon.classList.add("bi-eye");
    }
}

function togglePasswordVisibility2() {
    var passwordInput = document.getElementById("input-confirmarcontraseña");
    var passwordIcon = document.getElementById("passwordIcon2");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        passwordIcon.classList.remove("bi-eye");
        passwordIcon.classList.add("bi-eye-slash");
    } else {
        passwordInput.type = "password";
        passwordIcon.classList.remove("bi-eye-slash");
        passwordIcon.classList.add("bi-eye");
    }
}


