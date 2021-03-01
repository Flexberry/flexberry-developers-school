import Component from '@ember/component';
import { get } from '@ember/object';
import { getOwner } from '@ember/application';

export default Component.extend({

  didRender() {
    const appInstance = getOwner(this);
    const applicationLogger = appInstance.lookup('logger:main');
    // const applicationLogger = get(this, 'applicationLogger');
    applicationLogger.log('author-item component was successfully rendered');
  }
});
