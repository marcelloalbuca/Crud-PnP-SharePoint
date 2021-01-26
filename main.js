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