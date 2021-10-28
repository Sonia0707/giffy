const apiKey = "Hs0dr6bkLFW5sKH4KWqq51B9SDQP3EXc";

export default function getGifs({ keyword = "perros" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        {/**Por cada gif me pintas una imagen hay que usar el map porque el forEach no devuelve nada solo hace el loop*/}
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;

          return { title, id, url };
        });
        return gifs;
      } else {
        //Faltaria poner caso{} por si no es un Array pero normamente date suele dar un array
      }
    });
}
