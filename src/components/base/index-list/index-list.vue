<template>
    <scroll class="index-list">
      <ul>
        <li v-for="group in data1" :key="group.title" class="group">
          <h2>{{ group.title }}</h2>
          <ul>
            <li v-for="item in group.list" :key="item.id" class="item">
              <img class="avatar" v-lazy="item.pic" />
              <span class="name">{{ item.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </scroll>
</template>

<script>
import scroll from '@/components/base/scroll/scroll'
export default {
  name: 'index-list',
  components: {
    scroll
  },
  props: {
    data1: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .index-list {
    height: 100%;
  }
</style>
