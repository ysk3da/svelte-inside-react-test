<script>
  import { counter } from './store';
</script>

<button
  type="button"
  class="btn btn-success btn-lg m-2"
  on:click={$counter.increment}
>
  Svelte - Count is {$counter.count}
</button>
