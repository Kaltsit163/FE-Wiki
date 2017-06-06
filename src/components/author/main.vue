<template>
  <section>
    <section class="author-wrap">
      <section class="author-head">
        <canvas id="author" width="800"></canvas>
        <svg id="triangle" width="800" height="70" viewBox="0,0,80,5" preserveAspectRatio="none">
          <polygon points="0,0 0,5 80,5" style="fill:#fff"></polygon>
        </svg>
        <img class="author-img" src="http://ohjq9c9az.bkt.clouddn.com/toru.png">
      </section>
      <section class="author-body">
        <p>作者: 刘叶骏南</p>
      </section>
    </section>
  </section>
</template>

<script>
'use strict';
import thunder from './thunder.js';
export default {
  name: 'JoAuthor',
  data() {
    return {

    };
  },
  methods: {

  },
  mounted () {
    thunder.initCanvas("author");
  }
};
</script>

<style lang="scss">
    @import "./main.scss";
</style>