const searchBar = document.getElementById('search_bar');
const searchBox = document.getElementById('search_box');
const searchOptions = document.getElementById('search_options');
const searchOption = document.getElementsByClassName('search_option');

searchBar.addEventListener('focus', () => {
    searchOptions.style.display = 'block';
})

for (let i = 0; i < searchOption.length; i++) {
    searchOption[i].addEventListener('click', () => {
        window.location.href = '/search';
    })
}

document.addEventListener('click', (event) => {
    if (!searchBar.contains(event.target) && !searchOptions.contains(event.target)) {
        searchOptions.style.display = 'none';
    }
})
