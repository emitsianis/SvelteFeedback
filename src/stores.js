import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  { id: '1', text: 'Great service, very satisfied!', rating: 10 },
  { id: '2', text: 'The product quality is good, but delivery was late.', rating: 7 },
  { id: '3', text: 'Customer support was helpful and resolved my issue quickly.', rating: 8 },
  { id: '4', text: 'Not happy with the packaging, it was damaged.', rating: 4 },
  { id: '5', text: 'Excellent experience, will definitely recommend!', rating: 10 },
]);
