export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=3&api_key=txETLoL00tnzVVCyva9errUIkRQzhkuW`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map((img) => {
      return {
        id: img.id,
        title: img.title?.trim() || "Without Title!",
        url: img.images?.downsized_medium.url,
      };
    });
    return gifts;    
  };