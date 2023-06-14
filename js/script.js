
let letras = prompt('Digite a Letra.')

switch (letras.toUpperCase()) {
    case "A":
    alert("Excelente");
    break;
    case "B":
    alert("Ótimo");
    break;
    case "C":
    alert("Bom");
    break;
    case "D":
    alert("Regular");
    break;
    case "E":
    alert("Ruim");
    break;
    case "F":
    alert("Nos vemos no ano que vem");
    break;

  default:
    alert("Nota invalida, esta letra não é respectiva a nenhum conceito");
    break;
}