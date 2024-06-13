<template>
  <div>
    <h2 class="profile__title">{{ $t('contact_info') }}</h2>
    <MainCard class="mt-24">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('email') }}</div>
            <div class="profile__item_value">{{ user?.email }}</div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('telegram') }}</div>
            <div class="profile__item_value">-</div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('phone_number') }}</div>
            <div class="profile__item_value">
              {{ user?.admission_fields?.phone_number }}
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item_title">{{ $t('whatsapp') }}</div>
            <div class="profile__item_value">-</div>
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
