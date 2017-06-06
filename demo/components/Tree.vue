<template>
  <div class="">
    <h2>树形控件</h2>
    <p>常用于分组，分类嵌套选择的使用场景</p>
    <p>用清晰的层级结构展示信息，可展开或折叠。</p>

    <h3>正常模式</h3>
    <jo-tree 
      :data="data" 
      :props="defaultProps"
      @node-click="handleNodeClick" 
      :highlight-current="true"></jo-tree>
    <p>示例代码：</p>
  
    <pre>
        <code class="language-html">
          
          &lt;template&gt;
            &lt;jo-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"&gt;&lt;/jo-tree&gt;
          &lt;/template&gt; 
  
          &lt;script&gt;
            export default {
              data() {
                return {
                  data: [{
                    mark: '一级 1',
                    children: [{
                      label: '二级 1-1',
                      children: [{
                        label: '三级 1-1-1'
                      }]
                    }]
                  }, {
                    mark: '一级 2',
                    children: [{
                      label: '二级 2-1',
                      children: [{
                        label: '三级 2-1-1'
                      }]
                    }, {
                      mark: '二级 2-2',
                      children: [{
                        label: '三级 2-2-1'
                      }]
                    }]
                  }, {
                    mark: '一级 3',
                    children: [{
                      label: '二级 3-1',
                      children: [{
                        label: '三级 3-1-1'
                      }]
                    }, {
                      mark: '二级 3-2',
                      children: [{
                        label: '三级 3-2-1'
                      }]
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'mark'
                  }   
                }
              },
              methods: {
                handleNodeClick(data) {
                  this.$message({
                    type: "success",
                    message: "已经选了节点"
                  });
                  console.log(data);
                }
              }
            }
          &lt;/script&gt;
  
        </code>
    </pre>

    <h3>手风琴模式</h3>
    <jo-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"></jo-tree>

    <p>示例代码：</p>
  
    <pre>
        <code class="language-html">
          
          &lt;template&gt;
            &lt;jo-tree :data="data" :props="defaultProps" accordion @node-click="handleNodeClick"&gt;&lt;/jo-tree&gt;
          &lt;/template&gt; 
  
          &lt;script&gt;
            export default {
              data() {
                return {
                  data: [{
                    label: '一级 1',
                    children: [{
                      label: '二级 1-1',
                      children: [{
                        label: '三级 1-1-1'
                      }]
                    }]
                  }, {
                    label: '一级 2',
                    children: [{
                      label: '二级 2-1',
                      children: [{
                        label: '三级 2-1-1'
                      }]
                    }, {
                      label: '二级 2-2',
                      children: [{
                        label: '三级 2-2-1'
                      }]
                    }]
                  }, {
                    label: '一级 3',
                    children: [{
                      label: '二级 3-1',
                      children: [{
                        label: '三级 3-1-1'
                      }]
                    }, {
                      label: '二级 3-2',
                      children: [{
                        label: '三级 3-2-1'
                      }]
                    }]
                  }],
                  defaultProps: {
                    children: 'children',
                    label: 'label'
                  }   
                }
              },
              methods: {
                handleNodeClick(data) {
                  this.$message({
                    type: "success",
                    message: "已经选了节点"
                  });
                  console.log(data);
                }
              }
            }
          &lt;/script&gt;
  
        </code>
    </pre>


    <h3>Attributes</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>empty-text</td>
        <td>内容为空的时候展示的文本</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>node-key</td>
        <td>每个树节点用来作为唯一标识的属性，整颗树应该是唯一的</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>props</td>
        <td>配置选项，具体看下表</td>
        <td>object</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>load</td>
        <td>加载子树数据的方法</td>
        <td>function(node, resolve)</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>render-content</td>
        <td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
        <td>number</td>
        <td>—</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>render-content</td>
        <td>树节点的内容区的渲染 Function</td>
        <td>Function(h, { node }</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>highlight-current</td>
        <td>是否高亮当前选中节点</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>current-node-key</td>
        <td>当前选中节点的 key，只写属性</td>
        <td>string/number</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>default-expand-all</td>
        <td>是否默认展开所有节点</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>expand-on-click-node</td>
        <td>是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，<br>
        则只有点箭头图标的时候才会展开或者收缩节点。</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>auto-expand-parent</td>
        <td>展开子节点的时候是否自动展开父节点</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>default-expanded-keys</td>
        <td>默认展开的节点的 key 的数组</td>
        <td>array</td>
        <td>—</td>
        <td>—</td>
      </tr>
       <tr>
        <td>filter-node-method</td>
        <td>对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏</td>
        <td>Function(value, data, node)</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>indent</td>
        <td>相邻级节点间的水平缩进，单位为像素</td>
        <td>number</td>
        <td>—</td>
        <td>16</td>
       </tr>  
    </table>

    <h3>props</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>label</td>
        <td>指定节点标签为节点对象的某个属性值</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>children</td>
        <td>指定子树为节点对象的某个属性值</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>

    <h3>方法</h3>
    <p><strong>Tree</strong> 拥有如下方法，返回目前被选中的节点数组：</p>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>filter</td>
        <td>对树节点进行筛选操作</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>

    <h3>事件</h3>
    <table>
      <tr>
        <th>事件名称</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      <tr>
        <td>node-click</td>
        <td>节点被点击时的回调</td>
        <td>共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
      </tr>
      <tr>
        <td>node-expand</td>
        <td>	节点被展开时触发的事件</td>
        <td>共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
      </tr>
      <tr>
        <td>node-collapse</td>
        <td>节点被点击时的回调</td>
        <td>共三个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td>
      </tr>
    </table>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'Tree',
    data() {
      return {
        data: [{
          mark: '一级 1',
          children: [{
            mark: '二级 1-1',
            children: [{
              mark: '三级 1-1-1'
            }]
          }]
        }, {
          mark: '一级 2',
          children: [{
            mark: '二级 2-1',
            children: [{
              mark: '三级 2-1-1'
            }]
          }, {
            mark: '二级 2-2',
            children: [{
              mark: '三级 2-2-1'
            }]
          }]
        }, {
          mark: '一级 3',
          children: [{
            mark: '二级 3-1',
            children: [{
              mark: '三级 3-1-1'
            }]
          }, {
            mark: '二级 3-2',
            children: [{
              mark: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'mark'
        }   
      }
    },
    created() {
      HlInit();
    },
    methods: {
      handleNodeClick() {
        console.log(arguments);
      }
    }
  }
</script>

