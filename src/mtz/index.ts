import moment from "moment";

const momentConfigured = moment();

console.log(momentConfigured);

console.log(`Dias del mes ${momentConfigured.daysInMonth()}`);
console.log(`Mes ${momentConfigured.format("MMMM")}`);
console.log(`Mes en arreglo ${momentConfigured.get("M")}`); //Los meses van de 0 a 11

export default {}