export const categories = [
  'Trending',
  'Hot Filter Coffee',
  'Cold Coffee',
  'Frappuccino',
  'Tea'
] as const

export type MenuCategory = (typeof categories)[number]

export type DrinkItem = {
  name: string
  note: string
  price: string
}

export type RewardStat = {
  value: string
  label: string
}

export type GiftCardItem = {
  title: string
  description: string
  cta: string
}

export const drinksByCategory: Record<MenuCategory, DrinkItem[]> = {
  Trending: [
    { name: 'Brown Sugar Shaken Espresso', note: 'Oatmilk, espresso and cinnamon', price: '$6.75' },
    { name: 'Caramel Ribbon Crunch', note: 'Dark caramel sauce and whipped cream', price: '$7.25' },
    { name: 'Toffee Nut Latte', note: 'Toffee sweetness with velvety steamed milk', price: '$6.25' }
  ],
  'Hot Filter Coffee': [
    { name: 'Degree Filter Coffee', note: 'Slow-brewed decoction with hot frothy milk', price: '$4.95' },
    { name: 'Cumbum Estate Latte', note: 'Single-origin beans with a smooth milk finish', price: '$5.25' },
    { name: 'Brass Tumbler Cappuccino', note: 'Classic foam with a bold roasted aroma', price: '$5.50' }
  ],
  'Cold Coffee': [
    { name: 'Iced Caffe Mocha', note: 'Chocolate, espresso and milk over ice', price: '$6.15' },
    { name: 'Vanilla Sweet Cream Cold Brew', note: 'Slow-steeped coffee with sweet cream', price: '$6.35' },
    { name: 'Iced White Chocolate Mocha', note: 'White chocolate and espresso blend', price: '$6.65' }
  ],
  Frappuccino: [
    { name: 'Java Chip Frappuccino', note: 'Coffee, mocha sauce and chips', price: '$7.15' },
    { name: 'Mocha Cookie Crumble', note: 'Whipped cream and cookie topping', price: '$7.45' },
    { name: 'Matcha Creme Frappuccino', note: 'Smooth green tea flavor', price: '$6.95' }
  ],
  Tea: [
    { name: 'Chai Tea Latte', note: 'Black tea infused with warm spices', price: '$5.55' },
    { name: 'Honey Citrus Mint Tea', note: 'Jade citrus mint and peach tranquility', price: '$5.85' },
    { name: 'Iced Passion Tango Tea', note: 'Hibiscus, lemongrass and apple', price: '$4.95' }
  ]
}

export const rewardStats: RewardStat[] = [
  { value: '25', label: 'Stars per handcrafted drink' },
  { value: '100+', label: 'Stores with mobile order pickup' },
  { value: '24/7', label: 'App access for rewards and offers' }
]

export const giftCards: GiftCardItem[] = [
  {
    title: 'Celebration',
    description: 'Perfect for birthdays, milestones, and surprise thank-yous.',
    cta: 'Send card'
  },
  {
    title: 'Classic',
    description: 'Timeless design for everyday coffee lovers and teams.',
    cta: 'Shop now'
  },
  {
    title: 'Digital Instant',
    description: 'Schedule delivery instantly by email or text in just seconds.',
    cta: 'Choose amount'
  }
]