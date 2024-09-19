// src/index.ts

import * as readline from 'readline-sync';
import { Materia } from './Materia';
import { Alumno } from './Alumno';
import { Instituto } from './Instituto';

function Menu1(){
    console.log()
    console.log("Menu principal")
    console.log("---------------")
    console.log("1.Alumnos")
    console.log("2.Materias")
    console.log("3.Matriculaciones")
    console.log("4.Salir")
}

function caso1(instituto:Instituto):Instituto{
    let quedarse:boolean=true
    while(quedarse){
        console.log()
        console.log("Alumnos")
        console.log("-----------")
        console.log("1.Añadir")
        console.log("2.Eliminar")
        console.log("3.Ver Alumnos")
        console.log("4.Ver materias del Alumno")
        console.log("5.Asignar nota de materia a alumno")
        console.log("6.Salir")
        let opcion=pediropcion()
        switch(opcion){
            case 1:
                console.log("Nombre de usuario")
                let nombre:string=pedirString()
                console.log("Apellido de usuario")
                let apellidos:string=pedirString()
                instituto.anadirAlumno(nombre,apellidos)
            break;
            case 2:{
                instituto.verAlumnos()
                console.log("Introduce el ID del usuario que quieres eliminar")
                let opcion=pediropcion()
                instituto.eliminarAlumno(opcion)
            }break;
            case 3:
                instituto.verAlumnos()
            break;
            case 4:{
                instituto.verAlumnos()
                console.log("Introduce el ID del usuario que quieras ver donde esta matriculado")
                let opcion=pediropcion()
                instituto.verMateriasalumno(opcion)
            }
            break;
            case 5:{
                instituto.verAlumnos()
                console.log("Introduce el ID del usuario del cual quieras poner la nota")
                let opcion=pediropcion()
                instituto.verMateriasalumno(opcion)
                console.log("Indica de que asignatura quieres ponerle la nota")
                let opcion2=pediropcion()
                console.log("Introduzca la nota")
                let nota=pediropcion()
                instituto.ponernota(opcion,nota,opcion2)
            }
            break;
            case 6:
                quedarse=false
            break;
        }
    }
    return instituto
}

function caso2(instituto:Instituto):Instituto{
    let quedarse:boolean=true
    while(quedarse){
        console.log()
        console.log("Materias")
        console.log("-----------")
        console.log("1.Añadir")
        console.log("2.Eliminar")
        console.log("3.Ver Materias")
        console.log("4.Ver lista de Alumnos con nota")
        console.log("5.Salir")
        let opcion=pediropcion()
        switch(opcion){
            case 1:
                console.log("Nombre de Materia")
                let materia:string=pedirString()
                instituto.anadirMateria(materia)
            break;
            case 2:
                instituto.verMateria()
                console.log("Introduce el ID de la materia que quieras eliminar")
                let opcion=pediropcion()
                instituto.eliminarMateria(opcion)
            break;
            case 3:
                instituto.verMateria()
            break;
            
            case 4:{
                instituto.verMateria()
                console.log("Introduce el ID de la materia de la cual quieras ver la lista")
                let opcion=pediropcion()
                instituto.verlistaAlumnos(opcion)
            }
            break;
            case 5:
                quedarse=false
            break;
        }
    }
    return instituto
}

function caso3(instituto:Instituto):Instituto{
    let quedarse:boolean=true
    while(quedarse){
        console.log()
        console.log("Matriculaciones")
        console.log("-----------")
        console.log("1.Matricular")
        console.log("2.Desmatricular")
        console.log("3.Salir")
        let opcion=pediropcion()
        switch(opcion){
            case 1:{
                instituto.verAlumnos()
                console.log("Introduce el ID del usuario al cual quieres matricular")
                let opcion=pediropcion()
                instituto.verMateria()
                console.log("Introduce el ID del curso al cual quieres matricular")
                let opcion2=pediropcion()
                instituto.matricularAlumno(opcion,opcion2)
            }break;
            case 2:
                instituto.verAlumnos()
                console.log("Introduce el ID del usuario al cual quieres desmatricular")
                let opcion=pediropcion()
                instituto.verMateriasalumno(opcion)
                console.log("Introduce el ID del curso al cual quieres desmatricular")
                let opcion2=pediropcion()
                instituto.desmatricularAlumno(opcion,opcion2)
            break;
            case 3:
                quedarse=false
            break;
        }
    }
    return instituto
}



function pediropcion():number{
    return readline.questionInt()
}

function pedirString():string{
    return readline.prompt()
}



function main(){
    let instituto:Instituto=new Instituto()
    let quedarse:Boolean=true
    instituto.anadirAlumno("Boris","Gallego")
    instituto.anadirMateria("Programacion")
    while(quedarse){
        
        Menu1()
        let opcion:Number=pediropcion()

        switch(opcion){
            case 1:{
                instituto=caso1(instituto)
            }
            break;
            case 2:{
                instituto=caso2(instituto)
            }
            break;
            case 3:{
                instituto=caso3(instituto)
            }
            break;
            case 4:{
                quedarse=false
            }
        }
    }
}

main()
 