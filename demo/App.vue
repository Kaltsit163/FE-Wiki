<template>
    <div id="app">
        <header class="g-hd">
            <div class="g-box fix">
                <div class="u-logo">Jo</div>
                <p class="u-desc">——聚客通前端业务组件库</p>
            </div>
        </header>
        <main class="g-bd">
            <div class="g-box fix">
                <div class="g-menu">
                    <p>目录</p>
                    <ul class="menu">
                        <li v-for="(item, index) of routes">
                            <router-link :class="{ 'active': isActive(item.name) }" :to="{ name: item.name}">{{item.value}}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="g-ct">
                    <router-view></router-view>
                </div>
            </div>
        </main>
        <BackTop></BackTop>
    </div>
</template>

<script>

export default {
    name: 'app',
    data() {
        return {
            routes
        }
    },
    methods: {
        isActive(name) {
            return this.$route.name === name
        }
    },
    created() {

    }
}
</script>

<style lang="scss">
    @import "./index.scss";
</style>
