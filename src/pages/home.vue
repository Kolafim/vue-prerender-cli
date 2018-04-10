
<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <h4>store: {{common.count}} / {{animat_store_count}}</h4>
    <div><button @click="addCount">+10</button></div>
    <h4>local: {{count}}</h4>
    <div><button @click="addCountLocal">+10</button></div>
    <i class="material-icons">face</i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'home',
  data () {
    return {
      msg: 'Home Page',
      count:0
    }
  },
  created () {
    // 初始化第一组数据；
    // console.log(this);
  },
  methods:{
    addCount(e){
      this.$store.commit('ADD_COUNT');
    },
    addCountLocal(e){
      this.count += 10;
    }
  },
  computed:{
    ...mapState({
      common:'common',
    }),
    animat_store_count(){
      return this.common.count//this.tweenedNumber.toFixed(0)//this.common.count
    }
  },
  watch: {
    'common.count': function(newValue) {
      console.log(newValue,this);
      // TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .hello{
    h4 {
      color:#777;
    }
  }
</style>
