import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdminUsuariosService } from 'src/app/services/admin-usuarios.service';
import { UsuarioService } from 'src/app/services/usuario.service';
// import { Empresa } from 'src/app/models/empresa.model';
// import { Usuario } from 'src/app/models/usuarios.model';
import { Sucursal } from 'src/app/models/sucursal.model';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-roladminfinalsucursales',
  templateUrl: './roladminfinalsucursales.component.html',
  styleUrls: ['./roladminfinalsucursales.component.scss'],
  providers: [AdminUsuariosService, UsuarioService],
})
export class RoladminfinalsucursalesComponent implements OnInit {
  // token
  public token;
  public SucursalModelGet: Sucursal;
  public SucursalModelPost: Sucursal;
  public SucursalModelGetId: Sucursal;
  public idEmpresa;
  public idUsuario;
  public municipios: String[] = [];

  clasificacion = [
    { tipo: 'Alta Verapaz' },
    { tipo: 'Baja Verapaz' },
    { tipo: 'Chimaltenango' },
    { tipo: 'Chiquimula' },
    { tipo: 'El progreso' },
    { tipo: 'Escuintla' },
    { tipo: 'Guatemala' },
    { tipo: 'Huehuetenango' },
    { tipo: 'Izabal' },
    { tipo: 'Jalapa' },
    { tipo: 'Jutiapa' },
    { tipo: 'Petén' },
    { tipo: 'Quetzaltenango' },
    { tipo: 'Quiché' },
    { tipo: 'Retalhuleu' },
    { tipo: 'Sacatepéquez' },
    { tipo: 'San Marcos' },
    { tipo: 'Santa Rosa' },
    { tipo: 'Sololá' },
    { tipo: 'Suchitepéquez' },
    { tipo: 'Totonicapán' },
    { tipo: 'Zacapa' },
  ];

