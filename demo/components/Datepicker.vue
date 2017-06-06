<template>
  <div class="">
    <h2>日期选择控件</h2>
    <p>常用于用于选择或输入日期</p>
  <!--type="daterange"  -->
    <div class="top-msg-ct">
      <jo-date-picker 
        v-model="value"  
        type="date"
        placeholder="请选择" 
        :default-value="timeDefault" 
        @change = "timeUpdate"></jo-date-picker>
    </div>

    <p>示例代码：</p>
  
    <pre>
        <code class="language-html">
          
          &lt;template&gt;
              &lt;jo-date-picker  
                v-model="value"  
                type="date"  
                placeholder="请选择" 
                :default-value="now" 
                :picker-options="time"  
                @change = "timeUpdate"&gt;
                &lt;/jo-date-picker&gt;
          &lt;/template&gt; 
  
          &lt;script&gt;
            export default {
               data() {
                return {
                  now: Date.now(),
                  time: Date.now(),
                  value: '',
                }
              },
              methods: {
                timeUpdate (data) {
                  this.$message({
                    type: "success",
                    message: "选择的时间为: " + data
                  });
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
        <td>readonly</td>
        <td>完全只读</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>禁用</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>editable</td>
        <td>文本框可输入</td>
        <td>boolean</td>
        <td>—</td>
        <td>false</td>
      </tr>
      <tr>
        <td>clearable</td>
        <td>是否显示清除按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>完全只读</td>
        <td>boolean</td>
        <td>false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>输入框尺寸</td>
        <td>string</td>
        <td>large, small, mini</td>
        <td>—</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>占位内容</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>type</td>
        <td>显示类型</td>
        <td>string</td>
        <td>year/month/date/week/ datetime/datetimerange/daterange</td>
        <td>date</td>
      </tr>
      <tr>
        <td>format</td>
        <td>时间日期格式化</td>
        <td>string</td>
        <td>年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss</td>
        <td>yyyy-MM-dd</td>
      </tr>
      <tr>
        <td>align</td>
        <td>对齐方式</td>
        <td>string</td>
        <td>left, center, right</td>
        <td>left</td>
      </tr>
      <tr>
        <td>popper-class</td>
        <td>DatePicker 下拉框的类名</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>picker-options</td>
        <td>当前时间日期选择器特有的选项参考下表</td>
        <td>object</td>
        <td>—</td>
        <td>{}</td>
      </tr>
      <tr>
        <td>range-separator</td>
        <td>选择范围时的分隔符</td>
        <td>string</td>
        <td>—</td>
        <td>' - '</td>
      </tr>
      <tr>
        <td>default-value</td>
        <td>可选，DatePicker打开时默认显示的时间</td>
        <td>Date</td>
        <td>可被new Date()解析</td>
        <td>—</td>
      </tr>
    </table>

    <h3>Picker Options</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>shortcuts</td>
        <td>设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表</td>
        <td>Object[]</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>disabledDate</td>
        <td>设置禁用状态，参数为当前日期，要求返回 Boolean</td>
        <td>Function</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>firstDayOfWeek</td>
        <td>周起始日</td>
        <td>number</td>
        <td>1 到 7</td>
        <td>7</td>
      </tr>
      <tr>
        <td>onPick</td>
        <td>选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效</td>
        <td>Function({ maxDate, minDate })</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>

    <h3>Shortcuts</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>text</td>
        <td>标题文本</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>onClick</td>
        <td>选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())</td>
        <td>function</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>

    <h3>change</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>回调参数</th>
      </tr>
      <tr>
        <td>change</td>
        <td>当 input 的值改变时触发，返回值和文本框一致</td>
        <td>string</td>
        <td>格式化后的值</td>
      </tr>
    </table>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'Datepicker',
    data() {
      return {
        timeDefault: Date.now(),
        value: '',
      }
    },
    created() {
      HlInit();
    },
    methods: {
      timeUpdate (data) {
        this.$message({
          type: "success",
          message: "选择的时间为: " + data
        });
      }
    }
  }
</script>

<style scoped lang="scss">
.top-msg-ct {
  margin: 20px auto;
}
</style>