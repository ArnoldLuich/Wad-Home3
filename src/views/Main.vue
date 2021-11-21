<template>
<div class="products">
<button v-on:click="DecreasePrice"> Set likes to 0 </button>
<div1 class="g">
    <input class="" type="text" placeholder="Search..">
</div1>
<MainPost> </MainPost>
<Footer> </Footer>
</div>
</template>

<script>
import MainPost from '@/components/MainPost.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: "Products",
 components: { MainPost, Footer },
 props: ["productList"],
methods: {
DecreasePrice() {
this.$store.state.productList.forEach(product => {
 product.like = 0;
 });
 }}}
</script>
<style scoped>
.g{
    float: right;
}

</style>


