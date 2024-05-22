<script lang="ts">
  import type { Feedback } from '../models/types';
  import Card from './Card.svelte';
  import { FeedbackStore } from '../stores';

  export let item: Feedback;

  const handleDelete = (itemId: number) => {
    FeedbackStore.update((items) => items.filter((item) => item.id !== itemId));
  };
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <div class="text-display">
    {item.text}
  </div>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
