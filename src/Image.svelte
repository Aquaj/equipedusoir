<script>
  import { onDestroy } from 'svelte';

  export let name;
  export let x;
  export let y;

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

<img
  alt={name}
  class='member'
  src='./images/{name}.webp'
  style='position: absolute;
    top: {y};
    left: {x};
    transform:
    rotate({rot}deg)
    translate({pos_x}px, {pos_y}px)
    ;'
 />

<style>
  img.member {
    height: 250px;
  }
</style>
