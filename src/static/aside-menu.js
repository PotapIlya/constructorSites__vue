export const asideMenu = [

  {
    id: 'buttons',
    title: 'Кнопки',
    children: [
      {
        title: 'Кнопка 1',
        html: '<button style="$STYLE">$TEXT</button>',
        info: {
          id: 'button_1',
          parentId: 'buttons',
        }
      },
      {
        title: 'Кнопка 2',
        html: '<button style="$STYLE">button_2</button>',
        info: {
          id: 'button_2',
          parentId: 'buttons',
        }
      },
    ]
  },
  {
    title: 'Blocks',
    children: [
      { title: 'block_1', },
      { title: 'block_2', },
      { title: 'block_3', }
    ]
  }

]
