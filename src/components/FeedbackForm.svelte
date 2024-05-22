<script lang="ts">
  import { v4 as uuid } from 'uuid';
  import Card from './Card.svelte';
  import Button from './Button.svelte';
  import RatingSelect from './RatingSelect.svelte';
  import { FeedbackStore } from '../stores';

  let text = '';
  let rating = 10;
  let min = 10;
  let message = '';
  let btnDisabled = true;

  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    text = target.value;
    if (text.trim().length < min) {
      message = `Text must be at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = '';
      btnDisabled = false;
    }
  };

  const handleSelect = (e: CustomEvent<number>) => {
    rating = e.detail;
  };

  const handleSubmit = () => {
    if (text.trim().length >= min) {
      const newFeedback = { id: uuid(), text, rating };
      FeedbackStore.update((items) => [newFeedback, ...items]);
      text = '';
    }
  };
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        bind:value={text}
        placeholder="Tell us something that keeps you coming back"
        on:input={handleInput}
      >
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
