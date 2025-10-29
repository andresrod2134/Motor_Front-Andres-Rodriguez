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

//import { OrganizadorDTO } from '../organizador/organizador.dto';
//import { MapaInteractivoDTO } from '../mapa/mapa-interactivo.dto';

export class CompetenciaDTO {
    id: number;
    nombre: string;
    modalidad: Modalidad;
    categorias: Categoria[]; 
    duracion: string;
    ubicacion: string;
    latitud: string;
    longitud: string;
    tipoCircuito: TipoCircuito;
    reglamento: string;
    premios: string[]; 
    homologacion: string[]; 
    logo: string;

    //organizador: OrganizadorDTO;
    //mapaInteractivo: MapaInteractivoDTO;

    constructor(
        id: number,
        nombre: string,
        modalidad: Modalidad,
        categorias: Categoria[],
        duracion: string,
        ubicacion: string,
        latitud: string,
        longitud: string,
        tipoCircuito: TipoCircuito,
        reglamento: string,
        premios: string[],
        homologacion: string[],
        logo: string,
        //organizador: OrganizadorDTO,
        //mapaInteractivo: MapaInteractivoDTO
    ) {
        this.id = id;
        this.nombre = nombre;
        this.modalidad = modalidad;
        this.categorias = categorias;
        this.duracion = duracion;
        this.ubicacion = ubicacion;
        this.latitud = latitud;
        this.longitud = longitud;
        this.tipoCircuito = tipoCircuito;
        this.reglamento = reglamento;
        this.premios = premios;
        this.homologacion = homologacion;
        this.logo = logo;
        //this.organizador = organizador;
        //this.mapaInteractivo = mapaInteractivo;
    }
}