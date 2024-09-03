<template>
    <button type="button" class="btn btn-danger mx-2 mt-2" @click="back_principal()" >Cerrar Sesión <i class="fa-solid fa-right-from-bracket ms-2"></i></button>

    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="border rounded p-4 shadow" style="background-color: #f8f9fa;">
            <h5 class="text-center mb-4">Seleccione una opción</h5>
            <div class="d-flex justify-content-center">
                <button type="button" class="btn btn-outline-primary mx-2" v-for="(item,key) in menu" :key="key" @click="options(item.value)">{{ item.name}}<i :class="item.icon"></i></button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Panel2',
    data() {
        return {
            menu: {
                calculator: {name:'Calculadora', icon: 'fa-solid fa-calculator ms-2',value:1},
                register: {name:'Registrar Profesores',icon:'fa-solid fa-user ms-2' ,value:2},
                list: {name:'Ver Lista', icon:'fa-solid fa-eye ms-2',alue:3},
            }
        }
    },
    methods: {
        back_principal(){
            this.$router.push('./') 
        },
        options(value){
            if(value === 1){
                this.$router.push('/calculator')
                this.$notify({
                    type:'success',
                    title:'Exito',
                    text:'Has ingresado con éxito a la calculadora.'
                })
            }else if(value == 2){
                this.$router.push('/register_teachers')
                this.$notify({
                    type:'success',
                    title:'Exito',
                    text:'Has ingresado con éxito al registro de profesores'
                })
            }else if(value == 3){
                this.$router.push('/show_list')
                this.$notify({
                    type:'success',
                    title:'Exito',
                    text:'Has ingresado con éxito a la lisa de profesores'
                })
            }
        }
    }
}
</script>

<style scoped>
</style>