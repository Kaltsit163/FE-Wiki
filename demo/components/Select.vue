<template>
  <div class="">
    <h2>下拉选择框</h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>
    <h3>组件用法</h3>
    <p>常用于搜索中通过下拉选项框设置搜索选项框</p>
    <div class="select-ct">
      <jo-select :disable= "select.disable" :width = "select.width" :options="select.options" :name="select.name" @select-change="updateSelect"></jo-select>
    </div>

    <jo-button type="main" @click.left="select.width = 260">使用默认尺寸</jo-button>
    <jo-button type="main" @click.left="select.width = 100">使用小一点的尺寸</jo-button>
    <jo-button type="main" @click.left="select.width = 300">使用大一点的尺寸</jo-button>
    <jo-button type="main" @click.left="select.disable = !select.disable">禁用/恢复下拉框</jo-button>
    
    <p>示例代码：</p>

    <pre>
      <code class="language-html">    
        
        &lt;template&gt;
          &lt;div class="select-ct"&gt;
            &lt;jo-select :disable= "select.disable" 
                      :width = "select.width" 
                      :options="select.options" 
                      :name="select.name"  @select-change="updateSelect"&gt;
            &lt;/jo-select&gt;
          &lt;/div&gt;
        &lt;/template&gt; 

        &lt;script&gt;
          export default {
            data&nbsp;() {
              return {
                select: {
                  disable: false,
                  width: 260,
                  name: "name",
                  options: []
                }
              }
            },
            methods: {
              updateSelect (val) {
                this.$message({
                  type: "success",
                  message: '选择成功，选择了第' + (val.index + 1) + '个选项'
                })
              }
            }
          }
        &lt;/script&gt;

      </code>
    </pre>
    <h3>Options</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>disable</td>
        <td>下拉选项框是否被禁用</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>width</td>
        <td>下拉选项框的宽度</td>
        <td>number</td>
        <td>260</td>
      </tr>
      <tr>
        <td>name</td>
        <td>选项中需要展现的文案的Key值</td>
        <td>string</td>
        <td>-</td>
      </tr>
      <tr>
        <td>options</td>
        <td>下拉选项框主要数据</td>
        <td>array</td>
        <td>空数组，如果不传值时点不开的</td>
      </tr>
    </table>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'Select',
    data() {
      return {
        select: {
          disable: false,
          width: 260,
          name: "val",
          options: [
            {
            "val": "选项1123123123123",
            "id": "1",
            "price": 1
            },
            {
              "val": "选项2123123123123",
              "id": "2",
              "price": 2
            },
            {
              "val": "选项31231231231",
              "id": "3",
              "price": 3
            },
            {
              "val": "选项412312312312",
              "id": "4",
              "price": 4
            },
            {
            "val": "选项112312312312",
            "id": "1",
            "price": 1
            },
            {
              "val": "选项21231231231",
              "id": "2",
              "price": 2
            },
            {
              "val": "选项3121231231",
              "id": "3",
              "price": 3
            },
            {
              "val": "选项412312312",
              "id": "4",
              "price": 4
            }
          ]
        }
      }
    },
    created() {
      HlInit()
    },
    methods: {
      updateSelect (val) {
        this.$message({
          type: "success",
          message: '选择成功，选择了第' + (val.index + 1) + '个选项'
        });
      }
    }
  }
</script>

<style scoped lang="scss">
  .select-ct {
    margin: 20px auto;
  }
</style>
