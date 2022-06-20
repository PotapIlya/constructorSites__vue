import Vue from 'vue'
import Vuex from 'vuex'

import {asideMenu} from '@/static/aside-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    asideMenu,
    allSite: [
      {           // section
        section: {
          column: 1,
        },
        rows: [  // rows
          [     // row
            {
              id: 'button_1',
              parentId: 'buttons',
              text: 'dwadaw',
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
      console.log(el)
      switch (el.type) {

        case 'button-edit-section':
          state.editPanel = state.allSite[el.indexSection].section;
          break;

        case 'element':
          const {idxSection, idxRow, idxColumn} = el.coords;
          state.editPanel = state.allSite[idxSection].rows[idxRow][idxColumn];
          break;
      }
    },
    closeEditPanel: (state) => {
      state.editPanel = {};
    },
  },
  actions: {

  },
})
