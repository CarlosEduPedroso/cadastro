class Cliente {
    cliente;
    documento;
    sala;
    data;
    hora;

    constructor(cliente, documento, sala, data, hora) {
        this.cliente = cliente;
        this.documento = documento;
        this.sala = sala;
        this.data = data;
        this.hora = hora;
    }

}
function salvarCliente() {
  let  cliente = document.getElementById("nome").value;
  let  documento = document.getElementById("documento").value;
  let  sala = document.getElementById("sala").value;
  let  data = document.getElementById("data").value;
  let  hora = document.getElementById("hora").value;
  inserirTabela(new Cliente(cliente,documento,sala,data,hora));
  }

function inserirTabela(Cliente) {
    linha = "";
    tamanho = 0; 

tamanho = document.getElementById("tabela").childNodes.length-1;

linha = "<tr id='linha'><td>" + Cliente.cliente + "</td>" +
    "<td>" + Cliente.documento + "</td>" +
    "<td>" + Cliente.sala + "</td>" +
    "<td>" + Cliente.data + "</td>" +
    "<td>" + Cliente.hora + "</td>" +
    "<td><button type='button' onclick='excluirLinha("+tamanho+")'" +
    "class='btn btn-success'>Excluir</button> " +
    "</td>";
document.getElementById("tabela").innerHTML+=linha;
}
  
function excluirLinha(linha) {
    document.getElementById("tabela").deleteRow(linha);
}
