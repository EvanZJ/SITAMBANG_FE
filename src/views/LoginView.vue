<template>
    <PreNavBar />
    <div>
        <h2>Login</h2>
        <form @submit.prevent="$this.emit()">
            <div>
                <p>Email</p>
                <input type="text" v-model="email">
            </div>
            <div>
                <p>Password</p>
                <input type="password" v-model="password">
            </div>
            <input type="submit" value="Login">
        </form>
    </div>
</template>

<script>
import PreNavBar from '../components/PreNavBar.vue'

export default {
    data(){
        return{
            email: '',
            password: '',
        }
    },
    components:{
        PreNavBar,
    },
    methods:{

    }
}
</script>

<style scoped>
    background-color: #028aff;
</style>
