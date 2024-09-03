export class Producto {
  constructor(
    public _id: String,
    public nombreProducto: String,
    public marca: String,
    public descripcion: String,
    public stock: Number,
    public precio: Number,
    public vendido: Number,
    public idCategoria: String
  ) {

  }
}
