<template>
  <div class="">
    <h2>顶部提示</h2>
    <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
  
    <h3>基础用法</h3>
    <p>从顶部出现，3 秒后自动消失</p>
    <div class="top-msg-ct">
      <jo-button type="main" @click.left="openMsg()">打开消息提示</jo-button>
    </div>

    <p>示例代码：</p>
  
    <pre>
        <code class="language-html">
          
          &lt;template&gt;
            &lt;div id="foo-ct"&gt;
              &lt;jo-button type="main" @click.left="openMsg()""&gt;&lt;/jo-button&gt;
            &lt;/div&gt;
          &lt;/template&gt; 
  
          &lt;script&gt;
            export default {
              methods: {
                openMsg () {
                  this.$message('这是一条消息提示');
                }
              }
            }
          &lt;/script&gt;
  
        </code>
    </pre>
  
    <h3>顶配用法</h3>
    <p>所有参数都配置上</p>
    <div class="top-msg-ct">
      <jo-button type="main" @click.left="topMsg()">顶配消息提示</jo-button>
    </div>

    <pre>
        <code class="language-html">
          
          &lt;template&gt;
            &lt;div id="foo-ct"&gt;
              &lt;jo-button type="main" @click.left="topMsg()"&gt;&lt;/jo-button&gt;
            &lt;/div&gt;ShowMsg
          &lt;/template&gt;  
  
          &lt;script&gt;
            export default {
              methods: {
                topMsg () {
                  this.$message({
                    message: '一条顶配信息',
                    type: 'success',
                    duration: 1000,
                    showClose: true,
                    onClose: function () {
                      window.alert("回调成功了");
                    }
                  });
                }
              }
            }
          &lt;/script&gt;
  
        </code>
      </pre>
    
    <h3>不同状态</h3>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    
  
    <div class="top-msg-ct">
      <jo-button type="main" @click.left="ShowMsg('success')">成功提示</jo-button>
      <jo-button type="main" @click.left="ShowMsg('warning')">警告提示</jo-button>
      <jo-button type="main" @click.left="ShowMsg('error')">错误提示</jo-button>
    </div>
    <p>示例代码：</p>
  
    <pre>
        <code class="language-html">
          
          &lt;template&gt;
            &lt;div id="foo-ct"&gt;
              &lt;jo-button type="main" @click.left="ShowMsg('success')"&gt;&lt;/jo-button&gt;
              &lt;jo-button type="main" @click.left="ShowMsg('warning')"&gt;&lt;/jo-button&gt;
              &lt;jo-button type="main" @click.left="openMsg('error')"&gt;&lt;/jo-button&gt;
            &lt;/div&gt;ShowMsg
          &lt;/template&gt;  
  
          &lt;script&gt;
            export default {
              methods: {
                ShowMsg (type) {
                  switch (type) {
                    case 'success':
                      this.$message({
                        message: '恭喜你，这是一条成功消息',
                        type: 'success'
                      });
                      break;
                    case 'warning':
                      this.$message({
                        message: '警告哦，这是一条警告消息',
                        type: 'warning'
                      });
                      break;
                    case 'error': 
                      this.$message({
                        message: '错了哦，这是一条错误消息',
                        type: 'error'
                      });  
                    default:
                      break;
                  }
                }
              }
            }
          &lt;/script&gt;
  
        </code>
      </pre>
  
    <h3>可关闭</h3>
    <p>可以添加关闭按钮</p>
    <div class="top-msg-ct">
      <jo-button type="main" @click.left="openMsgClose('info')">消息</jo-button>
      <jo-button type="main" @click.left="openMsgClose('success')">成功</jo-button>
      <jo-button type="main" @click.left="openMsgClose('warning')">警告</jo-button>
      <jo-button type="main" @click.left="openMsgClose('error')">错误</jo-button>
    </div>

    <h3>全局方法</h3>
    <p>Jo为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。</p>

    <h3>Options</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>message</td>
        <td>消息文字</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>type</td>
        <td>主题</td>
        <td>string</td>
        <td>success/warning/info/error</td>
        <td>info</td>
      </tr>
      <tr>
        <td>iconClass</td>
        <td>自定义图标的类名，会覆盖 type</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>customClass</td>
        <td>自定义类名</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>duration</td>
        <td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
        <td>number</td>
        <td>—</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>showClose</td>
        <td>是否显示关闭按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>onClose</td>
        <td>关闭时的回调函数, 参数为被关闭的 message 实例</td>
        <td>function</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'Topmsg',
    data() {
      return {
      }
    },
    created() {
      HlInit();
    },
    methods: {
      openMsg () {
        this.$message('这是一条消息提示');
      },
      topMsg () {
        this.$message({
          message: '这是一条测试信息',
          type: 'success',
          duration: 1000,
          showClose: true,
          onClose: function () {
            window.alert("回调成功了");
          }
        });
      },
      ShowMsg (type) {
        switch (type) {
          case 'success':
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
            break;
          case 'warning':
            this.$message({
              message: '警告哦，这是一条警告消息',
              type: 'warning'
            });
            break;
          case 'error': 
            this.$message({
              message: '错了哦，这是一条错误消息',
              type: 'error'
            });  
          default:
            break;
        }
      },
      openMsgClose (type) {
        switch (type) {
          case 'info':
            this.$message({
              message: '告诉你，这是一条提示消息',
              type: 'info',
              showClose: true
            });
            break;
          case 'success':
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success',
              showClose: true
            });
            break;
          case 'warning':
            this.$message({
              message: '警告哦，这是一条警告消息',
              type: 'warning',
              showClose: true
            });
            break;
          case 'error': 
            this.$message({
              message: '错了哦，这是一条错误消息',
              type: 'error',
              showClose: true,
            });  
          default:
            break;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.top-msg-ct {
  margin: 20px auto;
}
</style>