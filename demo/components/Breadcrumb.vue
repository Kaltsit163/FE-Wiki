<template>
    <div class="">
        <h2>面包屑</h2>
        <p>显示当前页面的路径，快速返回之前的任意页面。</p>
        <h3>组件用法</h3>
        <p>常用于当前页面路径较深时。</p>
        <p>
            <jo-breadcrumb>
                <jo-breadcrumb-item to="/">引入</jo-breadcrumb-item>
                <jo-breadcrumb-item to="/button">按钮</jo-breadcrumb-item>
                <jo-breadcrumb-item>面包屑</jo-breadcrumb-item>
            </jo-breadcrumb>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-breadcrumb&gt;
                &lt;jo-breadcrumb-item to="/"&gt;引入&lt;/jo-breadcrumb-item&gt;
                &lt;jo-breadcrumb-item to="/button"&gt;按钮&lt;/jo-breadcrumb-item&gt;
                &lt;jo-breadcrumb-item&gt;面包屑&lt;/jo-breadcrumb-item&gt;
            &lt;/jo-breadcrumb&gt;
            </code>
        </pre>
        <h3>Breadcrumb 属性</h3>
        <table>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>separator</td>
                <td>分隔符</td>
                <td>string</td>
                <td>——</td>
                <td>/</td>
            </tr>
        </table>
        <h3>Breadcrumb Item 属性</h3>
        <table>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>to</td>
                <td>跳转链接</td>
                <td>string</td>
                <td>——</td>
                <td>——</td>
            </tr>
        </table>
    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'breadcrumb',
        components: {

        },
        data() {
            return {

            }
        },
        created() {
            HlInit()
        }
    }
</script>
