<script lang="ts">
  export let extraText = 'default text';
  export let onClick = () => {
    console.log('clicked svelte Hello');
  };
</script>

<div class="text-3xl font-bold">
  Hello from Svelte!!
  <button on:click={onClick}>
    {extraText}
  </button>
</div>
