import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | score', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:score');
    assert.ok(route);
  });
});
