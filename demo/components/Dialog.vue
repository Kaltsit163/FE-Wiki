<template>
    <div class="">
        <h2>弹窗</h2>
        <p>页面常见对话弹窗。</p>
        <p>
            <jo-button type="main" @click="show=true">显示Dialog</jo-button>
        </p>
        <p>
            <jo-dialog :show="show" @close="show=false">
                <div slot="info" style="text-align:center;">
                    确认删除？
                </div>
                <div slot="btns" class="dialog-btns">
                    <jo-button @click.left="show=false" type="main">确认</jo-button>
                    <span style="display: inline-block; height: 0px; width: 10px"></span>
                    <jo-button @click.left="show=false">取消</jo-button>
                </div>
            </jo-dialog>
        </p>
    </div>
</template>

<script>
    'use strict'

    export default {
        name: 'dialog',
        components: {

        },
        data() {
            return {
                show: false
            }
        },
        created() {
            HlInit()
        },
        methods : {

        }
    }
</script>
