export function searchJobFromApi() {
    const url="127.0.0.1:8000/api/jobs" + id;
    return fetch(url)
        .then((response) => response.json)
        .catch((error) => console.log('There are no job offers matching your research.'))
}

export function getSelectedJobSkills() {
    const url='127.0.0.1:8000/api/skills' + id;
    return fetch(url)
        .then((response) => response.json)
        .catch((error) => console.log('Something happened, please try again.'))
}