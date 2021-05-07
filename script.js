
//função para retornar os id's de todas as tags inputs
function arrayInputs(){
    const inputs=document.getElementsByTagName('input');
    let idsInput=[];

    for (let i=0;i<inputs.length;i++){
        idsInput.push(inputs[i].getAttribute('id'));
    }
    return idsInput;
}

function registrarCliente(){
    
    const nomeDosCampos = ['Nome Completo', 'E-mail', 'CPF', 'Telefone', 'CEP', 'Logradouro', 'Número', 'Bairro', 'Cidade'];
    const arrayNomeInputs=arrayInputs();

    const divCliente=document.createElement('div')
    divCliente.setAttribute("id", "cliente")
    document.getElementById("registroClientesDiv").appendChild(divCliente);
    
    for (let i=0;i<nomeDosCampos.length;i++){
        
        //nome do campo
        const paragraphNomeDoCampo=document.createElement('p');
        paragraphNomeDoCampo.setAttribute("class","paragrafoNomeDoCampo")
        document.getElementById('cliente').appendChild(paragraphNomeDoCampo);
        paragraphNomeDoCampo.innerText=nomeDosCampos[i];        

        //valor do campo preenchido para o cliente
        const paragraphValorDoCampo=document.createElement('p');
        paragraphValorDoCampo.setAttribute('id','valorDoCampo')
        document.getElementById('cliente').appendChild(paragraphValorDoCampo);
        let id = `#${arrayNomeInputs[i]}`;
        let valorDoCampo=document.querySelector(id);
        paragraphValorDoCampo.innerText=valorDoCampo.value;
        paragraphValorDoCampo.onclick=selecionandoItem;     
    }

    //O código abaixo funciona para imprimir o estado do cliente registrado
    const estado = document.createElement('p');
    estado.setAttribute("class","paragrafoNomeDoCampo")
    document.getElementById('cliente').appendChild(estado);
    estado.innerText="Estado";

    const valorEstado=document.createElement('p');
    valorEstado.setAttribute('id','valorDoCampo')
    let dropdownMenu=document.getElementById('estado');    
    document.getElementById('cliente').appendChild(valorEstado);
    let estadoEscolhido=dropdownMenu.options[dropdownMenu.selectedIndex].text;
    valorEstado.innerText=estadoEscolhido;
    valorEstado.onclick=selecionandoItem;
    
    //botão para deletar itens do registro do cliente
    const botaoDeletar = document.createElement('button');
    botaoDeletar.setAttribute('class', 'btn btn-primary');
    botaoDeletar.setAttribute('id', 'deletar-button');
    botaoDeletar.innerText="Excluir item da lista";
    document.getElementById('cliente').appendChild(botaoDeletar);
    botaoDeletar.onclick=deletandoItem;
    const comoDeletar = document.createElement('p');
    comoDeletar.setAttribute("id","comoDeletar")
    document.getElementById('cliente').appendChild(comoDeletar);
    comoDeletar.innerText="Antes de abertar o botão, clique em cima do item que deseja excluir";

    
    //linha de separação entre clientes
    const linha = document.createElement('hr');
    document.getElementById('cliente').appendChild(linha);

}

document.querySelector('#registrar-button').addEventListener('click', registrarCliente);


//função para selecionar item do cadastro do cliente
function selecionandoItem(event){
        
    const checkSelected = document.getElementById('selected');
        if (checkSelected) {
            checkSelected.removeAttribute('id');
        }

    const itemTargeted=event.target;

        if (itemTargeted.id==='selected'){
            itemTargeted.removeAttribute('id');
        } else {
            itemTargeted.setAttribute('id','selected');
        }
}


//função para deletar item selecionado do cadastro do cliente
function deletandoItem(){

    const checkSelected = document.getElementById('selected');
    if (checkSelected) {
        itemSelecionado = document.getElementById('selected');
        itemSelecionado.innerText="";        
    } else {
        alert('Nenhum item foi selecionado. Para selecionar, basta clicar em cima do item.')
    }
    

    
}