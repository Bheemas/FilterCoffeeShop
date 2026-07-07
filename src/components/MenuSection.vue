<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { DrinkItem } from '../data/coffeeShop'

const props = withDefaults(
  defineProps<{
    categories: string[]
    drinksByCategory: Record<string, DrinkItem[]>
    loading?: boolean
    error?: string | null
  }>(),
  {
    loading: false,
    error: null
  }
)

const emit = defineEmits<{
  retry: []
}>()

const activeCategory = ref('')

watch(
  () => props.categories,
  (nextCategories) => {
    const firstCategory = nextCategories[0] ?? ''
    if (!activeCategory.value || !nextCategories.includes(activeCategory.value)) {
      activeCategory.value = firstCategory
    }
  },
  { immediate: true }
)

const visibleDrinks = computed(() => props.drinksByCategory[activeCategory.value] ?? [])
</script>

<template>
  <section id="menu" class="panel menu-panel">
    <div class="section-head">
      <h1>Menu</h1>
      <p>Pick your coffee mood and discover handcrafted favorites.</p>
    </div>

    <div class="menu-layout">
      <aside class="category-list" aria-label="Drink categories">
        <h2>The Latest</h2>
        <button
          v-for="category in props.categories"
          :key="category"
          type="button"
          class="category-button"
          :disabled="props.loading"
          :class="{ active: activeCategory === category }"
          @click="activeCategory = category"
        >
          {{ category }}
        </button>
      </aside>

      <div v-if="props.loading" class="status-card">Loading coffee menu from API...</div>

      <div v-else-if="props.error" class="status-card error">
        <p>{{ props.error }}</p>
        <button type="button" class="retry-button" @click="emit('retry')">Retry API</button>
      </div>

      <div v-else class="drinks-grid">
        <article v-for="drink in visibleDrinks" :key="drink.name" class="drink-card">
          <div>
            <h3>{{ drink.name }}</h3>
            <p>{{ drink.note }}</p>
          </div>
          <strong>{{ drink.price }}</strong>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.panel {
  background: linear-gradient(180deg, #fffdf8, #fef5ea);
  border-radius: 18px;
  border: 1px solid var(--coffee-panel-border);
  padding: 1.5rem;
}

.section-head h1 {
  font-family: 'Fraunces', serif;
  letter-spacing: 0.01em;
}

.section-head p {
  color: var(--coffee-copy-soft);
  margin-top: 0.35rem;
}

.menu-layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 1.25rem;
  margin-top: 1.2rem;
}

.category-list {
  border-right: 1px solid #e6d3be;
  padding-right: 1rem;
  display: grid;
  gap: 0.35rem;
  align-content: start;
}

.category-list h2 {
  margin-bottom: 0.35rem;
  font-size: 1.35rem;
  font-family: 'Fraunces', serif;
}

.category-button {
  text-align: left;
  border: none;
  border-radius: 10px;
  background: transparent;
  color: #5d4334;
  font-size: 1rem;
  padding: 0.5rem 0.6rem;
  cursor: pointer;
}

.category-button.active {
  background: linear-gradient(135deg, #6d4027, #4a291a);
  color: #ffffff;
}

.category-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.status-card {
  border: 1px dashed #d4b79b;
  border-radius: 14px;
  padding: 1rem;
  background: rgba(255, 247, 237, 0.85);
  color: #704b36;
}

.status-card.error {
  border-style: solid;
}

.retry-button {
  margin-top: 0.8rem;
  border: 1px solid #5b3623;
  border-radius: 999px;
  background: #fffaf4;
  color: #4b2d1f;
  padding: 0.45rem 0.85rem;
  font-weight: 600;
  cursor: pointer;
}

.drinks-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.95rem;
}

.drink-card {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  border: 1px solid #e3cdb4;
  border-radius: 14px;
  padding: 0.95rem;
  background: #fffaf3;
  box-shadow: 0 8px 18px rgba(96, 62, 41, 0.08);
}

.drink-card h3 {
  font-size: 1.05rem;
  margin-bottom: 0.2rem;
}

.drink-card p {
  color: #725442;
  font-size: 0.9rem;
}

.drink-card strong {
  color: #6f3f24;
  font-size: 1rem;
}

@media (max-width: 1024px) {
  .menu-layout {
    grid-template-columns: 1fr;
  }

  .category-list {
    border-right: 0;
    border-bottom: 1px solid #e6d3be;
    padding-bottom: 0.8rem;
    padding-right: 0;
  }

  .drinks-grid {
    grid-template-columns: 1fr;
  }
}
</style>