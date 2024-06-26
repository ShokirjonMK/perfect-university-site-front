<template>
  <div>
    <div v-if="$fetchState.pending" class="fetch-pending">
      <loader />
    </div>
    <div v-else-if="$fetchState.error" class="fetch-error">
      Что то пошло не так =(
    </div>
    <div v-else>
      <bread-crumbs :type="'press'" :links="links" />
      <h1 class="container">{{ fetchSliderSlug.title }}</h1>
      <div class="container pb-5">
        <div>
          <div>
            <div class="graduatorsCards">
              <div class="alumni__row d-md-flex">
                <div class="alumni__img">
                  <img
                    class="img-graduators"
                    :src="fetchSliderSlug?.image"
                    :alt="fetchSliderSlug?.title"
                  />
                </div>
                <div class="w-100 p-0">
                  <div class="content">
                    <div class="st-floor">
                      <h6>{{ fetchSliderSlug.name }}</h6>
                      <span>{{ fetchSliderSlug.position }}</span>
                      <div class="line"></div>
                    </div>
                    <div class="alumni__link">
                      <ul class="ps-2">
                        <li
                          v-if="fetchSliderSlug?.reception_days"
                          class="item-description work__time"
                        >
                          {{ fetchSliderSlug?.reception_days }}
                        </li>
                        <li
                          v-if="fetchSliderSlug?.phone_number"
                          class="item-description time__year"
                        >
                          {{ fetchSliderSlug?.phone_number }}
                        </li>
                        <li
                          v-if="fetchSliderSlug?.email"
                          class="item-description item__year"
                        >
                          {{ fetchSliderSlug?.email }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <b-tabs class="tabs">
              <b-tab
                v-if="fetchSliderSlug?.bio"
                :title="$t('biography')"
                active
              >
                <div class="single-content">
                  <div
                    class="d-flex align-md-items-center"
                    style="gap: 12px; margin-bottom: 20px"
                  >
                    <img
                      src="../../../static/image/about-tsue/mission-logo.svg"
                      alt="Mission"
                    />
                    <h5>
                      {{ $t('biography') }}
                    </h5>
                  </div>

                  <div v-html="fetchSliderSlug.bio"></div>
                </div>
              </b-tab>
              <b-tab v-if="fetchSliderSlug?.task" :title="$t('functions')">
                <div class="single-content">
                  <div
                    class="d-flex align-md-items-center"
                    style="gap: 12px; margin-bottom: 20px"
                  >
                    <img
                      src="../../../static/image/about-tsue/mission-logo.svg"
                      alt="Mission"
                    />
                    <h5>
                      {{ $t('functions') }}
                    </h5>
                  </div>

                  <div v-html="fetchSliderSlug?.task"></div>
                </div>
              </b-tab>
              <b-tab
                v-if="fetchSliderSlug?.gallery.length"
                :title="$t('photo_gallery')"
              >
                <div class="single-content">
                  <div
                    class="d-flex align-md-items-center mb-3"
                    style="gap: 12px; margin-bottom: 20px"
                  >
                    <img
                      src="../../../static/image/about-tsue/mission-logo.svg"
                      alt="Mission"
                    />
                    <h5>
                      {{ $t('photo_gallery') }}
                    </h5>
                  </div>
                  <div class="gallery">
                    <img
                      v-for="(image, imageIndex) in fetchSliderSlug?.gallery"
                      :key="imageIndex"
                      :src="image.image"
                      alt="Image"
                      @click="index = imageIndex"
                    />
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
    <CoolLightBox :items="lightBoxPhoto" :index="index" @close="index = null">
    </CoolLightBox>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CoolLightBox from 'vue-cool-lightbox'
import sideNav from '@/components/sideNav.vue'
import BreadCrumbs from '@/components/Breadcrumb.vue'

export default {
  components: {
    sideNav,
    BreadCrumbs,
    CoolLightBox,
  },
  data() {
    return {
      pics: 12,
      index: null,
    }
  },

  computed: {
    links() {
      return [
        {
          title: this.$t('team'),
          link: `/${this.$i18n.locale}/team`,
        },
        {
          title: this.fetchSliderSlug?.title,
          link: `${this.$i18n.locale}`,
        },
      ]
    },

    ...mapState({
      fetchSliderSlug: (state) => state.team.teamSliderSlug,
      lightBoxPhoto: (state) =>
        state.team?.teamSliderSlug?.gallery?.map((el) => el?.image),
    }),
  },

  async fetch() {
    await this.$store
      .dispatch('team/fetchSliderSlug', this.$route.params.slug)
      .catch(() => {})
  },
}
</script>

<style lang="scss" scoped>
.graduatorsCards {
  padding: 0 24px 24px 24px;
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: #fff;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    padding: 0 16px 16px 16px;
  }

  h6 {
    color: #1d2024;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 128%;
  }

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #768194;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    margin-top: 8px;
  }

  .line {
    margin-top: 20px;
  }
}
.alumni__link {
  display: flex;
  padding: 15px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 10px;
  background: #f6f8fb;
}
.img-graduators {
  max-width: 176px;
  max-height: 275px;
  width: 176px;
  height: 275px;
  object-fit: cover;
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
  }
}
.alumni__img {
  border-radius: 12px;
  border: 1px solid #e8edf2;
  background: #e8edf2;
  margin-top: -28px;
}
h1 {
  margin-top: 24px;
  margin-bottom: 52px;
}
.alumni__row {
  gap: 28px;
}
.content {
  margin-top: 28px;
}
.single-content {
  border-radius: 12px;
  background: white;
  padding: 24px;

  @media screen and (max-width: 768px) {
    padding: 12px;
  }
}
h5 {
  color: #144176;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
}
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 14px;
  grid-row-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  & img {
    width: 100%;
    height: 136px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 8px;
  }
}

.item-description {
  margin-bottom: 12px !important;
  position: relative;
  padding-left: 28px;
}
.time__year::before {
  position: absolute;
  left: 0;
  top: 0;
  content: url('@/static/icons/item-year.svg');
}
.item__year::before {
  position: absolute;
  left: 0;
  top: 0;
  content: url('@/static/icons/time-year.svg');
}
.work__time::before {
  position: absolute;
  left: 0;
  top: 0;
  content: url('@/static/icons/work-time.svg');
}
</style>
