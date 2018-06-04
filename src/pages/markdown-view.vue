<template>
  <div class="markdown-view">
    <h2 class="page-head-name">{{ msg }}</h2>
    <!-- <mavon-editor v-model="value" :ishljs="true" :externalLink="externalLink"/> -->
    <!-- @childevent="childEventHandler" -->
    <div class="md-v-panel">
        <div v-if="error" class="md-v-error">{{ error }}</div>
        <div class="md-v-content" v-html="md_value"></div>
    </div>
  </div>
</template>

<script>
import markdown from '../assets/js/markdown.js'

export default {
    name:"markdown-view",
    mixins:[markdown],
    data () {
        return {
            msg: 'Markdown View',
            md_value:null,
            error:''
        }
    },
    created(){
        let $vm = this;
        console.log(this.$route);
        if(!this.$route.params.name){
            this.error = "缺少name参数";
            return;
        }
        try{
            let _md = require(`./md/${this.$route.params.name}.md`);
            // console.log(_md);
            if(!_md){
                this.error = `${this.$route.params.name}.md 文件为空`
                return;
            }
            this.$render(_md, (res)=>{
                this.md_value = res;
            })
        }catch(e){
            this.error = `未找到 ${this.$route.params.name}.md 文件`
        }

    },
    computed:{

    },
    components:{
        markdown
    }
}
</script>

<style lang="scss" scoped>
  .markdown-view{
    // background-color: #f1f1f1;

    .md-v-panel {


        .md-v-error {
            color:red
        }
    }
  }
</style>
