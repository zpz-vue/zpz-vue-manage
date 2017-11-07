export default {
  namespaced: true,
  state: {
    menuData: [],
    isCollapse: false,
    language: 'zh'
  },
  mutations: {
    LOAD_MENU_DATA: (state, {menuData}) => {
      state.menuData = menuData
    },
    SET_IS_COLLAPSE: (state, {isCollapse}) => {
      state.isCollapse = isCollapse
    },
    SET_LANGUAGE: (state, {language}) => {
      state.language = language
    }
  },
  actions: {
    loadMenuData ({commit}) {
      commit('LOAD_MENU_DATA', {
        menuData: [{
          'id': 1,
          'parentId': null,
          'sort': 0,
          'name': '工作台',
          'href': '/workbench',
          'en': 'workbench',
          'icon': 'fa fa-dashboard',
          'children': [],
          'isShow': '1'
        }, {
          'id': 2,
          'parentId': null,
          'sort': 1,
          'name': '系统设置',
          'href': '/system',
          'en': 'systemSettings',
          'icon': 'fa fa-cog',
          'children': [{
            'id': 3,
            'parentId': 2,
            'sort': 2,
            'name': ' 用户管理',
            'href': '/system/user',
            'en': 'userManagement',
            'icon': 'fa fa-database',
            'children': [],
            'isShow': '1'
          }, {
            'id': 4,
            'parentId': 2,
            'sort': 3,
            'name': '角色管理',
            'href': '/system/role',
            'en': 'roleManagement',
            'icon': 'fa fa-navicon',
            'children': [],
            'isShow': '1'
          }, {
            'id': 5,
            'parentId': 2,
            'sort': 4,
            'name': '权限管理',
            'href': '/system/resource',
            'en': 'permissionManagement',
            'icon': 'fa fa-universal-access',
            'children': [],
            'isShow': '1'
          }],
          'isShow': '1'
        }, {
          'id': 6,
          'parentId': null,
          'sort': 5,
          'name': '采购部门',
          'href': '/purchase',
          'en': 'purchasingDepartment',
          'icon': 'fa fa-cog',
          'children': [{
            'id': 7,
            'parentId': 6,
            'sort': 6,
            'name': ' 酒店管理',
            'href': '/purchase/hotel',
            'en': 'hotelManagement',
            'icon': 'fa fa-database',
            'children': [],
            'isShow': '1'
          }, {
            'id': 8,
            'parentId': 6,
            'sort': 7,
            'name': '景点管理',
            'href': '/purchase/scenicspot',
            'en': 'scenicSpotManagement',
            'icon': 'fa fa-navicon',
            'children': [],
            'isShow': '1'
          }, {
            'id': 9,
            'parentId': 6,
            'sort': 8,
            'name': '车辆管理',
            'href': '/purchase/vehicle',
            'en': 'vehicleManagement',
            'icon': 'fa fa-universal-access',
            'children': [],
            'isShow': '1'
          }],
          'isShow': '1'
        }]
      })
    },
    setIsCollapse ({commit}) {
      let _isCollapse = this.state.common.isCollapse
      if (_isCollapse) {
        _isCollapse = false
      } else {
        _isCollapse = true
      }
      commit('SET_IS_COLLAPSE', {isCollapse: _isCollapse})
    },
    setLanguage ({commit}, {language}) {
      commit('SET_LANGUAGE', {language: language})
    }
  }
}
