# REPO STILL WIP

# ember-recurly-service

This is a service to integrate [Recurly.js](https://dev.recurly.com/docs/recurlyjs) into your Ember application.

## Configuration

Add your Recurly Public Key to your app's `config/environment.js` file as such:

```
ENV.recurly = {
  publicKey: 'yourPubKeyGoesHere'
}
```

Then inject this service into any file that needs to communicate with Recurly to use it.

```
import { inject as service } from '@ember/service';

export {
  recurly: service()
}
```

# Development

## Installation

* `git clone <repository-url>` this repository
* `cd ember-recurly-service`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
