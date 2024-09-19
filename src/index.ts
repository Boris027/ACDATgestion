// src/index.ts

import * as readline from 'readline-sync';
import { Materia } from './Materia';
import { Alumno } from './Alumno';
import { Instituto } from './Instituto';

function Menu1(){
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
        console.log("Alumnos")
        console.log("-----------")
        console.log("1.Añadir")
        console.log("2.Eliminar")
        console.log("3.Ver")
        console.log("4.Salir")
        let opcion=pediropcion()
        switch(opcion){
            case 1:
                console.log("Nombre de usuario")
                let nombre:string=pedirString()
                console.log("Apellido de usuario")
                let apellidos:string=pedirString()
                instituto.anadirAlumno(nombre,apellidos)
            break;
            case 2:

            break;
            case 3:
                instituto.verAlumnos()
            break;
            case 4:
                quedarse=false
            break;
        }
    }
    return instituto
}

function caso2(instituto:Instituto):Instituto{
    let quedarse:boolean=true
    while(quedarse){
        console.log("Materias")
        console.log("-----------")
        console.log("1.Añadir")
        console.log("2.Eliminar")
        console.log("3.Ver")
        console.log("4.Salir")
        let opcion=pediropcion()
        switch(opcion){
            case 1:
                console.log("Nombre de Materia")
                let materia:string=pedirString()
                instituto.anadirMateria(materia)
            break;
            case 2:

            break;
            case 3:
                instituto.verMateria()
            break;
            case 4:
                quedarse=false
            break;
        }
    }
    return instituto
}

/*
function Menu(){
    console.log("1.Añadir Alumno")
    console.log("2.Añadir Materia")
    console.log('3.Ver Alumnos')
    console.log('4.Ver Materias')
    console.log("5.Matricular Alumno")
    console.log("6.Ver materias de Alumno")
    console.log("7.Desmatricular Alumno")
    console.log("8.Salir")
}*/

function pediropcion():number{
    return readline.questionInt()
}

function pedirString():string{
    return readline.prompt()
}


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
    }

    /*
    switch(opcion){
        case 1:
            console.log("Nombre de usuario")
            let nombre:string=pedirString()
            console.log("Apellido de usuario")
            let apellidos:string=pedirString()
            instituto.anadirAlumno(nombre,apellidos)
        break;
        case 2:
            console.log("Nombre de Materia")
            let materia:string=pedirString()
            instituto.anadirMateria(materia)
        break
        case 3:
            instituto.verAlumnos()
        break;
        case 4:
            instituto.verMateria()
        break;
        case 5:{
            instituto.verAlumnos()
            console.log("Introduce el ID del usuario al cual quieres matricular")
            let opcion=pediropcion()
            instituto.verMateria()
            console.log("Introduce el ID del curso al cual quieres matricular")
            let opcion2=pediropcion()
            instituto.matricularAlumno(opcion,opcion2)
        }break;
        case 7:{
            instituto.verAlumnos()
            console.log("Introduce el ID del usuario al cual quieres desmatricular")
            let opcion=pediropcion()
            instituto.verMateria()
            console.log("Introduce el ID del curso al cual quieres matricular")
            let opcion2=pediropcion()
            instituto.matricularAlumno(opcion,opcion2)
        }break;
    }
    */

}


 