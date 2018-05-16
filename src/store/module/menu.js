import getMenu from '../../api/menu'

const state = {
  menus: [],
  secondMenu: []
}
const getters = {
  menu: state => state.menus,
  secondMenus: state => state.secondMenu
}

const mutations = {
  setMenu(state, {menus}) {
    // console.log('进入mutations ' + menus)
    state.menus = menus
  },
  setSecondMenu(state, {menuId}) {
    state.menus.forEach(item => {
      if (item.id === menuId) {
        state.secondMenu = item.children
      }
    })

  }
}

const actions = {
  //获取菜单
  async getMenus({commit}) {
    let menus = await getMenu()
    commit('setMenu', {menus: menus})
  },
  //获取二级菜单
  async getSeconds({commit}) {

  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
