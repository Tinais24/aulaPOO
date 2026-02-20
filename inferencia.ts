let curso = "TADS"; // inferido como string
// curso = 10;

let ano: number; // anotação explicita
ano = 2026;

function dobro(x:number){
    return x * 2; // retorno inferido como number
}

console.log(dobro(10));