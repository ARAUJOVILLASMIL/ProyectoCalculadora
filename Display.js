import { Calculadora } from "./Calculadora.js";
const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
export const Display = {

    valorActual: "",
    valorAnterior: "",
    tipoOperacion: undefined,
    signos: {
        sumar: '+',
        dividir: '%',
        multiplicar: 'x',
        restar: '-', 
    },

    borrar: function(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    },

    borraTodo: function(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    },

     computar: function(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo,
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores()
       

     console.log(this.tipoOperacion)
     },

    agregarNumero: function(numero) {
        if(numero=== "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero.toString(); 
        //console.log(this.signos[this.tipoOperacion])
        this.imprimirValores();
        //console.log(this.signos)
      // ValorActual = ValorActual.toString() + numero.toString(); 
    },
    

    imprimirValores: function(){
    displayValorActual.textContent = this.valorActual;
    displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    //console.log(displayValorActual);
    //displayValorActual.textContent = numero;
    },

    calcular: function(){
     const valorAnterior2 = parseFloat(this.valorAnterior);
     const valorActual2 = parseFloat(this.valorActual);

     if(isNaN(valorAnterior2) || isNaN(valorAnterior2)) return
     this.valorActual = Calculadora[this.tipoOperacion](valorAnterior2, valorActual2)
    }

}



/* export class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        //this.calculadora = new Calculadora();
        this.valorActual = "";
        this.valorAnterior = "";
        
    }
     agregarNumero(numero){
        if(numero=== "." && this.valorActual.includes(".")) return
        this.ValorActual = this.ValorActual.toString() + numero.toString();   
        this.imprimirValores();
console.log(numero)
        
      
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
     
    } 

} */


//displayValorAnterior, displayValorActual