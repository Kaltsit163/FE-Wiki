<template>
  <div class="">
    <h2>计数框</h2>
    <p>可点击增减按钮实现数量变化，也可直接输入数字</p>
    <h3>组件用法</h3>
    <p>常用于设置数量的区域</p>
    <div class="number-ct">
      <jo-count 
        :rule="numberCount" 
        @count-change="updateCount"
        @foucs-change="updateFoucs"></jo-count>
    </div>
    <jo-button type="main" @click.left="numberCount.disable = !numberCount.disable">切换禁用按钮状态</jo-button>
    <p>示例代码：</p>

    <pre>
      <code class="language-html">
        
        &lt;template&gt;
          &lt;jo-count :rule="numberCount" @count-change="updateCount"&gt;&lt;/jo-count&gt;
        &lt;/template&gt; 

        &lt;script&gt;
          export default {
            data() {
              return {
                numberCount: {
                  disable: false,
                  value: 0,
                  min: 0,
                  max: 100,
                  customClass: "foo"
                }
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
        <td>是否禁用掉计数器</td>
        <td>boolean</td>
        <td>false，不禁用</td>
      </tr>
      <tr>
        <td>value</td>
        <td>计数器初始值</td>
        <td>number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>min</td>
        <td>计数器初始化时最小值</td>
        <td>number</td>
        <td>0</td>
      </tr>
      <tr>
        <td>max</td>
        <td>计数器初始化时最大值</td>
        <td>number</td>
        <td>100</td>
      </tr>
      <tr>
        <td>customClass</td>
        <td>计数器 的自定义类名</td>
        <td>string</td>
        <td>—</td>
      </tr>
    </table>

    <h3>返回值说明</h3>
    <p>1.返回number类型的数据</p>
    <p>2.返回数据经过向上取整</p>
    <p>3.取整的行为发生在输入框获取焦点时或者失去焦点时</p>
  </div>
</template>

<script>
    'use strict'
    export default {
        name: 'NumberCount',
        components: {

        },
        data() {
            return {
              numberCount: {
                disable: false,
                value: 1,
                min: 0,
                max: 100,
                customClass: "foo"
              }
            }
        },
        created() {
            HlInit()
        },
        ready () {

        },
        methods : {
          updateFoucs (status) {
            this.$message({
              type: "info",
              message: "计数器" + (status ? "获得" : "失去") + "焦点了"
            });
          },
          updateCount (number) {
            this.$message({
              type: "success",
              message: "选在计数器值为" + number
            });
            this.numberCount.value = number;
          }
        }
    }
</script>
<style scoped>
  .number-ct {
    margin: 20px auto;
  }
</style>
