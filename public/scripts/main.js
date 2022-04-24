import Modal from './modal.js'

const modal = Modal()

// Buscar conteudo da modal para ser alterado.
const modalTitle = document.querySelector('.modal h2')
const modalText = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botoes que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(busca => {
  // adicionar a escuta
  // busca é so para dar um nome a execução de busca, pode ser qualquer um.
  busca.addEventListener('click', event => {
    modalTitle.innerHTML = 'Marcar como lida'
    modalText.innerHTML = 'Tem certeza que você deseja marcar como lida?'
    modalButton.innerHTML = 'Sim, marcar'
    // Abrir modal
    modal.open()
  })
})

// Quando o botao delete for clicado vai abrir a modal.
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(busca => {
  busca.addEventListener('click', event => {
    modalTitle.innerHTML = 'Excluir Pergunta'
    modalText.innerHTML = 'Tem certeza que você deseja excluir esta pergunta?'
    modalButton.innerHTML = 'Sim, excluir'
    modal.open()
  })
})
