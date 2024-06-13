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
      <div class="container structure-styles">
        <div class="row">
          <div class="col-12 col-md-9 pd">
            <h1 class="slug-title">
              {{
                scienceCenterSlug.title ||
                'O‘zbekiston Yoshlarni rivojlantirish ilmiy-tadqiqot markazi'
              }}
            </h1>
            <div class="slug-info-section">
              <div class="d-flex align-items-center flex-wrap">
                <div class="">
                  <div class="d-flex align-items-center justify-content-left">
                    <h4 class="slug-bold-text">{{ $t('reception_time') }}</h4>
                    :
                    <p class="slug-thin-text ml-2">
                      {{ scienceCenterSlug.reception_time || '09:00 - 18:00' }}
                    </p>
                  </div>

                  <div class="d-flex align-items-center justify-content-left">
                    <h4 class="slug-bold-text">{{ $t('phone') }}</h4>
                    :
                    <a
                      :href="`tel:${scienceCenterSlug.phone_number}`"
                      class="slug-thin-text ml-2"
                    >
                      {{
                        scienceCenterSlug.phone_number || '(0 371) 232-64-21'
                      }}
                    </a>
                  </div>
                </div>

                <div class="ml-60" style="">
                  <div class="d-flex align-items-center justify-content-left">
                    <h4 class="slug-bold-text">{{ $t('fax') }}</h4>
                    :
                    <a
                      :href="`tel:${scienceCenterSlug.fax}`"
                      class="slug-thin-text ml-2"
                    >
                      {{ scienceCenterSlug.fax || '(0 371) 232-64-21' }}
                    </a>
                  </div>

                  <div class="d-flex align-items-center justify-content-left">
                    <h4 class="slug-bold-text">{{ $t('email') }}</h4>
                    :
                    <a
                      :href="`mailto:${scienceCenterSlug.email}`"
                      class="slug-thin-text ml-2"
                    >
                      {{ scienceCenterSlug.email || 'rector@tsue.uz' }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="slug-content"
              v-html="scienceCenterSlug.description"
            ></div>
            <hashTags />
          </div>

          <div class="col-12 col-md-3" style="padding: 0">
            <div>
              <sideCourses />
              <sidebarAppeal />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BreadCrumbs from '~/components/Breadcrumb'
import sideScience from '~/components/sideScience'

export default {
  data() {
    return {
      scienceCenterSlug: [],
    }
  },

  computed: {
    ...mapState({
      links() {
        return [
          {
            title: this.$t('research_centers'),
            link: `/${this.$i18n.locale}/science/scientific-centers`,
          },
          {
            title: this.scienceCenterSlug?.title,
            link: `${this.$i18n.locale}/scientific-centers/${this.scienceCenterSlug?.slug}`,
          },
        ]
      },
    }),
  },

  components: {
    sideScience,
    BreadCrumbs,
  },

  async fetch() {
    await this.$store
      .dispatch('report/fetchScienceCenterSlug', {
        page: this.page,
        slug: this.$route.params.slug,
      })
      .then((res) => {
        this.scienceCenterSlug = res.data
      })
      .catch((err) => console.log(err, 'wee'))
  },
}
</script>

<style lang="scss" scoped>
h1 {
  border: none;
}

@media screen and (min-width: 992px) {
  .ml-60 {
    margin-left: 60px !important;
  }
}
.slug-title {
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 40px;
  color: #374453;
}
.slug-info-section {
  background: #f9fafc;
  border: 1px solid rgba(159, 171, 185, 0.2);
  border-radius: 4px;
  padding: 20px;
}

.slug-bold-text {
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 23px;
  color: #44494f;
}

.slug-thin-text {
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 22px;
  color: #44494f;
  margin-left: 12px;
}

.slug-content {
  padding: 8px 14px;
  margin-top: 24px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.188rem;
  line-height: 144.5%;
  color: #44494f;
}
</style>
