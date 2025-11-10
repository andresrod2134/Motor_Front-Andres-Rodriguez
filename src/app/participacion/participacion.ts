import { Piloto } from "../piloto/piloto";
//import { Motocicleta } from "../motocicleta/motocicleta";


export class Participacion {
  id: number;
  posicion: number;
  tiempo: number;
  ranking: number;
  progresion: number;
  piloto: Piloto;
  //motocicleta: Motocicleta;
  //competencia: Competencia;

  constructor(
    id: number,
    posicion: number,
    tiempo: number,
    ranking: number,
    progresion: number,
    piloto: Piloto,
    //motocicleta: Motocicleta,
    //competencia: Competencia
  ) {
    this.id = id;
    this.posicion = posicion;
    this.tiempo = tiempo;
    this.ranking = ranking;
    this.progresion = progresion;
    this.piloto = piloto;
    //this.motocicleta = motocicleta;
    //this.competencia = competencia;
  }
}
