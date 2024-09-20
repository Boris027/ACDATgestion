//nombre id nota

import { Alumno } from "./Alumno"
import { Instituto } from "./Instituto"

export class Materia{

    private static idfinal:number=0
    private id:number=0
    private nombre:string=""

    //primero va el id del usuario y despues la nota
    private hashmap=new Map<Number,Number>

    constructor(nombre:string){
        this.nombre=nombre
        this.id=Materia.idfinal
        Materia.idfinal+=1
    }

    getid(){
        return this.id
    }

    getnombre(){
        return this.nombre
    }

    matricularalumno(id:number,nota:number){

        //si no tiene nota se le pone -5
        if(nota==undefined){
            this.hashmap.set(id,-5)
        }else{
            this.hashmap.set(id,nota)
        }

        console.log(this.hashmap)
    }

    desmatricularalumno(id:number){
        this.hashmap.delete(id)
    }

    estamatriculado(id:number):boolean{
        if(this.hashmap.has(id)){
            return true
        }else{
            return false
        }
    }

    toString():string{
        return `${this.nombre} [${this.id}]`
    }

    ponernota(id:number,nota:number){

        if(this.hashmap.has(id)){
            this.hashmap.set(id,nota)
        }else{
            console.log("Ese usuario no se encuentra matriculado en esta materia")
        }

    }

    toStringnota(instituto:Instituto){
        instituto.arrayAlumno.map((Alumno:Alumno)=>{

            if(this.hashmap.has(Alumno.getid())){
                if(this.hashmap.get(Alumno.getid())==-5){
                    console.log(Alumno.getnombre()+" "+Alumno.getapellidos()+" "+"(No tiene nota asignada)")
                }else{
                    console.log(Alumno.getnombre()+" "+Alumno.getapellidos()+" ("+this.hashmap.get(Alumno.getid())+")")
                }

            }

        })
    }
    

}