export class Carrito{
    constructor(
        public _id: String,
        public datosUsuario:[{
            idUsuario: String,
            nombre: String,
            apellido: String,
            email: String
        }],
        public compras:[{
            idProducto: String,
            nombreProducto: String,
            cantidad: Number,
            precio: Number,
            subTotal: Number,
            descripcionCategoria:[{
                idCategoria: String,
                nombreCategoria: String
            }],
            datosSucursal:[{
                idSucursal:String,
                nombreSucursal: String,
                direccionSucursal: String,
                telefonoSucursal: String
            }]
        }],
        public total: Number

    ){}
}
