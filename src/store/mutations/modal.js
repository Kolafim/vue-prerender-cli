import * as types from '../mutation-types.js'

//mutations

export default {
  [types.TOAST_SHOW](state, {type='text',msg='',theme=0}={}) {
    // console.log([type,msg,theme]);
    if(type=='text'){
      if(msg == '') return;
    }else if(type=='loading'){
      if(msg == '') msg = 'Loading..'
    }else if(type == 'err'){
      if(msg == '') msg = 'Error'
    }
    state.toast = {
      hide:false,
      type,
      msg,
      theme
    }
  },
  [types.TOAST_HIDE](state) {
    state.toast.hide = true
  },
  [types.MODAL_SHOW](state, {title='',msg='',theme=0,bg=1}={}) {
    if(msg == '') {
      console.log('MODAL_SHOW msg为空');
      return;
    }
    state.modal = {
      hide:false,
      title,
      msg,
      theme,
      bg
    }
  },
  [types.MODAL_HIDE](state) {
    state.modal.hide = true
  }
}
