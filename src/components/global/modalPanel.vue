<template>
  <div class="modal" :class="{['theme-'+modal.modal.theme]:modal.modal.theme}">
    <button @click="show">show modal</button>
    <button @click="show(2)">show modal nobg</button>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated short ease-out opacity-on"
      leave-active-class="animated short ease-out opacity-off"
    >
      <div v-if="modal.modal.bg && !modal.modal.hide" class="panel-bg"></div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated short ease-out zoomIn"
      leave-active-class="animated short ease-out zoomOut"
    >
      <div v-if="!modal.modal.hide" class="modal-panel">
        <div class="h100 flex flex-line" @click.self="close">
          <div class="modal-main" :class="{'no-bg':!modal.modal.bg}">
            <div v-if="modal.modal && modal.modal.title" class="modal-title">{{modal.modal.title}}</div>
            <div class="modal-msg">{{ modal.modal.msg }}</div>
            <div class="modal-btn-list flex-line">
              <div class="modal-btn-item" @click="close">关闭</div>
              <div class="modal-btn-item light" @click="close">确定</div>
            </div>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    created(){

    },
    methods:{
      show(mode){
        // console.log(this.modal);
        let _data = {msg:'ggggg',title:'提示'};
        if('number' == typeof mode) _data.bg = 0;
        this.$store.commit('MODAL_SHOW',_data);
      },
      close(){
        // console.log(e);
        this.$store.commit('MODAL_HIDE');
      }
    },
    computed:mapState(['modal'])
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/_setting.scss';
  .panel-bg {
    background-color: rgba(0,0,0,.55);
    position:fixed;
    left:0;
    top:0;
    z-index: 1000;
    width:100%;
    height:100%;
  }
  .modal-panel{
    position:fixed;
    left:0;
    top:0;
    z-index: 1001;
    width:100%;
    height:100%;

    .modal-main{
      max-width:360px;
      width:80%;
      font-size: 16px;
      color:$theme-text-2;
      padding:0;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 0 10px rgba(255,255,255,.3);
      &.no-bg {
        border:1px solid #ccc;
        border-bottom-color: #bbb;
        box-shadow: 0 2px 5px rgba(0,0,0,.2);
      }
    }

    .modal-title {
      font-weight: 500;
      font-size: 1.1em;
      text-align: left;
      line-height: 2.4em;
      padding:0 1em;
      color:$theme-light;
      border-bottom: 1px solid #eee;
    }

    .modal-msg {
      padding:8% 1.3em;
    }
    .modal-btn-list {
      border-top:1px solid #eee;
      text-align: center;

      .modal-btn-item {
        flex: 1;
        font-size: 1.1em;
        line-height: 2.8em;
        border-left:1px solid #eee;
        &:first-child {
          border-left:none;
        }
        &.light {
          color:$theme-light
        }
        &:active {
          background-color: #ececec;
        }
      }
    }
  }
</style>
