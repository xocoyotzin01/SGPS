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
    "2026-05-04": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-05-11": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-05-18": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-05-25": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-06-01": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-06-08": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-06-15": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-06-22": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-06-29": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-07-06": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-07-13": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-07-20": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-07-27": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-08-03": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-08-10": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-08-17": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-08-24": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-08-31": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-09-07": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-09-14": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-09-21": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-09-28": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-10-05": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-10-12": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-10-19": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-10-26": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-11-02": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-11-09": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-11-16": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-11-23": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ],
    "2026-11-30": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Lo que tienes que saber (LQSCEFP)",
            "detalle_real": "Lo que tienes que saber (LQSCEFP)",
            "tipo": "pendiente"
        }
    ]
};