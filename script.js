function Usuario(nombre, apellido, gmail, domicilio, telefono, fechaNacimiento, estado, sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.gmail = gmail;
    this.domicilio = domicilio;
    this.telefono = telefono;
    this.fechaNacimiento = fechaNacimiento;
    this.estado = estado;
    this.sexo = sexo;
}

let usuarios = [];
function registrarse(){
    let nombre = document.getElementById("nombreId").value;
    let apellido = document.getElementById("apellidoId").value;
    let gmail = document.getElementById("gmailId").value;
    let domicilio = document.getElementById("domicilioId").value;
    let codigoTelefono  = document.getElementById("telefonoId").value;
    let numeroTelefono = document.querySelector('.telefono input[type="text"]').value;
    let telefono = codigoTelefono  + " " + numeroTelefono;
    let dia = document.getElementById("diaId").value;
    let mes = document.getElementById("mesId").value;
    let anio = document.getElementById("añoId").value;
    let fechaNacimiento = `${dia}/${mes}/${anio} `;
    let estado = document.getElementById("estadoId").value;
    let sexo = document.getElementById("sexoId").value;
    if (!nombre || !apellido || !gmail || !domicilio || !numeroTelefono || !mes || !dia || !anio || !estado || !sexo) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    let nuevoUsuario  = new Usuario(nombre,apellido,gmail,domicilio,telefono,fechaNacimiento,estado,sexo);
    usuarios.push(nuevoUsuario );
    mostrarUsuarios();
}

function mostrarUsuarios(){ //guarda lo que se rellene
    let lista = document.getElementById("listaUsuarios");
    lista.innerHTML = "";  
    for (let usuario of usuarios) {
        let item = document.createElement("li");
        item.innerText = `${usuario.nombre} ${usuario.apellido} - ${usuario.gmail} - ${usuario.domicilio} - ${usuario.telefono} - ${usuario.fechaNacimiento} - ${usuario.estado} - ${usuario.sexo}`;
        lista.appendChild(item);
    }
}

document.addEventListener("DOMContentLoaded", function() { //crea los dias del select
    let selectDia = document.getElementById("diaId");
    for (let i = 1; i <= 30; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
            selectDia.appendChild(option);
    }
  });

document.addEventListener("DOMContentLoaded", function() { //crea los dias del select
    let selectDia = document.getElementById("añoId");
    for (let i = 1920; i <= 2025; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
            selectDia.appendChild(option);
    }
});

document.querySelectorAll('.has-dropdown').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        dropdown.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        dropdown.style.display = 'none';
    });
});

const anuncio = document.createElement('div');
anuncio.className = 'anuncio-flotante';
anuncio.innerHTML = `
  <p>¿Estás buscando trabajo? <a href="#">Empezá ya mismo apretando click aquí</a></p>
  <button class="toggle-anuncio" title="Ocultar">&#10094;</button>
`;

// Agregarlo al body
document.body.appendChild(anuncio);

// Lógica de mostrar/ocultar
const toggleBtn = anuncio.querySelector('.toggle-anuncio');
let oculto = false;

toggleBtn.addEventListener('click', () => {
  oculto = !oculto;
  if (oculto) {
    anuncio.classList.add('anuncio-oculto');
    toggleBtn.innerHTML = '&#10095;'; 
    toggleBtn.title = 'Mostrar';
  } else {
    anuncio.classList.remove('anuncio-oculto');
    toggleBtn.innerHTML = '&#10094;'; 
    toggleBtn.title = 'Ocultar';
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "/PROYECTO DIAS 9 ANTERIORMENTE/arquitecto.jpeg",
      "/PROYECTO DIAS 9 ANTERIORMENTE/charla.jpg",
      "/PROYECTO DIAS 9 ANTERIORMENTE/dataanalist.jpg",
      "/PROYECTO DIAS 9 ANTERIORMENTE/dataanalist.jpg"
    ];
  
    const track = document.querySelector(".carousel-track");
    let currentIndex = 0;
  
    // crea las imagenes
    images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Imagen del carrusel";
      track.appendChild(img);
    });
  
    function updateSlide() { 
      track.style.transform = `translateX(-${currentIndex * 660}px)`; 
    }
  
    //cambia de imagen hacia la izquierda
    document.querySelector(".prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateSlide();
    });
  
    //cambia de imagen hacia a derecha
    document.querySelector(".next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlide();
    });
  
    // cambio de imagenes cada 10seg
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      console.log("cambio");
      updateSlide();
    }, 10000);
});

// Ventana de registro 
document.addEventListener("DOMContentLoaded", function() {
  // Seleccionar el botón de registro
  const registroBtn = document.getElementById('btn-registrarse');
  
  // Elementos 
  const registroModal = document.getElementById("registroModal");
  const registroOverlay = document.getElementById("registroOverlay");
  const closeRegistro = document.getElementById("closeRegistro");

  // verificar que todos los elementos existen
  if(registroBtn && registroModal && registroOverlay && closeRegistro) {
    // evento para abrir el modal
    registroBtn.addEventListener("click", function(e) {
      e.preventDefault();
      registroModal.classList.add("show");
      registroOverlay.classList.add("show");
      document.body.style.overflow = 'hidden'; // Deshabilitar scroll
    });

    // evento para cerrar la ventana
    closeRegistro.addEventListener("click", function() {
      registroModal.classList.remove("show");
      registroOverlay.classList.remove("show");
      document.body.style.overflow = ''; // Habilitar scroll
    });

    // cerrar al hacer clic fuera
    registroOverlay.addEventListener("click", function() {
      registroModal.classList.remove("show");
      registroOverlay.classList.remove("show");
      document.body.style.overflow = ''; // Habilitar scroll
    });

    // manejar el envío del formulario
    const formRegistro = document.getElementById("formRegistro");
    if(formRegistro) {
      formRegistro.addEventListener("submit", function(e) {
        e.preventDefault();
        // Aquí iria la lógica de registro
        alert("Formulario enviado correctamente");
        registroModal.classList.remove("show");
        registroOverlay.classList.remove("show");
        document.body.style.overflow = ''; // habilitar scroll
      });
    }
  } else {
    console.error("No se encontraron todos los elementos necesarios para el modal de registro");
  }
});
//FIN VENTANA REGISTRO


//VENTANA INICIO DE SESION
document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.querySelector('.right ul li:nth-child(2) a'); 
    const modal = document.getElementById("loginModal");
    const overlay = document.getElementById("loginOverlay");
    const closeModal = document.getElementById("closeLogin");
  
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("show");
      overlay.classList.add("show");
    });
  
    closeModal.addEventListener("click", function () {
      modal.classList.remove("show");
      overlay.classList.remove("show");
    });
  
    overlay.addEventListener("click", function () {
      modal.classList.remove("show");
      overlay.classList.remove("show");
    });
  });

//ventana de iniciar sesion
  const openLogin = document.getElementById('openLogin');
    const closeLogin = document.getElementById('closeLogin');
    const loginModal = document.getElementById('loginModal');
    const loginOverlay = document.getElementById('loginOverlay');

    openLogin.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal.style.display = 'block';
      loginOverlay.style.display = 'block';
    });

    closeLogin.addEventListener('click', () => {
      loginModal.style.display = 'none';
      loginOverlay.style.display = 'none';
    });

   
