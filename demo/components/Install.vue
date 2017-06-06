<template lang="html">
    <div class="">
        <h2>引入Jo</h2>
        <p>本节介绍如何在项目中使用Jo。</p>
        <p>你可以完整引入整个Jo，也可以根据需要只引入部分组件。</p>
        <h3>完整引入</h3>
        <p>在入口文件app.js中添加以下代码：</p>
        <pre>
            <code class="language-javascript">
            import Vue from 'vue'
            import Jo-Ui from 'jo-ui'

            Vue.use(Jo-Ui)
            </code>
        </pre>
        <h3>部分引入</h3>
        <p>在入口文件app.js中添加以下代码：</p>
        <pre>
            <code class="language-javascript">
            import Vue from 'vue'
            import { Button } from 'Jo'

            Vue.component(Button.name, Button)
            </code>
        </pre>
    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'font',
        components: {

        },
        data() {
            return {

            }
        },
        created() {
            HlInit()
        },

    }
</script>
