// Cálculos puros: no saben nada de productos ni de respuestas.
export function calcularTotal(pedido) {
  return pedido.items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
}

export const formatearPrecio = (monto) => "$" + monto.toFixed(2);
