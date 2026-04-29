// data.js
// Archivo de Base de Datos y Usuarios (Seguridad y Respaldo)

window.usuariosDB = {
    // Usuario Administrador
    "director": { 
        pass: "310148513", 
        rol: "admin", 
        area: "todas", 
        nombre: "Director General" 
    },
    // Usuarios de Área
    "macro": { 
        pass: "macro", 
        rol: "area", 
        area: "Directora de Estudios Macroeconómicos y Sectoriales", 
        nombre: "Dir. Macro" 
    },
    "impactos": { 
        pass: "impactos", 
        rol: "area", 
        area: "Directora de Valoración de Impactos Presupuestarios", 
        nombre: "Dir. Impactos" 
    },
    "GastoF": { 
        pass: "GastoF", 
        rol: "area", 
        area: "Director de Gasto Federalizado", 
        nombre: "Dir. Gasto Fed." 
    },
    "GastoSP": { 
        pass: "GastoSP", 
        rol: "area", 
        area: "Dirección de Ingreso - Gasto", 
        nombre: "Dir. Ingreso-Gasto" 
    }
};

// Base de datos inicial de tareas 
window.baseDatosTareasInicial = {
    "2026-04-29": [
        { area: "Dirección de Ingreso - Gasto", titulo: "Boletín coyuntura económica (becefp)", tipo: "pendiente" },
        { area: "Directora de Estudios Macroeconómicos y Sectoriales", titulo: "Indicadores económicos semanales (iescefp)", tipo: "publicado" }
    ]
};