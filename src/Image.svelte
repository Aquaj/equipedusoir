<script>
  import { onDestroy } from 'svelte';

  export let member;

  const interval = setInterval(() => {
    do {
      var amplitude = 45
      var old_rot = member.rot;
      member.rot = amplitude - Math.floor(Math.random() * amplitude*2);
    } while (Math.abs(old_rot - member.rot) < amplitude/2);
    do {
      var amplitude = 25
      var old_pos = member.pos;
      member.pos_x = amplitude - Math.floor(Math.random() * amplitude*2);
      member.pos_y = amplitude - Math.floor(Math.random() * amplitude*2);
    } while (Math.abs(old_pos - member.pos) < amplitude/2);
  }, 1000);

  onDestroy(() => clearInterval(interval));
</script>

<img
  alt={member.name}
  class='member'
  src='./images/{member.name}.webp'
  style='position: absolute;
    top: {member.position[0]};
    left: {member.position[1]};
    transform:
    rotate({member.rot}deg)
    translate({member.pos_x}px, {member.pos_y}px)
    ;'
 />

<style>
  img.member {
    height: 250px;
  }
</style>
