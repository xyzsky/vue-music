<template>
  <div class="singer">
    <index-list :data1="singerList"></index-list>
  </div>
</template>

<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/index-list/index-list'
export default {
  name: 'singer',
  components: {
    IndexList
  },
  data() {
    return {
      singerList: []
    }
  },
  async created() {
    const result = await getSingerList()
    this.singerList = result.singers
  }
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  overflow: scroll;
}
</style>
