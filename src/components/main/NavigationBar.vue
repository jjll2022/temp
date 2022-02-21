<template>
  <div>

<!--    <v-toolbar>-->
<!--      <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title>-->
<!--      <v-spacer></v-spacer>-->
<!--      <v-toolbar-items class="hidden-sm-and-down">-->
<!--        <v-btn-->
<!--          v-for="item in menu"-->
<!--          :key="item.icon"-->
<!--          :to="item.link"-->
<!--          flat-->
<!--        >{{ item.title }}</v-btn>-->
<!--      </v-toolbar-items>-->
<!--      <v-menu class="hidden-md-and-up">-->
<!--        <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>-->
<!--        <v-list>-->
<!--          <v-list-tile v-for="item in menu" :key="item.icon">-->
<!--            <v-list-tile-content>-->
<!--              <v-list-tile-title>{{ item.title }}</v-list-tile-title>-->
<!--            </v-list-tile-content>-->
<!--          </v-list-tile>-->
<!--        </v-list>-->
<!--      </v-menu>-->
<!--    </v-toolbar>-->

<!--    hidden-sm-and-down-->
<!--    hidden-md-and-up-->

      <v-app-bar fixed absolute elevation="0">
        <v-toolbar-title>
          <a href="/">
            <img class="mr-3"
                 :src="require('../../assets/IvyEd-cornell-color.png')" height="150"/>
          </a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text x-large color="primary" v-for="item in menu" :key="item.to"
                 :to="item.to">{{item.title}}</v-btn>
          <v-btn elevation="0" color="#F2F2F2"><v-icon color="primary">mdi-web</v-icon></v-btn>
        </v-toolbar-items>

<!--        <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="drawer = !drawer">-->
<!--        </v-app-bar-nav-icon>-->
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
<!--            <v-btn-->
<!--              color="primary"-->
<!--              dark-->
<!--              v-bind="attrs"-->
<!--              v-on="on"-->
<!--              class="hidden-md-and-up"-->
<!--            >-->
<!--              Dropdown-->
<!--            </v-btn>-->
            <v-app-bar-nav-icon
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              class="hidden-md-and-up"></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in menu"
              :key="index" :to="item.to"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
    links: [
      {
        title: 'Home',
        to: '/',
        icon: 'mdi-home',
      },
    ],
    menu: [
      { title: '아이비에드 소개', to: '/intro' },
      { title: '수업료', to: '/tuition' },
      { title: '후기', to: '/review' },
      { title: 'FAQ', to: '/faq' },
      { title: '로그인', to: '/login' },
      { title: '회원가입', to: '/register' },
    ],
    // menu: [
    //   { icon: 'home', title: 'Link A' },
    //   { icon: 'info', title: 'Link B' },
    //   { icon: 'warning', title: 'Link C' },
    // ],
  }),
  methods: {
    logOut() {
      localStorage.removeItem('userData');
      localStorage.removeItem('userToken');
      this.$store.state.currentUser = null;
      if (this.$route.name !== 'Home') {
        this.$router.push('/');
      }
    },
  },
  created() {
    this.$store.state.currentUser = JSON.parse(localStorage.getItem('userData'));
  },
};
</script>
<style scoped>
  .fixed-bar {
    position: sticky;
    position: -webkit-sticky; /* for Safari */
    top: 6em;
    z-index: 2;
  }
</style>
