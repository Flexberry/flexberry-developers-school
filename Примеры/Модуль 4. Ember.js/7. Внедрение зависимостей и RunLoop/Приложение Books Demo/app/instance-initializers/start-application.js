export function initialize(appInstance) {
  // appInstance.inject('route', 'foo', 'service:foo');
  const applicationLogger = appInstance.lookup('logger:main');
  applicationLogger.log('instance initializer');
}

export default {
  initialize
};
