import axios from "axios";

 export default async function fetchImages(value, page) {
    try {
        const URL = 'https://pixabay.com/api/';
        const KEY = '35100362-df85f1508e5c064e35d3bf680';
        const params = `?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

        const response = await axios.get(`${URL}${params}`);
        const data = await response.data;
        return data;
        
    } catch (error) {
        console.error(error);
    }
};