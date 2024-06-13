<template>
  <div>
    <div class="container mt-4 row mx-auto no-gutters reversal">
      <div class="col-lg-9">
        <h1 v-if="syllabusDetail[0]" class="mb-4">
          {{ syllabusDetail[0].department_syllabus.title }}
        </h1>

        <div class="row">
          <div
            v-for="item of syllabusDetail"
            :key="item.id"
            class="col-lg-6 p-12"
          >
            <NuxtLink
              :to="$route.path + '/' + item.id"
              class="faculty d-block position-relative"
            >
              <div class="faculty-badge"></div>
              <h3 class="faculty-title">{{ item.title }}</h3>
              <small class="faculty-subtitle"
                >Digital economy and information technologies</small
              >
              <div class="d-flex flex-column faculty-info">
                <ul class="faculty-list">
                  <li>Direction</li>
                  <li>{{ item.direction.title }}</li>
                </ul>
                <ul class="faculty-list">
                  <li>Syllabus language</li>
                  <li>{{ item.language === 1 ? $t('english') : '' }}</li>
                </ul>
                <ul class="faculty-list">
                  <li>Syllabus course</li>
                  <li>{{ item.year }}</li>
                </ul>
              </div>
              <div class="line w-100"></div>
              <div class="faculty-contact d-flex align-items-center mt-3">
                <div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 15.75C3.75 12.8505 6.10051 10.5 9 10.5C11.8995 10.5 14.25 12.8505 14.25 15.75M12 5.25C12 6.90685 10.6569 8.25 9 8.25C7.34315 8.25 6 6.90685 6 5.25C6 3.59315 7.34315 2.25 9 2.25C10.6569 2.25 12 3.59315 12 5.25Z"
                      stroke="#768194"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span class="faculty-contact-name">Sh.Rajabov</span>
                </div>
                <div v-if="item.teacher.email" class="ml-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.06901 14.0865L3.43221 13.3737L3.06901 14.0865ZM2.41349 13.431L3.1263 13.0678L2.41349 13.431ZM15.5865 13.431L14.8737 13.0678L15.5865 13.431ZM14.931 14.0865L14.5678 13.3737L14.931 14.0865ZM14.931 3.91349L14.5678 4.6263L14.931 3.91349ZM15.5865 4.56901L14.8737 4.93221L15.5865 4.56901ZM3.06901 3.91349L3.43221 4.6263L3.06901 3.91349ZM2.41349 4.56901L3.1263 4.93221L2.41349 4.56901ZM16.1385 6.69933C16.5247 6.48476 16.6639 5.99771 16.4493 5.61149C16.2348 5.22526 15.7477 5.0861 15.3615 5.30067L16.1385 6.69933ZM13.0794 7.48366L13.4679 8.18299L13.0794 7.48366ZM4.9206 7.48367L5.30911 6.78434H5.30911L4.9206 7.48367ZM2.63851 5.30067C2.25229 5.0861 1.76524 5.22526 1.55067 5.61149C1.3361 5.99771 1.47526 6.48476 1.86149 6.69933L2.63851 5.30067ZM10.0576 8.88658L9.89646 8.10298H9.89646L10.0576 8.88658ZM7.94238 8.88658L8.10354 8.10298H8.10354L7.94238 8.88658ZM4.65 4.55H13.35V2.95H4.65V4.55ZM14.95 6.15V11.85H16.55V6.15H14.95ZM13.35 13.45H4.65V15.05H13.35V13.45ZM3.05 11.85V6.15H1.45V11.85H3.05ZM4.65 13.45C4.21676 13.45 3.93994 13.4494 3.72995 13.4322C3.52929 13.4158 3.46107 13.3884 3.43221 13.3737L2.70582 14.7993C2.99783 14.9481 3.30006 15.0024 3.59966 15.0269C3.88992 15.0506 4.24316 15.05 4.65 15.05V13.45ZM1.45 11.85C1.45 12.2568 1.44938 12.6101 1.47309 12.9003C1.49757 13.1999 1.5519 13.5022 1.70069 13.7942L3.1263 13.0678C3.11159 13.0389 3.08417 12.9707 3.06778 12.7701C3.05062 12.5601 3.05 12.2832 3.05 11.85H1.45ZM3.43221 13.3737C3.30049 13.3066 3.19341 13.1995 3.1263 13.0678L1.70069 13.7942C1.92119 14.227 2.27305 14.5788 2.70582 14.7993L3.43221 13.3737ZM14.95 11.85C14.95 12.2832 14.9494 12.5601 14.9322 12.7701C14.9158 12.9707 14.8884 13.0389 14.8737 13.0678L16.2993 13.7942C16.4481 13.5022 16.5024 13.1999 16.5269 12.9003C16.5506 12.6101 16.55 12.2568 16.55 11.85H14.95ZM13.35 15.05C13.7568 15.05 14.1101 15.0506 14.4003 15.0269C14.6999 15.0024 15.0022 14.9481 15.2942 14.7993L14.5678 13.3737C14.5389 13.3884 14.4707 13.4158 14.2701 13.4322C14.0601 13.4494 13.7832 13.45 13.35 13.45V15.05ZM14.8737 13.0678C14.8066 13.1995 14.6995 13.3066 14.5678 13.3737L15.2942 14.7993C15.727 14.5788 16.0788 14.2269 16.2993 13.7942L14.8737 13.0678ZM13.35 4.55C13.7832 4.55 14.0601 4.55062 14.2701 4.56778C14.4707 4.58417 14.5389 4.61159 14.5678 4.6263L15.2942 3.20069C15.0022 3.0519 14.6999 2.99757 14.4003 2.97309C14.1101 2.94938 13.7568 2.95 13.35 2.95V4.55ZM16.55 6.15C16.55 5.74316 16.5506 5.38992 16.5269 5.09966C16.5024 4.80006 16.4481 4.49783 16.2993 4.20582L14.8737 4.93221C14.8884 4.96107 14.9158 5.02929 14.9322 5.22995C14.9494 5.43994 14.95 5.71676 14.95 6.15H16.55ZM14.5678 4.6263C14.6995 4.69341 14.8066 4.80049 14.8737 4.93221L16.2993 4.20582C16.0788 3.77305 15.727 3.42119 15.2942 3.20069L14.5678 4.6263ZM4.65 2.95C4.24316 2.95 3.88992 2.94938 3.59966 2.97309C3.30006 2.99757 2.99783 3.0519 2.70582 3.20069L3.43221 4.6263C3.46107 4.61159 3.52929 4.58417 3.72995 4.56778C3.93994 4.55062 4.21676 4.55 4.65 4.55V2.95ZM3.05 6.15C3.05 5.71676 3.05062 5.43994 3.06778 5.22995C3.08417 5.02929 3.11159 4.96107 3.1263 4.93221L1.70069 4.20582C1.5519 4.49783 1.49757 4.80006 1.47309 5.09966C1.44938 5.38992 1.45 5.74316 1.45 6.15H3.05ZM2.70582 3.20069C2.27305 3.42119 1.92119 3.77305 1.70069 4.20582L3.1263 4.93221C3.19341 4.80049 3.30049 4.69341 3.43221 4.6263L2.70582 3.20069ZM15.3615 5.30067L12.6909 6.78434L13.4679 8.18299L16.1385 6.69933L15.3615 5.30067ZM5.30911 6.78434L2.63851 5.30067L1.86149 6.69933L4.53208 8.18299L5.30911 6.78434ZM12.6909 6.78434C11.1567 7.63668 10.5363 7.97139 9.89646 8.10298L10.2188 9.67018C11.1558 9.47748 12.0243 8.985 13.4679 8.18299L12.6909 6.78434ZM4.53208 8.18299C5.97571 8.98501 6.84425 9.47748 7.78122 9.67018L8.10354 8.10298C7.46372 7.97139 6.84333 7.63668 5.30911 6.78434L4.53208 8.18299ZM9.89646 8.10298C9.30501 8.22463 8.69499 8.22463 8.10354 8.10298L7.78122 9.67018C8.58532 9.83556 9.41468 9.83556 10.2188 9.67018L9.89646 8.10298Z"
                      fill="#768194"
                    />
                  </svg>

                  <a
                    :href="'mailto:' + item.teacher.email"
                    class="faculty-contact-email"
                  >
                    {{ item.teacher.email }}</a
                  >
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    const data = await this.$axios.$get(
      '/syllabus/course_syllabus/SyllabusList/'
    )

    const newsList = await this.$axios.$get('/news/?category__slug=yangiliklar')

    this.news = newsList.results
    this.syllabusDetail = data.results
  },
  data() {
    return {
      syllabusDetail: [],
      news: [],
    }
  },
  computed: {
    routeSegmentsWithTitles() {
      const segments = this.$route.path
        .split('/')
        .filter((segment) => segment !== '')
      const breadcrumbSegments = []

      for (let i = 0; i < segments.length; i++) {
        const segment = segments[i]
        const breadcrumbSegment = {
          title: segment,
          link: `/${segments?.slice(0, i + 1).join('/')}`,
        }
        breadcrumbSegments.push(breadcrumbSegment)
      }

      return breadcrumbSegments
    },
  },
}
</script>
<style lang="scss" scoped>
.single {
  background-color: #f6f8fb;
}

