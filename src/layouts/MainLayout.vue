<script setup>
import Footer from './../components/common/Footer.vue';
import Header from './../components/common/Header.vue';
import Navbar from './../components/Navbar.vue';
</script>

<template>
    <Header></Header>
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
</template>