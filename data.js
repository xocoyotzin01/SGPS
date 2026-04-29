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
    "2026-02-05": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Estudios (cefp)",
            "detalle_real": "Recursos Identificados en el Presupuesto de Egresos de la Federación 2026, por Entidad Federativa",
            "tipo": "pendiente"
        }
    ],
    "2026-02-17": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Estudios (cefp)",
            "detalle_real": "Compromisos del Ejecutivo Federal establecidos en la Ley Federal de Presupuesto y Responsabilidad Hacendaria y en el Decreto del Presupuesto de Egresos de la Federación 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Ingresos Presupuestarios, Enero - Diciembre de 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 9 al 13 de febrero de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-02-19": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Estudios (cefp)",
            "detalle_real": "Análisis del Gasto Federalizado Pagado al Cuarto Trimestre de 2025 \n(Nivel Nacional y Entidad Federativa)",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Día del Ejército Mexicano 19 de febrero de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-02-27": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Estudios (cefp)",
            "detalle_real": "Análisis sobre la Situación Económica de México al Cuarto Trimestre de 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-03-06": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Estudios (cefp)",
            "detalle_real": "Obligaciones Financieras de las Entidades Federativas de México\nCuarto Trimestre de 202",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Recursos Federalizados del Programa de Sanidad e Inocuidad Alimentaria",
            "tipo": "pendiente"
        }
    ],
    "2026-01-08": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Avance Financiero del Gasto Federalizado a noviembre de 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-01-09": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Principales Balances de Finanzas Públicas, Enero - Noviembre 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-01-12": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Calendario del Gasto Neto Total en Clasificación Administrativa, 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Gastos Obligatorios, 2019-2026",
            "tipo": "pendiente"
        }
    ],
    "2026-01-15": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Evolución del Gasto Público, Enero – Noviembre 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-01-30": [
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Ingresos Presupuestarios, Enero-Noviembre de 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Deuda Pública, enero-noviembre de 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-02-16": [
        {
            "area": "Todas las Áreas",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Programa de Política Monetaria del Banco de México para 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Lo que tienes que saber del FAIS, Ramo33",
            "tipo": "pendiente"
        }
    ],
    "2026-02-18": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Recursos destinados a la pavimentación municipal derivados de la regularización de autos usados de procedencia extranjera, 2022-2025",
            "tipo": "pendiente"
        }
    ],
    "2026-03-10": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Balances de Finanzas Públicas, Enero - Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Ramo 22 “Instituto Nacional Electoral”, PEF 2018-2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 2 al 6 de marzo de 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Deuda per cápita por entidad federativa, 4to trimestre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Deuda como porcentaje del PIBE por entidad federativa, 4to trimestre 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-03-11": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Análisis del Plan Anual de Financiamiento 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Deuda como porcentaje de ingresos totales por entidad federativa, 4to trimestre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Deuda como porcentaje de las Participaciones por entidad federativa, 4to trim 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Ingresos y Egresos Estatales por Entidad Federativa (2018-2024)",
            "tipo": "pendiente"
        }
    ],
    "2026-03-12": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Avance Financiero del Gasto Federalizado a Enero de 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Mapa participación banca desarrollo en deuda por entidad, 4to trim 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Mapa participación banca múltiple en deuda por entidad, 4to trim 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-03-13": [
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "PEF 2026: Anexo 13 Erogaciones para la Igualdad entre Mujeres y Hombres",
            "tipo": "pendiente"
        },
        {
            "area": "Dirección de Ingreso - Gasto",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Anexo Transversal “Consolidación de una Sociedad de Cuidados”, PEF 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-03-19": [
        {
            "area": "Todas las Áreas",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Líneas de Pobreza (LP) al mes de febrero de 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Evolución de la Deuda Subnacional Per Cápita por Entidad Federativa al Cuarto Trimestre de 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Evolución de la Deuda Subnacional como Porcentaje de los Ingresos Totales, 2016-2025/IV Trimestre",
            "tipo": "pendiente"
        }
    ],
    "2026-03-20": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Evolución de la Deuda Subnacional por acreditado 2016-2025/IV Trimestre",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Notas Informativas (notacefp)",
            "detalle_real": "Evolución de la deuda subnacional por Acreedor 2016-2025/IV Trimestre",
            "tipo": "pendiente"
        }
    ],
    "2026-01-16": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Boletín coyuntura económica (becefp)",
            "detalle_real": "Evolución de Precios, diciembre 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-01-23": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Boletín coyuntura económica (becefp)",
            "detalle_real": "Evolución de la Demanda Interna, octubre 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-02-20": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Boletín coyuntura económica (becefp)",
            "detalle_real": "Evolución de Precios, enero 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-02-26": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Boletín coyuntura económica (becefp)",
            "detalle_real": "Evolución de la Demanda Interna, noviembre 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-03-04": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Boletín coyuntura económica (becefp)",
            "detalle_real": "Boletín Evolución y Perspectivas del Producto Interno Bruto, IV Trim 2025 -Jesús",
            "tipo": "pendiente"
        }
    ],
    "2026-01-14": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 5 al 9 de enero de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-01-21": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 12 al 16 de enero de 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Gasto Programable por Entidad Federativa, PEF 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-01-28": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 19 al 23 de enero de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-02-04": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 26 al 30 de enero de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-02-10": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 2 al 6 de febrero de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-02-24": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 16 al 20 de febrero de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-03-03": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 23 al 27 de febrero de 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales Calendarizadas vs Pagadas por Entidad Federativa, Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales Calendarizadas vs Pagadas por Entidad Federativa, Enero 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-03-18": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 9 al 13 de marzo de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-03-24": [
        {
            "area": "Directora de Estudios Macroeconómicos y Sectoriales",
            "titulo": "Indicadores económicos semanales (iescefp)",
            "detalle_real": "Indicadores Económicos de Coyuntura: Resumen semanal del 16 al 20 de marzo de 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-01-07": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Gasto Federalizado, a Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales, a Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales, a Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales Pagadas por Entidad Federativa, a Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales Calendarizadas vs Pagadas por Entidad Federativa, a Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales Pagadas por Entidad Federativa, a Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales Calendarizadas vs Pagadas por Entidad Federativa, a Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Finanzas Públicas, Enero-Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Total, Programable y No Programable, Enero-Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Administrativa, Enero-Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Económica, Enero-Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Funcional, Enero-Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Componentes de la Deuda Noviembre de 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Deuda Bruta Noviembre de 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos Tributarios Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos No Tributarios Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos Petroleros, Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos NO Petroleros, Noviembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Gasto Federalizado, a Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales, a Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales, a Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales Calendarizadas vs Pagadas por Entidad Federativa, a Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales Pagadas por Entidad Federativa, a Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales Calendarizadas vs Pagadas por Entidad Federativa, a Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales Pagadas por Entidad Federativa, a Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Total, Programable y No Programable, Enero - Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Administrativa, Enero - Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Económica, Enero - Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Funcional, Enero - Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Anexos Transversales, Enero - Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Programas y Proyectos de Inversión, Enero - Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos Petroleros, Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos NO Petroleros, Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos Tributarios, Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos No Tributarios, Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos Presupuestarios, Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Finanzas Públicas, Enero-Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos OCPD y CFE , Diciembre 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Deuda Bruta del Sector Público Federal, Diciembre de 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Componentes de la Deuda Bruta del Sector Público Federal, Diciembre de 2025",
            "tipo": "pendiente"
        }
    ],
    "2026-02-12": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Gasto Programable por Clasificación del Gasto, identificado en el PEF 2026 por Entidad Federativa",
            "tipo": "pendiente"
        }
    ],
    "2026-02-23": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Avance Financiero de los recursos federales por Entidad Federativa, al 4to trim. 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Lo que tienes que saber",
            "tipo": "pendiente"
        }
    ],
    "2026-03-02": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Gasto Federalizado Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Aportaciones Federales, Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Participaciones Federales, Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Cuadro Aportaciones Pagadas por Entidad Federativa Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Mapa Aportaciones Pagadas por Entidad Federativa Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Mapa Participaciones Pagadas por Entidad Federativa Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Lo que tienes que saber",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto total, Programable y No Programable, Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Anexo Ingresos presupuestarios enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos presupuestarios enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Económica, Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Finanzas Públicas, Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Gasto Programable en Clasificación Funcional, Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Infografía_organismos y CFE_enero_2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos tributarios, enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Infografía_no tributarios_enero_2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos no petroleros",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "G P en C Administrativa Enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Infografía componentes de deuda enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Ingresos petroleros enero 2026",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "Deuda Bruta, enero 2026",
            "tipo": "pendiente"
        }
    ],
    "2026-03-05": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Gato Programable por Clasificación del Gasto, Avance Financiero por Entidad Federativa al 4to trim. 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Gasto Programable Pagado al 4to trimestre 2025 por Entidad Federativa",
            "tipo": "pendiente"
        },
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Avance Financiero del Gasto Programable Pagado por Entidad Federativa, al 4to trim. 2025",
            "tipo": "pendiente"
        },
        {
            "area": "Directora de Valoración de Impactos Presupuestarios",
            "titulo": "Infografía de Deuda Estatal del Sector Publico (DEPinfog)",
            "detalle_real": "8 de Marzo: Día Internacional de la Mujer",
            "tipo": "pendiente"
        }
    ],
    "2026-03-23": [
        {
            "area": "Director de Gasto Federalizado",
            "titulo": "Infografía Ingresos y Egresos Estatales (dpie)",
            "detalle_real": "Evolución de la Deuda Subnacional como Porcentaje de las Participaciones, 2016-2025/IV Trimestre",
            "tipo": "pendiente"
        }
    ],
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