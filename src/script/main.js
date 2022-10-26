const form = document.querySelector('form')
const estado = document.querySelector('.estado');
const cidade = document.querySelector('.cidade');
const bairro = document.querySelector('.bairro');
const endereço = document.querySelector('.endereço');
const button = document.querySelector('.btn');


form.addEventListener('submit', (event)=>{
  event.preventDefault();
})

button.addEventListener('click', function buscarCep(){

  let cep = document.querySelector('.cep').value;
  let url = `http://viacep.com.br/ws/${cep}/json/`;

    if(cep.length !== 8){
      alert('Cep inválido')
      return
    }
  
  
    fetch(url).then(function(response){
      response.json().then(function(data){
        renderData(data)
      })
  });

} )



function renderData(data){

  if(data){
    estado.style.background = '#fff';
    estado.value = data.uf;  

    cidade.style.background = '#fff';
    cidade.value = data.localidade;  

    bairro.style.background = '#fff';
    bairro.value = data.bairro;  

    endereço.style.background = '#fff';
    endereço.value = data.logradouro;  
  }
};


