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

    getnombre():string{
        return this.nombre
    }

    getapellidos():string{
        return this.apellidos
    }

    getid():number{
        return this.id
    }

    toString():string{
        return `${this.nombre} ${this.apellidos} [${this.id}]`
    }
    

}