let ref = {}
let index = 0
//获取用户权限
function getRoles(vnode) {
  if (!vnode) {
    return [];
  }
  const { GlobalApp } = vnode.context;
  if (GlobalApp && GlobalApp.userInfo) {
    return GlobalApp.userInfo.role || [];
  } else {
    const appNode = vnode.context.$root.$children[0];
    if (appNode && appNode.userInfo) {
      return appNode.userInfo.role || [];
    } else {
      return [];
    }
  }
}
export default {
  inserted(el, binding, vnode) {
    const _uid = index
    index++
    ref[_uid] = {
      node: document.createComment('v-permission'),
      flag:false,
      parentNode: el.parentNode,
    }
    el._uid = _uid
    const roles = getRoles(vnode);
    const { value } = binding;
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role);
      });
      // 对无权限的节点进行删除和标记
      if (!hasPermission) {
        el.parentNode.insertBefore(ref[_uid].node, el);
        el.parentNode && el.parentNode.removeChild(el);
        ref[_uid].flag = true
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','readonly']"`);
    }
  },
  // update(el, binding, vnode){
  //   const _uid = el._uid
  //   const roles = getRoles(vnode)
  //   const { value } = binding
  //   if (value && value instanceof Array && value.length > 0) {
  //     const permissionRoles = value
  //     const hasPermission = roles.some(role => {
  //       return permissionRoles.includes(role)
  //     })
  //     const permissionFlag = ref[_uid].flag
  //     if (!hasPermission) {
  //       // 无权限且未被标记过时，进行节点删除和标记
  //       if (!permissionFlag) {
  //         el.parentNode.insertBefore(ref[_uid].node, el);
  //         el.parentNode && el.parentNode.removeChild(el)
  //         ref[_uid].flag = true
  //       }
  //     } else {
  //       //有权限且有标记过的位置才做节点还原和删除标记
  //       if (permissionFlag) {
  //         ref[_uid].parentNode.insertBefore(el, ref[_uid].node);
  //         ref[_uid].parentNode.removeChild(ref[_uid].node, el);
  //       }
  //     }
  //   } else {
  //     throw new Error(`need roles! Like v-permission="['admin','readonly']"`)
  //   }
  // },
  unbind(el){
    const _uid = el._uid
    // console.log(_uid)
    delete ref._uid
  }
};
