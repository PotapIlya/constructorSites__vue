import Vue from 'vue'
import Vuex from 'vuex'

import {asideMenu} from '@/static/aside-menu';
import {element as elementTest, row as rowTest, section as sectionTest} from '@/static/test-data';

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
		statusEditGrid: false,
  },
  getters: {
    getAsideMenu: ({asideMenu}) => asideMenu,
    getAllSite: ({allSite}) => allSite,
    getEditPanel: ({editPanel}) => editPanel,
    getEditGrid: ({statusEditGrid}) => statusEditGrid,
  },
  mutations: {
  	editGridToAddSite: (state, data) => {
			const {idxSection = null, idxRow = null} = data.coords;

			switch (data.type) {

				case 'element':
					state.allSite[idxSection].rows[idxRow].push(elementTest)
					break;

				case 'row':
					state.allSite[idxSection].rows.push(rowTest)
					break;

				case 'section':
					state.allSite.push(sectionTest)
					break;
			}
		},
  	changeStatusEditGrid: (state, status) => {
  		state.statusEditGrid = status;
		},
    setEditPanel: (state, el) => {
      // console.log(el)
      switch (el.type) {

        case 'button-edit-section':
          // state.editPanel = state.allSite[el.indexSection].section;
          break;

        case 'element':
					console.log(el)
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
