<template>
  <div class="container">
    <Breadcrumb :type="'press'" :links="routes" />
    <div class="row profile">
      <div class="col-12 col-lg-9 mb-5">
        <NuxtChild />
      </div>
      <div class="col-lg-3 col-12">
        <SideBarMenu />
        <button class="button button__logout" @click="logout">
          {{ $t('logout') }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M12.75 11.9998L15.75 8.99976M15.75 8.99976L12.75 5.99976M15.75 8.99976H6.75M9.75 15.7498H4.65059C3.81051 15.7498 3.39047 15.7498 3.0696 15.5863C2.78736 15.4425 2.55789 15.213 2.41408 14.9307C2.25059 14.6099 2.25059 14.1898 2.25059 13.3498V4.64976C2.25059 3.80968 2.25059 3.38964 2.41408 3.06877C2.55789 2.78653 2.78736 2.55706 3.0696 2.41325C3.39047 2.24976 3.81051 2.24976 4.65059 2.24976L9.75 2.24976"
              stroke="#D6273E"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <!--        <el-dialog-->
        <!--          :title="$t('logout')"-->
        <!--          :visible.sync="show"-->
        <!--          width="100%"-->
        <!--          :show-close="false"-->
        <!--          custom-class="dialog__logout"-->
        <!--        >-->
        <!--          <p>Are you sure you want to log out of your profile?</p>-->
        <!--          <button class="button button__logout" @click="logout">-->
        <!--            {{ $t('logout') }}-->
        <!--            <svg-->
        <!--              xmlns="http://www.w3.org/2000/svg"-->
        <!--              width="18"-->
        <!--              height="18"-->
        <!--              viewBox="0 0 18 18"-->
        <!--              fill="none"-->
        <!--            >-->
        <!--              <path-->
        <!--                d="M12.75 11.9998L15.75 8.99976M15.75 8.99976L12.75 5.99976M15.75 8.99976H6.75M9.75 15.7498H4.65059C3.81051 15.7498 3.39047 15.7498 3.0696 15.5863C2.78736 15.4425 2.55789 15.213 2.41408 14.9307C2.25059 14.6099 2.25059 14.1898 2.25059 13.3498V4.64976C2.25059 3.80968 2.25059 3.38964 2.41408 3.06877C2.55789 2.78653 2.78736 2.55706 3.0696 2.41325C3.39047 2.24976 3.81051 2.24976 4.65059 2.24976L9.75 2.24976"-->
        <!--                stroke="#D6273E"-->
        <!--                stroke-width="1.6"-->
        <!--                stroke-linecap="round"-->
        <!--                stroke-linejoin="round"-->
        <!--              />-->
        <!--            </svg>-->
        <!--          </button>-->
        <!--        </el-dialog>-->
      </div>
    </div>
  </div>
</template>
<script>
import Breadcrumb from '../components/Breadcrumb.vue'
import SideBarMenu from '../components/Profile/SideBarMenu.vue'
export default {
  components: {
    Breadcrumb,
    SideBarMenu,
  },
  data() {
    return {
      show: false,
    }
  },
  middleware: 'auth',
  computed: {
    routes() {
      const route = this.$route.path.split('/')
      return [
        {
          title: this.$t('profile'),
          link: '/profile',
        },
        {
          title: route.at(-1)
            ? this.$t(route.at(-1) + '_info')
            : this.$t('personal_info'),
          link: this.$route.path,
        },
      ]
    },
  },
  methods: {
    logout() {
      // this.show = true
      window.localStorage.removeItem('access')
      window.localStorage.removeItem('refresh')
      this.$router.push('/login')
    },
  },
}
</script>

<style>
.button__logout {
  border-radius: 8px;
  background: rgba(240, 55, 43, 0.15);
  width: 100%;
  color: #d6273e;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 18.2px */
  padding: 12px 0;
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  transition: all 0.3s linear;

  &:hover {
    background: rgba(240, 55, 43, 0.1);
  }

  &:hover svg path {
    transform: translate(2px, 0);
  }
}

.el-dialog {
  padding: 0;
  border-radius: 8px;
}

.el-dialog__title {
  color: #1d2024;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%; /* 36.96px */
}

.el-dialog {
  color: #768194;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 15.6px */
}
</style>
