<template>
  <div class="core-content">
  <section class="sidebar">
    <o-menu>
      <o-menu-list label="Menu">
        <o-menu-item icon="info-circle" label="Главная" @click="$router.push('Home')"></o-menu-item>
        <o-menu-item icon="cog" :active="isActive" expanded>
          <template #label="props">
            Команды
            <o-icon class="is-pulled-right" :icon="props.expanded ? 'chevron-up' : 'chevron-down'"></o-icon>
          </template>
          <o-menu-item icon="user" label="Персонаж" @click="$router.push('Character')"></o-menu-item>
          <o-menu-item icon="user" label="На будущее"></o-menu-item>
        </o-menu-item>
      </o-menu-list>
    </o-menu>
  </section>
  <slot></slot>
  </div>
</template>

<script>

export default {
  name: "Layout",
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style scoped lang="scss">
.core-content {
  display: flex;
  grid-gap: 20px;
  margin-top: 20px;
}
.sidebar {
  width: 20%;
}
</style>