import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  constructor() {
    super(...arguments);
    this.host = window.BACKEND_URL;
  }
}
