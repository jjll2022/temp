<!--<template>-->
<!--  <v-container class="pt-10">-->
<!--    &lt;!&ndash; Main Form &ndash;&gt;-->
<!--    <v-row justify="center" class="mt-1">-->
<!--      <v-col cols="auto" class="ma-0 pa-0">-->
<!--        <v-card color="white" elevation="2" class="pa-5 pt-0" shaped max-width="600px">-->
<!--          <v-form ref="verifyphoneform" v-model="valid">-->
<!--            <v-row-->
<!--              no-gutters-->
<!--              justify="center"-->
<!--              align="center"-->
<!--              class="text-h2 font-weight-light ma-5"-->
<!--            >-->
<!--              <v-col cols="12" class="text-center">-->
<!--                <v-avatar height="300" width="200" tile-->
<!--                ><h3>logo placeholder</h3></v-avatar>-->
<!--                &lt;!&ndash;                <div>{{twilioClient}}</div>&ndash;&gt;-->
<!--              </v-col>-->

<!--              <v-col cols="12" class="text-center"> Verify Your Phone Number</v-col>-->
<!--            </v-row>-->

<!--            <v-row no-gutters justify="center" align="center" class="px-5 text-h4">-->
<!--              <v-col cols="10">-->
<!--                <v-text-field-->
<!--                  outlined-->
<!--                  label="Phone Number"-->
<!--                  v-model="phoneData.phoneNumber"-->
<!--                  dense-->
<!--                ></v-text-field>-->
<!--              </v-col>-->
<!--              <v-col cols="10">-->
<!--                <v-text-field-->
<!--                  outlined-->
<!--                  label="Verification Code"-->
<!--                  v-model="phoneData.verificationCode"-->
<!--                  dense-->
<!--                ></v-text-field>-->
<!--              </v-col>-->

<!--            </v-row>-->

<!--            <v-row justify="center" align="center" class="px-5 mt-0 mb-10">-->
<!--              <v-col cols="10" class="text-center">-->
<!--                <v-btn-->
<!--                  @click.prevent="handleClick"-->
<!--                  width="70%"-->
<!--                  rounded-->
<!--                  outlined-->
<!--                  color="primary"-->
<!--                  class="text-h4"-->
<!--                >Register-->
<!--                </v-btn-->
<!--                >-->
<!--              </v-col>-->
<!--            </v-row>-->
<!--          </v-form>-->
<!--        </v-card>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--  </v-container>-->

<!--</template>-->

<!--<script>-->
<!--// import twilio from 'twilio';-->

<!--import * as express from 'express';-->

<!--const accountSid = 'AC19d851c3db7430f12c76159272a05485';-->
<!--const authToken = '21e4f060680d5791654c646801a823f2';-->
<!--const client = require('twilio')(accountSid, authToken);-->

<!--const app = express.Router();-->
<!--// const logger = require(logger())();-->

<!--export default {-->
<!--  name: 'VerifyPhone',-->
<!--  data() {-->
<!--    return {-->
<!--      phoneData: {-->
<!--        phoneNumber: '',-->
<!--        verificationCode: '',-->
<!--      },-->
<!--      status: '',-->
<!--      // rules: {-->
<!--      //   required: (value) => !!value || 'Required.',-->
<!--      //   email: (value) => {-->
<!--      //     const pattern =-->
<!--      // eslint-disable-next-line max-len-->
<!--      //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;-->
<!--      //     return pattern.test(value) || 'Not a valid Email';-->
<!--      //   },-->
<!--      //   isAYear: (value) => (value >= 1950 && value <= 2025) || 'Must Be between 1960 and 2025',-->
<!--      //   hourlyRate: (value) => (value >= 10 && value <= 2000) || 'Must Be between 10 and 2000',-->
<!--      //   biggerthanzero: (value) => value > 0 || 'Can not work less than 1 month',-->
<!--      //   overviewLength: (v) =>-->
<!--      //     // eslint-disable-next-line implicit-arrow-linebreak-->
<!--      //     (v.length >= 50 && v.length <= 5000) || 'Min 50 characters, Max 5000 characters',-->
<!--      //   emptyArray: (v) => v.length > 0 || 'Min One Skill is needed',-->
<!--      //   passwordMatch: (v1, v2) => v1 === v2 || 'Passwords Do not Match',-->
<!--      //   MinPassLen: (v) => v.length >= 8 || 'Password min 8 Characters',-->
<!--      // },-->
<!--      // eslint-disable-next-line no-undef-->
<!--      // twilioClient: twilio.Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN),-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    // async handleClick() {-->
<!--    //   // eslint-disable-next-line max-len-->
<!--    //   // const channel = 'sms';-->
<!--    //   try {-->
<!--    //     // console.log('here mother fucker');-->
<!--    //     // eslint-disable-next-line max-len-->
<!--    // eslint-disable-next-line max-len-->
<!--    //     // const temp = await twilio('AC19d851c3db7430f12c76159272a05485', '21e4f060680d5791654c646801a823f2')-->
<!--    //     //   .verify-->
<!--    //     //   .services('VAa31604b297dd89cc71eb576dc811d962')-->
<!--    //     //   .verifications-->
<!--    //     //   .create({ to: '+821058737787', channel: 'sms' });-->
<!--    //     // console.log('here');-->
<!--    //     // console.log(temp);-->
<!--    //     await client.verify.services('VAa31604b297dd89cc71eb576dc811d962').verifications.create({-->
<!--    //       to: '+821058737787',-->
<!--    //       channel: 'sms',-->
<!--    //     }).then((message) => console.log(message.sid));-->
<!--    //   } catch (e) {-->
<!--    //     console.error(e.message);-->
<!--    //     // return res.status(500).send(e);-->
<!--    //   }-->
<!--    // },-->
<!--    app.get('/', async (req, res) => {-->
<!--      try {-->
<!--        verificationRequest = await client.verify.services('VAa31604b297dd89cc71eb576dc811d962').verifications.create( {to: '+821058737787', channel: 'sms' } );-->
<!--      } catch (e) {-->
<!--        console.log(e);-->
<!--      }-->

<!--      console.debug(verificationRequest);-->
<!--    })-->

<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
