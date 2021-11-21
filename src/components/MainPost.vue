<template>
 <div id= "comp-list-two">
 <p class="item" v-for="product in productList" :key="product.id">
     
<div2 class="user" >
<img alt="User" class="userpic" src="@/assets/user.png">
</div2><br>
<span class="time"> {{product.time}} </span><br><br>

<!--<span v-if!=null class="PostPic">  <img alt="User" src=""> </span>-->
<div3 class="PostPic" >
  <v-bind>
<img alt="Post" class= "postpic" src ="@/assets/pic1.jpg">
  </v-bind>
</div3><br>
   <span class="PostText"> {{ product.postText }} </span>
   <button v-on:click="DecreasePrice(product.id)">Like</button>
   <span class="price"> {{ product.like }} </span>
 </p>
 </div>
</template>

<script>
export default {
  name: "MainPost",
  methods: {
    DecreasePrice(clicked_id) {
      this.$store.state.productList.forEach((product) => {
        if (product.id === clicked_id) {
          product.like += 1;
        }
      });
    },
  },

computed: {
productList(){
return this.$store.state.productList
}}
}
</script>



<style scoped>
.item{
 background: rgb(253, 253, 253);
 margin-left: 30%;
 margin-right: 30%;
 margin-bottom: 5px;
 padding: 3px 5px;}
#comp-list-two{
 background: #1862c9;
 box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
 margin-bottom: 30px;
 padding: 10px 20px;
}
#comp-list-two ul{
 padding: 0;
 list-style-type: none;
}
#comp-list-two li{
 margin-right: 10px;
 margin-top: 10px;
 padding: 20px;
 background: rgba(255,255,255,0.7);
}


.PostText{
 color: #000000;
 display: block;
 margin-top: 50px;
 text-align: left;
}

.time{
    font-weight: 100;
    font-size: 70%;
    float: right
}
.like{
    margin-bottom: 10px;
    float: left;
}

.userpic{
  max-width: 10%;
  height: auto;
  float: left
}
.postpic{
  max-width: 99%;
  height: auto;
  float: inside;
}
.price{
 font-weight: bold;
 color: #860CE8;
 display: block;
}

</style>