(async function () {

    function getLatestCommitDate(githubUserName, apiKey) {
        let githubURL = `https://api.github.com/users/${githubUserName}/events`
        return fetch(githubURL,
            {
                headers: {
                    'Authorization': `token ${apiKey}`
                }
            })
            .then(response => response.json())
            .then(data => {
                return data.filter(event => {
                    return event.type === "PushEvent"
                })[0].created_at;
            })
            // console.log(`This user's last commit/push was on ${new Date(data[0].created_at).toDateString().substring(0, 15)}`))
            .catch(error => console.error(error));
    }

    let lastCommitDate = await getLatestCommitDate("stalbot0", GITHUB_API_KEY);
    console.log(lastCommitDate);

// create your own promise YIPPEEE
    function wait(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let resolveLog = `This message displays after ${number / 1000} second`;
                if (number === 1000) {
                    resolve(resolveLog);
                }
                if (number !== 1000) {
                    resolve(`${resolveLog}s`)
                } else {
                    reject("This did not work");
                }
            }, number);
        });
    }

    wait(1000).then((resolveVal) => console.log(resolveVal));
}());