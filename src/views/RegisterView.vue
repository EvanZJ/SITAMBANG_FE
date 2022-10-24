<template>
    <PreNavBar />
    <div>
        <h2>Form Pendaftaran Pembeli</h2>
        <form @submit.prevent="$this.emit()">
            <div>
                <p>Nama</p>
                <input type="text" v-model="nama">
            </div>
            <div>
                <p>Nomor Telepon</p>
                <input type="text" v-model="notelp">
            </div>
            <div>
                <p>Email</p>
                <input type="text" v-model="email">
            </div>
            <div>
                <p>Password</p>
                <input type="password" v-model="password">
            </div>
            <div>
                <p>Konfirmasi Password</p>
                <input type="text" v-model="confirmpw">
            </div>
            <input type="submit" value="Daftar">
        </form>
    </div>
</template>

<script>
import PreNavBar from '../components/PreNavBar.vue'

export default {
    data(){
        return{
            nama: '',
            notelp: '',
            email: '',
            password: '',
            confirmpw: '',
        }
    },
    components:{
        PreNavBar,
    },
    methods:{

    }
}
</script>

