function valida(){
    //Todos os campos do formulário possuem o "required" onde 
    //é obrigatório o preenchimento de cada um. Os códigos abaixo
    //exibem a validação de alguns campos.

    //Validando o campo nome para ter mais de 3 caracteres
    if(document.getElementById('nome').value.length < 3){
        alert('Informe pelo menos 3 caracteres no campo Nome!');
        document.getElementById('nome').focus();
        return false;
    }
    
    //Validando o campo email
    if(document.getElementById('email').value == "" || 
    document.getElementById('email').value.indexOf('@') == -1 || 
    document.getElementById('email').value.indexOf('.') == -1)
    {
        alert("Informe um e-mail válido!")
        return false;
    }
} 