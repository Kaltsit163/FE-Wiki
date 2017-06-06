<template>
    <div class="">
        <h2>开关</h2>
        <p>常用的开关按钮。</p>
        <h3>组件用法</h3>
        <p>开关组件的常见用法。</p>
        <p>
            <jo-switch :open="open" @click="open=!open"></jo-switch>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-switch :open="open" @click="open=!open"&gt;&lt;/jo-switch&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            open: false
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <h3>属性</h3>
        <table>
            <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
            </tr>
            <tr>
                <td>open</td>
                <td>开关是否开启</td>
                <td>boolean</td>
                <td>——</td>
                <td>false</td>
            </tr>
        </table>
    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'switch',
        components: {

        },
        data() {
            return {
                open: false
            }
        },
        created() {
            HlInit()
        }
    }
</script>
