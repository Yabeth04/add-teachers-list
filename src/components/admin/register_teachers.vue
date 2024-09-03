<template>
    <button type="button" class="btn btn-primary mx-2 mt-2" @click="back_menu()"><i class="fa-solid fa-arrow-left me-2"></i>Volver al menu</button>

</template>
<script>
export default {
    name: 'register_teachers',
    data() {
        return {

        }
    },
    methods: {
        back_menu(){
            this.$router.push('/panel2') 
        }
    }
}
</script>

<style scoped>
</style>