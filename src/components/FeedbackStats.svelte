<script lang="ts">
  import { FeedbackStore } from '../stores';
</script>

<div class="feedback-stats">
  <h4>{$FeedbackStore.length} Reviews</h4>
  <h4>
    Ratings Average: {($FeedbackStore.reduce((acc, item) => acc + item.rating, 0) / $FeedbackStore.length).toFixed(1)}
  </h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
