export class Usuario{
    constructor(
        public _id: String,
        public nombre: String,
        public apellido: String,
        public email: String,
        public password: String,
        public rol: String,
        public telefono: Number,
        public direccion: String,
        public departamento: String,
        public municipio: String,
        public imagen: String

    ){}
}
