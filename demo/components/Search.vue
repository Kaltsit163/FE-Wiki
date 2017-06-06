<template>
  <div class="">
    <h2>搜索框</h2>
    <h3>组件用法</h3>
    <p>常用于列表页面搜索输入搜索字段页面</p>
    <div class="search-ct">
      <jo-search :search="searchParam"  @search-change="updateSearch"  @confirm-search="confirmSearch" @focus-change="focusChange" ></jo-search>
    </div>
    <jo-button type="main" @click.left="searchParam.placeholder = 'placeholder也被改变了' ">改变一下placeholder</jo-button>
    <jo-button type="main" @click.left="searchParam.max = 20">长度限制已经被设置为20</jo-button>
    <p>示例代码：</p>

    <pre>
      <code class="language-html">
        
        &lt;template&gt;
          &lt;jo-search :search="searchParam" 
              @search-change="updateSearch" @confirm-search="confirmSearch" @focus-change="focusChange"&gt;&lt;/jo-search&gt;
        &lt;/template&gt; 

        &lt;script&gt;
          export default {
            data() {
              return {
                searchParam: {
                  placeholder: "",
                  word: "搜索默认值",
                  max: 10
                }
              }
            },
            methods : {
              focusChange (isFocus) {
                this.$message({
                  type: "info",
                  message: '现在搜索框' + (isFocus ? '获取焦点了' : '失去焦点了'),
                  duration: 1000
                });
              },
              confirmSearch (data) {
                this.$message({
                  type: "success",
                  message: '你搜索了' + data
                });
              },
              updateSearch (word) {
                this.searchParam.word = word;
                this.$message({
                  type: "success",
                  message: '搜索词已经改变成了: ' + word
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
        <td>placeholder</td>
        <td>搜索默认值</td>
        <td>srting</td>
        <td>输入搜索</td>
      </tr>
      <tr>
        <td>word</td>
        <td>输入框默认搜索值</td>
        <td>string</td>
        <td>""</td>
      </tr>
        <td>max</td>
        <td>搜索值最大长度</td>
        <td>number</td>
        <td>20</td>
      </tr>
    </table>
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
            searchParam: {
              placeholder: "输入参数",
              word: "这里可以设置首次模糊搜索值",
              max: 10
            }
          }
      },
      created() {
          HlInit()
      },
      ready () {

      },
      methods : {
        focusChange (isFocus) {
          this.$message({
            type: "info",
            message: '现在搜索框' + (isFocus ? '获取焦点了' : '失去焦点了'),
            duration: 1000
          });
        },
        confirmSearch (data) {
          this.$message({
            type: "success",
            message: '你搜索了' + data,
            duration: 1000
          });
        },
        updateSearch (word) {
          this.searchParam.word = word;
          this.$message({
            type: "success",
            message: '搜索词已经改变成了: ' + word,
            duration: 1000
          });
        }
      }
    }
</script>
<style scoped>
  .search-ct {
    margin: 20px auto;
  }
</style>
