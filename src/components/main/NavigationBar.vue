<template>
  <div>
<!--    <v-navigation-drawer></v-navigation-drawer>-->
    <div>

      <v-toolbar
        color="accent"
        dark
      class="fixed-bar">
        <a href="/">
        <img class="mr-3"
             :src="require('../../assets/IvyEd-cornell-color.png')" height="150"/>
      </a>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text x-large color="primary">아이비에드 소개</v-btn>
          <v-btn text x-large color="primary">수업료</v-btn>
          <v-btn text x-large color="primary">후기</v-btn>
          <v-btn text x-large color="primary" to="/faq">FAQ</v-btn>
          <v-btn text x-large color="primary" to="/login">로그인</v-btn>
          <v-btn text x-large color="primary" to="/register">회원가입</v-btn>
        </v-toolbar-items>
        <!--          <v-img src="../../assets/IvyEd-logos_transparent.png">-->
<!--          </v-img>-->
<!--        <v-app-bar-nav-icon></v-app-bar-nav-icon>-->
<!--        <v-toolbar-title>Vuetify</v-toolbar-title>-->

<!--        <v-btn icon>-->
<!--          <v-icon>mdi-export</v-icon>-->
<!--        </v-btn>-->
      </v-toolbar>
    </div>

    <!--    <v-navigation-drawer v-model="drawer" app temporary color="topbar">-->
<!--      <template v-if="$store.state.currentUser !== null">-->
<!--        <v-list dense nav style="list-style: none" class="mt-3 mb-3 text-center">-->
<!--          <li class="text-center">-->
<!--            <v-avatar class="align-self-center" height="100" width="110">-->
<!--              <v-icon size="50" color="white">mdi-human-child</v-icon>-->
<!--            </v-avatar>-->
<!--          </li>-->
<!--          <li class="text-center text-h3 white&#45;&#45;text">-->
<!--            {{ $store.state.currentUser.firstName }}-->
<!--          </li>-->
<!--          <v-list-item-->
<!--            class="mt-2"-->
<!--            :to="'/myprofile'"-->
<!--            v-if="$store.state.currentUser && $store.state.currentUser.type === 'learner'"-->
<!--          >-->
<!--            <v-list-item-title class="text-subtitle-1 font-weight-light
white&#45;&#45;text text-center">-->
<!--              <v-icon color="white" class="mr-5">mdi-account-details</v-icon> My Profile-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--          <v-list-item-->
<!--            class="mt-2"-->
<!--            :to="'/manage'"-->
<!--            v-if="$store.state.currentUser && $store.state.currentUser.type === 'admin'"-->
<!--          >-->
<!--            <v-list-item-title class="text-subtitle-1
 font-weight-light white&#45;&#45;text text-center">-->
<!--              <v-icon color="white" class="mr-5">mdi-cog</v-icon> Manage Users-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--          <v-list-item @click="logOut" class="mt-2">-->
<!--            <v-list-item-title class="text-subtitle-1
font-weight-light white&#45;&#45;text text-center">-->
<!--              <v-icon color="white" class="mr-5">mdi-login-variant</v-icon> Log out-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </v-list>-->
<!--      </template>-->
<!--      <v-list expand color="topbar" class="mt-5">-->
<!--        <template v-if="$store.state.currentUser === null">-->
<!--          <v-list-item v-for="(item, i) in links" class="white&#45;&#45;text"
:key="i" :to="item.to">-->
<!--            <v-list-item-title class="text-subtitle-1 font-weight-light
white&#45;&#45;text text-center">-->
<!--              <v-icon color="white" class="mr-5">{{ item.icon }}</v-icon> {{ item.title }}-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--          <v-list-item class="white&#45;&#45;text" to="/login">-->
<!--            <v-list-item-title class="text-subtitle-1 font-weight-light
white&#45;&#45;text text-center">-->
<!--              <v-icon color="white" class="mr-5">mdi-login</v-icon> Login-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--          <v-list-item class="white&#45;&#45;text" to="/register">-->
<!--            <v-list-item-title class="text-subtitle-1 font-weight-light
white&#45;&#45;text text-center">-->
<!--              <v-icon color="white" class="mr-5">mdi-pencil</v-icon> Register-->
<!--            </v-list-item-title>-->
<!--          </v-list-item>-->
<!--        </template>-->
<!--      </v-list>-->
<!--    </v-navigation-drawer>-->
<!--    <v-app-bar app color="topbar" flat height="70">-->
<!--      <v-container class="fill-height pa-0">-->
<!--        <v-row no-gutters justify="space-between" align="center">-->
<!--          <v-col-->
<!--            :class="{-->
<!--              'col-auto': $vuetify.breakpoint.mdAndUp,-->
<!--              'col-4': $vuetify.breakpoint.sm,-->
<!--              'col-2': $vuetify.breakpoint.xs,-->
<!--            }"-->
<!--            v-if="$vuetify.breakpoint.smAndDown"-->
<!--          >-->
<!--            <v-btn icon @click="drawer = !drawer" text color="topbar"-->
<!--              ><v-icon color="white">mdi-menu</v-icon></v-btn-->
<!--            >-->
<!--          </v-col>-->
<!--          <v-col-->
<!--            :class="{-->
<!--              // 'col-auto': $vuetify.breakpoint.mdAndUp,-->
<!--              // 'col-2': $vuetify.breakpoint.smAndDown,-->
<!--              // 'pa-1': $vuetify.breakpoint.smAndDown,-->
<!--              // 'mx-5': $vuetify.breakpoint.smAndDown,-->
<!--            }"-->
<!--          >-->
<!--            <router-link to="/">-->
<!--              <v-avatar size="60" tile>-->
<!--&lt;!&ndash;                <v-img height="10" src="@/assets/skyCastleLogo1.png">
</v-img>&ndash;&gt;-->
<!--                <h3 color="topbar">SKY CASTLE</h3>-->
<!--              </v-avatar>-->
<!--            </router-link>-->
<!--          </v-col>-->

