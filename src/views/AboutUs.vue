<template>
  <div class="aboutUs">
    <h1>This is an about page2</h1>
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
