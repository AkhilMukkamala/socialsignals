// Start
const request = require('request-promise');

const getFacebookSignals = (domain, fbAppDetails) => {

    let details = {
        method: 'GET',
        uri: `https://graph.facebook.com/v3.2/?id=${domain}&fields=engagement&access_token=${fbAppDetails}`,
        resolveWithFullResponse: true,
        json: true
    }

    request(details).then((res) => {
        let body = res.body;
        console.log('body', body)
        return body;
    }).catch(error => {
        throw error;
    })
}

module.exports.getFacebookSignals = getFacebookSignals;
