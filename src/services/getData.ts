
const url= 'https://rickandmortyapi.com/api/character';

export async function getData() {
    
    const response = await fetch(url);
    const data = await response.json();
    return data;
}