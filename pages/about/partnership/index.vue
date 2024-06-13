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
      <div class="container">
        <div class="row mt-4">
          <div class="col-12 col-lg-9">
            <div class="col-12" style="padding-left: 0">
              <h1>{{ $t('cooperation_status') }}</h1>
            </div>
            <template v-if="cooperation && cooperation.length">
              <div class="partnership__card">
                <div v-for="item in cooperation" :key="item.id" class="">
                  <a :href="item.link" target="_blank" class="card">
                    <div
                      class="card-heading mb-3 d-flex align-items-start justify-content-between"
                    >
                      <img :src="item.image_url" alt="Icon status" />
                    </div>
                    <div class="card-content">
                      <h5 class="">
                        {{ item.title }}
                      </h5>
                      <p v-html="item.content"></p>
                    </div>
                  </a>
                </div>
              </div>
            </template>
          </div>
          <AboutTsueSidebar class="col-12 col-lg-3 p-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb.vue'
export default {
  components: { BreadCrumbs },
  async fetch() {
    await this.$store.dispatch('cooperation/fetchCooperation').catch(() => {})
  },
  data() {
    return {}
  },
  computed: {
    links() {
      return [
        {
          title: this.$t('partnership'),
          link: `${this.$i18n.locale}`,
        },
      ]
    },
    ...mapState({
      cooperation: (state) => state.cooperation.cooperation.results,
    }),
  },
}
</script>

<style scoped lang="scss">
h1 {
  color: var(--main-dark);
  font-size: 2rem;
  font-weight: 700;
  line-height: 42px;
  margin-bottom: 24px;
}
.card {
  border-radius: 12px;
  border: 1px solid #e9edf2;
  background: white;
  box-shadow: 0 9px 24px 0 rgba(20, 65, 118, 0.04);
  padding: 16px 16px 37px 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: var(--blue);
    cursor: pointer;
  }
}

.card-content {
  h5 {
    margin-bottom: 12px;
    color: var(--main-dark);
    font-weight: 600;
    font-size: 1rem;
  }

  p {
    color: #5a626c;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 16.32px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 0;
  }
}

img {
  border-radius: 6px;
  border: 1px solid #e8edf2;
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  object-fit: cover;
}
.card-content__subtitle {
  margin-bottom: 0;
  color: #5a626c;
  font-size: 12px;
  font-weight: 400;
  line-height: 136%;
}
.partnership__card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
