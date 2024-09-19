import { Alumno } from "./Alumno";
import { Materia } from "./Materia";

export class Instituto{

    arrayAlumno:Alumno[]=[]
    arrayMateria:Materia[]=[]

    constructor(){

    }

    anadirAlumno(nombre:string,apellidos:string){
        this.arrayAlumno.push(new Alumno(nombre,apellidos))
    }

    anadirMateria(nombre:string){
        this.arrayMateria.push(new Materia(nombre))
    }

    veralumnos(){
        for(let a in this.arrayAlumno){
            console.log(a)
        }
    }

}