<template>
    <nav>
        <div v-if="menu">
            <svg @click="toggleMenu" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#028AFF"/>
            <path d="M45.8333 25L45.8333 75L54.1667 75L54.1667 25L45.8333 25ZM25 25L25 75L33.3333 75L33.3333 25L25 25ZM75 25L66.6667 25L66.6667 75L75 75L75 25Z" fill="white"/>
            </svg>
        </div>
        <div v-else>
            <svg @click="toggleMenu" width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" fill="#028AFF"/>
            <path d="M25 54.1667H75V45.8333H25V54.1667ZM25 75H75V66.6667H25V75ZM25 25V33.3333H75V25H25Z" fill="white"/>
            </svg>
        </div>
        <h2>
            {{ title }}
        </h2>
    </nav>
    <div class="overlay">
        <div class="menu-list" v-if="menu">
            <router-link class="routing" to="">Riwayat Transaksi</router-link>
            <router-link class="routing" to="">Informasi Barang</router-link>
            <router-link class="routing" to="">Pemesanan</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            menu: false,
        }
    },
    props:{
        title: String,
    },
    methods:{
        toggleMenu(){
            this.menu = !this.menu
        }
    }
}
</script>

<style scoped>
    nav{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background-color: #028aff;
        color: white;
    }
    .menu-list{
        display: flex;
        background-color: #028aff;
        color: white;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        width: fit-content;
        height: 100%;
        padding: 10px;
    }
    .routing{
        color: white;
        text-decoration: none;
        font-size: 18pt;
        padding-right: 20px;
    }
    .overlay{
        position: absolute;
        height: 91%;
    }
</style>