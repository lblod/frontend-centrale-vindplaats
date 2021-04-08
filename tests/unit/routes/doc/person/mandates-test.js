import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | doc/person/mandates', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:doc/person/mandates');
    assert.ok(route);
  });
});
