export interface Tarea {
  id: number;
  titulo: string;
  materia: string;
  fecha: string;
  completada: boolean;
}

export const tareasIniciales: Tarea[] = [
  {
    id: 1,
    titulo: "Parcial de Cálculo",
    materia: "Matemáticas",
    fecha: "2025-05-10",
    completada: false
  },
  {
    id: 2,
    titulo: "Informe de Laboratorio",
    materia: "Física",
    fecha: "2025-05-08",
    completada: true
  },
  {
    id: 3,
    titulo: "Ensayo de historia",
    materia: "Historia",
    fecha: "2025-05-12",
    completada: false
  },
  {
    id: 4,
    titulo: "Proyecto de programación",
    materia: "Programación",
    fecha: "2025-05-15",
    completada: false
  },
  {
    id: 5,
    titulo: "Exposición de inglés",
    materia: "Inglés",
    fecha: "2025-05-11",
    completada: true
  }
];