import Ember from 'ember';

export default Ember.Service.extend({
  /**
  * Creates a creditCard token using Recurly.js API
  * @param {object} billingInfo
  * Required fields:
  *   {
  *     number: String,
  *     month: Integer,
  *     year: Integer,
  *     first_name: String,
  *     last_name: String
  *   }
  * More fields can be found in the Recurly.js docs
  *
  * Returns a promise that holds a token object. Token expires in 20 minutes after request
  * @return {promise}
  */
  generateToken: function(billingInfo) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      recurly.token(billingInfo, function(err, token) {
        if(err) {
          reject(err);
        } else {
          resolve(token);
        }
      });
    });
  }
});
