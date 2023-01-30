"use strict";

(function () {

    var githubUsername = "stalbot0"

    function getLatestCommit() {
        return fetch('https://api.github.com/users/' + githubUsername + '/events', {headers: {'Authorization': 'GITHUB_API_KEY2'}})
            .then(response => response.json())
            .then(data => console.log(new Date(data[0].created_at)))
            .catch(error => console.error(error));
    }

    getLatestCommit();


    function wait(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (number === 1000) {
                    resolve(`This message displays after ${number / 1000} second`);
                }
                if (number !== 1000) {
                    resolve(`This message displays after ${number / 1000} seconds`)
                } else {
                    reject("This did not work");
                }
            }, number);
        });
    }

    wait(500).then((resolveMessage) => console.log(resolveMessage));

}());