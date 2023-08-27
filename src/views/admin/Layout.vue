<template >
    <div class="admin">
    <!-- Admin layout -->
        <AdminHeader/>
        <AdminNav/>
        
        <router-view/>
    </div>
</template>
<script>
import AdminHeader from '@/components/AdminHeader.vue';
import AdminNav from '@/components/AdminNav.vue';
export default {
    name:'AdminLayout',
    components:{
        AdminHeader,
        AdminNav
    }
    
}
</script>
<style >
    
</style>