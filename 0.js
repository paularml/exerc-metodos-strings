// transforme jose messias junior em:
// Jose Messias Junior

// percorrer a string
// isolar cada nome
// isolar a primeira letra de cada nome
// substituir essa letra por uma maiuscula

let nomeCertinho = ""
function converterParaMaiuscula(nomeCompleto) {
    let arrayDeNomes = nomeCompleto.split(" ")
    for (let cadaNome of arrayDeNomes) {
        let primeiraLetra = cadaNome[0]
        nome = primeiraLetra.toUpperCase() + cadaNome.slice(1) + " "
        nomeCertinho += nome

    }

    return console.log(nomeCertinho.trim()), nomeCertinho = ""

}

converterParaMaiuscula("jose messias junior")
converterParaMaiuscula("paula rodrigues magalhães leite")
converterParaMaiuscula("paula rodrigues magalhães leite")
converterParaMaiuscula("fulana rodrigues m leite")

