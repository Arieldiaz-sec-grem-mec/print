document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener parámetros de la URL
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            id: params.get('id'),
            nombre: params.get('nombre'),
            afiliado: params.get('afiliado'),
            consulta: params.get('consulta'),
            archivo: params.get('archivo'),
            actividad: params.get('actividad'),
            empresa: params.get('empresa'),
            fecha: params.get('fecha'),
            estado: params.get('estado'),
            email: params.get('email'),
            respuesta: params.get('respuesta')
        };
    }

    // Cargar los datos en la página
    const data = getQueryParams();
    document.getElementById('id').textContent = data.id;
    document.getElementById('nombre').textContent = data.nombre;
    document.getElementById('afiliado').textContent = data.afiliado ? data.afiliado : 'No disponible';
    document.getElementById('consulta').textContent = data.consulta;
    
    // Manejo del archivo
    const archivoElement = document.getElementById('archivo');
    if (data.archivo) {
        const archivoData = JSON.parse(data.archivo);
        if (archivoData.Url) {
            const url = archivoData.Url;
            const linkText = archivoData.LinkText || 'Ver archivo';
            
            if (url.endsWith('.pdf')) {
                archivoElement.textContent = linkText;
                archivoElement.innerHTML = `<a href="${url}" target="_blank">${linkText}</a>`;
            } else {
                archivoElement.innerHTML = `<img id="archivo-thumbnail" src="${url}" alt="Imagen del archivo">`;
            }
        } else {
            archivoElement.textContent = 'No disponible';
        }
    } else {
        archivoElement.textContent = 'No disponible';
    }

    document.getElementById('actividad').textContent = data.actividad;
    document.getElementById('empresa').textContent = data.empresa;
    document.getElementById('fecha').textContent = data.fecha;
    document.getElementById('estado').textContent = data.estado;
    document.getElementById('email').textContent = data.email ? data.email : 'No disponible';
    document.getElementById('respuesta').textContent = data.respuesta;
});