<!--          &lt;!&ndash; Register Button & and User menu&ndash;&gt;-->
<!--          <v-col-->
<!--            cols="auto"-->
<!--            class="center-horizontally center-vertically"-->
<!--            v-if="$vuetify.breakpoint.mdAndUp"-->
<!--          >-->
<!--            <template v-if="$store.state.currentUser === null">-->
<!--              <v-btn-->
<!--                width="150"-->
<!--                x-large-->
<!--                rounded-->
<!--                to="/register"-->
<!--                class="text-none text-h4"-->
<!--                color="#48465E"-->
<!--              >-->
<!--                Register-->
<!--              </v-btn>-->
<!--              <v-btn x-large rounded outlined to="/login" class="text-none text-h4"
color="white">-->
<!--                Login-->
<!--              </v-btn>-->
<!--            </template>-->
<!--            <v-menu v-else offset-y>-->
<!--              <template v-slot:activator="{ on }">-->
<!--                <v-btn color="white" outlined v-on="on" class="text-none pl-2 pr-2" x-large-->
<!--                  ><v-avatar size="30" class="mr-1 ml-0">-->
<!--                    <v-icon color="white">mdi-human-child</v-icon>-->
<!--                  </v-avatar>-->
<!--                  <v-spacer></v-spacer>-->
<!--                  <div class="mr-5 ml-5 text-subtitle-1 font-weight-medium">-->
<!--                    {{ $store.state.currentUser.firstName || 'John Doe' }}-->
<!--                  </div>-->
<!--                  <v-spacer></v-spacer>-->
<!--                  <v-avatar size="20" class="mx-1">-->
<!--                    <v-icon>mdi-chevron-down</v-icon>-->
<!--                  </v-avatar>-->
<!--                </v-btn>-->
<!--              </template>-->

<!--              <v-list dense color="topbar">-->
<!--                <v-list-item-->
<!--                  :to="'/myprofile'"-->
<!--                  v-if="$store.state.currentUser && $store.state.currentUser.type ===
'learner'"-->

<!--                >-->
<!--                  <v-list-item-title class="text-subtitle-1 font-weight-light
white&#45;&#45;text">-->

<!--                    My Profile-->
<!--                  </v-list-item-title>-->
<!--                </v-list-item>-->
<!--                <v-list-item-->
<!--                  :to="'/manage'"-->
<!--                  v-if="$store.state.currentUser && $store.state.currentUser.type
=== 'admin'"-->
<!--                >-->
<!--                  <v-list-item-title class="text-subtitle-1 font-weight-light
 white&#45;&#45;text">-->
<!--                    Manage Users-->
<!--                  </v-list-item-title>-->
<!--                </v-list-item>-->
<!--                <v-list-item @click="logOut">-->
<!--                  <v-list-item-title class="text-subtitle-1 font-weight-light
white&#45;&#45;text">-->
<!--                    Log out-->
<!--                  </v-list-item-title>-->
<!--                </v-list-item>-->
<!--              </v-list>-->
<!--            </v-menu>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
<!--    </v-app-bar>-->
  </div>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Home',
        to: '/',
        icon: 'mdi-home',
      },
    ],
    drawer: false,
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
