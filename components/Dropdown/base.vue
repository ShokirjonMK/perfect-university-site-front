<template>
  <div
    class="relative"
    data-dropdown="0"
    tabindex="0"
    @focusout="handleFocusOut"
  >
    <div :class="headClass" @click="toggleShow">
      <slot name="head"></slot>
    </div>
    <Transition name="dropdown" mode="out-in">
      <div v-if="showBody" :class="[bodyClass]" data-dropdown-body>
        <slot name="body" />
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  props: {
    headClass: String,
    bodyClass: String,
    show: {
      type: Boolean,
      default: undefined,
    },
    withTrigger: Boolean,
  },
  emits: ['toggle'],
  setup(props, { emit }) {
    const showBody = ref(props.show ?? false)

    function toggleShow() {
      if (!props.withTrigger) {
        if (props.show === undefined) {
          showBody.value = !showBody.value
        } else {
          emit('toggle', !props.show)
        }
      }
    }

    function handleFocusOut(e) {
      if (e?.target?.dataset?.dropdown) {
        if (props.show === undefined) {
          showBody.value = false
        } else {
          emit('toggle', false)
        }
      }
    }

    watch(
      () => props.show,
      (v) => {
        showBody.value = v
      }
    )

    return {
      showBody,
      toggleShow,
      handleFocusOut,
    }
  },
}
</script>

<style scoped>
@keyframes dropdown {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.dropdown-enter-active {
  animation: dropdown 0.3s ease-out;
}
.dropdown-leave-active {
  animation: dropdown 0.3s ease-in reverse;
}
</style>
