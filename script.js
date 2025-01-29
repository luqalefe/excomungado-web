// Sua chave de API
const apiKey = 'AIzaSyAQd58XtDkpvXa9jUYwoMskVDIBOo_i7DE';
// ID do vídeo do YouTube
const videoId = 'En1NC6lo_3w';

// Monta a URL para a API do YouTube
const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    if (data.items && data.items.length > 0) {
      // Obtém o título, descrição e miniatura do vídeo
      const title = data.items[0].snippet.title;
      const description = data.items[0].snippet.description;
      const thumbnail = data.items[0].snippet.thumbnails.default.url;

      // Exibe as informações na página
      document.getElementById('video-title').textContent = title;
      document.getElementById('video-description').textContent = description;
      document.getElementById('video-thumbnail').src = thumbnail;
    } else {
      console.error('Nenhum vídeo encontrado com esse ID.');
    }
  })
  .catch(error => console.error('Erro:', error));
