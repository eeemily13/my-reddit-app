const url = 'https://www.reddit.com/r/dogs.json';

export const fetchData = async () =>
    await fetch(url)
    .then(response => (response.ok ? response: Promise.reject(response)))
    . then(response => response.json())