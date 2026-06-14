export function edu () {
    const mainContainer = document.getElementById("main-container");
    
    fetch(`/scripts/data/certificati.json`)
    .then(res => res.json())
    .then (certificates => {
        const cards = certificates.map(certificate => 
            `
            <a href="${certificate.url}" target="_blank" class="post-card">
                <h2>${certificate.titolo}</h2>
            </a>
            `
        ).join('');
        
        mainContainer.innerHTML=`
                <h1>Formazione</h1>
                <p>Certificazioni Udemy</p>
                ${cards}`;
        
    });
}