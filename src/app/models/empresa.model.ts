//Nuevo modelo
export class Empresa{
    constructor(
        public _id: String,
        public nombreEmpresa: String,
        public direccion: String,
        public telefono: Number,
        public mision: String,
        public vision: String,
        public historia: String,
        public idUsuario: String
    ){}
}
