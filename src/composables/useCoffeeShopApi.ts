import { onMounted, ref } from 'vue'
import {
  fetchGiftCardsData,
  fetchMenuData,
  fetchRewardsData,
  type GiftCardsResponse,
  type MenuResponse,
  type RewardsResponse
} from '../api/coffeeShopApi'
import {
  categories as fallbackCategories,
  drinksByCategory as fallbackDrinksByCategory,
  giftCards as fallbackGiftCards,
  rewardStats as fallbackRewardStats,
  type DrinkItem,
  type GiftCardItem,
  type RewardStat
} from '../data/coffeeShop'

type ApiState = {
  categories: string[]
  drinksByCategory: Record<string, DrinkItem[]>
  rewardStats: RewardStat[]
  giftCards: GiftCardItem[]
}

const fallbackState: ApiState = {
  categories: [...fallbackCategories],
  drinksByCategory: { ...fallbackDrinksByCategory },
  rewardStats: [...fallbackRewardStats],
  giftCards: [...fallbackGiftCards]
}

function isValidMenuPayload(payload: MenuResponse) {
  return Array.isArray(payload.categories) && payload.categories.length > 0 && !!payload.drinksByCategory
}

function isValidRewardsPayload(payload: RewardsResponse) {
  return Array.isArray(payload.rewardStats)
}

function isValidGiftCardsPayload(payload: GiftCardsResponse) {
  return Array.isArray(payload.giftCards)
}

export function useCoffeeShopApi() {
  const loading = ref(true)
  const error = ref<string | null>(null)

  const categories = ref<string[]>(fallbackState.categories)
  const drinksByCategory = ref<Record<string, DrinkItem[]>>(fallbackState.drinksByCategory)
  const rewardStats = ref<RewardStat[]>(fallbackState.rewardStats)
  const giftCards = ref<GiftCardItem[]>(fallbackState.giftCards)

  async function load() {
    loading.value = true
    error.value = null

    try {
      const [menu, rewards, giftCardsPayload] = await Promise.all([
        fetchMenuData(),
        fetchRewardsData(),
        fetchGiftCardsData()
      ])

      if (!isValidMenuPayload(menu) || !isValidRewardsPayload(rewards) || !isValidGiftCardsPayload(giftCardsPayload)) {
        throw new Error('Invalid API payload')
      }

      categories.value = menu.categories
      drinksByCategory.value = menu.drinksByCategory
      rewardStats.value = rewards.rewardStats
      giftCards.value = giftCardsPayload.giftCards
    } catch {
      error.value = 'API unavailable. Showing local coffee menu data.'
      categories.value = fallbackState.categories
      drinksByCategory.value = fallbackState.drinksByCategory
      rewardStats.value = fallbackState.rewardStats
      giftCards.value = fallbackState.giftCards
    } finally {
      loading.value = false
    }
  }

  onMounted(load)

  return {
    loading,
    error,
    categories,
    drinksByCategory,
    rewardStats,
    giftCards,
    retry: load
  }
}