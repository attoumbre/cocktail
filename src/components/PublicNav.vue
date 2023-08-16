<template >
    <div>
        <img alt="Vue logo" src="@/assets/logo.png">
        <nav>
            <router-link to="/"> Acceuil</router-link> |
            <router-link to="/cocktails"> Cocktails</router-link> |
            <router-link to="/contact"> Contact</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    name:'PublicNav'
}
</script>
<style >
    img{
        position:absolute;
        right:30px;
        height: 50px;
    }
</style>