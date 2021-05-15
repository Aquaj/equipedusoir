<script>
  export let content;
  export let style;
</script>

<h1 class={style}>
  {#each [...content]  as char}
    {#if char == ' '}
      <span>&nbsp;</span>
    {:else}
      <span>{char}</span>
    {/if}
  {/each}
</h1>

<style>
  h1 {
    z-index: -1;
    position: absolute;
    left: 0;
    width: 100vw;
    text-align: center;

    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: 100;
    font-size:70px;
    background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,red);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: move 1s linear infinite;
    height: 100vh;
  }

  .top {
    top: 0vh;
  }

  .bottom {
    top: 45vh;
  }

  h1 span {
    transform: translate(0, 100%) rotate(8deg);
    animation: jump 4s linear infinite;
    display: inline-block;
  }

  @keyframes jump {
    50% { transform: translate(0, 0) rotate(-8deg); }
  }

  @keyframes move { to { background-position: 100vh; } }

  @media(max-width: 720px) {
    h1 span {
      transform: none;
    }
  }
</style>
