<template>
  <section>
    <o-field label="Имя персонажа">
      <o-input v-model="skillInfo.entityName"></o-input>
    </o-field>
    <o-field label="Название скилла">
      <o-select placeholder="Название скилла" v-model="skillInfo.skillName">
        <option value="ELECTRODYNAMICS">Электродинамика</option>
      </o-select>
    </o-field>
    <o-field label="Модификатор">
      <o-select placeholder="Название атрибута" v-model="skillInfo.mod">
        <option value="+1">+1</option>
        <option value="-1">-1</option>
      </o-select>
    </o-field>
    <o-button @click="$emit('modifySkill', skillInfo)">Изменить</o-button>
  </section>
</template>

<script>
export default {
  name: "ModifySkill",
  data() {
    return {
      skillInfo: {
        entityName: '',
        skillName: 'ELECTRODYNAMICS',
        mod: '+1',
      }
    }
  },
}
</script>

<style scoped>

</style>