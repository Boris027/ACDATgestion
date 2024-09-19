//nombre apellidos y materia
export class Alumno{

    private static finalid:number=0
    private id:number=0
    private nombre:string=""
    private apellidos:string=""

    constructor(nombre:string,apellidos:string){
        this.nombre=nombre
        this.apellidos=apellidos
        this.id=Alumno.finalid
        Alumno.finalid+=1
    }

    getnombre(){
        return this.nombre
    }

    getapellidos(){
        return this.apellidos
    }

    getid(){
        return this.id
    }

    toString():String{
        return `${this.nombre} ${this.apellidos} [${this.id}]`
    }
    

}