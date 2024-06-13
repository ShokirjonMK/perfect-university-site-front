<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else class="main_misioner container pb-5">
      <bread-crumbs :type="'press'" :links="links" />
      <div class="row pt-4">
        <div class="col-12 col-lg-9">
          <h1>{{ $t('our_mission_commitment_values') }}</h1>
          <div class="mission-row">
            <div style="gap: 12px" class="d-flex align-items-center">
              <img
                src="@/static/image/about-tsue/mission-logo.svg"
                alt="svg"
                class="rounded-0"
              />
              <h2 class="mission__card-title">{{ missionMain[0]?.title }}</h2>
            </div>
            <div style="margin-bottom: 60px" class="d-flex">
              <img
                src="/image/misson-img.svg"
                alt="Mission image"
                class="mission__card-img rounded-0"
              />
              <div class="main_mision">
                <p class="mission__card-description">
                  {{ missionMain[0]?.description }}
                  <span class="line" />
                </p>
              </div>
            </div>
            <div
              v-for="(item, idx) in mission"
              :key="idx"
              :class="['mission__info', idx > 0 ? 'mission__info2' : '']"
              class="mission__info"
            >
              <div class="mission__info-card">
                <div style="gap: 12px" class="d-flex align-items-center">
                  <img
                    src="@/static/image/about-tsue/mission-logo.svg"
                    alt="svg"
                    class="rounded-0"
                  />
                  <h2 class="mission__card-title">{{ item.title }}</h2>
                </div>
                <p class="mission__info-title">
                  {{ item.description }}
                </p>
                <ul style="gap: 12px; display: flex; flex-direction: column">
                  <li v-for="(card, indx) in item.mission_item" :key="indx">
                    <img
                      src="@/static/image/about-tsue/zero-mission.svg"
                      alt="Zero mission"
                    />
                    {{ card?.title }}
                  </li>
                </ul>
              </div>

              <div class="mission__info-img">
                <img :src="item?.image" alt="image" />
              </div>
            </div>
          </div>
        </div>
        <AboutTsueSidebar class="col-12 col-lg-3 p-3" />
      </div>
    </div>
  </div>
</template>
<script>
import BreadCrumbs from '@/components/Breadcrumb.vue'

export default {
  name: 'OurMission',
  components: { BreadCrumbs },
  async fetch() {
    const data = await this.$axios.$get('/our-mission/?is_main=false', {
      headers: {
        'Accept-Language':
          this.$i18n.locale === 'sr' ? 'uz' : this.$i18n.locale,
      },
    })
    this.mission = data.results
    const mission = await this.$axios.$get('/our-mission/?is_main=true', {
      headers: {
        'Accept-Language':
          this.$i18n.locale === 'sr' ? 'uz' : this.$i18n.locale,
      },
    })
    this.missionMain = mission.results
  },
  data() {
    return {
      mission: [],
      missionMain: [],
    }
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('our_mission_commitment_values'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
  },
}
</script>

<style scoped lang="scss">
.mission-row {
  border-radius: 12px;
  background: #fff;
  padding: 24px;
  margin-top: 24px;
  position: relative;
}
.mission__card-description {
  position: relative;
  color: #1d2024;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  border-radius: 12px;
  background: #f6f8fb;
  backdrop-filter: blur(22px);
  padding: 28px 20px 28px 156px;
  z-index: 0;
  margin-left: -147px;
  margin-top: 24px;
}
.mission__card-title {
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  margin-top: 0;
}
.mission__card-img {
  position: relative;
  z-index: 1;
}

.mission__info {
  margin-bottom: 30px;
  display: flex;
  gap: 24px;
  justify-content: space-between;

  .mission__info-card {
    width: 50%;
  }
  li {
    color: #1d2024;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .mission__info-title {
    color: #768194;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-top: 12px;
    margin-bottom: 20px;
  }
  .mission__info-img img {
    width: 355px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    background: linear-gradient(68deg, #144176 0%, #2678d9 100%);
  }
}
.mission__info2 {
  flex-direction: row-reverse;
  margin-bottom: 0 !important;
}
@media screen and (max-width: 991px) {
  .mission__card-img {
    display: none;
  }
  .main_mision {
    margin-top: 0;
  }
  .mission__card-description {
    padding: 28px;
    margin-left: 0;
  }
  .main_misioner {
    margin-top: 20px;
  }
}
@media screen and (max-width: 768px) {
  .mission__info {
    flex-direction: column;
  }
  .mission__info .mission__info-card {
    width: 100%;
  }
}
.line {
  width: 48px;
  height: 4px;
  background: #1c89c1;
  display: block;
  margin-top: 24px;
}
</style>
