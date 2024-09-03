//Nuevo modelo
export class Factura{
    constructor(
        public _id: String,
        public nit: String,
        public fecha: Date,
        public idUsuario: String,
        public compras:[{
            idProducto: String,
            nombreProducto: String,
            cantidad: Number,
            precio: Number,
            subTotal: Number
        }],
        public total: Number

    ){}
}