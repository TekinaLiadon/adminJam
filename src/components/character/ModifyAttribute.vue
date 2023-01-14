<template>
  <section>
    <o-field label="Имя персонажа">
      <o-input v-model="attributeInfo.entityName"></o-input>
    </o-field>
    <o-field label="Название атрибута">
      <o-select placeholder="Название атрибута" v-model="attributeInfo.attributeName">
        <option value="STRENGTH">Сила</option>
      </o-select>
    </o-field>
    <o-field label="Модификатор">
      <o-select placeholder="Название атрибута" v-model="attributeInfo.mod">
        <option value="+1">+1</option>
        <option value="-1">-1</option>
      </o-select>
    </o-field>
    <o-button @click="$emit('modifyAttribute', attributeInfo)">Изменить</o-button>
  </section>
</template>

<script>
export default {
  name: "ModifyAttribute",
  data() {
    return {
      attributeInfo: {
        entityName: '',
        attributeName: 'STRENGTH',
        mod: '+1',
      }
    }
  }
}
</script>

<style scoped>

</style>