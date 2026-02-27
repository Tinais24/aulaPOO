function somar (a: number, b: number): number {
    return a + b;
}

console.log(somar(2, 9));

const subtrair = (c: number, d: number): number => c - d;

console.log(subtrair(134, 67));

function logar (mensagem: string): void {
    console.log(mensagem);
}

logar("Ok");

function falha(motivo: string): never {
    throw new Error(motivo);
}

console.log("Teste");
falha("Algo de errado não está certo");
console.log("Depois");