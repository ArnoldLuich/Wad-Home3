<template>
  <div class="aboutUs">
    <h1>Welcome to Postit</h1>
    <h2>Get to know about Website</h2>
    <Footer></Footer>
  </div>
</template>

<script>

import Footer from "@/components/Footer.vue";
export default {
name: "AbouUs",
components: {Footer},
props: ["productListsale"],
}
</script>
