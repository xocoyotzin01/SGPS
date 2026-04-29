// --- 1. Autenticación, Usuarios y Seguridad Estricta ---
let usuarioActual = null; 

document.getElementById('formLogin').addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const user = document.getElementById('userLogin').value.trim();
    const pass = document.getElementById('passLogin').value.trim();
    const errorMsg = document.getElementById('errorLogin');

    // Validación estricta con Object.hasOwn
    if (Object.hasOwn(window.usuariosDB, user) && window.usuariosDB[user].pass === pass) {
        usuarioActual = window.usuariosDB[user];
        errorMsg.classList.add('oculto');
        iniciarAplicacion();
    } else {
        errorMsg.classList.remove('oculto');
    }
});

document.getElementById('btnCerrarSesion').addEventListener('click', function() {
    usuarioActual = null;
    document.getElementById('app-main').classList.add('oculto');
    document.getElementById('login-wrapper').classList.remove('oculto');
    document.getElementById('formLogin').reset();
});

// --- 2. Persistencia de Datos (LocalStorage -> GitHub Adaptación) ---
let baseDatosTareas = {};

function guardarDB() {
    localStorage.setItem('cefp_db', JSON.stringify(baseDatosTareas));
}

function cargarDB() {
    const dataGuardada = localStorage.getItem('cefp_db');
    if (dataGuardada) {
        baseDatosTareas = JSON.parse(dataGuardada);
    } else {
        baseDatosTareas = window.baseDatosTareasInicial;
        guardarDB();
    }
}

