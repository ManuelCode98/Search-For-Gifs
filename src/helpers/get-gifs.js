
const api_key = import.meta.env.VITE_API_KEY;

const getGifs = async( category, limitValue )=>{
  
    if( limitValue === undefined ) return;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}=${category}&limit=${limitValue}`
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( ({ id, title, images }) => ({
        id,
        title,
        urlImg: images.downsized_medium.url,
    }));
    
    return gifs;
}


export {
    getGifs
}