  // listado de municipios
  actualizarMunicipio(departamento: string) {
    switch (departamento) {
      case 'Alta Verapaz':
        this.municipios = [
          "Cobán",
          "Santa Cruz Verapaz",
          "San Cristóbal Verapaz",
          "Tucurú",
          "Panzós",
          "Fray Bartolomé de las Casas",
          "San Pedro Carchá",
          "San Juan Chamelco",
          "La Tinta",
          "Purulhá",
          "Chisec",
          "Raxruhá",
          "San Miguel Tucurú"
        ];
        break; // <-- Agregado aquí

      case 'Baja Verapaz':
        this.municipios = [
          "Salamá",
          "Rabinal",
          "San Miguel Chicaj",
          "Granados",
          "El Chol",
          "Purulhá"
        ];
        break; // <-- Agregado aquí

      case 'Chimaltenango':
        this.municipios = [
          "Chimaltenango",
          "San José Poaquil",
          "San Martín Jilotepeque",
          "Parramos",
          "El Tejar",
          "Yupiltepeque",
          "Acatenango",
          "Sumpango"
        ];
        break; // <-- Aquí también

        case 'Chiquimula':
          this.municipios = [
            "Chiquimula",
            "San José la Arada",
            "Camotán",
            "Olopa",
            "Quezaltepeque",
            "San Juan Ermita",
            "Concepción Las Minas",
            "Cabañas"
          ];

      break;
      case 'El progreso':
        this.municipios = [
          "El Progreso",
          "Guastatoya",
          "San Antonio La Paz",
          "Sanarate",
          "Morazán",
          "Santa María Ixhuatán",
          "San Miguel La Paz"
        ];

    break;
    case 'Escuintla':
      this.municipios = [
        "Escuintla",
        "Santa Lucía Cotzumalguapa",
        "La Democracia",
        "San José",
        "Siquinala",
        "El Guamuchil",
        "Tiquisate",
        "Palín",
        "San Vicente Pacaya",
        "Nueva Concepción",
        "San Juan Alotenango"
      ];

  break;
  case 'Guatemala':
    this.municipios = [
      "Guatemala",
      "Mixco",
      "Villa Nueva",
      "San Miguel Petapa",
      "Santa Catarina Pinula",
      "San José del Golfo",
      "San Pedro Ayampuc",
      "Chinautla",
      "Palencia",
      "Fraijanes",
      "Villa Canales"
    ];
break;
case 'Huehuetenango':
  this.municipios = [
    "Huehuetenango",
    "Chiantla",
    "Cuilco",
    "Jacaltenango",
    "Santa Bárbara",
    "La Libertad",
    "San Sebastián Huehuetenango",
    "San Juan Atitlán",
    "San Antonio Huista",
    "Todos Santos Cuchumatán",
    "San Rafael La Independencia",
    "Nenton"
  ];

break;
case 'Izabal':
  this.municipios = [
    "Puerto Barrios",
    "Morales",
    "San Antonio",
    "Los Amates",
    "El Estor",
    "Livingston"
  ];

break;
case 'Jalapa':
  this.municipios = [
    "Jalapa",
    "San Pedro Pinula",
    "Mataquescuintla",
    "San Luis Jilotepeque",
    "El Rosario",
    "Concepción Las Minas"
  ];

break;
case 'Jutiapa':
  this.municipios = [
    "Jutiapa",
    "El Adelanto",
    "Agua Blanca",
    "Asunción Mita",
    "Conguaco",
    "Jerez",
    "Moyuta",
    "Pasaco",
    "San José Acatempa",
    "San Juan Bautista",
    "Santa Catarina Mita",
    "Yupiltepeque"
  ];
break;
case 'Petén':
  this.municipios = [
    "Flores",
    "Santa Elena",
    "San Benito",
    "La Libertad",
    "San Andrés",
    "San Francisco",
    "El Chal",
    "Melchor de Mencos",
    "Dolores",
    "Poptún",
    "San Luis"
  ];
break;
case 'Quetzaltenango':
  this.municipios = [
    "Quetzaltenango",
    "Salcajá",
    "San Mateo",
    "San Martín Sacatepéquez",
    "Almolonga",
    "Zunil",
    "Coatepeque",
    "La Esperanza",
    "Cantel",
    "Sibilia"
  ];
break;
case 'Quiché':
  this.municipios = [
    "Santa Cruz del Quiché",
    "Chiché",
    "Zunil",
    "San Bartolomé Jocotenango",
    "San Juan Cotzal",
    "San Andrés Sajcabajá",
    "Nebaj",
    "Chajul",
    "Canillá",
    "Sacapulas",
    "Acambal",
    "Patzité"
  ];
break;
case 'Retalhuleu':
  this.municipios = [
    "Retalhuleu",
    "San Sebastián",
    "San Martín Zapotitlán",
    "Nuevo San Carlos",
    "El Asintal",
    "Champerico"
  ];
break;
case 'Sacatepéquez':
  this.municipios = [
    "Antigua Guatemala",
    "Ciudad Vieja",
    "San Lucas Sacatepéquez",
    "San Bartolomé Milpas Altas",
    "Santo Domingo Xenacoj",
    "San Pedro Las Huertas",
    "Alotenango"
  ];
break;
case 'San Marcos':
  this.municipios = [
    "San Marcos",
    "San Pedro Sacatepéquez",
    "San Antonio Sacatepéquez",
    "San Miguel Ixtahuacán",
    "Concepción Tutuapa",
    "Tejutla",
    "El Tumbador",
    "Nuevo Progreso",
    "Pajapita",
    "San Rafael Pie de la Cuesta"
  ];
break;
case 'Santa Rosa':
  this.municipios = [
    "Santa Rosa de Lima",
    "Barberena",
    "Cuilapa",
    "San Juan Tecuaco",
    "San Rafael Las Flores",
    "Casillas",
    "Pueblo Nuevo Viñas"
  ];
break;
case 'Sololá':
  this.municipios = [
    "Solalá",
    "Panajachel",
    "San Andrés Semetabaj",
    "San José Chacayá",
    "Santa Catarina Palopó",
    "San Antonio Palopó"
  ];
break;
case 'Suchitepéquez':
  this.municipios = [
    "Mazatenango",
    "Cuyotenango",
    "San Bernardino",
    "Santo Domingo Suchitepéquez",
    "San Gabriel",
    "Samayac",
    "San Antonio Suchitepéquez"
  ];
break;
case 'Totonicapán':
  this.municipios = [
    "Totonicapán",
    "San Cristóbal Totonicapán",
    "San Francisco El Alto",
    "Momostenango",
    "San Andrés Xecul",
    "Santa María Chiquimula"
  ];
break;
case 'Zacapa':
  this.municipios = [
    "Zacapa ",
    "Cabañas",
    "Chiquimula",
    "Estanzuela",
    "Gualán",
    "La Unión",
    "Río Hondo",
    "San Diego",
    "San Jorge",
    "Teculután"
  ];
break;



      // Añadir más casos según sea necesario
      default:
        this.municipios = [];
        break;
    }
  }

