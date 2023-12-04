export class Reserva {
    idreserva?: number
    idpaquete?: Paquete
    idcliente?: Cliente
    fecha?: string
    cantidad?: string
    tipopago?: number
    totalventa?: number
    descuento?: number
    totalneto?: number
    confirmado?: string
    anulado?: string
    codempleado?: Empleado
}

export class Empleado {
    codempleado?: number
    nombrec?: string
    dni?: string
    direccion?: number
    cargo?: string
}

export class Paquete {
    idpaquete?: number
    iddestino?: Destino
    tipo?: number
    nombre?: string
    preciocosto?: number
    precioventa?: number
    fechainicio?: string
    categoria?: number
    fechaconfirmacion?: string
    cupos?: number
    vigente?: number
}

export class Cliente {
    idcliente?: number
    nombres?: string
    apellidos?: string
    telefono?: number
    email?: string
}

export class Destino {
    iddestino?: number
    ciudad?: string
}

