<script setup lang="ts">
import type { RewardStat } from '../data/coffeeShop'

defineProps<{
  rewardStats: RewardStat[]
}>()
</script>

<template>
  <section id="rewards" class="panel rewards-panel">
    <div>
      <p class="label">Rewards</p>
      <h2>Earn stars on every sip</h2>
      <p>
        Members collect stars for purchases, unlock free customizations, and receive birthday
        treats.
      </p>
    </div>

    <div class="rewards-stats">
      <div v-for="stat in rewardStats" :key="stat.label">
        <span>{{ stat.value }}</span>
        <p>{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel {
  border-radius: 18px;
  padding: 1.5rem;
}

.rewards-panel {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 1.5rem;
  align-items: center;
  background:
    linear-gradient(120deg, rgba(59, 33, 21, 0.95), rgba(96, 58, 38, 0.93)),
    repeating-linear-gradient(45deg, rgba(255, 255, 255, 0.02) 0 8px, rgba(0, 0, 0, 0.03) 8px 16px);
  color: #fff5ea;
}

.label {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
}

.rewards-panel h2 {
  font-family: 'Fraunces', serif;
  letter-spacing: 0.01em;
}

.rewards-panel p {
  color: rgba(255, 240, 227, 0.88);
}

.rewards-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
}

.rewards-stats div {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 0.8rem;
  border: 1px solid rgba(255, 230, 206, 0.2);
}

.rewards-stats span {
  display: block;
  font-family: 'Fraunces', serif;
  font-size: 1.4rem;
}

.rewards-stats p {
  margin-top: 0.2rem;
  font-size: 0.82rem;
}

@media (max-width: 1024px) {
  .rewards-panel,
  .rewards-stats {
    grid-template-columns: 1fr;
  }
}
</style>