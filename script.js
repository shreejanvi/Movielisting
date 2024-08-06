const movies = [
    {
        title: 'Inception',
        poster: 'pictures/inception.jpg',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.'
    },
    {
        title: 'The Dark Knight',
        poster: 'pictures/dark_knight.jpg',
        description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.'
    },
    {
        title: 'Interstellar',
        poster: 'pictures/interstellar.jpg',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
    },
    {
        title: 'The Matrix',
        poster: 'pictures/matrix.jpg',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
    },
    {
        title: 'Fight Club',
        poster: 'pictures/fight_club.jpg',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.'
    }
];


const movieList = document.getElementById('movieList');
const searchBar = document.getElementById('searchBar');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalPoster = document.getElementById('modalPoster');
const modalDescription = document.getElementById('modalDescription');


const closeBtn = document.querySelector('.close-btn');


function displayMovies(movies) {
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
        <img class="card-img" src="${movie.poster}" alt="${movie.title} poster">
        <h3>${movie.title}</h3>
            <p class="card-desc">${truncateDescription(movie.description, 10)}</p>
            
        `;
        movieCard.addEventListener('click', () => openModal(movie));
        movieList.appendChild(movieCard);
    });
}
function truncateDescription(description, wordLimit) {
    const words = description.split(' ');
    if (words.length <= wordLimit) {
        return description;
    }
    return words.slice(0, wordLimit).join(' ') + '...';
}
function openModal(movie) {
    modalTitle.textContent = movie.title;
    modalPoster.src = movie.poster;
    modalDescription.textContent = movie.description;
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

function filterMovies(event) {
    const searchText = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchText));
    displayMovies(filteredMovies);
}

searchBar.addEventListener('input', filterMovies);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        closeModal();
    }
});

displayMovies(movies);
