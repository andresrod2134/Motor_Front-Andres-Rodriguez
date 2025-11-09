
export class Piloto {
  id: number;
  nombre: string;
  rango: string;
  fechaNacimiento: string;
  cedula: string;
  pais: string;
  biografia: string;
  fotografias: string[];
  modalidades: string[];
  records: string[];
  logrosDeportivos: string[];
  estadisticas: string[];
  //participaciones: Participacion[]; // puedes cambiar 'any' por una clase Participacion si la creas después

  constructor(
    id: number,
    nombre: string,
    rango: string,
    fechaNacimiento: string,
    cedula: string,
    pais: string,
    biografia: string,
    fotografias: string[],
    modalidades: string[],
    records: string[],
    logrosDeportivos: string[],
    estadisticas: string[],
    participaciones: any[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.rango = rango;
    this.fechaNacimiento = fechaNacimiento;
    this.cedula = cedula;
    this.pais = pais;
    this.biografia = biografia;
    this.fotografias = fotografias;
    this.modalidades = modalidades;
    this.records = records;
    this.logrosDeportivos = logrosDeportivos;
    this.estadisticas = estadisticas;
    //this.participaciones = participaciones;
  }
}

