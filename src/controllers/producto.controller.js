// El controlador NO toca el arreglo: le pide al model y arma la respuesta.
// Contrato: éxito -> { ok: true, data }  |  fallo -> { ok: false, error: { mensaje } }
import * as model from "../models/producto.model.js";

const fallo = (mensaje) => ({ ok: false, error: { mensaje } });

export function listarProductos() {
  return { ok: true, data: model.listarDisponibles() };
}

export function verProducto(id) {
  const producto = model.obtenerPorId(id);
  if (!producto) return fallo("Producto no encontrado");
  return { ok: true, data: producto };
}

export function crearProducto(datos) {
  if (!datos.nombre || datos.nombre.trim() === "") return fallo("El nombre es obligatorio");
  if (typeof datos.precio !== "number" || datos.precio <= 0) return fallo("El precio debe ser mayor a 0");
  if (model.existeNombre(datos.nombre)) return fallo("Ya existe un producto con ese nombre");

  return { ok: true, data: model.crear(datos) };
}

export function actualizarProducto(id, cambios) {
  const actualizado = model.actualizar(id, cambios);
  if (!actualizado) return fallo("Producto no encontrado");
  return { ok: true, data: actualizado };
}

export function eliminarProducto(id) {
  const eliminado = model.eliminar(id);
  if (!eliminado) return fallo("Producto no encontrado");
  return { ok: true, data: eliminado };
}
