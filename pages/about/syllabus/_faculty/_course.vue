<template>
  <div>
    <Breadcrumb :links="routeSegmentsWithTitles" />
    <div
      class="container mt-4 syllabus-wrapper no-gutters mx-auto page-wrapper reversal"
    >
      <div class="syllabus-wrapper-main">
        <div>
          <h1 class="course-title">{{ courseDetail.title }}</h1>
          <NuxtChild
            :data="courseDetail"
            :subject-name="courseDetail.title"
            :teacher-info="courseDetail.teacher"
            :department="courseDetail.syllabus"
            :text-section="courseDetail.course_syllabus_text_sections"
          />
        </div>
      </div>
      <div class="syllabus-wrapper-sidebar">
        <SyllabusSidebar class="w-100" />
        <!--        <aside class="sidebar-news d-flex flex-lg-column ml-lg-4">-->
        <!--          <ul class="sidebar d-flex flex-column">-->
        <!--            <li-->
        <!--              v-for="item of sidebarLinks"-->
        <!--              :key="item.id"-->
        <!--              class="sidebar-list-item overflow-hidden"-->
        <!--              :class="{-->
        <!--                'sidebar-list-item__active': activeLinkIndex === item.id - 1,-->
        <!--              }"-->
        <!--              @click="makeActive(item.id - 1, $event)"-->
        <!--            >-->
        <!--              <NuxtLink-->
        <!--                v-if="!item.children"-->
        <!--                class="sidebar-link position-relative w-100 h-100 d-flex align-items-center"-->
        <!--                :to="localePath(item.path)"-->
        <!--              >-->
        <!--                <div-->
        <!--                  class="left-badge left-badge__small left-badge__green"-->
        <!--                ></div>-->
        <!--                {{ $t(item.link) }}-->
        <!--              </NuxtLink>-->

        <!--              <ul-->
        <!--                v-if="item.children"-->
        <!--                class="cursor-pointer hover-effect sidebar__child d-flex flex-column h-0"-->
        <!--                :class="{ 'active-item': activeLinkIndex === item.id - 1 }"-->
        <!--              >-->
        <!--                <li class="sidebar-list-item parent-item">-->
        <!--                  <span-->
        <!--                    class="sidebar-link__child d-flex align-items-center position-relative"-->
        <!--                  >-->
        <!--                    <div-->
        <!--                      class="left-badge left-badge__small left-badge__green"-->
        <!--                    ></div>-->
        <!--                    {{ $t(item.link) }}-->
        <!--                  </span>-->
        <!--                </li>-->
        <!--                <li-->
        <!--                  v-for="childLink of item.children"-->
        <!--                  :key="childLink.id"-->
        <!--                  class="mt-2 pl-3"-->
        <!--                >-->
        <!--                  <NuxtLink-->
        <!--                    class="child-list-item"-->
        <!--                    :to="localePath(childLink.path)"-->
        <!--                  >-->
        <!--                    {{ $t(childLink.link) }}-->
        <!--                  </NuxtLink>-->
        <!--                </li>-->
        <!--              </ul>-->
        <!--            </li>-->
        <!--          </ul>-->
        <!--        </aside>-->
      </div>
    </div>
  </div>
</template>

<script>
import { sidebarData } from 'assets/data'

export default {
  async fetch() {
    const data = await this.$axios.$get(
      `/syllabus/course_syllabus/SyllabusDetail/${this.$route.params.course}`
    )
    this.courseDetail = data
  },
  data() {
    return {
      activeLinkIndex: 10,
      courseDetail: {},
    }
  },
  computed: {
    routeSegmentsWithTitles() {
      return [
        {
          title: `${this.$t('programs')}`,
          link: `/about/syllabus`,
        },
        {
          title: `${this.$route.params.faculty}`,
          link: `/about/syllabus/${this.$route.params.faculty}`,
        },
        {
          title: `${this.courseDetail.title}`,
          link: `/about/syllabus/${this.courseDetail.title}`,
        },
      ]
    },
    sidebarLinks() {
      const base = `/about/syllabus/${this.$route.params.faculty}/${this.$route.params.course}`
      return sidebarData(base)
    },
  },
  methods: {
    makeActive(idx, e) {
      if (idx === this.activeLinkIndex && e.target.tagName === 'SPAN') {
        this.activeLinkIndex = 0
        return
      }

      this.activeLinkIndex = idx
    },
  },
}
</script>

