<template>
  <section>
    <o-field label="Имя персонажа">
      <o-input v-model="abilityInfo.entityName"></o-input>
    </o-field>
    <o-field label="Название абилки">
      <o-input v-model="abilityInfo.abilityName"></o-input>
    </o-field>
    <o-button @click="$emit('addAbility', abilityInfo)">Изменить</o-button>
  </section>
</template>

<script>
export default {
  name: "AddAbility",
  data() {
    return {
      abilityInfo: {
        entityName: '',
        abilityName: 'electric_charge',
      }
    }
  }
}
</script>

<style scoped>

</style>