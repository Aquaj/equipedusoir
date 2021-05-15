<script>
  import Title from './Title.svelte';
  import Image from './Image.svelte';

  export let members;
</script>

<main>
  <Title content="l'équipe du soir" style="top" />
  {#each members as member}
    <Image {...member} />
  {/each}
  <Title content="c nous" style="bottom" />
</main>

<style>
  :global(body) {
    text-align: center;
    height: 100vh;
    height: -webkit-fill-available;
    width: 100vw;
    width: -webkit-fill-available;
    margin: 0 auto;
    background-image: url('/images/stars.gif');
    overflow: hidden;
  }
</style>
