import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    members: [
      { name: 'moon',
        x: '45vw', y: '29vh',
        description: 'Moon "Coucou" Five:<br />inventeur de chargeur,<br />' +
        'écrivain de la pensée.<br />Raciste.',
      }, {
        name: 'niclo',
        x: '19vw', y: '50vh',
        description: "L'amie des animaux,<br />Touhou player extraordinaire.",
      }, {
        name: 'sharl',
        x: '67vw', y: '48vh',
        description: 'sharl "Coucou" sharl:<br />' +
        'possesseur de chargeur,<br />mange tes morts Moon.',
      }, {
        name: 'amine',
        x: '44vw', y: '69vh',
        description: 'Potit blagueur en chef.',
      },
    ],
  }
});

export default app;
