<script setup>
let cartCream = [
        {  id: 1, 
        image: "../../../public/assets/img/main-time/1.png",
        title: "Orange",
        price: "$140" },
        {  id: 2, 
        image: "../../../public/assets/img/main-time/2.png",
        title: "Banana",
        price: "$140" },
        {  id: 3, 
        image: "../../../public/assets/img/main-time/3.png",
        title: "Kiwi",
        price: "$140" },
        {  id: 4, 
        image: "../../../public/assets/img/main-time/4.png",
        title: "Lemon",
        price: "$140" },
        {  id: 5, 
        image: "../../../public/assets/img/main-time/5.png",
        title: "Orange",
        price: "$140" },
        {  id: 6, 
        image: "../../../public/assets/img/main-time/5.png",
        title: "Orange",
        price: "$140" },
    ];

console.log(cartCream.imageCream);
</script>

<template>
  <div class="cart-cream" v-for="(icecream, index) in cartCream" v-bind:key="index">
        <div class="img-cream">
        <img :src=icecream.image >
        </div>
        <div class="cart-cream-title">
        <h6>{{ icecream.title }}</h6>
        <div class="price">
            <span> $140 </span>
        </div>
        </div>
    </div>
</template>

<style scoped></style>
