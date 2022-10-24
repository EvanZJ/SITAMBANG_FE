<template>
    <nav>
        <h2>SITAMBANG</h2>
        <div>
            <router-link to='/login'>Login</router-link>
            <router-link to='/register'>Register</router-link>
        </div>
    </nav>
    <!-- Idk why this not work -->
    <!-- <PreNavBar /> -->
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
    methods:{

    }
}
</script>

