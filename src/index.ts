// Importando estilos
import "./style.css";
import "material-icons/iconfont/material-icons.css";
// Importando modelos definidos na pasta models
import { Tarefa, Prioridade } from "./models/Tarefa";
import { ListaDeTarefas } from "./models/ListaDeTarefas";

let tarefas = new ListaDeTarefas(document.querySelector("main"));

// let formulario:HTMLFormElement = document.querySelector("form");
// let tabela:HTMLTableElement = document.querySelector("table");
// let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");

// adicionar tarefas de exemplo
// let t1 = new Tarefa("Pagar escola das crianças",Prioridade.Alta);
// let t2 = new Tarefa("Tomar café antes da aula",Prioridade.Alta);

// t1.imprimir();

// t1.feita=false;
// t1.descricao="Teste1";
// t1.prioridade=3;

// const tarefas:Tarefa[] = [];

// const tarefas:Tarefa[] = [
//     // criar tarefas de exemplo
//     {
//         feita: false,
//         descricao: "Molhas a plantas",
//         prioridade: Prioridade.Baixa
//     },
//     {
//         feita: true,
//         descricao: "Por as crianças para dormir",
//         prioridade: Prioridade.Alta
//     },
//     {
//         feita: true,
//         descricao: "Assitir aula",
//         prioridade: Prioridade.Alta
//     },
//     {
//         feita: false,
//         descricao: "Fazer o desafio",
//         prioridade: Prioridade.Alta
//     }
// ]

// criar array de novas Tarefas
// const tarefas = [];

// // função para adicionar nova tarefa ao array de Tarefas
// function adicionarTarefa(descricao:string,prioridade:Prioridade) {
//     var tarefa:Tarefa = {feita:false,descricao:descricao,prioridade:prioridade};
//     var insert = tarefas.push(tarefa);
//     exibirTarefas(tarefas);
// }

// adicionarTarefa("Molhas a plantas",1);
// adicionarTarefa("Por as crianças para dormir",3);

//  ***ADICIONAR TAREFA***

// selecionar o botão no HTML
// let botaoSalvar:HTMLButtonElement = document.querySelector("form button");
// console.log(botaoSalvar);

// sensor de eventos do botão (ouvir o click)
// botaoSalvar.addEventListener("click", (event_submit) => {
//     // pausar o envio do formulário
//     event_submit.preventDefault();
//     alert("Botão clicado");
//     // selecionar o campo tf_2do no HMTL (input)
//     // let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");
//     // console.log(inputNovaTarefa.value);
//     // chamar a função para adicionar a nova tarefa, 
//     // passando o texto do campo tf_2do do HTML
//     // verifica se o campo está vazio
//     // if(inputNovaTarefa.value != "") {
//     //     adicionarTarefa(inputNovaTarefa.value,2);
//     //     // console.log(tarefas);
//     //     inputNovaTarefa.value="";
//     }
// })



// ***OUTRA FORMA DE RESOLVER O BOTÃO DO FORMULÁRIO ***
// formulario.addEventListener("submit", (event) => {
//     // console.log(event);
//     // interrompendo o envio do formulário
//     event.preventDefault();
//     // alert("Evento submit do formulário")

//     // Criar nova tarefa com prioridade baixa e com texto digitado pelo usuário
//     // let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");
//     if(inputNovaTarefa.value != "") {
//         // Criar a nova tarefa
//         let novaTarefa = new Tarefa(inputNovaTarefa.value,Prioridade.Baixa);
//         // Adicionar a nova tarefa ao array de tarefas
//         tarefas.push(novaTarefa);
//         //Limpar o input após a inclusão da nova tarefa
//         inputNovaTarefa.value="";
//     }

    // Executar a exibirTarefas
//     exibirTarefas(tarefas);

// });

// selecionar o botao Remover


// Função não retornará valor
// function exibirTarefas(tarefas:Tarefa[]):void {
//     // verificar no HTML o objeto pai
//     // let tabela:HTMLTableElement = document.querySelector("table");
//     //limpar a tabela
//     tabela.innerHTML="";
//     // percorrer todos os elementos do array de tarefas recebido na chamada do método
//     for (const tarefa of tarefas) {
//         // console.log(tarefa.descricao);
//         // criar o elemento que receberá a tarefa
//         // let tr:HTMLTableRowElement = document.createElement("tr");
//         // tr.className = tarefa.feita?"done":"";
//         // tr.innerHTML = `<td>
//         //                     <input type="checkbox">
//         //                 </td>
//         //                 <td>
//         //                     ${tarefa.descricao}
//         //                 </td>
//         //                 <td>
//         //                     <i class="material-icons" onclick="deleteRow(this.parentNode.parentNode.rowIndex)">delete</i>
//         //                 </td>`
//         // adicionar a tarefa à tabela
//         tabela.appendChild(tarefa.toRow());
//         // ***outra forma de adicionar
//         // document.getElementById("table").appendChild(tarefa.toRow());
//         // tarefas.pop();
//         // console.log(tarefas);
//     }
// }

// exibirTarefas(tarefas);
// console.log(tarefas);