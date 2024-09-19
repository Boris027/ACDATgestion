//nombre id nota

export class Materia{

    private static idfinal:number=0
    private id:number=0
    private nombre:string=""


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
    

}