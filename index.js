// El index solo arranca y prueba. No tiene lógica de negocio.
import * as ctrl from "./src/controllers/producto.controller.js";
import { calcularTotal, formatearPrecio } from "./src/utils/calculos.js";

console.log("--- listar ---");
console.log(ctrl.listarProductos());

console.log("--- crear ---");
const creado = ctrl.crearProducto({ nombre: "Sincronizada", precio: 32, categoria: "comida" });
console.log(creado);

console.log("--- crear repetido ---");
console.log(ctrl.crearProducto({ nombre: "sincronizada", precio: 40, categoria: "comida" }));

console.log("--- ver uno ---");
console.log(ctrl.verProducto(creado.data.id));

console.log("--- ver uno que no existe ---");
console.log(ctrl.verProducto("no-existe"));

console.log("--- eliminar ---");
console.log(ctrl.eliminarProducto(creado.data.id));

console.log("--- total del pedido ---");
const pedido = {
  folio: "PR-0341",
  items: [
    { nombre: "Molletes", precio: 30, cantidad: 2 },
    { nombre: "Jugo",     precio: 18, cantidad: 1 }
  ]
};
console.log(formatearPrecio(calcularTotal(pedido)));
