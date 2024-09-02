function Search() {
    // Get the input value
    const query = document.getElementById('search-bar').value.toLowerCase();

    // Get selected search criteria
    const searchFor = document.querySelector('input[name="search-for"]:checked').id;

    // Get all list items
    const items = document.querySelectorAll('#main .cards');

    items.forEach(item => {
        // Get text content of name and author
        const name = item.querySelector('.name').textContent.toLowerCase();
        const author = item.querySelector('.author') ? item.querySelector('.author').textContent.toLowerCase() : '';

        // Check if item matches the search criteria
        if ((searchFor === 'search-name' && name.includes(query)) || 
            (searchFor === 'search-author' && author.includes(query)) || 
            (query === '')) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cards');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalDownload = document.getElementById('modal-download');
    const closeModal = document.querySelector('.close');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.getAttribute('data-title');
            const author = this.getAttribute('data-author');
            const file = this.getAttribute('data-file');

            modalTitle.textContent = title;
            modalAuthor.textContent = author;
            modalDownload.href = file;
            modalDownload.download = file.substring(file.lastIndexOf('/') + 1);

            modal.style.display = 'block';
        });
    });

    // Close modal when the user clicks on <span> (x)
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
