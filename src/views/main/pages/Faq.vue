<template>

  <v-container
    id="success-section"
    class="center-horizontally"
    :class="{
        'mb-0': $vuetify.breakpoint.smAndDown,
        'mt-0': $vuetify.breakpoint.smAndDown,
        'pb-5': $vuetify.breakpoint.mdAndUp,
        'pt-5': $vuetify.breakpoint.mdAndUp,
      }"
  >

    <v-row dense>
      <v-col cols="12">
        <v-card
          color="accent"
          dark
        >
          <VueFaqAccordion
            :items="data"> </VueFaqAccordion>
<!--          <v-card-title class="text-h5">-->
<!--            Unlimited music now-->
<!--          </v-card-title>-->

<!--          <v-card-subtitle>Listen to your favorite artists and albums whenever and-->
<!--            wherever, online and offline.</v-card-subtitle>-->

<!--          <v-card-actions>-->
<!--            <v-btn text>-->
<!--              Listen Now-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
        </v-card>
      </v-col>

      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
      >
        <v-card
          :color="item.color"
          dark
        >
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="text-h5"
                v-text="item.title"
              ></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  v-if="item.artist === 'Ellie Goulding'"
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>

                <v-btn
                  v-else
                  class="ml-2 mt-5"
                  outlined
                  rounded
                  small
                >
                  START RADIO
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar
              class="ma-3"
              size="125"
              tile
            >
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
import info from '../../../../info';

export default {
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      data: info.faq,
    };
  },
  props: {

    /**
     * Array of items
     * Object style {questionProperty: string, answerProperty: string, tabName: string}
     * You can change object keys names
     * using other props (questionProperty, answerProperty, tabName)
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * Key name of object in items array for specifying title of question
     */
    questionProperty: {
      type: String,
      default: 'title',
    },

    /**
     * Key name of object in items array for specifying content text of open question
     */
    answerProperty: {
      type: String,
      default: 'value',
    },

    /**
     * Key name of object in items array for specifying navigation tab name
     */
    tabName: {
      type: String,
      default: 'category',
    },

    /**
     * Color for hover and active tab/question
     * possible format: 'red', '#F00', 'rgba(255, 0, 0, 1)'
     */
    activeColor: {
      type: String,
      default: '#D50000',
    },

    /**
     * Color for borders
     */
    borderColor: {
      type: String,
      default: '#9E9E9E',
    },

    /**
     * Color for fonts
     */
    fontColor: {
      type: String,
      default: '#000000',
    },

    /**
     * Opened by default tabName (category)
     */
    initialTab: {
      type: String,
      default: null,
    },

    /**
     * Opened by default question
     * All closed by default
     */
    initialQuestionIndex: {
      type: Number,
      default: null,
    },

  },
};
</script>

<style scoped>
  .courses-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
    /*margin-top: 30px;*/
  }
  .courses-container {
    background-color: rgb(245, 245, 245);
  }
  .hero-container {
    /*background: url(../../assets/img-home-2.jpg) center center/cover no-repeat;*/
    /*background-color: #ffcccb;*/
    height: calc(100vh - 70px);
    width: 100%;
    /*box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);*/
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center-horizontally {
    text-align: center;
    margin: auto;
  }
  .center-horizontal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text-large {
    font-size: 5.5rem;
    line-height: 5.5rem;
  }
  .center-horizontally {
    text-align: center;
    margin: auto;
  }
  .center-horizontal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .center-vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text-large {
    font-size: 5.5rem;
    line-height: 5.5rem;
  }
  .goals-section {
    background-color: rgb(245, 245, 245);
  }
  .circles-container {
    position: relative;
    overflow: hidden;
    height: 400px;
    max-width: 500px;
  }
  #circle-one-outer {
    position: absolute;
    top: 0;
    left: 50%;
  }
  #circle-one-inner {
    position: relative;
    left: -50%;
    border: 5px solid #546e7a;
    color: #546e7a;
    font-size: 32px;
    font-weight: 500;
    border-radius: 50%;
    width: 270px;
    height: 270px;
    z-index: 2;
    background-color: #ffffff;
  }
  #circle-two-outer {
    position: absolute;
    bottom: 0;
    left: 25%;
  }
  #circle-two-inner {
    position: relative;
    left: -50%;
    border: 5px solid #546e7a;
    color: #546e7a;
    font-size: 26px;
    font-weight: 500;
    border-radius: 50%;
    width: 230px;
    height: 230px;
    z-index: 1;
    background-color: #ffffff;
  }
  #circle-three-outer {
    position: absolute;
    bottom: 5%;
    left: 75%;
  }
  #circle-three-inner {
    position: relative;
    left: -50%;
    border: 5px solid #546e7a;
    color: #546e7a;
    font-size: 22px;
    font-weight: 500;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    z-index: 3;
    background-color: #ffffff;
  }

  @media (min-width: 1904px) {
    .new-container {
      max-width: 1440px;
    }
  }
  @media (max-width: 600px) {
    .circles-container {
      height: auto;
      max-width: 500px;
      display: flex;
      justify-content: center;
    }
    #circle-one-outer {
      position: static;
      margin-bottom: 5px;
    }
    #circle-one-inner {
      position: static;
      width: 220px;
      height: 220px;
    }
    #circle-two-outer {
      position: static;
      margin-bottom: 5px;
    }
    #circle-two-inner {
      position: static;
      width: 220px;
      height: 220px;
    }
    #circle-three-inner {
      position: static;
      width: 220px;
      height: 220px;
    }
    #circle-three-outer {
      position: static;
    }
  }
</style>
