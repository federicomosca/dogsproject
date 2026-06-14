export function about() {
  fetch('/scripts/data/profilo.json')
    .then(res => res.json())
    .then(data => {
      const strumenti = Object.entries(data.strumenti).map(([titolo, items]) => `
        <div class="cv-block">
          <strong>${titolo}</strong>
          <p>${items.join(', ')}</p>
        </div>
      `).join('');

      const competenze = Object.entries(data.competenze).map(([titolo, items]) => `
        <div class="cv-block">
          <strong>${titolo}</strong>
          <ul>
            ${items.map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      `).join('');

      const links = data.links.map(l => `
        <a class="cv-link" href="${l.url}" target="_blank">${l.label}</a>
      `).join('');

      const profilo = data.profilo.map(p => `<p>${p}</p>`).join('');

      document.getElementById('main-container').innerHTML = `
        <div class="cv-header">
          <img class="cv-foto" src="${data.foto}" alt="${data.nome}">
          <div class="cv-header-info">
            <h2 class="cv-nome">${data.nome}</h2>
            <p class="cv-ruolo">${data.ruolo}</p>
            <div class="cv-links">${links}</div>
          </div>
        </div>
        <div class="cv-section">
          <h3 class="cv-section-title">Profilo</h3>
          <div class="cv-section-body">${profilo}</div>
        </div>
        <div class="cv-columns">
            <div class="cv-section">
                <h3 class="cv-section-title">Competenze</h3>
                <div class="cv-section-body">${competenze}</div>
            </div>
            <div class="cv-section">
                <h3 class="cv-section-title">Strumenti</h3>
                <div class="cv-section-body">${strumenti}</div>
            </div>
            </div>
      `;
    });
}