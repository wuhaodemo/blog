var a = {
  node: 'root',
  next: [
    {
      node: 'second_root'
    },
    {
      node: 'second_child', next: [
        {
          node: 'second_child_1', next: {
            node: 'second_child_1_1'
          }
        },
        {
          node: 'second_child_2'
        }
      ]
    },
    {
      node: 'third_root', next: {
        node: 'third_child', next: [
          {
            node: 'third_child_1', next: {
              node: 'third_child_1_1'
            }
          },
          {
            node: 'third_child_2'
          }
        ]
      }
    }
  ]
}