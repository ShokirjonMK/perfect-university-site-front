<template>
  <div>
    <template v-if="recommendedOnes && recommendedOnes.length">
      <div
        v-for="index in recommendedOnes"
        :key="index"
        class="col-12 col-md-3"
      >
        <NuxtLink to="/">
          <div class="cards-news mt-4 mb-5">
            <img src="@/static/image/news.png" alt="News immage" />
            <div class="text-info">
              <h6>
                TDIU’da O‘zbekiston - Avstriya fakulteti ochilishining tantanali
                marosimi
              </h6>
              <div class="d-flex justify-content-between align-items-center">
                <span class="status"> Xalqaro </span>
                <span class="date"> 4 Fevral, 2021 yil </span>
              </div>
              <div class="line"></div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Recommended',
}
</script>

<style lang="scss" scoped>
.container {
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 1.5625rem;
    line-height: 130%;
    color: #44494f;
    margin-top: 32px;
    padding-bottom: 16px;
    border-bottom: 1px solid #e7e9ed;
  }

  .justify-content-between {
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 0.875rem;
      line-height: 16px;
      color: #9fabb9;
      margin-top: 16px;
      margin-bottom: 20px;
    }
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 1.125rem;
    line-height: 144.5%;
    color: #44494f;
  }

  .cards-news {
    background: #ffffff;
    border: 1px solid rgba(159, 171, 185, 0.2);
    box-shadow: 0px 4px 8px rgba(159, 171, 185, 0.08);
    border-radius: 4px;
    min-height: 287px;

    .text-info {
      padding: 12px 12px 0px 12px;

      h6 {
        font-style: normal;
        font-weight: bold;
        font-size: 0.875rem;
        line-height: 21px;
        color: #44494f;
      }

      span {
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 20px;
        text-align: right;
        color: #9fabb9;
      }

      .status {
        font-style: normal;
        font-weight: normal;
        font-size: 0.875rem;
        line-height: 20px;
        color: #44494f;
      }

      .line {
        width: 15%;
        height: 2px;
        background: #6db0ff;
        transition: 0.3s all;
        margin-top: 8px;
      }
    }

    &:hover {
      .line {
        width: 100%;
      }
    }
  }
}
</style>
