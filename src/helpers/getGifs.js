

export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=y9l49tnjT44txbEjEo5dW3dAbhgbqXNp`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => {

        return {
            id: img.id,
            url: img.images?.downsized_medium.url,
            title: img.title
        }

    })

    return gifs;
}