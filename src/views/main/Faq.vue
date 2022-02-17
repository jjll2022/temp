<template>

  <v-container
    id="success-section"
    class="new-container"
    :class="{
        'mb-0': $vuetify.breakpoint.smAndDown,
        'mt-0': $vuetify.breakpoint.smAndDown,
        'pb-5': $vuetify.breakpoint.mdAndUp,
        'pt-5': $vuetify.breakpoint.mdAndUp,
      }"
  >

        <VueFaqAccordion
          :items="data"> </VueFaqAccordion>
<!--        <h2-->
<!--          class="mb-10 mt-10 font-weight-bold"-->
<!--          :class="{-->
<!--              'text-h3': $vuetify.breakpoint.smAndDown,-->
<!--              'text-center': $vuetify.breakpoint.smAndDown,-->
<!--              'text-h2': $vuetify.breakpoint.md,-->
<!--              'text-large': $vuetify.breakpoint.lgAndUp,-->
<!--            }"-->
<!--        >-->
<!--          [고쳐야함] 자녀를 끝까지 책임져줄수 있는 최상위급 과외 플랫폼-->
<!--        </h2>-->
<!--        <p-->
<!--          class="mb-5 mt-5 font-weight-light"-->
<!--          :class="{-->
<!--              'text-subtitle-1': $vuetify.breakpoint.smAndDown,-->
<!--              'text-center': $vuetify.breakpoint.smAndDown,-->
<!--              'text-h3': $vuetify.breakpoint.mdAndUp,-->
<!--            }"-->
<!--        >-->
<!--          Find great instructors. Enrich your knowlage. Take your future to the next level.-->
<!--        </p>-->
<!--        <v-btn-->
<!--          x-large-->
<!--          width="200"-->
<!--          height="80"-->
<!--          to="/register"-->
<!--          color="primary"-->
<!--          class="white&#45;&#45;text mb-10 text-h4"-->
<!--          outlined-->
<!--          :class="{-->
<!--              'text-subtitle-1': $vuetify.breakpoint.smAndDown,-->
<!--              'text-center': $vuetify.breakpoint.smAndDown,-->
<!--            }"-->
<!--        >-->
<!--          Join now-->
<!--        </v-btn>-->

  </v-container>
</template>

<script>
import VueFaqAccordion from 'vue-faq-accordion';
import info from '../../../info';

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
    margin-top: 30px;
  }
  .courses-container {
    background-color: rgb(245, 245, 245);
  }
  .hero-container {
    /*background: url(../../assets/img-home-2.jpg) center center/cover no-repeat;*/
    background-color: #ffcccb;
    height: calc(100vh - 70px);
    width: 100%;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
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
