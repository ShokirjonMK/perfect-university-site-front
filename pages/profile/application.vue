<template>
  <div>
    <h2 class="profile__title">{{ $t('my_applications') }}</h2>
    <MainCard>
      <div>
        <ApplicationCard />
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
import MainCard from '../../components/Profile/MainCard.vue'
import ApplicationCard from '../../components/Apply/ApplicationCard.vue'
export default {
  components: {
    ApplicationCard,
    MainCard,
  },
  middleware: 'auth',
}
</script>
