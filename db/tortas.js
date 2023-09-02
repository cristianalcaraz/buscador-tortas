const tortasDisponibles = [
    {
      "id": 1,
      "precio": 2500,
      "nombre": "Selva negra",
      "gusto": "frutilla, dulce de leche, crema",
      "imagen": "selva negra.jpg"
    },
    {
      "id": 2,
      "precio": 2000,
      "nombre": "Tarta frutales",
      "gusto": "frutilla, kiwi, cereza",
      "imagen": "tarta frutal.jpg"
    },
    {
      "id": 3,
      "precio": 3500,
      "nombre": "Budin de limon",
      "gusto": "limon, almendras",
      "imagen": "budin.jpg"
    },
    {
      "id": 4,
      "precio": 5000,
      "nombre": "Rogel",
      "gusto": "dulce de leche",
      "imagen": "rogel.jpg"
    },
    {
      "id": 5,
      "precio": 5500,
      "nombre": "Lemon pie",
      "gusto": "limon",
      "imagen": "Lemon pie.jpg"
    },
    {
      "id": 6,
      "precio": 4500,
      "nombre": "Tartas",
      "gusto": "frutales",
      "imagen": "tartas.jpg"
    },
    {
      "id": 7,
      "precio": 1200,
      "nombre": "Torta helada",
      "gusto": "yogurt, frutilla",
      "imagen": "tarta helada.jpg"
    }
]

// Guardo las tortas disponibles en el localStorage
localStorage.setItem("tortas", JSON.stringify(tortasDisponibles));
