//Nuevo modelo
export class Factura{
    constructor(
        public _id: String,
        public noFactura: Number,
        public fecha: String,
        public idUsuario: String,
        public listaProductos:[{
            nombreProducto: String,
            cantidadComprada: Number,
            precioUnitario: Number,
            subTotal: Number
        }],
        public totalFactura: Number,
        public nit: Number,
        public direccion: String,
        public sucursalId: String

    ){}
}