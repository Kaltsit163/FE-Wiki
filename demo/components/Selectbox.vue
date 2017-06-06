<template>
    <div class="">
        <h2>选框控件</h2>
        <p>常用于信息填写中需要突出的部分。</p>
        <h3>组件用法</h3>
        <p>选框控件的基础用法。</p>
        <p>
            <jo-selectbox :checked="checked" @click="checked = !checked">选框1</jo-selectbox>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-selectbox :checked="checked" @click="checked = !checked"&gt;选框1&lt;/jo-selectbox&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            checked: false
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <h3>不同类型</h3>
        <p>提供了强调类型，常用与支付方式选择等场景。</p>
        <p>
            <jo-selectbox :checked="checked1" type="stress" @click="checked1 = !checked1">选框2</jo-selectbox>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-selectbox :checked="checked1" type="stress" @click="checked1 = !checked1"&gt;选框2&lt;/jo-selectbox&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            checked1: false
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <h3>大号选框</h3>
        <p>大尺寸的选框组件。</p>
        <p>
            <jo-selectbox :checked="checked2" size="lg" @click="checked2 = !checked2">选框3</jo-selectbox>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-selectbox :checked="checked2" size="lg" @click="checked2 = !checked2"&gt;选框3&lt;/jo-selectbox&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            checked2: false
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
                <td>checked</td>
                <td>是否选中状态</td>
                <td>boolean</td>
                <td>——</td>
                <td>false</td>
            </tr>
            <tr>
                <td>type</td>
                <td>选框类型</td>
                <td>string</td>
                <td>stress</td>
                <td>——</td>
            </tr>
            <tr>
                <td>size</td>
                <td>选框类型</td>
                <td>string</td>
                <td>lg</td>
                <td>——</td>
            </tr>
        </table>
    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'selectbox',
        components: {

        },
        data() {
            return {
                checked: false,
                checked1: false,
                checked2: false
            }
        },
        created() {
            HlInit()
        }
    }
</script>
