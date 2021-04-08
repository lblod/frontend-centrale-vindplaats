import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | doc/organisation', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:doc/organisation');
    assert.ok(route);
  });
});
