export class Sucursal{
  constructor(
    public _id: String,
    public nombreSucursal: String,
    public direccionSucursal: String,
    public telefonoSucursal: Number,

    public idEmpresa: String,
    public gestorSucursales: [{
      idUsuario: String,
      nombre: String,
      apellido: String,
      email: String,
      rol: String
    }],

  ) {

  }
}
