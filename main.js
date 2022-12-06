


const boton = document.getElementById("btn-crear");
const btnblanco = document.getElementById("btn-blanco");
const btnoscuro = document.getElementById("btn-oscuro");

const picture = (e) => {
    // Obtener el elemento input de tipo file
    e.preventDefault();
    var input = document.getElementById("file");
    const campo1 = document.getElementById("campo_1")
    const campo2 = document.getElementById("campo_2")
    const campo3 = document.getElementById("campo_3")
    const texto1 = document.getElementById("texto_1")
    const texto2 = document.getElementById("texto_2")
    const texto3 = document.getElementById("texto_3")

    const preciofinal = document.getElementById("preciofinal")
    const precio = document.getElementById("precio")

    const fechafinal = document.getElementById("fechafinal")
    const fecha = document.getElementById("fecha")

    const lugarfinal = document.getElementById("lugarfinal")
    const lugar = document.getElementById("lugar")

    var mcampo1 = campo1.value;
    var mcampo2 = campo2.value;
    var mcampo3 = campo3.value;

    var mpreciofinal = preciofinal.value;

    var mfechafinal = fechafinal.value;

    var mlugarfinal = lugarfinal.value;
    // Obtener la lista de archivos seleccionados
    var files = input.files;
    console.log(files)
    // Si hay al menos un archivo seleccionado...
    if (files.length > 0) {
        // Obtener el primer archivo
        var file = files[0];
        console.log(files[0])
        // Crear una URL a partir del archivo
        var url = URL.createObjectURL(file);

        // Establecer la propiedad backgroundImage con la URL del archivo
        art.style.backgroundImage = "url('" + url + "')";

        texto1.textContent = mcampo1;
        texto2.textContent = mcampo2;
        texto3.textContent = mcampo3;
        precio.textContent = mpreciofinal;
        fecha.textContent = mfechafinal;
        lugar.textContent = mlugarfinal;

    }

}

function cambiarColor(color) {
    console.log(color)
    const ico_avion = document.getElementById('ico_avion');
    const ico_auto = document.getElementById("ico_auto")
    const ico_lugar = document.getElementById("ico_lugar")

    console.log("llega")
    if (color === 0) {
        ico_avion.src = "./assets/img/avionb.png";
        ico_auto.src = "./assets/img/autob.png";
        ico_lugar.src = "./assets/img/alojb.png";
        return;
    }

    ico_avion.src = "./assets/img/avion.png";
    ico_auto.src = "./assets/img/auto.png";
    ico_lugar.src = "./assets/img/alojamiento-1.png";

}

boton.addEventListener('click', picture)







