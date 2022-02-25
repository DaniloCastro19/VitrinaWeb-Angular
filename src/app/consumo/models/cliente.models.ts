export interface Cliente{
    id: string;
    nombre: string;
    correo: string;
    edad: number;
    username: string;
    password?: string;
    hash?: string;
}