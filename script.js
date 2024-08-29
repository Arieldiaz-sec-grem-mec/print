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
    document.getElementById('afiliado').textContent = data.afiliado;
    document.getElementById('consulta').textContent = data.consulta;
    document.getElementById('archivo').textContent = data.archivo;
    document.getElementById('actividad').textContent = data.actividad;
    document.getElementById('empresa').textContent = data.empresa;
    document.getElementById('fecha').textContent = data.fecha;
    document.getElementById('estado').textContent = data.estado;
    document.getElementById('email').textContent = data.email;
    document.getElementById('respuesta').textContent = data.respuesta;
});
