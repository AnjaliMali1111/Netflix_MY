document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById('watchlist');
    const input = document.getElementById('newMovie');
    const button = document.getElementById('addMovie');

    const movies = JSON.parse(localStorage.getItem('watchlist')) || [];

    function render() {
        list.innerHTML = '';
        movies.forEach((movie, index) => {
            const li = document.createElement('li');
            li.textContent = movie;
            const removeBtn = document.createElement('button');
            removeBtn.textContent = '❌';
            removeBtn.onclick = () => {
                movies.splice(index, 1);
                localStorage.setItem('watchlist', JSON.stringify(movies));
                render();
            };
            li.appendChild(removeBtn);
            list.appendChild(li);
        });
    }

    button.addEventListener('click', () => {
        const movie = input.value.trim();
        if (movie) {
            movies.push(movie);
            localStorage.setItem('watchlist', JSON.stringify(movies));
            render();
            input.value = '';
        }
    });

    render();
});
