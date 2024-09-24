export class Producto {
  constructor(

    public _id: String,
    public nombreProducto: String,
    public marca: String,
    public descripcion: String,
    public stock: Number,
    public precio: Number,
    public vendido: Number,
    public imagen: String,
    public size: String,
    public estado: String,


    public descripcionCategoria: [{
      idCategoria: String,
      nombreCategoria: String,
    }],

    public datosSucursal: [{
      idSucursal: String,
      nombreSucursal: String,
      direccionSucursal: String,
      telefonoSucursal: Number,
    }]

  ) {

  }
}
