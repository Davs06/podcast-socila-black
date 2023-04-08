function formulario(e){
    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var idade = Number(document.getElementById('idade').value)
    var sobreVoce = document.getElementById('sobre-voce').value

    if (idade < 18) {
        alert('Você nao tem idade o suficiente pra estar conosco')
        e.preventDefault();
    }else{
        alert(idade + nome + email + sobreVoce)        
        console.log(idade + nome + email + sobreVoce);
    }
    
}


