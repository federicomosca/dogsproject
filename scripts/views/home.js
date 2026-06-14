export function home() {
    const mainContainer = document.getElementById('main-container');
    
    fetch('./scripts/data/posts.json')
    .then(res => res.json())
    .then (posts => {
        const cards = posts.map(post => 
            `
            <a href="#post/${post.id}" class="post-card">
                <h2>${post.titolo}</h2>
                <p>${post.anteprima}</p>
            </a>
            `
        ).join('');
        
        mainContainer.innerHTML = `
        <h1>Home</h1>
        <p>I miei post su produttività e sviluppo D365</p>
        ${cards}
        `;
    })
}