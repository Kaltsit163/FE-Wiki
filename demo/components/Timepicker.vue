<template>
  <div class="">
    <h2>具体时间选择控件</h2>
    <p>常用于用于选择或输入日期</p>

    <h3>先看看普通版本，固定几个时间段给用户选择</h3>
    <jo-time-picker  
        v-model="time1"
        size="small"
        @change="updateTime"
       :picker-options="{start: '00:00', end: '24:00',step: '00:30'}"
        placeholder="请选择">
    </jo-time-picker>

    <h3>其实在大多数情况下，时间只需要精确到分，那么你就需要在标签上添加一个format</h3>
    <jo-time-picker  
        v-model="time1"
        size="small"
        format='HH:mm'
        @change="updateTime"
       :picker-options="{start: '00:00', end: '24:00',step: '00:30'}"
        placeholder="请选择">
    </jo-time-picker>

    <p>示例代码：</p>
  
    <pre>
        <code class="language-html">

          &lt;template&gt;
            &lt;jo-time-picker  
                v-model="time"
                format='HH:mm'
                @change="updateTime"
                :picker-options="{start: '00:00', end: '24:00',step: '00:30'}"
                placeholder="请选择"&gt;
            &lt;/jo-time-picker&gt;
          &lt;/template&gt; 

          &lt;script&gt;
            export default {
              data() {
                return {
                  time: "",
                  value: Date.now()
                }
              },
              created() {
                HlInit();
              },
              methods: {
                updateTime (data) {
                  this.$message({
                    type: "success",
                    message: "你选的时间是" + data
                  })
                }
              }
            }
          &lt;/script&gt;
  
        </code>
    </pre>

    <h3>在看看任意时间段的版本</h3>
    <p>在自定义标签上，通过<strong>selectableRange</strong>可以指定选择时间段的范围</p>
    <jo-time-picker  
        v-model='time2'
        size='small'
        format='HH:mm:ss'
       :picker-options="{ 
         selectableRange: '00:00:00 - 24:00:00',
         format: 'HH:mm:ss'
       }"
       @change = "updateTime"
        placeholder="请选择">
    </jo-time-picker>

     <p>示例代码：</p>
  
    <pre>
        <code class="language-html">

          &lt;template&gt;
            &lt;jo-time-picker  
                v-model="time"
                @change="updateTime"
                :picker-options="{start: '00:00', end: '24:00',step: '00:30'}"
                placeholder="请选择"&gt;
            &lt;/jo-time-picker&gt;
          &lt;/template&gt; 

          &lt;script&gt;
            export default {
              data() {
                return {
                  time: "",
                  value: Date.now()
                }
              },
              created() {
                HlInit();
              },
              methods: {
                updateTime (data) {
                  this.$message({
                    type: "success",
                    message: "你选的时间是" + data
                  })
                }
              }
            }
          &lt;/script&gt;
  
        </code>
    </pre>

    <h3>最后看看</h3>
    <p>可选择任意时间范围，只需要添加<strong>is-range</strong树形即可选择时间范围></p>

    <jo-time-picker  
        v-model="time5"
        is-range
        @change = "updateTime"
        placeholder="请选择">
    </jo-time-picker>


   

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
        <td>true</td>
      </tr>
      <tr>
        <td>clearable</td>
        <td>是否显示清除按钮</td>
        <td>boolean</td>
        <td>—</td>
        <td>true</td>
      </tr>
      <tr>
        <td>size</td>
        <td>尺寸</td>
        <td>string</td>
        <td>large, small, mini	</td>
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
        <td>value</td>
        <td>绑定值</td>
        <td>TimePicker: DateTimeSelect: String</td>
        <td>—</td>
        <td>—</td>
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
        <td>TimePicker 下拉框的类名</td>
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
    </table>

    <h3>Time Select Options</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>start</td>
        <td>开始时间</td>
        <td>string</td>
        <td>—</td>
        <td>09:00</td>
      </tr>
      <tr>
        <td>end</td>
        <td>结束时间</td>
        <td>string</td>
        <td>—</td>
        <td>18:00</td>
      </tr>
      <tr>
        <td>step</td>
        <td>间隔时间</td>
        <td>string</td>
        <td>—</td>
        <td>00:30</td>
      </tr>
      <tr>
        <td>minTime</td>
        <td>最小时间，小于该时间的时间段将被禁用</td>
        <td>string</td>
        <td>—</td>
        <td>00:00</td>
      </tr>
      <tr>
        <td>maxTime</td>
        <td>最大时间，大于该时间的时间段将被禁用</td>
        <td>string</td>
        <td>—</td>
        <td>—</td>
      </tr>
    </table>

    <h3>Time Picker Options</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>selectableRange</td>
        <td>可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</td>
        <td>string/array</td>
        <td>—</td>
        <td>—</td>
      </tr>
      <tr>
        <td>format</td>
        <td>时间格式化(TimePicker)</td>
        <td>string</td>
        <td>小时：HH，分：mm，秒：ss</td>
        <td>'HH:mm:ss'</td>
      </tr>
    </table>

    <h3>Events</h3>
    <table>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>change</td>
        <td>当input的值改变时触发，返回值和文本框一致</td>
        <td>formatted之后的时间</td>
      </tr>
    </table>
  </div>
</template>

<script>
  'use strict'
  export default {
    name: 'Timepicker',
    data() {
      return {
        size: "small",
        time1: "",
        time2: "",
        time3: "",
        time4: "",
        time5: "",
        value: Date.now()
      }
    },
    created() {
      HlInit();
    },
    methods: {
      updateTime (data) {
        this.$message({
          type: "success",
          message: "你选的时间是" + data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.top-msg-ct {
  margin: 20px auto;
}
</style>