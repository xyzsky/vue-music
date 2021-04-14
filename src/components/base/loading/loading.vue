<template>
  <div class="loading">
    <img class="img" src="./loading.gif" />
    <p class="text">{{ title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    setTitle(title) {
      this.title = title
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 45%;
  left: 40%;
  .text {
    padding-left: 24px;
    font-size: $font-size-medium;
    color: $color-theme;
  }
  .img {
    transform: scale(0.5);
  }
}
</style>
