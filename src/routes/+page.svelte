<script lang="ts">
  import FeedbackList from '../components/FeedbackList.svelte';

  let feedback = [
    { id: 1, text: 'This is a test', rating: 5 },
    { id: 2, text: 'This is another test', rating: 3 },
    { id: 3, text: 'This is another test', rating: 4 },
  ];

  const deleteFeedback = (e: CustomEvent<number>) => {
    const itemId = e.detail;
    feedback = feedback.filter((item) => item.id !== itemId);
  };
</script>

<main class="container">
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
