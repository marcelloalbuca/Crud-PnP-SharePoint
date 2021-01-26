$(document).ready(function () {
    getSolicitacaoEquipamentos();
});

async function getSolicitacaoEquipamentos() {
    $pnp.sp.web.lists.getByTitle('SolicitacaoEquipamentos').items.get().then(function(res){
        
        //console.log(res);
    res.map(function (item) {
            $('#solicitacoes').append(
            '<tr style="text-align: center; unselectable="on""><td><input type="text" id="txtNomeUpdate" value="' + item.Nome + '"><td unselectable="on">' + item.Martricula + '</td><td>' + item.Departamento + '</td><td>' + item.Equipamentos +
            '</td><td><a href="#" onclick="update(' + item.Id + ')">Editar' +
            '</td><td><a href="#" onclick="deleteItem(' + item.Id + ')" >Deletar</a></td><tr>');
        });
    
    }).catch(function(err){
        console.log(err)
    });
}

async function deleteItem(item){

    $pnp.sp.web.lists.getByTitle('SolicitacaoEquipamentos').items.getById(item).delete().then(function(res){
        
        $('#solicitacoes').empty();
        getSolicitacaoEquipamentos();
    
    }).catch(function(err){
        console.log(err)
    });
}

async function update(item) {

    var list = $pnp.sp.web.lists.getByTitle('SolicitacaoEquipamentos');
   
    var eNome = $('#txtNomeUpdate').val();
    const i = await list.items.getById(item).update({
       
        'Nome': eNome
        
    }).then(function(res){

        //console.log(i);
        $('#solicitacoes').empty();
        getSolicitacaoEquipamentos();
       
    }).catch(function(err){
        console.log(err)
    });
}

async function createListItem() {

    var list = $pnp.sp.web.lists.getByTitle('SolicitacaoEquipamentos');
   
    var eNome = $('#txtNome').val();
    var eMatricula = $('#txtMatricula').val();
    var eDepartamento = $('#txtDepartamento').val();
    var eEquipamentos = $('#txtEquipamentos').val();

    const i = list.items.add({
    
        'Nome': eNome,
        'Martricula': eMatricula,
        'Departamento' : eDepartamento,
        'Equipamentos': eEquipamentos

    }).then(function(res){

        console.log(i);
        $('#solicitacoes').empty();
        getSolicitacaoEquipamentos();
       
    }).catch(function(err){
        console.log(err)
    });
}
