<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import GiftCardsSection from './components/GiftCardsSection.vue'
import MenuSection from './components/MenuSection.vue'
import RewardsSection from './components/RewardsSection.vue'
import { useCoffeeShopApi } from './composables/useCoffeeShopApi'

const { loading, error, categories, drinksByCategory, rewardStats, giftCards, retry } = useCoffeeShopApi()
</script>

<template>
  <div class="page-shell">
    <AppHeader />

    <main class="content-wrap">
      <MenuSection
        :categories="categories"
        :drinks-by-category="drinksByCategory"
        :loading="loading"
        :error="error"
        @retry="retry"
      />
      <RewardsSection :reward-stats="rewardStats" />
      <GiftCardsSection :gift-cards="giftCards" />
    </main>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Manrope:wght@400;500;600;700&display=swap');

:global(body) {
  --coffee-ink: #3b271d;
  --coffee-copy-soft: #6d4f3f;
  --coffee-accent: #7a4a2f;
  --coffee-accent-soft: #8a5b3b;
  --coffee-surface-strong: #fff8ef;
  --coffee-surface-soft: #f6e8d8;
  --coffee-border: #ead5bd;
  --coffee-panel-border: #e9d8c2;
  background:
    radial-gradient(circle at 8% -15%, #f4dfbf 0%, transparent 36%),
    radial-gradient(circle at 85% 0%, #e8c9a8 0%, transparent 44%),
    linear-gradient(180deg, #f8ede1 0%, #f3e3d1 100%);
  color: #2b1a12;
  font-family: 'Manrope', sans-serif;
}

.page-shell {
  max-width: 1200px;
  margin: 1.75rem auto;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 34px 60px rgba(65, 39, 26, 0.2);
  border: 1px solid rgba(67, 44, 30, 0.18);
  background: #fff9f2;
  position: relative;
}

.page-shell::before {
  content: '';
  position: absolute;
  inset: -40% -10% auto;
  height: 280px;
  pointer-events: none;
  background: radial-gradient(circle, rgba(114, 67, 43, 0.11) 0%, rgba(114, 67, 43, 0) 62%);
}

.content-wrap {
  display: grid;
  gap: 1.25rem;
  padding: 1.25rem;
}

@media (max-width: 1024px) {
}

@media (max-width: 680px) {
  .page-shell {
    margin: 0;
    border-radius: 0;
  }
}
</style>
