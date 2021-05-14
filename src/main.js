import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    members: [
      { name: 'niclo', position: ['50vh', '19vw'] },
      { name: 'moon', position: ['29vh', '45vw'] },
      { name: 'sharl', position: ['48vh', '67vw'] },
      { name: 'amine', position: ['69vh', '44vw'] },
    ],
  }
});

export default app;
