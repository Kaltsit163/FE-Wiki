<template>
  <div class="">
    <h2>Pop弹出层</h2>
    <p>常用语在按钮或者文字上给出提示</p>
    <div class="pop-tip-ct">
      <Poptip trigger="hover" title="提示标题" content="提示内容">
        <jo-button type="main">hover看看效果</jo-button>
      </Poptip>

      <Poptip title="提示标题" content="提示内容">
          <jo-button type="main">click再看看</jo-button>
      </Poptip>

      <Poptip trigger="focus" title="提示标题" content="提示内容">
          <jo-button type="main">最后再focus一下</jo-button>
      </Poptip>

      <Poptip
          confirm
          title="您确认删除这条内容吗？"
          @on-ok="ok"
          @on-cancel="cancel">
          <jo-button type="main">最后试试删除</jo-button>
      </Poptip>
    </div>
    
    <h3>当然你还可以分别设置不同位置出现提示</h3>
    <div class="pop-tip-ct">
      <Poptip placement="top" trigger="hover" title="提示标题" content="提示内容">
        <jo-button type="main">顶部</jo-button>
      </Poptip>

      <Poptip placement="right" trigger="hover" title="提示标题" content="提示内容">
          <jo-button type="main">右边</jo-button>
      </Poptip>

      <Poptip placement="bottom" trigger="hover" title="提示标题" content="提示内容">
          <jo-button type="main">底部</jo-button>
      </Poptip>

      <Poptip placement="left" trigger="hover" title="提示标题" content="提示内容">
          <jo-button type="main">左边</jo-button>
      </Poptip>
    </div>



    <p>示例代码：</p>
  
    <pre>
        <code class="language-html">
          
          &lt;template&gt;
              &lt;Poptip trigger="hover" title="提示标题" content="提示内容"&gt;
                &lt;jo-button type="main"&gt;hover看看效果&lt;/jo-button&gt;
              &lt;/Poptip>

              &lt;Poptip title="提示标题" content="提示内容"&gt;
                  &lt;jo-button type="main"&gt;click再看看&lt;/jo-button&gt;
              &lt;/Poptip>

              &lt;Poptip trigger="focus" title="提示标题" content="提示内容"&gt;
                  &lt;jo-button type="main"&gt;最后再focus一下&lt;/jo-button&gt;
              &lt;/Poptip>

              &lt;Poptip
                  confirm
                  title="您确认删除这条内容吗？"
                  @on-ok="ok"
                  @on-cancel="cancel"&gt;
                  &lt;jo-button type="main"&gt;最后试试删除&lt;/jo-button&gt;
              &lt;/Poptip>
              &lt;jo-button type="main" @click.left="openMsg()""&gt;&lt;/jo-button&gt;
          &lt;/template&gt; 
  
          &lt;script&gt;
            export default {
              methods: {
                ok () {
                  this.$message({
                    type: "success",
                    message: "你确认了删除"
                  });
                },
                cancel () {
                  this.$message({
                    type: "info",
                    message: "你取消了删除"
                  });
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
        <td>trigger</td>
        <td>触发方式，可选值为hover（悬停）click（点击）focus（聚焦）,在 confirm 模式下，只有 click 有效</td>
        <td>string</td>
        <td>click</td>
      </tr>
      <tr>
        <td>title</td>
        <td>显示的标题</td>
        <td>string|number</td>
        <td>—</td>
      </tr>
      <tr>
        <td>content</td>
        <td>显示的正文内容，只在非 confirm 模式下有效</td>
        <td>string|number</td>
        <td>空</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>提示框出现的位置，可选值为top，top-start，top-end，bottom，bottom-start，bottom-end，left，left-start，left-end，right，right-start，right-end</td>
        <td>string</td>
        <td>top</td>
      </tr>
      <tr>
        <td>width</td>
        <td>宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px</td>
        <td>number</td>
        <td>—</td>
      </tr>
      <tr>
        <td>confirm</td>
        <td>是否开启对话框模式</td>
        <td>boolean</td>
        <td>false</td>
      </tr>
      <tr>
        <td>ok-text</td>
        <td>确定按钮的文字，只在 confirm 模式下有效</td>
        <td>string</td>
        <td>确定</td>
      </tr>
      <tr>
        <td>cancel-text</td>
        <td>取消按钮的文字，只在 confirm 模式下有效</td>
        <td>string</td>
        <td>取消</td>
      </tr>
    </table>

  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'Pop',
    data() {
      return {

        }
    },
    created() {
      HlInit();
    },
    methods: {
      ok () {
        this.$message({
          type: "success",
          message: "你确认了删除"
        });
      },
      cancel () {
        this.$message({
          type: "info",
          message: "你取消了删除"
        });
      }
    }
  }
</script>

<style scoped lang="scss">
.pop-tip-ct {
  margin: 20px auto;
}
</style>