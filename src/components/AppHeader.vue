<template>
  <header class="top-nav">
    <a class="brand" href="#menu">
      <span class="brand-mark">KK</span>
      <span class="brand-copy">
        <span class="brand-kicker">Filter Coffee</span>
        <span class="brand-text">Kumbakonam Filter Coffee Shop</span>
      </span>
    </a>

    <nav class="primary-links" aria-label="Primary">
      <a href="#menu">Menu</a>
      <a href="#rewards">Rewards</a>
      <a href="#gift-cards">Gift Cards</a>
    </nav>

    <div class="top-actions">
      <button class="ghost-button" type="button">Find a store</button>
      <button class="outline-button" type="button">Sign in</button>
      <button class="solid-button" type="button">Join now</button>
    </div>
  </header>
</template>

<style scoped>
.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--coffee-border);
  background: linear-gradient(180deg, var(--coffee-surface-strong), var(--coffee-surface-soft));
  position: relative;
  z-index: 2;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  text-decoration: none;
  color: var(--coffee-ink);
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff6ee;
  background: linear-gradient(140deg, #6e412a, #3f2417);
  box-shadow: inset 0 -4px 8px rgba(0, 0, 0, 0.18);
}

.brand-copy {
  display: grid;
  gap: 0.05rem;
}

.brand-kicker {
  display: block;
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--coffee-accent-soft);
}

.brand-text {
  display: block;
  font-family: 'Fraunces', serif;
  font-size: 1.15rem;
  font-weight: 700;
}

.primary-links {
  display: flex;
  gap: 1.6rem;
}

.primary-links a {
  position: relative;
  text-decoration: none;
  color: var(--coffee-ink);
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 0.86rem;
}

.primary-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.45rem;
  width: 100%;
  height: 2px;
  transform: scaleX(0);
  transform-origin: left;
  background: var(--coffee-accent);
  transition: transform 200ms ease;
}

.primary-links a:hover::after {
  transform: scaleX(1);
}

.top-actions {
  display: flex;
  gap: 0.6rem;
}

button {
  cursor: pointer;
  border-radius: 999px;
  padding: 0.55rem 1rem;
  font-weight: 600;
  transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
}

button:hover {
  transform: translateY(-1px);
}

.ghost-button {
  border: none;
  background: transparent;
  color: #4b2e20;
}

.outline-button {
  border: 1px solid #5b3623;
  background: #fffaf4;
  color: #4b2d1f;
}

.solid-button {
  border: none;
  background: linear-gradient(135deg, #4c2d1e, #2d180f);
  color: #fff8f2;
  box-shadow: 0 8px 16px rgba(55, 30, 19, 0.28);
}

@media (max-width: 1024px) {
  .top-nav {
    flex-wrap: wrap;
    justify-content: center;
  }
}

@media (max-width: 680px) {
  .primary-links {
    width: 100%;
    justify-content: center;
  }

  .top-actions {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>