export class Sucursal{
  constructor(
    public _id: String,
    public nombreSucursal: String,
    public direccionSucursal: String,
    public telefonoSucursal: Number,
    public departamento: String,
    public municipio: String,
    public imagen: String,
    
    public datosEmpresa: [{
      idEmpresa: String,
      nombreEmpresa: String,
      direccion: String,
      telefono: Number
    }],

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