  constructor(
    public _activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _adminUsuariosService: AdminUsuariosService,
    private _usuarioService: UsuarioService
  ) {
    this.titleService.setTitle('Rol admin sucursales');
    this.token = this._usuarioService.obtenerToken();
    // cambiando el array que no se usara xd
    this.SucursalModelPost = new Sucursal(
      '',
      '',
      '',
      0,
      '',
      '',
      '',
      [
        {
          idEmpresa: '',
          nombreEmpresa: '',
          direccion: '',
          telefono: 0,
        },
      ],
      [
        {
          idUsuario: '',
          nombre: '',
          apellido: '',
          email: '',
          rol: '',
        },
      ]
    );
    this.SucursalModelGetId = new Sucursal(
      '',
      '',
      '',
      0,
      '',
      '',
      '',
      [
        {
          idEmpresa: '',
          nombreEmpresa: '',
          direccion: '',
          telefono: 0,
        },
      ],
      [
        {
          idUsuario: '',
          nombre: '',
          apellido: '',
          email: '',
          rol: '',
        },
      ]
    );
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((dataRuta) => {
      this.idUsuario = dataRuta.get('idUsuario'); // Asignar el idUsuario a la propiedad de la clase
      this.idEmpresa = localStorage.getItem('idEmpresa'); // Asignar correctamente

      if (this.idUsuario) {
        this.getSucursalesPorGestor(this.idUsuario); // Usar la propiedad
      }

      console.log(this.idUsuario); // Deberías ver el idUsuario correcto aquí
      console.log(this.idEmpresa);  // Deberías ver el idEmpresa correcto aquí
    });
  }

  // ver sucursales por gestor
  getSucursalesPorGestor(idUsuario) {
    this._adminUsuariosService
      .ObtenerSucursalesIdGestor(idUsuario, this.token)
      .subscribe(
        (response) => {
          this.SucursalModelGet = response.sucursales;
          console.log(this.SucursalModelGet);
        },
        (error) => {
          console.log(<any>error);
        }
      );
  }

  //  agregar sucursales
  // post sucursal
  postSucursal(idEmpresa, idUsuario) {
    this._adminUsuariosService
      .AgregarNuevaSucursal(
        this.SucursalModelPost,
        this.token,
        idEmpresa,
        idUsuario
      )
      .subscribe({
        next: (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Exito!',
            text: 'Sucursal agregada exitosamente',
            showConfirmButton: false,
            timer: 1500,
            willClose: () => {
              // Recarga la página después de que el Swal se cierre
              window.location.reload();
            }
          });
        },
        error: (error) => {
          console.log(<any>error);
          Swal.fire({
            icon: 'error',
            title: "Datos incompletos o nombre existente",
            footer: '*Ingrese los datos de nuevo*',
            showConfirmButton: false,
            timer: 2500
          });
        }
      });
  }

  // eliminar sucursales
  deleteSucursal(idSucursal) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, se llama al servicio para eliminar
        this._adminUsuariosService.eliminarSucursalesRolAdmin(idSucursal,this.token).subscribe(
          (response)=>{
            console.log(response);
            Swal.fire({
              icon: 'success',
              title: 'Eliminado',
              text: 'La sucursal ha sido eliminada exitosamente.',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                window.location.reload();
              }
            });
          },
          (error) => {
            console.log(<any>error);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'No se pudo eliminar la sucursal.',
              showConfirmButton: false,
              timer: 2500
            });
          }
        );
      }
    });
  }

  getSucursalIdRolAdmin(idSucursal){
    this._adminUsuariosService.obtenerSucursalRolId(idSucursal, this.token).subscribe(
      (response)=>{
        console.log(response);
        this.SucursalModelGetId = response.sucursales;
      },(error)=>{
        console.log(error)
      }
    )
  }

  // editar sucursal
  putSucursal(){
    this._adminUsuariosService.editarSucursalRolAdmin(this.SucursalModelGetId,this.token).subscribe(
      (response)=>{
        console.log(response);
       Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Sucursal editada correctamente',
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            window.location.reload();
          }
        });
      },(error) => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: "Nombre existente",
          footer: '*Ingrese uno nuevo*',
          showConfirmButton: false,
          timer: 2500
        });
      }
    )
  }
}
