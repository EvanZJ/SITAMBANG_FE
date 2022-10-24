<template>
    <NavBar title="SITAMBANG"/>
    <div>
        <p>
            Selamat Datang
        </p>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    data(){
        return{
            menu: false,
        }
    },
    components:{
        NavBar,
    },
    methods:{
        toggleMenu(){
            this.menu = !this.menu
        }
    }
}
</script>