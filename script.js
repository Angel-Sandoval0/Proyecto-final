// Cambiar texto
// Seleccionar botón
let button1 = document.getElementById("changeTextButton");

// Escuchar el evento click
button1.addEventListener("click", function () {
    // Seleccionar el texto
    let paragraph1 = document.getElementById("example1");
    // Cambiar el contenido del texto
    paragraph1.textContent = "El Departamento de Internacionalización de la Corporación Universitaria Latinoamericana - CUL, nace de la intención por mantener nuestra política de mejoramiento continuo dentro del proyecto educativo institucional PEI, encargada de promover la integración regional, nacional e internacional de la institución, mediante procesos de cooperación académica, empresarial, social y cultural para favorecer el crecimiento y el fortalecimiento de nuestra visibilidad ante la regiones y la contribución al desarrollo de nuestros programas en busca de la excelencia académica.";
});


// Modificar estilo CSS
// Seleccionar botón
let button2 = document.getElementById("changeStyleButton");

// Escuchar el evento click
button2.addEventListener("click", function () {
    // Seleccionar el texto
    let paragraph2 = document.getElementById("example2");
    // Cambiar color de fondo y tamaño de fuente
    paragraph2.style.backgroundColor = "lightblue";
    paragraph2.style.fontSize = "50px";
});

// Cambiar clase
// Seleccionar el botón
let button3 = document.getElementById("toggleClassButton");

// Escuchar el evento click
button3.addEventListener("click", function () {
    // Seleccionar el texto
    let paragraph3 = document.getElementById("example3");
    // Añadir la clase en el texto
    paragraph3.classList.add("new-class");
});


// Agregar elemento
// Seleccionar el botón
let button = document.getElementById("addElementButton");

// Escuchar evento click
button.addEventListener("click", function () {
    // Crear nuevo elemento de párrafo
    let newParagraph = document.createElement("p");
    // Configurar el texto del párrafo
    newParagraph.textContent = "This is a new paragraph.";
    // Seleccionar el elemento padre
    let parentDiv = document.getElementById("parent");
    // Añadir el nuevo párrafo al elemento padre
    parentDiv.appendChild(newParagraph);
});