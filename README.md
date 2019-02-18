# @Weetrak/SocialSignals

This package helps you get social signals for various social networking sites, For Example: Likes, comments, shares for Facebook etc.

## Installation

Use the package manager [npm](https://www.npmjs.com/package/@weetrak/socialsignals) to install @weetrak/socialsignals.

```bash
npm install @weetrak/socialsignals
```

## Usage

```javascript
let socialSignals = require('@weetrak/socialsignals');
```


### Facebook

Get Facebook Likes, Shares, Comments Count.

* First Parameter takes Domain Name (for which domain you want to get metrics)
* Second Argument takes FBAppCreds (Format: fbAppID|fbAppSecret)

```javascript

fbAppCredentials  = fbAppId|fbAppSecret;

example:

let fbAppCredentials = '2282363855366100|09544465162179fd469341670c2683f7';

socialSignals.getFacebookSignals(domainName, fbAppCredentials).then(data => {
    console.log(data);
})

output: { 
engagement: 
   { reaction_count: 0,
     comment_count: 0,
     share_count: 11,
     comment_plugin_count: 0 },
  id: 'http://developerfox.com' 
}
```
* Please have a look into how to get fbAppId and fbAppSecretKey [here](https://www.codexworld.com/create-facebook-app-id-app-secret/).


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
