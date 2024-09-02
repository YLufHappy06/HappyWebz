function Search() {
    // Get the input value
    const query = document.getElementById('search-bar').value.toLowerCase();

    // Get selected search criteria
    const searchFor = document.querySelector('input[name="search-for"]:checked').id;

    const searchType = document.querySelector('input[name="search-type"]:checked').id;

    // Get all list items
    const items = document.querySelectorAll('#main .cards');

    items.forEach(item => {
        // Get text content of name and author
        const name = item.querySelector('.name').textContent.toLowerCase();
        const type = item.querySelector('.type').textContent.toLowerCase();
        const author = item.querySelector('.author') ? item.querySelector('.author').textContent.toLowerCase() : '';

        // Check if item matches the search criteria
        if (((searchFor === 'search-name' && name.includes(query)) || (searchFor === 'search-author' && author.includes(query))) &&
            ((searchType === 'minecraft-mod-type' && type === 'minecraft mod') || (searchType === 'unity-game-type' && type === 'unity game') || searchType === 'all-type') || 
            (query === '')) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

updateOptionBackgroundColor()

function updateOptionBackgroundColor() {
    const radios = document.querySelectorAll('input[name="search-for"]');

    // Iterate through each radio button
    radios.forEach(radio => {
        if (radio.checked) {
            const div = document.getElementById(radio.value + '-radio');
            if (div) {
                div.style.backgroundColor = 'rgb(0, 19, 19)';
            }
        } else {

            const div = document.getElementById(radio.value + '-radio');
            if (div) {
                div.style.backgroundColor = ''; // Reset to default or previous color
            }
        }
    });

    const Typeradios = document.querySelectorAll('input[name="search-type"]');

    // Iterate through each radio button
    Typeradios.forEach(radio => {
        if (radio.checked) {
            const div = document.getElementById(radio.value + '-radio');
            if (div) {
                div.style.backgroundColor = 'rgb(0, 19, 19)';
            }
        } else {

            const div = document.getElementById(radio.value + '-radio');
            if (div) {
                div.style.backgroundColor = ''; // Reset to default or previous color
            }
        }
    });

}


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cards');
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalAuthor = document.getElementById('modal-author');
    const modalVer = document.getElementById('modal-version');
    const modalDes = document.getElementById('modal-des');
    const modalDownload = document.getElementById('modal-download');
    const closeModal = document.querySelector('.close');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            let title = this.getAttribute('data-title');
            const author = this.getAttribute('data-author');
            const ver = this.getAttribute('data-version');
            const des = this.getAttribute('data-des');
            const file = this.getAttribute('data-file');

            modalTitle.textContent = title.toUpperCase();
            modalAuthor.textContent = "By: " + author;
            modalVer.textContent = ver;
            modalDes.textContent = des;
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
