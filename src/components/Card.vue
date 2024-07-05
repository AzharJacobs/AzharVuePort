<template>
  <div class="card-div">
    <div :class="['box', cardStyle]">
        <!-- :style="getGradientStyle" -->
      <div class="imgBx">
        <slot name="img"></slot>
      </div>
      <div :class="['content', cardStyle]">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
  props: {
    styleType: {
      type: String,
      default: 'default'
    },
    // gradientIndex: {
    //   type: Number,
    //   default: 1
    // }
  },
  computed: {
    cardStyle() {
      return this.styleType;
    },
    // getGradientStyle() {
    //   let gradient;
    //   switch (this.gradientIndex) {
    //     case 1:
    //     case 4:
    //       gradient = 'linear-gradient(235deg, #89ff00, #010615, #00bcd4)';
    //       break;
    //     case 2:
    //     case 5:
    //       gradient = 'linear-gradient(235deg, #ff005e, #010615, #fbff00)';
    //       break;
    //     case 3:
    //     case 6:
    //       gradient = 'linear-gradient(235deg, #772aff, #010615, #2196F3)';
    //       break;
    //     default:
    //       gradient = 'linear-gradient(235deg, #89ff00, #010615, #00bcd4)';
    //   }
    //   return {
    //     background: gradient
    //   };
    // }
  }
}
</script>


<style scoped>

/* cards */

@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');



.card-div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /*min-height: 100vh; */
    /* background: #010615; */
    width: 380px;
    padding: 0 0 !important;
}

.box {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    border: 2px solid #0563bb;
    transition: 0.5s;
}




.box:nth-child(1):hover,
.box:nth-child(2):hover,
.box:nth-child(3):hover {
    height: 520px;
}

.box .imgBx {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 292px;
    padding: 8px;
    box-sizing: border-box;
    overflow: hidden;
}

.box .imgBx img {
    max-width: 100%;
    /* opacity: 0.1; */
    transition: 0.5s;
    overflow: hidden;
}

.box:hover .imgBx img {
    opacity: 1;
}

.box::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #0563bb;
    z-index: -1;
    
}

.box::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: #0563bb;
    z-index: -2;
    filter: blur(40px);
    
}

/* .box::before,
.box::after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}



.box:nth-child(2)::before,
.box:nth-child(2)::after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00) !important;
}

.box:nth-child(3)::before,
.box:nth-child(3)::after {
    background: linear-gradient(235deg, #772aff, #010615, #2196F3) !important;
} */

/* .box::before,
.box::after {
    background: linear-gradient(235deg, #B8860B, #010615, #B8860B);
    } */
    
    .box .content {
        /* position: absolute; */
        bottom: 0;
        left: 10px;
        right: 10px;
        bottom: 10px;
        height: 90px;
        /* background: #0563bb; */
        display: flex;
        text-align: center;
        flex-direction: column;
        opacity: 0;
        transition: 0.5s;
        margin-top: 140px;
        padding-bottom: 10px;
    }
    
.box:hover .content {
    opacity: 1;
    padding: 10px;
}

.box .content h5 {
    font-size: 20px;
    color: black;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1px;
}

.box .content p {
    font-size: 14px;
    color: black;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 2px;
    /* padding-bottom: 10px;  not working */
}

.box .content {
    font-size: 14px;
    color: black;
    font-weight: 200;
    line-height: 20px;
    letter-spacing: 2px;
}


@media (max-width: 330px) {
    .box {
        height: 230px;
    }
    
    .box:hover {
        height: 330px;
    }
    
    .box .content h5 {
        font-size: 16px;
    }
    
    .box .content h5 span {
        font-size: 12px;
    }
    
    
}

/* about */

.box:hover.about-style {
    height: 550px !important;
}

.box.about-style::before,
.box.about-style::after {
    background: linear-gradient(235deg, #ff005e, #010615, #fbff00) !important;
    
}

/* projects */
.box:hover.projects-style {
    height: 450px !important;
}

.box .content.projects-style {
        margin-top: 250px !important;
    }

.box.projects-style::before,
.box.projects-style::after {
    background: linear-gradient(235deg, #772aff, #010615, #2196F3) !important;
}


/* testimonials */
.box:hover.test-style {
    height: 650px !important;
}

.box .content.test-style {
        margin-top: 40px !important;
    }

.box.test-style::before,
.box.test-style::after {
    background: linear-gradient(235deg, #89ff00, #010615, #00bcd4);
}


</style>