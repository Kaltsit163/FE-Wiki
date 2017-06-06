<template>
    <div class="">
        <h2>分页</h2>
        <p>当数据量过多时，使用分页分解数据。</p>
        <h3>基础用法</h3>
        <p>在一般情况下只需要使用</p>
        <jo-page :current="currentpage" :total="totalpage" :page-size="10"></jo-page>

        <p>示例代码：</p>
        <pre>
            <code class="language-html">
                &lt;template&gt;
                    &lt;jo-page :current="1" :total="100" :page-size="10"&gt;&lt;/jo-page&gt;
                &lt;/template&gt; 
            </code>
        </pre>

        <h3>增加直达</h3>
        <p>如果还需要增加跳转直达，就是<strong>电梯功能</strong>只需要增加<strong>show-elevator</strong>属性即可</p>
        <jo-page :current="currentpage" :total="totalpage" :page-size="10" :show-elevator="true"></jo-page>

        <p>示例代码：</p>
        <pre>
            <code class="language-html">
                &lt;template&gt;
                    &lt;jo-page :current="1" :total="100" :page-size="10" :show-elevator="true"&gt;&lt;/jo-page&gt;
                &lt;/template&gt; 
            </code>
        </pre>

        <h3>更小的尺寸</h3>
        <p>小型分页,适合在<strong>更小的空间</strong>使用，只需要增加<strong>size</strong>属性，并且赋值为<strong>small</strong></p>
        <jo-page :current="currentpage2" :total="totalpage2" :page-size="10" :show-elevator="true" size="small"></jo-page>

        <p>示例代码：</p>
        <pre>
            <code class="language-html">
                &lt;template&gt;
                    &lt;jo-page :current="1" :total="100" :page-size="10" :show-elevator="true" size="small"&gt;&lt;/jo-page&gt;
                &lt;/template&gt; 
            </code>
        </pre>
    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'page',
        components: {

        },
        data() {
            return {
                currentpage: 1,
                data: '',
                totalpage: 1000,
                currentpage2: 1,
                totalpage2: 1000
            }
        },
        created() {
            HlInit();
        },
        methods: {

        }
    }
</script>
