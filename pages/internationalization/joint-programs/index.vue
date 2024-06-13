<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <h1>{{ $t('joint_programs') }}</h1>
      <div class="joint_main">
        <a
          v-for="(item, idx) in programms"
          :key="idx"
          :href="item.link"
          target="_blank"
          class="joint__row"
        >
          <div class="joint__logo">
            <img :src="item?.image_url" alt="logo" />
          </div>
          <p>{{ item?.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'OurMission',
  async fetch() {
    const data = await this.$axios.$get('/extra-programs')

    this.programms = data
  },
  data() {
    return {
      programms: [],
    }
  },
}
</script>

<style scoped lang="scss">
.joint_main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.joint__row {
  margin-top: 24px;
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  padding: 24px 36px 36px 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('@/static/image/joint-bg.svg');
  background-repeat: no-repeat;
  background-position: right;
  &:hover {
    border: 1px solid #2678d9;
  }
  & p {
    color: #144176;
    text-align: center;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 132%;
    margin-top: 24px;
  }
}
.joint__logo {
  padding: 14px;
  justify-content: center;
  align-items: center;
  border-radius: 16.129px;
  border: 0.806px solid #e8edf2;
  background: #fff;
  box-shadow: 0 6px 64px 0 rgba(20, 65, 118, 0.2);

  & img {
    width: 72px;
    height: 72px;
  }
}
</style>
