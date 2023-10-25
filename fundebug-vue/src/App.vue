<template>
  <el-row class="mb-4">
    <el-button type="primary" @click="clickAlert">Primary</el-button>
    <el-button type="warning" @click="get">get</el-button>
    <el-button type="danger" @click="myAsyncFunction">myAsyncFunction</el-button>
  </el-row>
</template>

<script>
// require("fundebug-revideo");
// import axios from 'axios';
import functionMethod from '@/assets/js/bridge'


export default {
  name: 'App',
  data() {
    return {
      list: {}
    };
  },
  methods: {
    clickAlert() {
      // alert('aaa')
      // console.log('aaaa');
      // aler("hello");
      throw new Error(undefined)
    },

    get() {
      // axios.post('https://jsonplaceholder.typicode.com/posts/1').then(result => {
      //   console.log(result);
      // }).catch(error => {
      //   console.log(error);
      // })
      // Promise.reject("hello");
      // functionMethod.showA()
      functionMethod.showB()
    },

    async myAsyncFunction() {
      console.log('async');
    },

    showB() {
      // let x = 10;
      // const y = 20;
      // console.log(x+y);
      // const name = 'John';
      // console.log(`Hello, ${name}!`);
      // const { a, b } = { a: 1, b: 2 };
      // console.log(a+b);
      // Promise.reject("hello");
      // let a = '1'
      console.log(this.list[0]/3);
    },

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
