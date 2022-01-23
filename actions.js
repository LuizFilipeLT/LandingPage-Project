//window.prompt('Por gentileza, digite a senha de liberação!') // Futura API de autenticação e segurança
//window.alert('Acesso liberado!') // Futura API de autenticação e segurança
//var userName = window.prompt('Por favor, informe seu nome: ')
//window.alert (`Seja bem vindo(a) ao meu projeto ${userName}!`)

// ACIMA FICA OS AVISOS AO ABRIR A PAGINA - TEMP


//Brincando de olaMundo na página Estudos.
function olaMundo(){
    var userName2 = window.prompt('Te enganei!! Me diga seu nome ou seu sistema será apagado da existência!! MUAHAHAHAHAHA!!!!!')

    if (userName2 == '') {
        return alert('Favor informar o seu nome!')
    }
    if (/\d/.test(userName2)) {
        return alert("Digite apenas letras!")
    }   
    if(userName2 == 'claudia' || userName2 == 'Claudia') {
        return alert("Oi futura chefinha!")
    }
    if (userName2 == 'luiz' || userName2 == 'Luiz' ) {
        return alert("Legal! Eu também me chamo " + userName2 + ", bem-vindo!")
         // Concatenação
    }
    if (userName2){
        return alert(`Olá, Mundo e ${userName2}!`)
    }    
}
//FIM Brincando de olaMundo na página Estudos.

//Inicio Média Salarial Brasileiro 2021

    function medSalario(){
    
        let agora = new Date
        let year = agora.getFullYear()
        let medSala = 2.433
        medSala.toFixed(2).replace(".",",")
        medSala.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

        let result = document.querySelector('section#medSal')
        result.innerHTML = (`A média salárial do brasileiro em ${year} é: ${medSala}`)        
    }
// FIM Média Salarial Brasileiro 2021

// Inicio função reset página
    function reset(){
        location.reload()
    }
// FIM função reset página


//Inicio Data e hora do sistema
    function dataSistem(){
        let agora = new Date
        let meses = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro')
        let semana = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta','Sexta', 'Sabado')
        let showData = document.getElementById('resData')
        let dia = agora.getDate()
        let mes = agora.getMonth()
        let year = agora.getFullYear()
        let diaSem = agora.getDay()
        let hourSistem = agora.getHours()
        let min = agora.getMinutes()
        let sec = agora.getSeconds()

        showData.innerHTML = `<p>Dia: ${dia}</p>`
        showData.innerHTML += `<p>Mês: ${meses[mes]}</p>`
        showData.innerHTML += `<p>Ano: ${year}</p>`
        showData.innerHTML += `<p>Dia da Semana: ${semana[diaSem]}</p>`
        showData.innerHTML += `<p>Hora: ${hourSistem}</p>`
        showData.innerHTML += `<p>Minutos: ${min}</p>`
        showData.innerHTML += `<p>Segundos: ${sec}</p>`

        if (hourSistem <= 5) {
            showData.innerHTML += `Boa Madrugada!`
        } if (hourSistem < 12){ 
            showData.innerHTML += `Bom dia!`
        } if (hourSistem <= 18) {
            showData.innerHTML += `Boa tarde!`
        } else {
            showData.innerHTML += `Boa noite!`
        }
    }
//FIM Data e hora do sistema


//Inicio projeto de calculadora
    function somar(){
        let valor1 = document.getElementById('valor1')
        let valor2 = document.getElementById('valor2')
        if (valor1.value, valor2.value == ''){
            return alert('Inserir valores!')
        }
        let num1 = Number(valor1.value)
        let num2 = Number(valor2.value)
        let soma = num1 + num2
        let res = document.querySelector('div#calc').innerHTML = (`A soma entre ${num1} e ${num2} é ${soma}`)   
    }
//FIM projeto de calculadora

    function stranger(){
        var paisInput = document.querySelector('input#país')
        var paisResult = document.querySelector('div#paísRes')

        if (paisInput.value == ''){
            return paisResult.innerHTML = 'Inserir país!'
        }

        paisResult.innerHTML = (`<p>Seu país é <strong>${paisInput.value}</strong></p>`)

        if (paisInput.value == 'Brasil' || paisInput.value == 'brasil'){
            paisResult.innerHTML += 'Você é brasileiro(a)!'
        } else { 
            paisResult.innerHTML += 'Você é estrangeiro(a)'
        }
    }