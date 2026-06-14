export function home() {
    const mainContainer = document.getElementById('main-container');
    
    fetch('./scripts/data/posts.json')
    .then(res => res.json())
    .then (posts => {
        const cards = posts.map(post => 
            `
            <ul>
                <a href='/'>
                    <a href="#post/${post.id}">
                        <h2>${post.titolo}</h2>
                    </a>
                    <p>${post.anteprima}</p>
                </a>
            </ul>
            `
        ).join('');
        
        mainContainer.innerHTML = `
        <h1>Home</h1>
        <p>I miei post su produttività e sviluppo D365</p>
        ${cards}
        `;
    })
}