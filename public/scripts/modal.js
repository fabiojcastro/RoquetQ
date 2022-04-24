export default function Modal() {
  const buttonCancel = document.querySelector('.buttons .cancel')
  buttonCancel.addEventListener('click', close)

  const modalWrapper = document.querySelector('.modal-wrapper')

  function open() {
    // funcionalidade de acrescentar o active na modal
    modalWrapper.classList.add('active')
  }
  function close() {
    // funcionalidade de remover a modal
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
