import { Display } from "./Display.js";
const botonesNumeros = document.querySelectorAll(".numero");
const botonesOperadores = document.querySelectorAll(".operador");
const borrarTodo = document.getElementById("borrar-todo");
const borrar = document.getElementById("borrar");


botonesOperadores.forEach(btn => {
    btn.addEventListener("click", () => Display.computar(btn.value));
})

botonesNumeros.forEach(boton => {
    boton.addEventListener("click", () => Display.agregarNumero(boton.innerHTML) );
    });

borrar.addEventListener("click", () => Display.borrar());
   
borrarTodo.addEventListener("click", () => Display.borraTodo());