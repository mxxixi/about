/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

option = {
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [89.3, 58212, 'Java'],
        [57.1, 78254, '数据库'],
        [74.4, 41032, '前端'],
        [89.7, 20145, '服务器'],
        [68.1, 79146, '原型设计'],
        [19.6, 91852, '办公软件'],
        [10.6, 101852, '需求管理'],
        [32.7, 20112, 'Photoshop']
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: 'amount' },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 10,
      max: 100,
      text: ['High Score', 'Low Score'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        }
      }
    ]
  };