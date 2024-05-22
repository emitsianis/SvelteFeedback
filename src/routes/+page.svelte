<script lang="ts">
  import FeedbackList from '../components/FeedbackList.svelte';
  import FeedbackStats from '../components/FeedbackStats.svelte';
  import FeedbackForm from '../components/FeedbackForm.svelte';
  import type { Feedback } from '../models/types';

  let feedback = [
    { id: 1, text: 'This is a test', rating: 5 },
    { id: 2, text: 'This is another test', rating: 3 },
    { id: 3, text: 'This is another test', rating: 4 },
  ];

  $:count = feedback.length;
  $:average = feedback.reduce((acc, item) => acc + item.rating, 0) / count;

  const deleteFeedback = (e: CustomEvent<number>) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };

  const addFeedback = (e: CustomEvent<Feedback>) => {
    feedback = [e.detail, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
