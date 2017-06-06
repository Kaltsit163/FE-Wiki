<template lang="html">
    <div class="">
        <h2>复选框</h2>
        <p>多项选择框。</p>
        <h3>组件用法</h3>
        <p>当v-model绑定一个boolean值时，可代表一种状态的切换。</p>
        <p>
            <jo-checkbox v-model="checkbox" label="true" name="doc">选项1</jo-checkbox>
        </p>
        <p>绑定的model：{{checkbox}}</p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-checkbox v-model="checkbox" label="true" name="doc"&gt;选项1&lt;/jo-checkbox&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            checkbox: true
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <p>当v-model绑定一个array时，代表在多项中进行选择。选中的项会存在array中。</p>
        <p>
            <jo-checkbox v-model="checkbox1" label="1" name="doc">选项1</jo-checkbox>
            <jo-checkbox v-model="checkbox1" label="2" name="doc">选项2</jo-checkbox>
            <jo-checkbox v-model="checkbox1" label="3" name="doc">选项3</jo-checkbox>
            <jo-checkbox v-model="checkbox1" label="4" name="doc">选项4</jo-checkbox>
        </p>
        <p>绑定的model：{{checkbox1}}</p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-checkbox v-model="checkbox1" label="1" name="doc"&gt;选项1&lt;/jo-checkbox&gt;
                &lt;jo-checkbox v-model="checkbox1" label="2" name="doc"&gt;选项2&lt;/jo-checkbox&gt;
                &lt;jo-checkbox v-model="checkbox1" label="3" name="doc"&gt;选项3&lt;/jo-checkbox&gt;
                &lt;jo-checkbox v-model="checkbox1" label="4" name="doc"&gt;选项4&lt;/jo-checkbox&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            checkbox1: ['1', '3']
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <h3>禁用状态</h3>
        <p>多选框的禁用状态。</p>
        <p>
            <jo-checkbox v-model="checkbox2" label="1" name="doc">选项1</jo-checkbox>
            <jo-checkbox v-model="checkbox2" label="3" name="doc" disabled>选项2</jo-checkbox>
            <jo-checkbox v-model="checkbox2" label="4" name="doc" disabled>选项3</jo-checkbox>
        </p>
        <p>绑定的model：{{checkbox2}}</p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-checkbox v-model="checkbox2" label="1" name="doc"&gt;选项1&lt;/jo-checkbox&gt;
                &lt;jo-checkbox v-model="checkbox2" label="3" name="doc" disabled;&gt;选项2&lt;/jo-checkbox&gt;
                &lt;jo-checkbox v-model="checkbox2" label="4" name="doc" disabled&gt;选项3&lt;/jo-checkbox&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            checkbox2: ['1', '3']
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
                <td>Checkbox的value值</td>
                <td>string,number,boolean</td>
                <td>——</td>
                <td>——</td>
            </tr>
            <tr>
                <td>name</td>
                <td>Checkbox的name值</td>
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
        name: 'checkbox',
        components: {

        },
        data() {
            return {
                checkbox: true,
                checkbox1: ['1', '3'],
                checkbox2: ['1', '3']
            }
        },
        created() {
            HlInit()
        }
    }
</script>
