<template>
<!--vue2双向绑定原理-->
  <div class="img_container">
    <h1 v-show="person.name">姓名:{{person.name}}</h1>    
    <h1>年龄:{{person.age}}</h1>
    <h1 v-show="person.sex">性别:{{person.sex}}</h1>
    <h1>爱好:{{person.hobby}}</h1>
    <button @click="addSex">添加性别</button>
    <button @click="deleteName">删除姓名</button>
    <button @click="editHobbyOne">修改第一个爱好</button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data() {
    return {
      person:{
        name:'zhangsan',
        age:16,
        hobby:['读书','吃饭']
      }
    };
  },
  created(){
  },
  methods: {
    addSex(){
      // this.person.sex = '男';//直接添加属性是不行的
      // Vue.set(this.person,'sex','男');
      this.$set(this.person,'sex','男');
      console.log(this.person)
    },
    deleteName(){
      // delete this.person.name;
      this.$delete(this.person,'name')
      console.log(this.person)
    },
    editHobbyOne(){
       this.$set(this.person.hobby,0,'打游戏')
    }
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
  height: 200px;
}
</style>