// Función para obtener el valor de un parámetro de la URL
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Función para cargar los datos en la página
function loadPageData() {
    document.getElementById('id').textContent = getUrlParameter('id') || 'N/A';
    document.getElementById('nombre').textContent = getUrlParameter('nombre') || 'N/A';
    document.getElementById('afiliado').textContent = getUrlParameter('afiliado') || 'N/A';
    document.getElementById('consulta').textContent = getUrlParameter('consulta') || 'N/A';
    document.getElementById('archivo').textContent = getUrlParameter('archivo') || 'N/A';
    document.getElementById('actividad').textContent = getUrlParameter('actividad') || 'N/A';
    document.getElementById('empresa').textContent = getUrlParameter('empresa') || 'N/A';
    document.getElementById('fecha').textContent = getUrlParameter('fecha') || 'N/A';
    document.getElementById('estado').textContent = getUrlParameter('estado') || 'N/A';
    document.getElementById('email').textContent = getUrlParameter('email') || 'N/A';
    document.getElementById('respuesta').textContent = getUrlParameter('respuesta') || 'N/A';
}

// Cargar los datos cuando la página se haya cargado
document.addEventListener('DOMContentLoaded', loadPageData);
