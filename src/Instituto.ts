import { Alumno } from "./Alumno";
import { Materia } from "./Materia";

export class Instituto{

    arrayAlumno:Alumno[]=[]
    arrayMateria:Materia[]=[]

    constructor(){
        
    }

   

    getAlumno(idusuario:number){
        return this.arrayAlumno.filter((Alumno:Alumno)=>{return Alumno.getid()==idusuario})
    }

    anadirAlumno(nombre:string,apellidos:string){
        this.arrayAlumno.push(new Alumno(nombre,apellidos))
    }

    anadirMateria(nombre:string){
        this.arrayMateria.push(new Materia(nombre))
    }

    verAlumnos(){
        for(let a of this.arrayAlumno){
            console.log(a.toString())
        }
    }

    verMateria(){
        for(let a of this.arrayMateria){
            console.log(a.toString())
        }
    }

    buscarAlumno(id:Number){
        return this.arrayAlumno.filter((Alumno)=>{
            return Alumno.getid()==id
        })
    }

    matricularAlumno(idusuario:Number,idmateria:Number){
        if((this.arrayAlumno.filter((Alumno:Alumno)=>{return Alumno.getid()==idusuario})).length==1){

            if((this.arrayMateria.filter((Materia:Materia)=>{return Materia.getid()==idmateria})).length==1){
                let materia:Materia[]=this.arrayMateria.filter((Materia)=>{return Materia.getid()==idmateria})
                if(materia.length>0) materia[0].matricularalumno(idusuario,-5)
            }else{
                console.log("La materia no existe")
            }
        }else{
            console.log("El usuario no existe")
        }
    }

    desmatricularAlumno(idusuario:Number,idmateria:Number){
        if((this.arrayAlumno.filter((Alumno:Alumno)=>{return Alumno.getid()==idusuario})).length==1){

            if((this.arrayMateria.filter((Materia:Materia)=>{return Materia.getid()==idmateria})).length==1){
                let materia:Materia[]=this.arrayMateria.filter((Materia)=>{return Materia.getid()==idmateria})
                if(materia.length>0) materia[0].desmatricularalumno(idusuario)
            }else{
                console.log("La materia no existe")
            }
        }else{
            console.log("El usuario no existe")
        }
    }

    eliminarAlumno(idusuario:number){
        if((this.arrayAlumno.filter((Alumno:Alumno)=>{return Alumno.getid()==idusuario})).length==1){

            for(let a of this.arrayMateria){
                a.desmatricularalumno(idusuario)
            }
            this.arrayAlumno.splice(idusuario,1)
        }else{
            console.log("El usuario no existe")
        }
    }

    verMateriasalumno(idusuario:number){
        if((this.arrayAlumno.filter((Alumno:Alumno)=>{return Alumno.getid()==idusuario})).length==1){

            
            let materias:Materia[]=this.arrayMateria.filter((Materia:Materia)=>{return Materia.estamatriculado(idusuario)})

            if(materias.length>0){
                for(let a of materias){
                    console.log(a.getnombre())
                }
            }else{
                console.log("Este usuario no esta matriculado en ninguna materia")
            }
              
        }else{
            console.log("El usuario no existe")
        }
    }


    verlistaAlumnos(idmateria:number){
        if((this.arrayMateria.filter((Materia:Materia)=>{return Materia.getid()==idmateria})).length==1){
            let materia:Materia[]=this.arrayMateria.filter((Materia:Materia)=>{return Materia.getid()==idmateria})
            if(materia.length>0){
                materia[0].toStringnota(this)
            }
        }else{
            console.log("La materia no existe")
        }
    }

    

}

