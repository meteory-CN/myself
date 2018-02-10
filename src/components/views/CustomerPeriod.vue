<template>
<div class="period">
  <mu-tabs :value="activeTab" @change="handleTabChange">
    <mu-tab value="tab1" title="用户ID查询" />
    <mu-tab value="tab2" title="昵称查询" />
    <mu-tab value="tab3" @active="handleActive1" title="手机号查询" />
  </mu-tabs>
  <div v-if="activeTab === 'tab1'">
    <PeriodByiUserId></PeriodByiUserId>
  </div>
  <div v-if="activeTab === 'tab2'">
    <h2>Tab Two</h2>
    <p>
      这是第二个 tab
    </p>
  </div>
  <div v-if="activeTab === 'tab3'">
    <h2>Tab Three</h2>
    <p>
      这是第三个 tab
    </p>
  </div>
</div>
</template>
<script>
import PeriodByiUserId from  '@/components/components/PeriodByiUserId.vue'

export default {
  components: {
    PeriodByiUserId
  },
  data: function() {
    return {
      activeTab: 'tab1',
    }
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val
    },
    handleActive() {
      window.alert('tab active')
    }
  }
}
</script>
<style scoped>
</style>
