# vue-music

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Day 1

对于sass, 全局引入 变量 和 mixin, 用 loader 编译

知识点：
  - router-link 实现tab效果
  - router-view
  - scss mixin


## Day2

  对于跨域请求，可以自行增加一层代理，通过自己的后端服务器访问其他后端服务。
  - better-scroll slider scroll
  - option API 和 composition API 使用場合
  - composition API ref onMounted 等使用
  - ObserveDOM

### Day3

  - 图片懒加载 v-lazy
  - vue3 自定义指令 and 自定义指令增加参数
  - v-for 愚蠢问题，把参数写到的v-for标签外面。。。
  - 头部定位问题，计算长度时，图片没有加载出来，导致计算值太小 index-list

### Day4
  - position 实现通讯录效果，使用 absolute 不要使用 fixed index-list.vue
  - composition api 主要用于将一些不同的逻辑功能做拆分