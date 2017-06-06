<template>
    <div class="">
        <h2>进度条</h2>
        <p>实时显示进度。</p>
        <h3>组件用法</h3>
        <p>常用于上传、下载等场景。</p>
        <p>
            <jo-progressbar :status="status" :progress="progress"></jo-progressbar>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-progressbar :status="status" :progress="progress"&gt;&lt;/jo-progressbar&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            status: 'default',
                            progress: 30,
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <h3>不同状态</h3>
        <p>成功状态。</p>
        <p>
            <jo-progressbar :status="status1" :progress="progress1"></jo-progressbar>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-progressbar :status="status1" :progress="progress1"&gt;&lt;/jo-progressbar&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            status1: 'success',
                            progress1: 100,
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <p>失败状态。</p>
        <p>
            <jo-progressbar :status="status2" :progress="progress2"></jo-progressbar>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-progressbar :status="status2" :progress="progress2"&gt;&lt;/jo-progressbar&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            status2: 'error',
                            progress2: 70,
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
                <td>progress</td>
                <td>百分比进度</td>
                <td>number</td>
                <td>——</td>
                <td>——</td>
            </tr>
            <tr>
                <td>status</td>
                <td>状态</td>
                <td>string</td>
                <td>success,error</td>
                <td>——</td>
            </tr>
        </table>
    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'progressbar',
        components: {

        },
        data() {
            return {
                status: 'default',
                progress: 30,
                status1: 'success',
                progress1: 100,
                status2: 'error',
                progress2: 70
            }
        },
        created() {
            HlInit()
        }
    }
</script>
