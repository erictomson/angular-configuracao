import uniqid from '../../node_modules/uniqid/index.js';
import { Tarefa, Prioridade } from "./Tarefa";

export class ListaDeTarefas {

    tarefas:Tarefa[];
    input:HTMLInputElement;
    form:HTMLFormElement;
    tabela:HTMLTableElement;

    constructor(main:HTMLElement) {
        this.form = main.querySelector("form");
        this.tabela = main.querySelector("table");
        this.input = main.querySelector("form input");
        this.tarefas = [];

        // Quando o form for submetido, adicionar uma tarefa
        this.form.addEventListener("submit", (event)=> {
            event.preventDefault();
            this.adicionarTarefa();
        });
    }

    removerTarefa(tarefa:Tarefa){

        let tr=tarefa.toRow();

        tr.querySelector("i").addEventListener("click",()=>{
            console.log(this.tarefas);
            // remove tarefa da tabela de tarefas (DOM)
            `document.getElementById("${tarefa.id}").deleteRow(tr.rowIndex);`
            // remove tarefa do array de tarefas
            this.tarefas.splice(this.tarefas.indexOf(tarefa),1);
            
            console.log(tarefa.id);
            // console.log(tarefa);
        });


        // console.log(tr);
        
        // let tr = tarefa.toRow();
        // tr.querySelector("i").addEventListener("click",()=>{
        //     tr.remove();
        //     console.log(this.tarefas);
        //     this.removerTarefa(tarefa);
        // })
        // let tarefaExcluir = document.getElementById(tarefa.id);
        // console.log(tarefaExcluir);
                
//        tarefaExcluir.parentNode.removeChild
        // this.mostrarTarefas();

    }
    
    adicionarTarefa(){
        // interrompendo o envio do formulário
        // event.preventDefault();
        // Criar nova tarefa com prioridade baixa e com texto digitado pelo usuário
        // let inputNovaTarefa:HTMLInputElement = document.querySelector("form input");
        // console.log(this.input);
        if(this.input.value == "") return;
        // Criar a nova tarefa
        let inputNew = new Tarefa(uniqid(),this.input.value,Prioridade.Baixa);
        // Adicionar a nova tarefa ao array de tarefas
        this.tarefas.push(inputNew);
        console.log(this.tarefas);
        
        // Criando a linha da tarefa
        let tr = inputNew.toRow();

        // tr.querySelector("i").addEventListener("click",()=>{
        //     tr.remove();
        //     console.log(this.tarefas);
            
        //     // this.removerTarefa(inputNew);
        //     this.removerTarefa(inputNew);
        // })

        // Executar a exibirTarefas(tarefas)
        this.tabela.appendChild(tr);
        //Limpar o input após a inclusão da nova tarefa
        this.input.value="";
    }

    mostrarTarefas():void {
        // limpar tabela
        this.tabela.innerHTML="";

        // Mostrar tarefas no HTML
        for(let tarefa of this.tarefas) {
            this.tabela.appendChild(tarefa.toRow());
        }
    }
}