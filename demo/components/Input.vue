<template>
    <div class="">
        <h2>输入框</h2>
        <p>页面常见输入框。</p>
        <h3>组件用法</h3>
        <p>提供多种状态与多种尺寸的输入框。</p>
        <p>
            <jo-input @focus="inputFocus" @blur="inputBlur" :state="state" :hint="inputHint" v-model="model"></jo-input>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;template&gt;
                &lt;jo-input @focus="inputFocus" @blur="inputBlur" :state="state" :hint="inputHint" v-model="model"&gt;&lt;/jo-input&gt;
            &lt;/template&gt;

            &lt;script&gt;
                export default {
                    data() {
                        return {
                            model: '',
                            state: '',
                            inputHint: {
                                show: false,
                                state: 'error',
                                position: 'right',
                                msg: '错误信息'
                            }
                        }
                    },
                    methods: {
                        inputFocus() {
                            this.state = ''
                            this.inputHint.show = false
                        },
                        inputBlur() {
                            this.state = 'error'
                            this.inputHint.show = true
                        }
                    }
                }
            &lt;/script&gt;
            </code>
        </pre>
        <h3>不同状态</h3>
        <p>默认状态：</p>
        <p>
            <jo-input></jo-input>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-input&gt;&lt;/jo-input&gt;
            </code>
        </pre>
        <p>成功状态：</p>
        <p>
            <jo-input :hint="{
                show: true,
                state: 'success',
                position: 'right',
            }"></jo-input>
        </p>
        <p>
            <jo-input :hint="{
                show: true,
                state: 'success',
                position: 'bottom',
                msg: '正确'
            }"></jo-input>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-input :hint="{
                show: true,
                state: 'success',
                position: 'right',
            }"&gt;&lt;/jo-input&gt;
            &lt;jo-input :hint="{
                show: true,
                state: 'success',
                position: 'bottom',
                msg: '正确'
            }"&gt;&lt;/jo-input&gt;
            </code>
        </pre>
        <p>警告状态：</p>
        <p>
            <jo-input :hint="{
                show: true,
                state: 'warn',
                position: 'right',
                msg: '警告信息'
            }" state="warn"></jo-input>
        </p>
        <p>
            <jo-input :hint="{
                show: true,
                state: 'warn',
                position: 'bottom',
                msg: '警告信息'
            }" state="warn"></jo-input>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-input :hint="{
                show: true,
                state: 'warn',
                position: 'right',
                msg: '警告信息
            }" state="warn"&gt;&lt;/jo-input&gt;
            &lt;jo-input :hint="{
                show: true,
                state: 'warn',
                position: 'bottom',
                msg: '警告信息'
            }" state="warn"&gt;&lt;/jo-input&gt;
            </code>
        </pre>
        <p>错误状态：</p>
        <p>
            <jo-input :hint="{
                show: true,
                state: 'error',
                position: 'right',
                msg: '错误信息'
            }" state="error"></jo-input>
        </p>
        <p>
            <jo-input :hint="{
                show: true,
                state: 'error',
                position: 'bottom',
                msg: '错误信息'
            }" state="error"></jo-input>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-input :hint="{
                show: true,
                state: 'error',
                position: 'right',
                msg: '错误信息'
            }" state="error"&gt;&lt;/jo-input&gt;
            &lt;jo-input :hint="{
                show: true,
                state: 'error',
                position: 'bottom',
                msg: '错误信息'
            }" state="error"&gt;&lt;/jo-input&gt;
            </code>
        </pre>
        <h3>不同尺寸</h3>
        <p>提供了四种不同尺寸的输入框。</p>
        <p>
            <jo-input size="sm"></jo-input>
            <jo-input size="md"></jo-input>
            <jo-input size="ml"></jo-input>
            <jo-input size="lg"></jo-input>
        </p>
        <p>
            <jo-input size="xl"></jo-input>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-input size="sm"&gt;&lt;/jo-input&gt;
            &lt;jo-input size="md"&gt;&lt;/jo-input&gt;
            &lt;jo-input size="ml"&gt;&lt;/jo-input&gt;
            &lt;jo-input size="lg"&gt;&lt;/jo-input&gt;
            &lt;jo-input size="xl"&gt;&lt;/jo-input&gt;
            </code>
        </pre>
        <h3>文本框</h3>
        <p>文字内容较多时使用，可自定义宽高。</p>
        <p>
            <jo-input type="textarea"></jo-input>
        </p>
        <p>示例代码：</p>
        <pre>
            <code class="language-html">
            &lt;jo-input type="textarea"&gt;&lt;/jo-input&gt;
            </code>
        </pre>

    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'input',
        components: {

        },
        data() {
            return {
                model: '',
                state: '',
                inputHint: {
                    show: false,
                    state: 'error',
                    position: 'right',
                    msg: '错误信息'
                }
            }
        },
        created() {
            HlInit()
        },
        methods: {
            inputFocus() {
                this.state = ''
                this.inputHint.show = false
            },
            inputBlur() {
                this.state = 'error'
                this.inputHint.show = true
            }
        }
    }
</script>
