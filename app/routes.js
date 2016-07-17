// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
// import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes() {
  // Create reusable async injectors using getAsyncInjectors factory
  // const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/program',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/Program').default);
        }, 'Program');
      },
    }, {
      path: '/live',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/Live').default);
        }, 'Live');
      },
    }, {
      path: '/morning',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/Morning').default);
        }, 'Morning');
      },
    }, {
      path: '/evening',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/Evening').default);
        }, 'Evening');
      },
    }, {
      path: '/news',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/News').default);
        }, 'News');
      },
    }, {
      path: '/contact',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('containers/Contact').default);
        }, 'Contact');
      },
    },

    {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },
  ];
}
