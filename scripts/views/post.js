import { marked } from 'https://esm.sh/marked';

export function post(id){
    fetch(`/posts/${id}.md`)
    .then(res => res.text())
    .then(text => {
        const html = `
            <br>
            <a class="back-button" href="#home">Indietro</a>
            ${marked(text)}
        `;
        document.getElementById('main-container').innerHTML = html;
    })
}