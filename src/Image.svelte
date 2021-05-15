<script>
  import { onDestroy } from 'svelte';

  export let name;
  export let x;
  export let y;
  export let description;

  let rot;
  let pos_x;
  let pos_y;

  const interval = setInterval(() => {
    do {
      var amplitude = 45
      var old_rot = rot;
      rot = amplitude - Math.floor(Math.random() * amplitude*2);
    } while (Math.abs(old_rot - rot) < amplitude/2);
    do {
      var amplitude = 25
      var old_pos = pos_x;
      pos_x = amplitude - Math.floor(Math.random() * amplitude*2);
    } while (Math.abs(old_pos - pos_x) < amplitude/2);
    do {
      var amplitude = 25
      var old_pos = pos_y;
      pos_y = amplitude - Math.floor(Math.random() * amplitude*2);
    } while (Math.abs(old_pos - pos_y) < amplitude/2);
  }, 1000);

  onDestroy(() => clearInterval(interval));
</script>

<div class='image-container' style='position: absolute; top: {y}; left: {x};'>
  <img
    alt={name}
    class='member'
    src='./images/{name}.webp'
    style='transform:
      rotate({rot}deg)
      translate({pos_x}px, {pos_y}px)
    ;'
  />
  <div class='description'>
    {@html description || ''}
  </div>
</div>

<style>
  .image-container {
    position: relative;
    z-index: 10; /* Catch the hover */
  }

  img.member {
    height: 250px;
  }

  .image-container:hover .description {
    display: block;
  }

  .description {
    display: none;

    position: absolute;
    top: 70%;
    left: 40%;

    width: 180px;
    padding: 5px;

    background-color: white;
    border: solid black 1px;
  }
</style>
