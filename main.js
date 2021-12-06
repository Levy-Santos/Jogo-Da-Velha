let tabuleiro = document.getElementsByClassName("tabuleiro");
let venceu,continuar,outro
let rodadaAtual = 1
let jogador1 = 'X'
let jogador2 = 'O'
let jogoAcabou = false
for (var i = 0; i < tabuleiro.length; i++) {
  tabuleiro[i].addEventListener("click",jogar)
}
function jogar(){
  if(!jogoAcabou){
    if(rodadaAtual<10){
      if(rodadaAtual%2 == 1){jogadorAtual = jogador1; outro = jogador2}
      else{jogadorAtual = jogador2; outro = jogador1}
      if(this.innerHTML!=outro && this.innerHTML!=jogadorAtual){
        this.innerHTML = jogadorAtual
        this.setAttribute('style', 'color: black')               
        rodadaAtual++
      }
      setTimeout(testaVitoria, 100)
    }
  }
}
function testaVitoria(){
  venceu = (tabuleiro[0].innerHTML == tabuleiro[1].innerHTML && tabuleiro[1].innerHTML == tabuleiro[2].innerHTML)||(tabuleiro[3].innerHTML == tabuleiro[4].innerHTML && tabuleiro[4].innerHTML == tabuleiro[5].innerHTML)||(tabuleiro[6].innerHTML == tabuleiro[7].innerHTML && tabuleiro[7].innerHTML == tabuleiro[8].innerHTML)||(tabuleiro[0].innerHTML == tabuleiro[3].innerHTML && tabuleiro[3].innerHTML == tabuleiro[6].innerHTML)||(tabuleiro[1].innerHTML == tabuleiro[4].innerHTML && tabuleiro[4].innerHTML == tabuleiro[7].innerHTML)||(tabuleiro[2].innerHTML == tabuleiro[5].innerHTML && tabuleiro[5].innerHTML == tabuleiro[8].innerHTML)||(tabuleiro[0].innerHTML == tabuleiro[4].innerHTML && tabuleiro[4].innerHTML == tabuleiro[8].innerHTML)||(tabuleiro[6].innerHTML == tabuleiro[4].innerHTML && tabuleiro[4].innerHTML == tabuleiro[2].innerHTML)
  if(venceu){
    fimDeJogo(`O jogador com '${jogadorAtual}' venceu!!!
    continuar jogando? [s/n]`)
  }else if(rodadaAtual>9){
    fimDeJogo(`O jogo deu velha!!!
    continuar jogando? [s/n]`)
  }
}
function fimDeJogo(a){
  jogoAcabou = true
  continuar = prompt(a)
  continuar=='s'?location.reload():close()
}