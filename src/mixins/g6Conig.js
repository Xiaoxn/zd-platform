import G6 from '@antv/g6'
import insertCss from 'insert-css'
import erd from 'element-resize-detector'
import _ from 'lodash'

// 我们用 insert-css 演示引入自定义样式
// 推荐将样式添加到自己的样式文件中
// 若拷贝官方代码，别忘了 npm install insert-css
insertCss(`
  .g6-toolbar-ul {
    position: absolute;
    top: 70px;
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #545454;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
    width: 100px;
    cursor: pointer;
  }
`)
const tooltip = new G6.Tooltip({
  offsetX: 10,
  offsetY: 20,
  getContent(e) {
    const outDiv = document.createElement('div')
    outDiv.innerHTML = `<div>${e.item._cfg.model.name}</div>`
    return outDiv
  },
  itemTypes: ['node']
})
const toolbar = new G6.ToolBar({
  position: { x: 10, y: 10 }
})

export default {
  data() {
    return {
      containerId: '',
      screenId: '',
      screenState: false,
      // 默认配置
      defaultConfig: {
        width: 500,
        height: 500,
        linkCenter: true,
        modes: {
          default: ['drag-node']
        },
        enabledStack: true,
        // fitView: true,
        // animate: true,
        // defaultNode: {
        //   type: 'flow-rect'
        // },
        defaultNode: {
          size: [80, 40],
          type: 'rect',
          style: {
            fill: '#DEE9FF',
            stroke: '#5B8FF9'
          }
        },
        defaultEdge: {
          style: {
            stroke: '#b5b5b5',
            lineAppendWidth: 3
          }
        }
      }
    }
  },
  mounted() {
    // 监听键盘按键事件
    const self = this
    this.$nextTick(function() {
      self.listenSize()
    })
  },
  methods: {
    reSize: _.debounce((that, element) => {
      that.$nextTick(() => {
        var width = element.offsetWidth
        var height = element.offsetHeight
        if (width && height && that.graph) {
          that.graph.changeSize(width, height)
          // // 在渲染和动画完成后调用
          that.graph.fitCenter()
        }
      })
    }, 1000, {
      leading: true,
      trailing: false
    }),
    // 监听页面大小变化
    listenSize() {
      const that = this
      erd().listenTo(document.getElementById(that.screenId), element => {
        that.reSize(that, element)
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement) {
          that.screenState = true
        } else {
          that.screenState = false
        }
      })
    },
    initGraph() {
      const data = {
        nodes: [
          {
            id: '0',
            label: 'node-0',
            x: 100,
            y: 100,
            description: 'This is node-0.',
            subdescription: 'This is subdescription of node-0.'
          },
          {
            id: '1',
            label: 'node-1',
            x: 250,
            y: 100,
            description: 'This is node-1.',
            subdescription: 'This is subdescription of node-1.'
          },
          {
            id: '2',
            label: 'node-2',
            x: 150,
            y: 310,
            description: 'This is node-2.',
            subdescription: 'This is subdescription of node-2.'
          },
          {
            id: '3',
            label: 'node-3',
            x: 320,
            y: 310,
            description: 'This is node-3.',
            subdescription: 'This is subdescription of node-3.'
          }
        ],
        edges: [
          {
            id: 'e0',
            source: '0',
            target: '1',
            description: 'This is edge from node 0 to node 1.'
          },
          {
            id: 'e1',
            source: '0',
            target: '2',
            description: 'This is edge from node 0 to node 2.'
          },
          {
            id: 'e2',
            source: '0',
            target: '3',
            description: 'This is edge from node 0 to node 3.'
          }
        ]
      }
      const graph = new G6.Graph({
        container: this.containerId,
        ...this.defaultConfig,
        plugins: [toolbar]
      })
      graph.data(data)
      graph.render()
    }
  }
}
