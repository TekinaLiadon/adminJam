<template>
  <section>
    <o-tabs v-model="activeTab">
      <o-tab-item :value="0" label="Добавить абилку">
        <AddAbility/>
      </o-tab-item>

      <o-tab-item :value="1" label="Изменить атрибут">
        <ModifyAttribute />
      </o-tab-item>

      <o-tab-item :value="2"  label="Изменить скилл">
        <ModifySkill />
      </o-tab-item>
    </o-tabs>
  </section>
</template>

<script>
import AddAbility from "@/components/character/AddAbility";
import ModifyAttribute from "@/components/character/ModifyAttribute";
import ModifySkill from "../components/character/ModifySkill";
export default {
  name: "Character",
  components: {ModifySkill, ModifyAttribute, AddAbility},
  data() {
    return {
      activeTab: 0,
    }
  }
}
</script>

<style scoped>

</style>