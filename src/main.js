import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    members: [
      { name: 'moon',  x: '45vw', y: '29vh' },
      { name: 'niclo', x: '19vw', y: '50vh' },
      { name: 'sharl', x: '67vw', y: '48vh' },
      { name: 'amine', x: '44vw', y: '69vh' },
    ],
  }
});

export default app;
