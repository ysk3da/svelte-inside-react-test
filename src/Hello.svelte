<script lang="ts">
  export let extraText = 'default text';
  export let onClick = () => {
    console.log('clicked svelte Hello');
  };
</script>

<div class="text-3xl font-bold" on:click={onClick}>
  Hello from Svelte!! {extraText}
</div>
