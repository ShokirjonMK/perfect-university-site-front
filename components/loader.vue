<template>
  <div class="main_loader"><div class="dots" /></div>
</template>

<style scoped>
.main_loader {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}
.dots {
  width: 13.4px;
  height: 13.4px;
  background: #003b81;
  color: #003b81;
  border-radius: 50%;
  box-shadow: 22.4px 0, -22.4px 0;
  animation: dots-u8fzftmd 1s infinite linear alternate;
}

@keyframes dots-u8fzftmd {
  0% {
    box-shadow: 22.4px 0, -22.4px 0;
  }

  33% {
    box-shadow: 22.4px 0, -22.4px 0 rgba(0, 59, 129, 0.13);
    background: rgba(0, 59, 129, 0.13);
  }

  66% {
    box-shadow: 22.4px 0 rgba(0, 59, 129, 0.13), -22.4px 0;
    background: rgba(0, 59, 129, 0.13);
  }
}
</style>
<script setup></script>