.reversal {
  @media (max-width: 992px) {
    flex-direction: column-reverse;
  }
}

.sidebar-shadow {
  background: linear-gradient(
      180deg,
      rgba(247, 249, 251, 0) 0%,
      rgba(255, 255, 255, 0) 0.01%,
      rgba(255, 255, 255, 0.6) 100%
    )
    bottom left;

  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.slideer {
  @media (max-width: 992px) {
    overflow: scroll;
  }
}

.sidebar-news {
  @media (max-width: 992px) {
    overflow: visible !important;
  }
}
::-webkit-scrollbar {
  width: 5px; /* Set the width of the scrollbar */
  opacity: 0; /* Hide the scrollbar by default */
  transition: opacity 0.2s; /* Add a transition for smooth visibility change */
}

/* Show the scrollbar on hover */
::-webkit-scrollbar:hover {
  opacity: 1; /* Make the scrollbar visible on hover */
}

::-webkit-scrollbar-thumb {
  background-color: #c0c0c0; /* Set the color of the scrollbar thumb */
  border-radius: 6px; /* Add rounded corners to the scrollbar thumb */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #a0a0a0; /* Change the color on hover */
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0; /* Set the color of the scrollbar track */
  border-radius: 6px; /* Add rounded corners to the scrollbar track */
}

::-webkit-scrollbar-track:hover {
  background-color: #e0e0e0; /* Change the color on hover */
}

.faculty {
  border-radius: 12px;
  border: 1px solid #f6f8fb;
  background: #fff;
  box-shadow: 0px 9px 24px 0px rgba(20, 65, 118, 0.04);
  padding: 16px 16px 16px 20px;

  &:hover {
    border: 1px solid #2678d9;
    box-shadow: 0px 9px 28px 0px rgba(20, 65, 118, 0.12);
  }

  &-title {
    color: #1d2024;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    transition: 0.3s ease;
  }

  &:hover {
    .faculty-title {
      color: #2678d9;
    }
  }

  &-subtitle {
    color: #2678d9;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }

  &-badge {
    position: absolute;
    left: 0;
    top: 16px;
    width: 4px;
    height: 42px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: #2678d9;
  }

  &-list li:first-child {
    color: #768194;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  &-list {
  }

  &-info {
    margin-top: 20px;
    gap: 12px;
  }

  &-list li {
    color: #1d2024;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
  }
}

.faculty-contact {
  &-email,
  &-name {
    color: #1d2024;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    z-index: 10;
  }

  &-email:hover {
    color: #2678d9;
  }
}

.news-card {
  &-name {
    overflow: hidden;
    color: #1d2024;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
  }

  &-date {
    color: #768194;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }

  &-header {
    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-color: #fff;
    }
  }

  &-body {
    margin-top: 10px;

    p {
      color: #1d2024;
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      transition: 0.3s ease;

      &:hover {
        color: #2678d9;
      }
    }

    img {
      margin-top: 10px;
      width: 100%;
      height: 120px;
      border-radius: 2px;
    }
  }

  &-footer {
    margin-top: 10px;
    gap: 12px;

    span {
      color: #768194;
      font-size: 11px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
    }
  }
}

.line {
  height: 1px;
  margin-top: 12px;
  background-color: #f6f8fb;
}

.line__secondary {
  background-color: #e8edf2;
}

.sidebar-news {
  gap: 12px;
  max-width: 279px;
  width: 100%;
  border-radius: 12px;
  background: #fff;
  padding: 12px;
  max-height: 855px;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  overflow: auto;
}

.news-card {
  border-radius: 8px;
  background-color: #f6f8fb;
  padding: 12px;
}
</style>
