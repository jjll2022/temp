<template>
  <v-container fluid class="hero-container white--text">
    <v-container class="new-container">
      <v-row dense align="center">
        <v-col cols="12" class="center-horizontal">
          <h1
            class="font-weight-bold mb-5 text-center"
            :class="{
                'text-h1': $vuetify.breakpoint.xs,
                'text-h1': $vuetify.breakpoint.sm,
                'text-medium': $vuetify.breakpoint.mdAndUp,
              }"
          >
            아이비에드를 선택한 수강생들은
          </h1>
          <p
            class="mb-10"
            :class="{
                'text-h4': $vuetify.breakpoint.xs,
                'text-h3': $vuetify.breakpoint.sm,
                'text-h3': $vuetify.breakpoint.mdAndUp,
              }"
          >
            처음부터 완벽한 온라인 과외를 경험했습니다.
          </p>
          <p>placeholder 이미지들</p>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Review',
  data() {
    return {
      items: [
        {
          src: 'https://s3.orbi.kr/data/file/united2/311dc95e-2874-4bd0-acb9-eba81b810c8bE7D415A3-FB7A-43FF-94B1-547680B49B6B.jpeg',
        },
        {
          src: 'https://s3.orbi.kr/data/file/united2/0c58ac92-47fc-469e-b2fd-9a08f2a2fcb5CFFFD6D4-03B0-4E1C-A6F2-567E95C3B687.jpeg',
        },
        {
          src: 'https://s3.orbi.kr/data/file/united2/9e681722-9709-4ed2-952c-d282f478be0f05853560-4801-4AE7-9B29-B0A8702A530B.jpeg',
        },
        {
          src: 'https://s3.orbi.kr/data/file/united2/c923a775-ec23-4e90-9b1f-d6b4a870bf175EE49B51-8F15-4416-A33B-BBE18C87ED75.jpeg',
        },
      ],
    };
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