<style lang="scss" scoped>
.course-title {
  color: #1d2024;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;

  @media (max-width: 992px) {
    margin-top: 24px;
  }
}

.left-badge__small {
  height: 24px;
  width: 3px;
}

.left-badge__green {
  background: #e0e4ea;
}

.sidebar-link:hover {
  background-color: #e9edf2;
}

.sidebar-link:hover .left-badge__green {
  background-color: #c1c8d2;
}

.hover-effect:hover .left-badge__green {
  background-color: #c1c8d2;
}

.rotate-180 {
  transform: rotate(180deg);
}

.hover-effect:hover .parent-item {
  background-color: #e9edf2;
}

.hover-effect:hover .flag-icon path {
  fill: #c1c8d2;
  stroke: #c1c8d2;
}

.sidebar-link:hover path {
  fill: #c1c8d2;
  stroke: #c1c8d2;
}

.sidebar {
  gap: 8px;
  padding: 8px 8px 8px 8px;
  border-radius: 12px;
  background: #fff;

  @media (max-width: 992px) {
    width: 100%;
  }
}

.sidebar-news {
  @media (min-width: 992px) {
    max-width: 278px;
    width: 100%;
    margin-left: 24px;
  }
}

.sidebar-list-item-top {
  width: calc(100% - 16px);
  margin: 0 auto;
  top: 0;
  transform: translateY(-50%);
  padding: 13px 0 13px 16px;
  color: var(--main-white, #fff);
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  background-color: #144176;
  border-radius: 8px;
}

.h-0 {
  transition: all 0.3s ease;
  max-height: 46px;
}

.reversal {
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
}

.active-item {
  max-height: 1000px;
}

.sidebar-link {
  color: #1d2024;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
  border-radius: 8px;
  padding: 11px;
}

.sidebar-list-item {
  border-radius: 8px;
  transition: all 0.3s ease;
  max-height: 46px;
}

.sidebar__child:has(a.nuxt-link-exact-active) .flag-icon path {
  fill: #2678d9;
  stroke: #2678d9;
}

.sidebar__child:has(a.nuxt-link-exact-active) .arrow-icon path {
  stroke: #2678d9;
}

.sidebar__child:has(a.nuxt-link-exact-active) .left-badge__green {
  background-color: #2678d9;
}

.sidebar__child:has(a.nuxt-link-exact-active) .arrow-icon {
  transform: rotate(180deg);
}

.sidebar-list-item__active {
  //height: auto;
  max-height: 1000px;
}

.sidebar-link__child {
  padding: 11px;
  color: #1d2024;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
}

.sidebar__child {
  border: 1px solid transparent;
  background-color: #f6f8fb;
  border-radius: 8px;
  padding-bottom: 20px;
}

.active {
  border: 1px solid #2678d9;
}

.wrapper {
  gap: 24px;
}

.child-list-item {
  color: #1d2024;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 125%;
}
.sidebar__child:has(a.nuxt-link-exact-active) {
  fill: red;
}

.sidebar-link.nuxt-link-exact-active {
  font-weight: 600;
  background: #eef5fc;
}

.sidebar-link.nuxt-link-exact-active .left-badge__green {
  background-color: #2678d9;
}

.sidebar-link__child.nuxt-link-exact-active {
  font-weight: 700;
}

.sidebar-link.nuxt-link-exact-active .flag-icon path,
.sidebar-link__child.nuxt-link-active .flag-icon path {
  fill: #2678d9;
  stroke: #2678d9;
}

.sidebar-link__child.nuxt-link-active .arrow-icon {
  transform: rotate(180deg);
}

.sidebar-link__child.nuxt-link-active .arrow-icon path {
  stroke: #2678d9;
}

.child-list-item.nuxt-link-exact-active {
  font-weight: 700;
  color: #2678d9;
}

.syllabus-wrapper {
  gap: 24px;
  grid-template-columns: repeat(12, 1fr);
  display: grid;

  @media (max-width: 992px) {
    grid-template-columns: repeat(1, 1fr);
  }

  &-main {
    grid-column: span 9 / span 9;

    @media (max-width: 992px) {
      grid-column: span 2 / span 2;
    }
  }

  &-sidebar {
    grid-column: span 3 / span 3;

    @media (max-width: 992px) {
      grid-column: span 1 / span 1;
      order: -1;
    }
  }
}
</style>
