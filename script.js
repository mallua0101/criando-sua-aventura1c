const avanca = document.qurerySalaectorALL('.btn-proximo');
avanca.forEach(button =>){
    button.addEventListener('click', function(){
  const atual = document.querySelector('.atico');
  const proximoPasso = 'passo-'+ this.getAttribut('data-proximo');

  atual.classList.remove('ativo');
  document.getElementById(proximoPasso).classList.add('ativo');
    })
})