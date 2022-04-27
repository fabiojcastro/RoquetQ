import Modal from './modal.js'

const modal = Modal()

// Buscar conteudo da modal para ser alterado.
const modalTitle = document.querySelector('.modal h2')
const modalText = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botoes que existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

const roomId = document.querySelector('#sentence-id').dataset.id
const form = document.querySelector('.modal form')

checkButtons.forEach(busca => {
  // adicionar a escuta
  // busca é so para dar um nome a execução de busca, pode ser qualquer um.
  busca.addEventListener('click', event => {
    event.preventDefault()

    form.setAttribute('action', `/sentence/${roomId}/:question/:action`)

    modalTitle.innerHTML = 'Marcar como lida'
    modalText.innerHTML = 'Tem certeza que você deseja marcar como lida?'
    modalButton.innerHTML = 'Sim, marcar'
    modalButton.classList.remove('delete')
    // Abrir modal
    modal.open()
  })
})

// Quando o botao delete for clicado vai abrir a modal.
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(busca => {
  busca.addEventListener('click', event => {
    event.preventDefault()
    modalTitle.innerHTML = 'Excluir Pergunta'
    modalText.innerHTML = 'Tem certeza que você deseja excluir esta pergunta?'
    modalButton.innerHTML = 'Sim, excluir'
    modalButton.classList.add('delete')

    modal.open()
  })
})
