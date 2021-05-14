<script>
  import { onDestroy } from 'svelte';
  import Title from './Title.svelte';

  export let members;

  const interval = setInterval(() => {
    members.forEach((member) => {
      do {
        var amplitude = 45
        var old_rot = member.rot;
        member.rot = amplitude - Math.floor(Math.random() * amplitude*2);
      } while (Math.abs(old_rot - member.rot) < amplitude/2);
    })
    members = members; // NOTE: To trigger reactivity
  }, 1000);
  onDestroy(() => clearInterval(interval));
</script>

<main>
  <Title content="l'équipe du soir" style="top" />
  {#each members as member}
    <img
    alt={member.name}
    class='member'
    src='./images/{member.name}.jpg'
    style='position: absolute;
      top: {member.position[0]};
      left: {member.position[1]};
      transform: rotate({member.rot}deg);'
    >
  {/each}
  <Title content="c nous" style="bottom" />
</main>

<style>
  :global(body) {
    text-align: center;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    background-image: url('/images/stars.gif');
  }

  img.member {
    height: 250px;
  }
</style>
