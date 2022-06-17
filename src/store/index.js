import Vue from 'vue'
import Vuex from 'vuex'

import {asideMenu} from '@/static/aside-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideMenu,
    allSite: [
      {           // section
        rows: [  // rows
          [     // row
            {
              id: 'button_1',
              parentId: 'buttons',
              text: '12',
              style: {
                background_color: '#000000',
                color: '#f9ff00',
              }
            },
            {
              id: 'button_1',
              parentId: 'buttons',
              text: '12',
              style: {
                background_color: '#2f2f2f',
                color: '#ff0000',
              }
            },
          ],
          [
            {id: 'button_2', parentId: 'buttons'},
            {id: 'button_2', parentId: 'buttons'},
          ],
        ],
      }

    ],
    editPanel: {},
  },
  getters: {
    getAsideMenu: ({asideMenu}) => asideMenu,
    getAllSite: ({allSite}) => allSite,
    getEditPanel: ({editPanel}) => editPanel,
  },
  mutations: {
    setEditPanel: (state, el) => {
      const {idxSection, idxRow, idxColumn} = el;

      state.editPanel = state.allSite[idxSection].rows[idxRow][idxColumn];
    },
    closeEditPanel: (state) => {
      state.editPanel = {};
    },
  },
  actions: {

  },
})
