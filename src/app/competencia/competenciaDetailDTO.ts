import { CompetenciaDTO } from "./competenciaDTO";
//import {MarcaDTO} from "../marca/marca"
//import {ParticipacionDTO} from "../participacion/participacion"

export enum Modalidad {
    VELOCIDAD = "VELOCIDAD",
    RESISTENCIA = "RESISTENCIA",
    RALLY = "RALLY",
    TRIAL = "TRIAL",
    FREESTYLE = "FREESTYLE",
    ENDURO = "ENDURO"
}

export enum TipoCircuito {
    CERRADO = "CERRADO",
    ABIERTO = "ABIERTO",
    MIXTO = "MIXTO"
}

export enum Categoria {
    AMATEUR = "AMATEUR",
    PROFESIONAL = "PROFESIONAL",
    JUNIOR = "JUNIOR",
    SENIOR = "SENIOR",
    MASTER = "MASTER"
}

export class CompetenciaDetailDTO extends CompetenciaDTO{
    //marcas: Array<MarcaDTO>;
    //participaciones: Array<ParticipacionDTO>;

    
}