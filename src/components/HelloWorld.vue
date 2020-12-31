<template>
  <div class="hello">
    <div>
      <textarea v-model="formula" cols="30" rows="10"></textarea>
      <vue-mathjax :formula="formula"></vue-mathjax>
    </div>
    <div class="btn-group" role="group" aria-label="...">
      <button type="button" class="btn btn-default">Left</button>
      <button type="button" class="btn btn-default">Middle</button>
      <button type="button" class="btn btn-default">Right</button>
    </div>
    <span class="label label-default">Default</span>
    <span class="label label-primary">Primary</span>
    <span class="label label-success">Success</span>
    <span class="label label-info">Info</span>
    <span class="label label-warning">Warning</span>
    <span class="label label-danger">Danger</span>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>

<script>
import { VueMathjax } from "vue-mathjax";
export default {
  name: "HelloWorld",
  components: {
    "vue-mathjax": VueMathjax,
  },
  data() {
    return {
      formula: "$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$",
      // formula:"",
      msg: "Welcome to Your Vue.js App",
      obj: null,
    };
  },
  methods: {
    generateMath(a, b) {
      let str =
        "$$x = {-" +
        b +
        " \\pm \\sqrt{" +
        b +
        "^2-4" +
        a +
        "c} \\over 2" +
        b +
        "}.$$";
      return str;
    },
  },
  created() {
    this.formula = this.generateMath(5, 6);
  },
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
