import type { DrinkItem, GiftCardItem, RewardStat } from '../data/coffeeShop'

export type MenuResponse = {
  categories: string[]
  drinksByCategory: Record<string, DrinkItem[]>
}

export type RewardsResponse = {
  rewardStats: RewardStat[]
}

export type GiftCardsResponse = {
  giftCards: GiftCardItem[]
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? ''

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      Accept: 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`)
  }

  return (await response.json()) as T
}

export function fetchMenuData() {
  return getJson<MenuResponse>('/api/menu')
}

export function fetchRewardsData() {
  return getJson<RewardsResponse>('/api/rewards')
}

export function fetchGiftCardsData() {
  return getJson<GiftCardsResponse>('/api/gift-cards')
}