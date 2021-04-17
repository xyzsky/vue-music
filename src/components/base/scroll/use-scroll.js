import BScroll from '@better-scroll/core'
import { onMounted, onUnmounted, ref, onActivated, onDeactivated } from 'vue'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)
export default function useScroll(wrapperRef, options, emit) {
  const scroll = ref(null)
  onMounted(() => {
    scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options
    })
    if (options.probeType > 0) {
      scroll.value.on('scroll', pos => {
        emit('scroll', pos)
      })
    }
  })
  onUnmounted(() => {
    scroll.value.destroy()
  })
  onActivated(() => {
    scroll.value.enable()
    scroll.value.refresh()
  })

  onDeactivated(() => {
    scroll.value.disable()
  })
  return scroll
}
