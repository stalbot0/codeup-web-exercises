"use strict";

(function () {

    function getLatestCommit() {
        return fetch('https://api.github.com/users/stalbot0/events', {headers: {'Authorization': 'GITHUB_API_KEY2'}})
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    }

    getLatestCommit();

}());