const projectModal = document.getElementById('projectModal')
if (projectModal) {
    projectModal.addEventListener('show.bs.modal', event => {

        // Button that triggered the modal
        const button = event.relatedTarget

        // Extract info from data-bs-* attributes
        const title = button.getAttribute('data-bs-title')
        const content = button.getAttribute('data-bs-content')

        // Update the modal's content.
        const modalTitle = projectModal.querySelector('.modal-title')
        const modalBody = projectModal.querySelector('.modal-body')

        modalTitle.textContent = title
        modalBody.innerHTML = content
    })
}