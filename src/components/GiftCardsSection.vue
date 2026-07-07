<script setup lang="ts">
import type { GiftCardItem } from '../data/coffeeShop'

defineProps<{
  giftCards: GiftCardItem[]
}>()
</script>

<template>
  <section id="gift-cards" class="panel gift-panel">
    <div class="section-head">
      <p class="label">Gift Cards</p>
      <h2>Share coffee moments beautifully</h2>
    </div>

    <div class="gift-grid">
      <article v-for="giftCard in giftCards" :key="giftCard.title" class="gift-card">
        <h3>{{ giftCard.title }}</h3>
        <p>{{ giftCard.description }}</p>
        <button type="button" class="outline-button">{{ giftCard.cta }}</button>
      </article>
    </div>
  </section>
</template>

<style scoped>
.panel {
  background:
    radial-gradient(circle at 92% 5%, rgba(139, 84, 49, 0.18) 0%, transparent 28%),
    linear-gradient(180deg, #fff8ef, #f2dfca);
  border-radius: 18px;
  border: 1px solid var(--coffee-panel-border);
  padding: 1.5rem;
}

.section-head h2 {
  font-family: 'Fraunces', serif;
  letter-spacing: 0.01em;
}

.label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.gift-grid {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.95rem;
}

.gift-card {
  border: 1px solid #d8bda1;
  border-radius: 14px;
  padding: 1rem;
  background: rgba(255, 251, 245, 0.9);
}

.gift-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
}

.gift-card p {
  color: #664c3c;
  margin-bottom: 0.8rem;
}

.outline-button {
  border: 1px solid #5b3623;
  border-radius: 999px;
  background: #fffaf4;
  color: #4b2d1f;
  padding: 0.55rem 1rem;
  font-weight: 600;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .gift-grid {
    grid-template-columns: 1fr;
  }
}
</style>