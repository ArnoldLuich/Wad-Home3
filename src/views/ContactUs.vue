<template>
  <div class="contactUs">
    <h1>This is an about page</h1>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
name: "ContactUS",
components: {Footer},
props: ["productListsale"],
}
</script>
