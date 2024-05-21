<script lang="ts">
  import type { Feedback } from '../models/types.js';
  import FeedbackItem from './FeedbackItem.svelte';

  export let feedback: Feedback[] = [];

  console.log(feedback);
</script>

{#each feedback as item (item.id)}
  <FeedbackItem {item} on:delete-feedback />
{/each}
