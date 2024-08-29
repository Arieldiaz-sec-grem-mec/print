document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener parámetros de la URL
    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            id: params.get('id') || 'N/A',
            nombre: params.get('nombre') || 'N/A',
            afiliado: params.get('afiliado') || 'N/A',
            consulta: params.get('consulta') || 'N/A',
            archivo: params.get('archivo') || '',
            actividad: params.get('actividad') || 'N/A',
            empresa: params.get('empresa') || 'N/A',
            fecha: params.get('fecha') || 'N/A',
            estado: params.get('estado') || 'N/A',
            email: params.get('email') || 'N/A',
            respuesta: params.get('respuesta') || 'N/A'
        };
    }

    // Cargar los datos en la página
    const data = getQueryParams();
    document.getElementById('id').textContent = data.id;
    document.getElementById('nombre').textContent = data.nombre;
    document.getElementById('afiliado').textContent = formatAfiliado(data.afiliado);
    document.getElementById('consulta').textContent = data.consulta;
    document.getElementById('actividad').textContent = data.actividad;
    document.getElementById('empresa').textContent = data.empresa;
    document.getElementById('fecha').textContent = data.fecha;
    document.getElementById('estado').textContent = data.estado;
    document.getElementById('email').textContent = data.email;
    document.getElementById('respuesta').textContent = data.respuesta;

    // Manejar la visualización del archivo
    if (data.archivo) {
        const archivoElement = document.getElementById('archivo');
        const archivoThumbnail = document.getElementById('archivo-thumbnail');

        if (data.archivo.endsWith('.jpg') || data.archivo.endsWith('.jpeg') || data.archivo.endsWith('.png')) {
            // Mostrar miniatura si es una imagen
            archivoThumbnail.src = data.archivo;
            archivoThumbnail.style.display = 'block';
            archivoElement.style.display = 'none';
        } else if (data.archivo.endsWith('.pdf')) {
            // Mostrar el nombre del archivo si es un PDF
            const pdfName = data.archivo.split('/').pop();
            archivoElement.textContent = pdfName;
            archivoThumbnail.style.display = 'none';
        } else {
            // Mostrar el enlace como fallback
            archivoElement.textContent = data.archivo;
            archivoThumbnail.style.display = 'none';
        }
    }

    // Función para formatear el número de afiliado
    function formatAfiliado(afiliado) {
        return afiliado.replace(/(\d{6})(\d{2})/, "$1/$2");
    }
});
