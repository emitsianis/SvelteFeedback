<script lang="ts">
  import type { Feedback } from '../models/types.js';
  import FeedbackItem from './FeedbackItem.svelte';
  import { fade, scale } from 'svelte/transition';

  export let feedback: Feedback[] = [];

  console.log(feedback);
</script>

{#each feedback as item (item.id)}
  <div in:scale out:fade="{{duration: 500}}">
    <FeedbackItem {item} on:delete-feedback />
  </div>
{/each}
