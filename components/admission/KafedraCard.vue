<template>
  <section>
    <div class="syllabus-row">
      <NuxtLink
        v-for="(item, index) of departmentList"
        :key="index"
        :to="`/admission/kafedra/${item?.slug}`"
        class="syllabus-card"
      >
        <div class="syllabus-card-list">
          <img
            class="mx-auto d-block syllabus-card-img"
            :src="item?.image_url || '/image/default-icon.svg'"
            alt="default icon"
          />
        </div>
        <h2 class="syllabus-card-title text-center">
          {{ $t(item?.title) }}
        </h2>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Card',

  props: ['departmentList'],
}
</script>

<style lang="scss" scoped>
.syllabus-card {
  background-image: url(/syllabus/bg.svg);
  background-repeat: no-repeat;
  background-position: top right;
  border-radius: 12px;
  border: 1px solid var(--grey-grey-1, #e9edf2);
  background-color: #fff;
  box-shadow: 0px 9px 24px 0px rgba(20, 65, 118, 0.04);
  padding: 10px 20px;

  &:hover {
    border: 1px solid #1c89c1;
    box-shadow: 0px 9px 28px 0px rgba(20, 65, 118, 0.12);
  }

  @media (min-width: 992px) {
    padding: 24px 36px 36px 36px;
  }

  &-list {
    border-radius: 100px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: var(--Main-Blue, #1c89c1);
    box-shadow: 0px 6px 64px 0px rgba(20, 65, 118, 0.16);
    width: 100px !important;
    height: 100px !important;
    margin: 0 auto;
  }

  &-title {
    margin-top: 24px;
    overflow: hidden;
    color: #144176;
    text-align: center;
    text-overflow: ellipsis;

    font-style: normal;
    font-weight: 700;
    line-height: 132%;
    transition: 0.3s color ease;
    font-size: 1.25rem;
    @media (min-width: 992px) {
      font-size: 1.5rem;
    }
  }

  &:hover &-title {
    color: #1c89c1;
  }

  &-img {
    width: 80px;
    height: 80px;
    padding: 20px !important;
    @media (min-width: 992px) {
      width: 100px;
      height: 100px;
    }
  }
}

.syllabus-title {
  color: #1d2024;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 42.24px */

  @media (max-width: 992px) {
    font-size: 1.25rem;
    margin-top: 24px;
  }
}
.syllabus-row {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 992px) {
    margin-top: 10px;
  }
}
</style>
