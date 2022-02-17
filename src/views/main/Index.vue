<template>
  <v-app dark>
    <NavigationBar />
    <v-main class="background">
      <v-fade-transition mode="out-in" :appear="true" :duration="200">
        <router-view></router-view>
      </v-fade-transition>
      <!-- SnackBar to show at success of fail -->
      <v-snackbar
        :value="true"
        centered
        top
        :color="$store.state.snackbarColor"
        elevation="24"
        v-model="$store.state.snackbar"
        :timeout="7000"
      >
        <div class="text-center text-h4">
          {{ $store.state.snackbarMessage }}
        </div>
      </v-snackbar>
    </v-main>
<!--    <v-fab-transition>-->
<!--    <v-btn fab x-large color="primary" fixed bottom>-->
<!--      <v-icon dark>FUCK</v-icon>-->
<!--    </v-btn>-->
<!--    </v-fab-transition>-->

<!--    <div class="my-2" >-->
<!--      <v-btn x-large color="success" dark fixed right bottom>수업료 & 수강신청</v-btn>-->
<!--    </div>-->
<!--    <div>-->
<!--      <v-col cols="4">-->
    <!--        <v-card-->
    <!--          color="#385F73"-->
    <!--        >-->
    <!--          <v-card-title class="text-h5">-->
    <!--            Unlimited music now-->
    <!--          </v-card-title>-->
    <!--          <v-card-actions>-->
    <!--            <v-btn text>-->
    <!--              Listen Now-->
    <!--            </v-btn>-->
    <!--          </v-card-actions>-->
    <!--        </v-card>-->
    <!--      </v-col>-->
    <!--    </div>-->

<!--        <v-app-bar elevation="4" color="white" inverted-scroll fixed bottom>-->
<!--          <v-btn block>-->
<!--            돈 내라 인간들-->
<!--          </v-btn>-->
<!--        </v-app-bar>-->
    <v-col cols="4">
          <v-btn x-large color="primary" fixed bottom block>수업료 & 수강신청</v-btn>
    </v-col>
    <DashboardCoreFooter class="grey lighten-4" />

  </v-app>
</template>

<script>
import NavigationBar from '@/components/main/NavigationBar.vue';

export default {
  components: {
    NavigationBar,
    DashboardCoreFooter: () => import('../../components/core/Footer.vue'),
  },
  data: () => ({}),
  computed: {
    activeFab() {
      switch (this.tabs) {
        default: return { color: 'green', icon: 'share' };
        // case 'one': return { color: 'success', icon: 'share' }
        // case 'two': return { color: 'red', icon: 'edit' }
        // case 'three': return { color: 'green', icon: 'keyboard_arrow_up' }
        // default: return {};
      }
    },
  },
};
</script>
