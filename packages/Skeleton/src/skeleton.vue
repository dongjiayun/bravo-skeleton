<template>
  <transition name="bravo-loading-fade" @after-leave="handleAfterLeave">
    <div
            v-show="visible"
            class="bravo-loading-mask"
            :style="{ backgroundColor: background || '' }"
            :class="[customClass, { 'is-fullscreen': fullscreen }]">
      <div v-if="!texts&&!circle&&!pics&&!list" class="bravo-loading-spinner">
        <svg v-if="!spinner" class="circular" viewBox="25 25 50 50">
          <circle class="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <i v-else :class="spinner"></i>
        <p v-if="text" class="bravo-loading-text">{{ text }}</p>
      </div>
      <div v-else class="skeleton">
        <div v-if="!list">
          <div v-if="circle" style="margin-bottom: 20px;display: flex">
            <div class="mask-animation skeleton-circle" :style="{margin:!texts?'auto':'',
          height:!texts?shorter+'px':'120px',
          width:!texts?shorter+'px':'120px',
          borderRadius:!texts?shorter+'px':'120px'}"></div>
            <div v-if="texts" style="width:calc(100% - 140px);margin: 10px">
              <div  v-for="index in 3" :class="{indent:index%3==1,tail:index%3==0}" :key="index"  class="mask-animation skeleton-texts"></div>
            </div>
          </div>
          <div v-if="texts" style="margin-bottom: 20px">
            <div  v-for="index in lineAmount" :class="{indent:index%5==1,tail:index%5==0,contextTail:index==lineAmount}" :key="index"  class="mask-animation skeleton-texts"></div>
          </div>
          <div v-if="pics" style="display: flex;flex-wrap: wrap">
            <div v-for="index in picsAmount" :key="index" class="mask-animation skeleton-pic"></div>
          </div>
        </div>
        <div v-if="list">
          <div  v-for="index in listAmount"  :key="index" class="skeleton-li">
            <div class="mask-animation skeleton-list-index"></div>
            <div style="flex: 1"></div>
            <div class="mask-animation skeleton-list"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        text: null,
        spinner: null,
        background: null,
        fullscreen: true,
        visible: false,
        customClass: '',
        texts:false,
        circle:false,
        pics:false,
        list:false,
        elHeight:0,
        elWidth:0,
      };
    },
    computed:{
      lineAmount(){
        let amount = parseInt((this.elHeight-(this.circle?1:0)*140-(this.pics?1:0)*140)/40)-1
        return amount>0?amount:0
      },
      listAmount(){
        let amount = parseInt(this.elHeight/40)-1
        return amount>0?amount:0
      },
      shorter(){
        return (this.elHeight<this.elWidth?this.elHeight:this.elWidth) - 60
      },
      picsAmount(){
        let amount = parseInt((this.elWidth-60)/172)
        let times = 1
        times = Math.floor((this.elHeight - (this.circle?1:0)*140 - (this.texts?1:0)*this.lineAmount*40)/ 140)
        console.log(this.elHeight)
        amount *= times
        return amount>0?amount:0
      },
    },
    mounted(){

    },
    methods: {
      handleAfterLeave() {
        this.$emit('after-leave');
      },
      setText(text) {
        this.text = text;
      }
    },
    watch:{
      visible(){
        this.$nextTick(()=>{
          this.elHeight = this.$el.offsetHeight
          this.elWidth = this.$el.offsetWidth
        })
      }
    }
  };
</script>

<style lang="scss">
  @import "../style/style";
  .bravo-loading-mask{
    .skeleton{
      margin:30px;
      .skeleton-circle{
        height: 120px;
        width: 120px;
        border-radius: 120px;
      }
      .skeleton-pic{
        height: 120px;
        width: 160px;
        margin-bottom: 20px;
        margin-right: 16px;
      }
      .skeleton-texts{
        height: 20px;
        width: 100%;
        &.indent{
          width: calc(100% - 40px);
          margin-left: 40px;
        }
        &.tail{
          width: calc(100% - 80px);
        }
        &.contextTail{
          width: calc(100% - 120px);
        }
      }
      .skeleton-texts+.skeleton-texts{
        margin-top: 20px;
      }
      .skeleton-li{
        display: flex;
        .skeleton-list{
          height: 20px;
          flex: 10;
        }
        .skeleton-list-index{
          height: 20px;
          width: 20px;
        }
      }
      .skeleton-li+.skeleton-li{
        margin-top: 20px;
      }
    }
    .mask-animation{
      background-image:linear-gradient(to right,#ddd,#ccc,#ddd);
      background-repeat: repeat;
      background-size: 400px;
      animation:move 1s ease-in infinite;
    }
    @keyframes move {
      0% {
      }100% {
         background-position:400px 0;
       }
    }
  }
</style>
