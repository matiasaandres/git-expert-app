export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=35MdGe15P4lbpDKHLhjO3AFG5Z8VFkvm&q=${category}&limit=10&lang=es`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};
