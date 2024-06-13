<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ul class="bread-crumbs">
            <li>
              <nuxt-link :to="`/${$i18n.locale}`">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M11.6667 17.4995V12.4995H8.33333V17.4995M15.8333 8.14796V13.4995C15.8333 14.8997 15.8333 15.5997 15.5608 16.1345C15.3212 16.6049 14.9387 16.9874 14.4683 17.2271C13.9335 17.4995 13.2335 17.4995 11.8333 17.4995H8.16667C6.76654 17.4995 6.06647 17.4995 5.53169 17.2271C5.06129 16.9874 4.67883 16.6049 4.43915 16.1345C4.16667 15.5997 4.16667 14.8997 4.16667 13.4995V8.14741M17.5 9.99954L12.9723 4.96951C11.9426 3.82554 11.4277 3.25356 10.8214 3.04239C10.2888 2.85692 9.70916 2.85696 9.17661 3.04251C8.57029 3.25377 8.05551 3.82583 7.02595 4.96995L2.5 9.99954"
                      stroke="#5A626C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </i>
                {{ $t('home') }}
              </nuxt-link>
            </li>
            <template v-if="links && links.length">
              <li v-for="(item, index) in links" :key="index">
                <span v-if="index + 1 === links.length">{{ item.title }}</span>
                <nuxt-link v-else :to="localePath(item.link || '/')">{{
                  item.title
                }}</nuxt-link>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: ['type', 'links'],
}
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .breadcrumbs {
    display: none;
  }
}
</style>
