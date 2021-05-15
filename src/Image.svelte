<script>
  import { onDestroy } from 'svelte';

  export let name;
  export let x; export let y;
  export let description;

  if(!description) {
    description = '';
  };

  let rot;
  let pos_x;
  let pos_y;

  const rotation_amplitude = 45
  const spatial_amplitude = 25
  const interval = setInterval(() => {
    rot = rotation_amplitude - Math.floor(Math.random() * rotation_amplitude*2);
    pos_x = spatial_amplitude - Math.floor(Math.random() * spatial_amplitude*2);
    pos_y = spatial_amplitude - Math.floor(Math.random() * spatial_amplitude*2);
  }, 1000);

  onDestroy(() => clearInterval(interval));
</script>

<div class='container' style='position: absolute; top: {y}; left: {x};'>
  <img
    alt={description.replaceAll('<br />', '')}
    class='member'
    src='./images/{name}.webp'
    style='transform:
      rotate({rot}deg)
      translate({pos_x}px, {pos_y}px)
    ;'
  />
</div>
<div class='description' style='position: absolute; top: {y}; left: {x};'>
  {@html description || ''}
</div>

<style>
  .container {
    position: relative;
    z-index: 0;
  }

  img.member {
    height: 250px;
    z-index: -1; /* So it doesn't catch the hover */
  }

  .description {
    display: none;

    transform: translate(0, 200px);

    width: 180px;
    padding: 5px;

    background-color: white;
    border: solid black 1px;
  }

  .container:hover + .description  {
    display: block;
  }

  @media(max-width: 720px) {
    img.member {
      height: 150px;
    }
    .description {
      z-index: 2;
      transform: translate(0, 100px);
    }
  }
</style>
