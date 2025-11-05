export enum PaisOrigen {
    JAPON = "JAPON",
    ITALIA = "ITALIA",
    ALEMANIA = "ALEMANIA",
    ESTADOS_UNIDOS = "ESTADOS_UNIDOS",
    FRANCIA = "FRANCIA",
    COLOMBIA = "COLOMBIA",
    OTRO = "OTRO"
}

export class MarcaDTO {
    id: number;
    nombre: string;
    paisOrigen: PaisOrigen;
    anioFundacion: number;
    descripcion: string;
    sitioWeb: string;
    logo: string;
    modelosDestacados: string[]; // Ejemplo: ['CRF450R', 'YZ250F', 'KTM 450 SX-F']

    constructor(
        id: number,
        nombre: string,
        paisOrigen: PaisOrigen,
        anioFundacion: number,
        descripcion: string,
        sitioWeb: string,
        logo: string,
        modelosDestacados: string[]
    ) {
        this.id = id;
        this.nombre = nombre;
        this.paisOrigen = paisOrigen;
        this.anioFundacion = anioFundacion;
        this.descripcion = descripcion;
        this.sitioWeb = sitioWeb;
        this.logo = logo;
        this.modelosDestacados = modelosDestacados;
    }
}
