function validaFaleConosco() {
    var nome = document.frmfaleconosco.txtnome.value;
    var expRegnome = new RegExp("^[A-zÀ-ü]{3,}([ ]{1}{A-zÀ-ü]{2,})+$");
    if(!expRegnome.test(nome)){
        alert('Preencha oCampo Nome completo!!!');
        document.frmfaleconosco.txtnome.focus();
        return false;
    }

    var fone = document.frmfaleconosco.txtfone.value;
    var expRegfone = new RegExp("[(]{1}[1-9]{2}[)]{1}[0-9]{4,5}[-]{1}[0-9]{4}$");
    if(!expRegfone.test(fone)){
        alert('Preencha o Campo Telefone ou formato inválido!!!');
        document.frmfaleconosco.txtfone.focus();
        return false;
    }

    var email = document.frmfaleconosco.txemail.value;
    var expRegemail = new RegExp("/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/");
    if(!expRegemail.test(email)){
        alert("Preencha o Campo Email ou formato inválido!!!");
        document.frmfaleconosco.txemail.focus();
        return false;
    }
}

function verificaMotivo(motivo){
    var elemento = document.getElementById("opcaoProduto");
    if(elemento.firstChild){
        elemento.removeChild(elemento.firstChild)
    }
}

