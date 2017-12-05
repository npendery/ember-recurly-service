import sinon from 'sinon';
import { moduleFor, test } from 'ember-qunit';

moduleFor('service:recurly', 'Unit | Services | Recurly service', {
});

let billingInfo = {
  number: '4321-4321-4321-4321',
  month: 1,
  year: 2017,
  first_name: 'Frank',
  last_name: 'Reynolds'
};

test('generateToken sets the token and returns a promise', function(assert) {
  let service = this.subject();
  let response = {
    id: '21049bcc-0e4c-4857-9c21-c542fc53ce10' // Should update with realistic token value
  };

  let generateTokenRequestStub = sinon.stub(recurly, 'generateToken').callsFake(function(card, cb) {
    assert.equal(card, billingInfo, 'called with sample credit card data');
    cb(200, response);
  });

  return service.generateToken(billingInfo)
    .then((res) => {
      assert.equal(res.id, '21049bcc-0e4c-4857-9c21-c542fc53ce10');
      generateTokenRequestStub.restore();
    });
});

test('generateToken rejects the promise if Recurly errors', function(assert) {
  let service = this.subject();
  let response = {
    error : {
      code: 'invalid-parameter',
      fields: [
        'first_name' // Update once tested to see format
      ]
    }
  };

  let generateTokenRequestStub = sinon.stub(recurly, 'generateToken').callsFake(function(card, cb) {
    cb(422, response);
  });

  return service.generateToken(billingInfo)
    .catch((res) => {
      assert.deepEqual(res, response, 'error passed');
      generateTokenRequestStub.restore();
    });
});
