<template>
  <div class="contactUs">
    <span> Tel: 5555555555 </span><br>
    <span> Email: random@gmail.com </span><br>
    <span>Location: Narva mnt 18 </span>
    
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
