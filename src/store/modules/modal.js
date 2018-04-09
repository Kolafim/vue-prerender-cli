import modalMutations from '../mutations/modal.js'

export default {
  state: {
    toast:{
      hide:true,
      type:0,         // text  loading  err
      msg:'',
      theme:0
    },
    modal:{
      hide:true,
      title:'',
      msg:'',
      theme:0,
      bg:1            // 是否显示背景
    }
  },
  mutations: modalMutations
}
