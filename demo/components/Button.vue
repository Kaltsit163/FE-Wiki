<template lang="html">
    <div class="">
        <h2>按钮</h2>
        <p>常用的操作按钮。</p>
        <h3>组件用法</h3>
        <p>常用的基础按钮。</p>
        <p>
            <jo-button >默认按钮</jo-button>
            <jo-button type="main">主按钮</jo-button>
            <jo-button type="ghost">幽灵按钮</jo-button>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-button &gt;默认按钮&lt;/jo-button&gt;
            &lt;jo-button type="main"&gt;主按钮&lt;/jo-button&gt;
            &lt;jo-button type="ghost"&gt;幽灵按钮&lt;/jo-button&gt;
            </code>
        </pre>
        <h3>禁用状态</h3>
        <p>按钮不可用状态。</p>
        <p>
            <jo-button :disabled="true">默认按钮</jo-button>
            <jo-button type="main" :disabled="true">主按钮</jo-button>
            <jo-button type="ghost" :disabled="true">幽灵按钮</jo-button>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-button :disabled="true"&gt;默认按钮&lt;/jo-button&gt;
            &lt;jo-button type="main" :disabled="true"&gt;主按钮&lt;/jo-button&gt;
            &lt;jo-button type="ghost" :disabled="true"&gt;幽灵按钮&lt;/jo-button&gt;
            </code>
        </pre>
        <h3>大号按钮</h3>
        <p>页面内容较少，作为强引导按钮。</p>
        <p>
            <jo-button size="lg">默认按钮</jo-button>
            <jo-button type="main" size="lg">主按钮</jo-button>
            <jo-button type="ghost" size="lg">幽灵按钮</jo-button>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-button size="lg"&gt;默认按钮&lt;/jo-button&gt;
            &lt;jo-button type="main" size="lg"&gt;主按钮&lt;/jo-button&gt;
            &lt;jo-button type="ghost" size="lg"&gt;幽灵按钮&lt;/jo-button&gt;
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
                <td>type</td>
                <td>类型</td>
                <td>string</td>
                <td>default,main,ghost</td>
                <td>default</td>
            </tr>
            <tr>
                <td>size</td>
                <td>尺寸</td>
                <td>string</td>
                <td>md,lg</td>
                <td>md</td>
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
        name: 'button',
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
