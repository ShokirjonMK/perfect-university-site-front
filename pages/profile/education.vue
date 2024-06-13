<template>
  <div>
    <h2 class="profile__title">{{ $t('education_skills') }}</h2>
    <MainCard class="mt-24">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="profile__item">
            <div class="profile__item_title">
              {{ $t('level_of_education') }}
            </div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.higher_education_name || '-' }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('education_name') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.education_name || '-' }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('certificates') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.certificate || '-' }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <!--          <div class="profile__item">-->
          <!--            <div class="profile__item_title">{{ $t('graduated_country') }}</div>-->
          <!--            <div class="profile__item_value">{{ user?.admission_fields }}</div>-->
          <!--          </div>-->
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('year_ending') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.graduation_year || '-' }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('language') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.language_qualifications || '-' }}
            </div>
          </div>
        </div>
      </div>
    </MainCard>
    <div class="mt-4 profile-card-wrapper d-flex justify-content-end">
      <NuxtLink :to="localePath('/profile/edit')">
        <button>
          {{ $t('edit_profile') }}
          <i class="fas fa-edit"></i>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MainCard from '~/components/Profile/MainCard.vue'
export default {
  components: {
    MainCard,
  },
  middleware: 'auth',
  computed: {
    ...mapState({
      user: (state) => state.auth.user,
    }),
  },
}
</script>
