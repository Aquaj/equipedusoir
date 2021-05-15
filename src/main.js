import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    members: [
      { name: 'moon',
        x: '45vw', y: '29vh',
        description: 'Moon "Coucou" Five: inventeur de chargeur, ' +
          'écrivain de la pensée, raciste.',
      }, {
        name: 'niclo',
        x: '19vw', y: '50vh',
        description: "L'amie des animaux, Touhou player extraordinaire.",
      }, {
        name: 'sharl',
        x: '67vw', y: '48vh',
        description: 'sharl "Coucou" sharl: ' +
          'possesseur de chargeur, mange tes morts Moon.',
      }, {
        name: 'amine',
        x: '44vw', y: '69vh',
        description: 'Poti blagueur en chef.',
      },
    ],
  }
});

export default app;
