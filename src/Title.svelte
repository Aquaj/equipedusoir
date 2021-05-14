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
    animation: move 40s linear infinite;
    height: 100vh;
  }

  .top {
    top: 0vh;
  }

  .bottom {
    top: 60vh;
  }

  h1 span {
    /* text-shadow: 0 0px #f3c623, 0 0px #f2aaaa; */
    transform: translate(0, 100%) rotate(4deg);
    animation: jump 4s linear infinite;
    display: inline-block;
  }

  @keyframes jump {
    25% {
      /* text-shadow: 0 20px #f37121, 0 30px #f2aaaa; */
    }
    50% {
      transform: translate(0, 0) rotate(-8deg);
      /* text-shadow: 0 10px #8fc0a9, 0 3px #84a9ac; */
    }
    75% {
      /* text-shadow: 0 -30px #d54062, 0 -20px #8fc0a9; */
    }
  }

  @keyframes move {
    to {
      background-position: 4500vh;
    }
  }
</style>
