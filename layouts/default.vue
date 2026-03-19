<template>
  <div class="min-h-screen flex flex-col bg-site-bg text-site-text">
    <AppHeader />
    <main class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
