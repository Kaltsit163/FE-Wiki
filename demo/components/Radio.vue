<template lang="html">
    <div class="">
        <h2>单选框</h2>
        <p>单项选择框。</p>
        <h3>组件用法</h3>
        <p>单选框的基础用法。</p>
        <p>
            <jo-radio v-model="radio" label="1" name="doc">选项1</jo-radio>
            <jo-radio v-model="radio" label="2" name="doc">选项2</jo-radio>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-radio v-model="radio" label="1" name="doc"&gt;选项1&lt;/jo-radio&gt;
                &lt;jo-radio v-model="radio" label="2" name="doc"&gt;选项2&lt;/jo-radio&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            radio: '1'
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>

        <h3>禁用状态</h3>
        <p>单选框的禁用状态。</p>
        <p>
            <jo-radio v-model="radio1" label="1" name="dis" disabled>选项1</jo-radio>
            <jo-radio v-model="radio1" label="3" name="dis" disabled>选项3</jo-radio>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-radio v-model="radio1" label="1" name="dis" disabled&gt;选项1&lt;/jo-radio&gt;
                &lt;jo-radio v-model="radio1" label="3" name="dis" disabled&gt;选项3&lt;/jo-radio&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            radio1: '1'
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
                <td>label</td>
                <td>Radio的value值</td>
                <td>string,number,boolean</td>
                <td>——</td>
                <td>——</td>
            </tr>
            <tr>
                <td>name</td>
                <td>Radio的name值</td>
                <td>string</td>
                <td>——</td>
                <td>——</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>是否禁用状态</td>
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
        name: 'radio',
        components: {

        },
        data() {
            return {
                radio: '1',
                radio1: '1'
            }
        },
        created() {
            HlInit()
        }
    }
</script>
