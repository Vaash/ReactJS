export function searchJobFromApi() {
    const url="http://localhost:8000/api/jobs";
    return fetch(url)
        .then((response) => response.json)
        .catch((error) => console.log('There are no job offers matching your research.'))
}

export function getSelectedJobSkills(id) {
    const url='http://localhost:8000/api/skills' + id;
    return fetch(url)
        .then((response) => response.json)
        .catch((error) => console.log('Something happened, please try again.'))
}