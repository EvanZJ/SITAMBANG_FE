<template>
    <nav>
        <h2>SITAMBANG</h2>
        <div>
            <router-link class="routing" to='/login'>Login</router-link>
            <router-link class="routing" to='/register'>Register</router-link>
        </div>
    </nav>
</template>

<style scoped>
nav{
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #028aff;
    color: white;
}

.routing{
    margin: 10px;
    color: white;
}

</style>