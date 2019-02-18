// Start

var rp = require('request-promise');

let getFacebookSignals = async (domain, fbAppDetails) => {
    return new Promise((resolve, reject) => {
        let options = {
            uri: `https://graph.facebook.com/v3.2/?id=${domain}&fields=engagement&access_token=${fbAppDetails}`,
            method: 'GET'
        }
        rp(options).then(res => {
            let data = JSON.parse(res);
            return resolve(data);
        }).catch(err => {
            return resolve(err);
        })
    })
}

module.exports.getFacebookSignals = getFacebookSignals;


