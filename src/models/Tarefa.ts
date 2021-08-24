// export interface Tarefa {
export class Tarefa {
    id: string;
    feita: boolean;
    descricao: string;
    prioridade: Prioridade;

    constructor(id: string, texto:string, prioridade: Prioridade) {
        this.id=id;
        this.descricao = texto;
        this.prioridade = prioridade;
        this.feita=false;
    }

    toRow():HTMLTableRowElement {
        // criar o elemento que receberá a tarefa
        let tr:HTMLTableRowElement = document.createElement("tr");
        tr.setAttribute("id",this.id);
        // tr.classList.toggle("done");
        // tr.className = this.feita?"done":"";
        tr.innerHTML = `<td><input type="checkbox"></td>
                        <td>${this.descricao}</td>
                        <td><i class="material-icons">delete</i></td>`;
        // this.addEvents(tr);
        
        // *** SELECIONAR A TERA COM CHECKBOX
        // selecionar o checkbox
        let checkbox:HTMLInputElement = tr.querySelector("input");
        checkbox.addEventListener("click", (evento_check) => {
            // atributo feita recebe o estado do checkbox
            this.feita = checkbox.checked;
            //     // if ternário para alterar a className da linha
            //     // seletor CSS irá traçar a linha
            tr.className = this.feita ? "done" : "";
        });

        // *** EXCLUIR A TAREFA
        //selecionar o botão delete
        // let botaoDelete = tr.querySelector("i");
        // botaoDelete.addEventListener("click", (evento_excluir) => {
        //     // alert("Deseja excluir a tarefa?");
        //     tr.remove();
        // })
        return(tr);
    }

    //adiciona um evento para a nova linha
    // addEvents(tr:HTMLTableRowElement) {
    //     // seleciona os inputs da linha
    //     let checkbox = tr.querySelector("input");
    //     // configura um sensor de eventos para o input
    //     // verificar se é checkbox e com propriedade checked=true
    //     tr.querySelector("input").addEventListener("change", (event) => {
    //         if(checkbox.checked) 
    //             // alterar a className da linha
    //             // seletor CSS irá traçar a linha
    //             tr.className="done";
    //         else 
    //             tr.className="";
    //     });
    // }

    imprimir():void{
        console.log(`[${this.feita?"x":""}] ${this.descricao} [ ${this.prioridade}]`);
    }

    // imprimir() 
    // {
    //     // string para exibir a mensagem
    //     let mensagem:string;
    //     // verificar se a tarefa está marcada como feita
    //     if(this.feita==true) {
    //         mensagem += "[x]";
    //     } else {
    //         mensagem += "[ ]";
    //     }
    //     mensagem += " ";
    //     mensagem += this.descricao;
    //     mensagem += " [";
    //     mensagem += this.prioridade;
    //     mensagem += "] ";
    //     console.log(mensagem);
    // }
}

export enum Prioridade {
    Baixa=1,
    Media=2,
    Alta=3
}