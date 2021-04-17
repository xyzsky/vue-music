<template>
  <scroll class="index-list" :probe-type="3" @scroll="onScroll" ref="scrollRef">
    <ul ref="groupRef">
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
    <div class="fixedTitle" :style="fixedStyle">{{ fixedTitle }}</div>
    <div
      class="shortcut"
      @touchstart.stop.prevent="onShortcutTouchStart"
      @touchmove.stop.prevent = "onShortcutTouchMove"
      @touchend.stop.prevent
    >
      <ul>
        <li
          v-for="(item, index) in shortcutList"
          :key="item"
          :data-index="index"
          class="item"
          :class="{ 'current': currentIndex === index }"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </scroll>
</template>

<script>
import scroll from '@/components/base/scroll/scroll'
import useFixed from './use-fixed'
import useShortcut from './use-shortcut'
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
  },
  setup(props) {
    const {
      groupRef,
      onScroll,
      fixedTitle,
      fixedStyle,
      currentIndex
    } = useFixed(props)
    const { shortcutList, onShortcutTouchStart, scrollRef, onShortcutTouchMove } = useShortcut(
      props,
      groupRef
    )
    return {
      groupRef,
      onScroll,
      fixedTitle,
      fixedStyle,
      shortcutList,
      onShortcutTouchStart,
      scrollRef,
      currentIndex,
      onShortcutTouchMove
    }
  }
}
</script>

<style lang="scss" scoped>
.index-list {
  height: 100%;
  .group {
    width: 100%;
    display: flex;
    flex-direction: column;
    h2 {
      line-height: 40px;
      background-color: $color-highlight-background;
      text-align: center;
      color: $color-text-l;
    }
    .item {
      flex: 1;
      display: flex;
      padding: 10px;
      padding-left: 20px;
      align-items: center;
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
      .name {
        color: $color-text-l;
        margin-left: 20px;
        font-size: $font-size-medium;
      }
    }
  }
  .fixedTitle {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    line-height: 40px;
    background-color: $color-highlight-background;
    text-align: center;
    color: $color-text-l;
  }
  .shortcut {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 80px;
    right: 5px;
    .item {
      flex: 1;
      padding-bottom: 5px;
      color: $color-text-l;
      font-size: $font-size-small-s;
    }
    .current {
      color: $color-theme;
    }
  }
}
</style>