document.getElementById('btnExportarCSV').addEventListener('click', function() {
    let csv = "Fecha,Area,Producto,Estado\n";
    for(let fecha in baseDatosTareas) {
        baseDatosTareas[fecha].forEach(t => {
            csv += `${fecha},"${t.area}","${t.titulo}","${t.tipo}"\n`;
        });
    }
    const blob = new Blob([new Uint8Array([0xEF, 0xBB, 0xBF]), csv], {type: "text/csv;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "CEFP_Base_Datos_Tareas.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

document.getElementById('btnExportarJSON').addEventListener('click', function() {
    const dataString = JSON.stringify(baseDatosTareas, null, 4);
    const backupContent = `// Respaldo generado el ${new Date().toLocaleDateString()}\nwindow.baseDatosTareasInicial = ${dataString};`;
    
    const blob = new Blob([backupContent], {type: "application/javascript;charset=utf-8;"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "respaldo_tareas_data.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// --- 3. Variables Globales ---
let fechaActualNavegacion = new Date(); 
let fechaMesNavegacion = new Date(); 
const hoyMismo = new Date(); 

let diaSeleccionadoGlobal = ""; 
let nombreDiaGlobal = ""; 
let editandoIndex = -1;

const nombresDias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// --- 4. Utilidades de Fecha y Permisos ---
function formatoFecha(fecha) {
    const d = new Date(fecha);
    let mes = '' + (d.getMonth() + 1);
    let dia = '' + d.getDate();
    let anio = d.getFullYear();
    if (mes.length < 2) mes = '0' + mes;
    if (dia.length < 2) dia = '0' + dia;
    return [anio, mes, dia].join('-');
}

function obtenerTareasPermitidasDia(fecha) {
    if (!baseDatosTareas[fecha]) return [];
    return baseDatosTareas[fecha]
        .map((t, index) => ({ ...t, indexReal: index }))
        .filter(t => usuarioActual.rol === 'admin' || t.area === usuarioActual.area);
}

// --- 5. Inicialización ---
function iniciarAplicacion() {
    cargarDB();
    document.getElementById('login-wrapper').classList.add('oculto');
    document.getElementById('app-main').classList.remove('oculto');
    
    document.getElementById('lblUsuarioActual').textContent = usuarioActual.nombre;
    
    const btnCSV = document.getElementById('btnExportarCSV');
    const btnJSON = document.getElementById('btnExportarJSON');
    const filtroAreaArea = document.getElementById('filtroAreaArea');
    const filtroAreaProd = document.getElementById('filtroAreaProd');
    const selectAreaForm = document.getElementById('inputArea');

    if (usuarioActual.rol === 'admin') {
        btnCSV.classList.remove('oculto');
        btnJSON.classList.remove('oculto');
        filtroAreaArea.disabled = false;
        filtroAreaProd.disabled = false;
        selectAreaForm.disabled = false;
    } else {
        btnCSV.classList.add('oculto');
        btnJSON.classList.add('oculto');
        filtroAreaArea.value = usuarioActual.area;
        filtroAreaArea.disabled = true;
        filtroAreaProd.value = usuarioActual.area;
        filtroAreaProd.disabled = true;
        selectAreaForm.value = usuarioActual.area;
        selectAreaForm.disabled = true;
    }

    const mesActualFiltro = `${hoyMismo.getFullYear()}-${String(hoyMismo.getMonth() + 1).padStart(2, '0')}`;
    document.getElementById('filtroMesArea').value = mesActualFiltro;
    document.getElementById('filtroMesProd').value = mesActualFiltro;

    document.querySelector('.tab-btn[data-target="vista-semanal"]').click();
    
    fechaActualNavegacion = new Date();
    fechaMesNavegacion = new Date();
    renderizarSemana(fechaActualNavegacion);
    verDetallesDia(formatoFecha(hoyMismo), nombresDias[hoyMismo.getDay()]);
    renderizarMesCalendario();
    renderizarReporteArea();
    renderizarReporteProducto();
}


// --- 6. Navegación por Pestañas ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Quitar estado activo de botones
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('activo'));
        // Remover clase activa de todas las vistas
        document.querySelectorAll('.app-wrapper').forEach(v => {
            v.classList.remove('vista-activa');
        });

        // Activar la pestaña correcta
        this.classList.add('activo');
        const targetId = this.getAttribute('data-target');
        const vista = document.getElementById(targetId);
        vista.classList.add('vista-activa');

        // Disparar renderizados
        if(targetId === 'vista-semanal') renderizarSemana(fechaActualNavegacion);
        if(targetId === 'vista-calendario') renderizarMesCalendario();
        if(targetId === 'vista-area') renderizarReporteArea();
        if(targetId === 'vista-producto') renderizarReporteProducto();
    });
});

// --- 7. Lógica VISTA SEMANAL ---
function renderizarSemana(fechaBase) {
    const listaDiasDOM = document.getElementById('listaDias');
    const textoRangoSemana = document.getElementById('textoRangoSemana');
    listaDiasDOM.innerHTML = ''; 
    
    const diaDeLaSemana = fechaBase.getDay();
    const domingo = new Date(fechaBase);
    domingo.setDate(fechaBase.getDate() - diaDeLaSemana);
    const sabado = new Date(domingo);
    sabado.setDate(domingo.getDate() + 6);
    
    textoRangoSemana.textContent = `${domingo.getDate()} ${nombresMeses[domingo.getMonth()].substring(0,3)} - ${sabado.getDate()} ${nombresMeses[sabado.getMonth()].substring(0,3)}`;

    for(let i = 0; i < 7; i++) {
        let diaIteracion = new Date(domingo);
        diaIteracion.setDate(domingo.getDate() + i);
        
        let fechaString = formatoFecha(diaIteracion);
        let esHoy = formatoFecha(diaIteracion) === formatoFecha(hoyMismo);
        
        let tareasPermitidas = obtenerTareasPermitidasDia(fechaString);
        let cantidadTareas = tareasPermitidas.length;

        const li = document.createElement('li');
        li.className = `dia-card ${esHoy ? 'hoy' : ''}`;
        if (fechaString === diaSeleccionadoGlobal) li.classList.add('activo');
        
        li.innerHTML = `
            <div class="dia-avatar placeholder-avatar"></div>
            <div class="dia-info">
                <span class="dia-nombre">${nombresDias[diaIteracion.getDay()]} ${esHoy ? '(Hoy)' : ''}</span>
                <span class="dia-resumen">${diaIteracion.getDate()} de ${nombresMeses[diaIteracion.getMonth()].substring(0,3)} • ${cantidadTareas} acts.</span>
            </div>
            <button class="btn-agregar-rapido" title="Añadir actividad a este día">+</button>
            <span class="control-indicator"></span>
        `;

        li.addEventListener('click', (e) => {
            if(e.target.classList.contains('btn-agregar-rapido')) return; 
            document.querySelectorAll('.lista-dias .dia-card').forEach(el => el.classList.remove('activo'));
            li.classList.add('activo');
            verDetallesDia(fechaString, nombresDias[diaIteracion.getDay()]);
        });

        li.querySelector('.btn-agregar-rapido').addEventListener('click', () => {
            abrirModalFormulario(fechaString, nombresDias[diaIteracion.getDay()]);
        });

        listaDiasDOM.appendChild(li);
    }
}

function verDetallesDia(fechaString, nombreDiaStr) {
    diaSeleccionadoGlobal = fechaString;
    nombreDiaGlobal = nombreDiaStr;
    
    const partes = fechaString.split('-'); 
    const fechaLimpia = new Date(partes[0], partes[1] - 1, partes[2]);

    document.getElementById('tituloDiaVista').textContent = nombreDiaStr;
    document.getElementById('fechaDiaVista').textContent = `${fechaLimpia.getDate()} de ${nombresMeses[fechaLimpia.getMonth()]} de ${fechaLimpia.getFullYear()}`;
    
    const contenedorTareas = document.getElementById('contenedorTareas');
    contenedorTareas.innerHTML = '';
    
    const tareasDelDia = obtenerTareasPermitidasDia(fechaString);

    if (tareasDelDia.length === 0) {
        contenedorTareas.innerHTML = '<p style="color: #666; font-size: 0.9rem;">No hay actividades registradas para tu área este día.</p>';
        return;
    }

    tareasDelDia.forEach((tarea) => {
        const claseTipo = tarea.tipo === 'pendiente' ? 'tipo-pendiente' : 'tipo-publicacion';
        const etiquetaTipo = tarea.tipo === 'pendiente' ? 'Pendiente' : 'Publicado';

        const cardHTML = `
            <div class="tarea-card">
                <div class="tarea-checkbox-container">
                    <input type="checkbox" class="check-tarea" value="${tarea.indexReal}">
                </div>
                <div class="tarea-info">
                    <span class="tarea-area">${tarea.area}</span>
                    <h3>${tarea.titulo}</h3>
                </div>
                <span class="tarea-tipo ${claseTipo}" data-index="${tarea.indexReal}" title="Clic para cambiar estado">${etiquetaTipo}</span>
            </div>
        `;
        contenedorTareas.insertAdjacentHTML('beforeend', cardHTML);
    });

    document.querySelectorAll('.tarea-tipo').forEach(badge => {
        badge.addEventListener('click', function() {
            const idx = parseInt(this.getAttribute('data-index'));
            const t = baseDatosTareas[fechaString][idx];
            t.tipo = t.tipo === 'pendiente' ? 'publicado' : 'pendiente';
            guardarDB(); 
            verDetallesDia(fechaString, nombreDiaStr);
            renderizarSemana(fechaActualNavegacion);
        });
    });
}

document.getElementById('btnSemanaAnt').addEventListener('click', () => {
    fechaActualNavegacion.setDate(fechaActualNavegacion.getDate() - 7);
    renderizarSemana(fechaActualNavegacion);
});
document.getElementById('btnSemanaSig').addEventListener('click', () => {
    fechaActualNavegacion.setDate(fechaActualNavegacion.getDate() + 7);
    renderizarSemana(fechaActualNavegacion);
});
document.getElementById('btnHoySemana').addEventListener('click', () => {
    fechaActualNavegacion = new Date(); 
    renderizarSemana(fechaActualNavegacion);
});

// --- 8. Controles de Barra de Acciones (Derecha) ---
document.getElementById('btnBarraAgregar').addEventListener('click', () => {
    if(!diaSeleccionadoGlobal) return alert("Selecciona un día primero.");
    abrirModalFormulario(diaSeleccionadoGlobal, nombreDiaGlobal);
});

document.getElementById('btnBarraEliminar').addEventListener('click', () => {
    const seleccionados = document.querySelectorAll('.check-tarea:checked');
    if (seleccionados.length === 0) return alert("Selecciona al menos una tarea.");
    if (confirm("¿Eliminar tareas seleccionadas?")) {
        const indices = Array.from(seleccionados).map(cb => parseInt(cb.value)).sort((a,b) => b - a);
        indices.forEach(idx => baseDatosTareas[diaSeleccionadoGlobal].splice(idx, 1));
        guardarDB();
        verDetallesDia(diaSeleccionadoGlobal, nombreDiaGlobal);
        renderizarSemana(fechaActualNavegacion);
    }
});

document.getElementById('btnBarraEditar').addEventListener('click', () => {
    const seleccionados = document.querySelectorAll('.check-tarea:checked');
    if (seleccionados.length !== 1) return alert("Selecciona exactamente UNA tarea para editar.");
    
    const idx = parseInt(seleccionados[0].value);
    const tarea = baseDatosTareas[diaSeleccionadoGlobal][idx];
    
    document.getElementById('inputFechaActividad').value = diaSeleccionadoGlobal;
    document.getElementById('inputArea').value = tarea.area;
    document.getElementById('inputNombre').value = tarea.titulo;
    
    editandoIndex = idx; 
    document.getElementById('tituloModal').textContent = `Editar Actividad`;
    document.getElementById('modalActividad').classList.remove('oculto');
});

// --- 9. Modal y Formulario ---
const modalActividad = document.getElementById('modalActividad');
const formNuevaActividad = document.getElementById('formNuevaActividad');

function abrirModalFormulario(fechaString, nombreDia) {
    editandoIndex = -1; 
    document.getElementById('inputFechaActividad').value = fechaString;
    document.getElementById('tituloModal').textContent = `Nueva Actividad: ${nombreDia}`;
    formNuevaActividad.reset(); 
    
    if (usuarioActual.rol === 'area') {
        document.getElementById('inputArea').value = usuarioActual.area;
    }
    modalActividad.classList.remove('oculto');
}

document.getElementById('btnCerrarModal').addEventListener('click', () => modalActividad.classList.add('oculto'));

formNuevaActividad.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const fecha = document.getElementById('inputFechaActividad').value;
    const area = document.getElementById('inputArea').value;
    const titulo = document.getElementById('inputNombre').value;

    let estadoFinal = "pendiente"; 

    if (!baseDatosTareas[fecha]) baseDatosTareas[fecha] = [];

    if (editandoIndex > -1) {
        estadoFinal = baseDatosTareas[fecha][editandoIndex].tipo;
        baseDatosTareas[fecha][editandoIndex] = { area, titulo, tipo: estadoFinal };
    } else {
        baseDatosTareas[fecha].push({ area, titulo, tipo: estadoFinal });
    }
    
    guardarDB(); 
    modalActividad.classList.add('oculto'); 
    
    renderizarSemana(fechaActualNavegacion);
    if(diaSeleccionadoGlobal === fecha) verDetallesDia(fecha, nombreDiaGlobal);
    renderizarMesCalendario();
    renderizarReporteArea();
    renderizarReporteProducto();
});

// --- 10. LÓGICA VISTAS MENSUALES ---
function obtenerTareasFiltradasMes(mesInputId, areaInputId, prodInputId) {
    const mesVal = document.getElementById(mesInputId).value; 
    let areaVal = document.getElementById(areaInputId).value;
    const prodVal = document.getElementById(prodInputId).value;

    if(usuarioActual.rol === 'area') areaVal = usuarioActual.area;

    let [anioFiltro, mesFiltro] = mesVal ? mesVal.split('-') : [null, null];
    let tareasFiltradas = [];
    
    for (let fechaKey in baseDatosTareas) {
        let [anioT, mesT, diaT] = fechaKey.split('-');
        if (anioFiltro && (anioT !== anioFiltro || mesT !== mesFiltro)) continue;

        baseDatosTareas[fechaKey].forEach(t => {
            if (areaVal !== 'todas' && t.area !== areaVal) return;
            if (prodVal !== 'todos' && t.titulo !== prodVal) return;
            tareasFiltradas.push({ fecha: fechaKey, diaNum: parseInt(diaT), ...t });
        });
    }
    return tareasFiltradas.sort((a, b) => a.diaNum - b.diaNum);
}

// 10.1. Calendario
function renderizarMesCalendario() {
    const grid = document.getElementById('gridCalendario');
    const anio = fechaMesNavegacion.getFullYear();
    const mes = fechaMesNavegacion.getMonth();
    
    document.getElementById('tituloMesCalendario').textContent = `${nombresMeses[mes]} ${anio}`;
    grid.innerHTML = '';

    const primerDia = new Date(anio, mes, 1).getDay(); 
    const diasEnMes = new Date(anio, mes + 1, 0).getDate();

    for (let i = 0; i < primerDia; i++) {
        grid.insertAdjacentHTML('beforeend', '<div class="celda-dia vacia"></div>');
    }

    for (let dia = 1; dia <= diasEnMes; dia++) {
        let strMes = (mes + 1).toString().padStart(2, '0');
        let strDia = dia.toString().padStart(2, '0');
        let fechaClave = `${anio}-${strMes}-${strDia}`;
        let esHoy = fechaClave === formatoFecha(hoyMismo);

        let tareasHtml = '';
        let tareasPermitidas = obtenerTareasPermitidasDia(fechaClave);
        
        tareasPermitidas.forEach(t => {
            let clase = t.tipo === 'publicado' ? 'publicado' : '';
            tareasHtml += `<div class="indicador-tarea ${clase}" title="${t.titulo}">${t.titulo}</div>`;
        });

        let celda = document.createElement('div');
        celda.className = `celda-dia ${esHoy ? 'hoy' : ''}`;
        celda.innerHTML = `<span class="num-dia">${dia}</span>${tareasHtml}`;
        
        celda.addEventListener('click', () => {
            fechaActualNavegacion = new Date(anio, mes, dia);
            document.querySelector('.tab-btn[data-target="vista-semanal"]').click();
            verDetallesDia(fechaClave, nombresDias[new Date(anio, mes, dia).getDay()]);
        });
        
        grid.appendChild(celda);
    }
}

// 10.2. Reporte Área
function renderizarReporteArea() {
    const contenedor = document.getElementById('contenedorReporteArea');
    contenedor.innerHTML = '';
    const tareasFiltradas = obtenerTareasFiltradasMes('filtroMesArea', 'filtroAreaArea', 'filtroProdArea');

    if (tareasFiltradas.length === 0) {
        contenedor.innerHTML = '<p style="color: #666; padding: 20px;">No hay actividades con estos filtros en el mes seleccionado.</p>';
        return;
    }

    const agrupadas = tareasFiltradas.reduce((acc, tarea) => {
        if(!acc[tarea.area]) acc[tarea.area] = [];
        acc[tarea.area].push(tarea);
        return acc;
    }, {});

    let [anioFiltro, mesFiltro] = document.getElementById('filtroMesArea').value.split('-');
    let mesInt = parseInt(mesFiltro) - 1;

    for (let area in agrupadas) {
        let filasHTML = agrupadas[area].map(t => {
            let claseBadge = t.tipo === 'pendiente' ? 'tipo-pendiente' : 'tipo-publicacion';
            return `<tr>
                <td style="width: 100px; font-weight:600;">${t.diaNum} ${nombresMeses[mesInt].substring(0,3)}</td>
                <td>${t.titulo}</td>
                <td style="width: 120px; text-align:center;"><span class="estado-badge ${claseBadge}">${t.tipo}</span></td>
            </tr>`;
        }).join('');

        const grupoHTML = `
            <div class="grupo-reporte">
                <div class="grupo-cabecera">🏢 ${area} <span style="float:right; font-size:0.8rem; font-weight:normal;">Total: ${agrupadas[area].length}</span></div>
                <table class="tabla-reporte">
                    <thead><tr><th>Día</th><th>Producto / Actividad</th><th style="text-align:center;">Estado</th></tr></thead>
                    <tbody>${filasHTML}</tbody>
                </table>
            </div>
        `;
        contenedor.insertAdjacentHTML('beforeend', grupoHTML);
    }
}

// 10.3. Reporte Producto
function renderizarReporteProducto() {
    const contenedor = document.getElementById('contenedorReporteProducto');
    contenedor.innerHTML = '';
    const tareasFiltradas = obtenerTareasFiltradasMes('filtroMesProd', 'filtroAreaProd', 'filtroProdProd');

    if (tareasFiltradas.length === 0) {
        contenedor.innerHTML = '<p style="color: #666; padding: 20px;">No hay actividades con estos filtros en el mes seleccionado.</p>';
        return;
    }

    const agrupadas = tareasFiltradas.reduce((acc, tarea) => {
        if(!acc[tarea.titulo]) acc[tarea.titulo] = [];
        acc[tarea.titulo].push(tarea);
        return acc;
    }, {});

    let [anioFiltro, mesFiltro] = document.getElementById('filtroMesProd').value.split('-');
    let mesInt = parseInt(mesFiltro) - 1;

    for (let prod in agrupadas) {
        let filasHTML = agrupadas[prod].map(t => {
            let claseBadge = t.tipo === 'pendiente' ? 'tipo-pendiente' : 'tipo-publicacion';
            return `<tr>
                <td style="width: 100px; font-weight:600;">${t.diaNum} ${nombresMeses[mesInt].substring(0,3)}</td>
                <td><span style="font-size:0.8rem; color:#666; text-transform:uppercase; display:block; margin-bottom:4px;">${t.area}</span></td>
                <td style="width: 120px; text-align:center;"><span class="estado-badge ${claseBadge}">${t.tipo}</span></td>
            </tr>`;
        }).join('');

        const grupoHTML = `
            <div class="grupo-reporte">
                <div class="grupo-cabecera">📄 ${prod} <span style="float:right; font-size:0.8rem; font-weight:normal;">Total: ${agrupadas[prod].length}</span></div>
                <table class="tabla-reporte">
                    <thead><tr><th>Día</th><th>Área Responsable</th><th style="text-align:center;">Estado</th></tr></thead>
                    <tbody>${filasHTML}</tbody>
                </table>
            </div>
        `;
        contenedor.insertAdjacentHTML('beforeend', grupoHTML);
    }
}

// Eventos de Filtros y Calendario
['filtroMesArea', 'filtroAreaArea', 'filtroProdArea'].forEach(id => {
    document.getElementById(id).addEventListener('change', renderizarReporteArea);
});
['filtroMesProd', 'filtroAreaProd', 'filtroProdProd'].forEach(id => {
    document.getElementById(id).addEventListener('change', renderizarReporteProducto);
});

function cambiarMesCalendario(offset) {
    fechaMesNavegacion.setMonth(fechaMesNavegacion.getMonth() + offset);
    renderizarMesCalendario();
}
document.getElementById('btnMesAntCal').addEventListener('click', () => cambiarMesCalendario(-1));
document.getElementById('btnMesSigCal').addEventListener('click', () => cambiarMesCalendario(1));
document.getElementById('btnHoyCal').addEventListener('click', () => {
    fechaMesNavegacion = new Date(); 
    renderizarMesCalendario();
});