<template>
  <div :id="screenId">
    <div :id="containerId" class="container-content" />
  </div>
</template>

<script>
import g6Conig from '@/mixins/g6Conig'
import { randomCode } from '@/utils/index.js'
export default {
  name: 'Demo',
  mixins: [g6Conig],
  data() {
    return {}
  },
  mounted() {
    this.containerId = 'container-' + randomCode(5)
    this.screenId = 'screen-' + randomCode(5)
    this.$nextTick(() => {
      this.initGraph()
    })
  }
}
</script>
