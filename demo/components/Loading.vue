<template>
  <div class="">
    <h2>加载控件</h2>
    <p>页面加载控件</p>
    <h3>组件用法</h3>
    <p>常用于保存等需要loading交互的地方</p>
    <div id="foo-ct">
      <jo-loading :loading="loading"></jo-loading>
    </div>
    <jo-button type="main" @click.left="toggleLoding()">关闭/开启区域版本</jo-button>
    <jo-button type="main" @click.left="tryFull()">试一下全屏版本</jo-button>
    <jo-button type="main" @click.left="addText()">试一下自定义文案</jo-button>
    <p>示例代码：</p>

    <pre>
      <code class="language-html">
        
        &lt;template&gt;
          &lt;div id="foo-ct"&gt;
            &lt;jo-loading :loading="loading"&gt;&lt;/jo-loading&gt;
          &lt;/div&gt;
        &lt;/template&gt; 

        &lt;script&gt;
          export default {
            data() {
              return {
                loading: {
                  'text': null,
                  'fullscreen': false,
                  'visible': true,
                  'customClass': 'bar'
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
        <td>text</td>
        <td>显示在加载图标下方的加载文案</td>
        <td>string</td>
        <td>无，如果传null则不显示文案</td>
      </tr>
      <tr>
        <td>fullscreen</td>
        <td>Loading 是否全屏，如果设置target将失效</td>
        <td>boolean</td>
        <td>true</td>
      </tr>
      <tr>
        <td>visible</td>
        <td>Loading 是否出现</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>customClass</td>
        <td>Loading 的自定义类名</td>
        <td>string</td>
        <td>—</td>
      </tr>
    </table>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'Loading',
    data() {
      return {
        loading: {
          'text': null,
          'fullscreen': false,
          'visible': true,
          'customClass': 'bar'
        }
      }
    },
    created() {
      HlInit()
    },
    methods: {
      tryFull () {
        let _this = this;
        this.loading.fullscreen = true;
        this.loading.visible = true;
        setTimeout( ()=> {
          _this.loading.fullscreen = false;
        }, 2000);
      },
      toggleLoding () {
       this.loading.visible = !this.loading.visible;
      },
      addText () {
        this.loading.text = "成功使用自定义文案"
      }
    }
  }
</script>

<style scoped lang="scss">
  #foo-ct {
    margin-bottom: 10px;
    position: relative;
    height: 250px;
    background-color: #f9fafc;
    border-radius: 4px;
    border: 1px solid #eaeefb;
  }
</style>
