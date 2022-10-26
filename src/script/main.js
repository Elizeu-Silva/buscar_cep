const form = document.querySelector('form')
const estado = document.querySelector('.estado');
const cidade = document.querySelector('.cidade');
const bairro = document.querySelector('.bairro');
const endereço = document.querySelector('.endereço');
const button = document.querySelector('.btn');

form.addEventListener('submit', (event)=>{
  event.preventDefault();
  
})

const buscarCep = async (cep) =>{
  const APIcep = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
  
 if(APIcep.status === 200){
    const data = await APIcep.json()
    return data
 }

};

const renderCep = async (cep) =>{
  const data = await buscarCep(cep)
  
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
  
}

button.addEventListener('click', ()=>{
  let cep = document.querySelector('.cep');
  renderCep(cep.value)
})