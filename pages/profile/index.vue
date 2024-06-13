<template>
  <div>
    <h2 class="profile__title">{{ $t('personal_info') }}</h2>
    <MainCard class="mt-24">
      <div>
        <AvatarUploader />
      </div>
      <div class="row mt-24">
        <div class="col-md-6 col-12">
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('first_name') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.first_name }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('gender') }}</div>
            <div class="profile__item_value">
              {{
                user?.admission_fields?.gender === 1 ? $t('male') : $t('woman')
              }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('date_of_birth') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.date_of_birth }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('phone_number') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.phone_number }}
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('last_name') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.last_name }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('nationality') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.nationality }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('citizen') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.citizenship }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('email_address') }}</div>
            <div class="profile__item_value">
              {{ user?.email }}
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
import AvatarUploader from '../../components/Profile/AvatarUploader.vue'
import MainCard from '~/components/Profile/MainCard.vue'
export default {
  components: {
    AvatarUploader,
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
