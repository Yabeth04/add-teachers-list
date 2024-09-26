<template>
    <button type="button" class="btn btn-primary mx-2 mt-2" @click="back_menu()"><i
            class="fa-solid fa-arrow-left me-2"></i>Volver al menu</button>

    <div class="container full-height justify-content-center">
        <div class="text-center">
            <h2 class="title">Añade Profesores al Sistema</h2>
            <!-- row 1 -->
            <div class="row mb-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend mr-5" v-for="(item, key) in form.first_row">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i :class="item.icon"></i>
                            </span>
                            <input type="text" class="form-control" :key="key" :placeholder="item.placeholder"
                                aria-label="Nombre" v-model="formData[item.model]">
                        </div>
                    </div>
                </div>
            </div>
            <!-- row 2 -->
            <div class="row mb-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend mr-5" v-for="(item, key) in form.second_row">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i :class="item.icon"></i>
                            </span>
                            <input type="text" class="form-control" :key="key" :placeholder="item.placeholder"
                                aria-label="Apellidos" v-model="formData[item.model]">
                        </div>
                    </div>
                </div>
            </div>
            <!-- row 3 -->
            <div class="row mb-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend mr-5" v-for="(item, key) in form.third_row">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i :class="item.icon"></i>
                            </span>
                            <input type="text" class="form-control" :key="key" :placeholder="item.placeholder"
                                aria-label="Apellidos" v-model="formData[item.model]">
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-success d-flex mb-3 " @click="addTeacher()">Añadir Profesor</button>

            <!-- Tabla -->
            <table class="table mx-auto">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Edad</th>
                        <th>Cédula</th>
                        <th>Teléfono</th>
                        <th>Correo Electrónico</th>
                        <th>Especialidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="(item, key) in teachers" :key="key">
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.surnames }}</td>
                        <td>{{ item.age }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.speciality }}</td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>
<script>
export default {
    name: 'register_teachers',
    data() {
        return {
            formData: {
                nombre: '',
                surnames: '',
                age: '',
                id: '',
                phone: '',
                email: '',
                speciality: ''
            },
            form: {
                first_row: [
                    { title: 'Nombre', icon: 'fas fa-user', placeholder: 'Nombre', model: 'nombre' },
                    { title: 'Apellidos', icon: 'fas fa-user', placeholder: 'Apellidos', model: 'surnames' },
                    { title: 'Edad', icon: 'fas fa-user', placeholder: 'Edad', model: 'age' }
                ],
                second_row: [
                    { title: 'Cédula', icon: 'fas fa-id-card', placeholder: 'Cédula', model: 'id' },
                    { title: 'Teléfono', icon: 'fas fa-phone', placeholder: 'Teléfono', model: 'phone' },
                    { title: 'Correo Electrónico', icon: 'fas fa-envelope', placeholder: 'Correo Electrónico', model: 'email' }
                ],
                third_row: [
                    { title: 'Especialidad', icon: 'fas fa-chalkboard-teacher', placeholder: 'Especialidad', model: 'speciality' },
                ]
            },
            teachers: [],
        }
    },
    methods: {
        back_menu() {
            this.$router.push('/panel2')
        },
        addTeacher() {
            this.teachers.push({...this.formData})

            //limpia formulario
            this.formData = {
                nombre: '',
                surnames:'',
                age:'',
                id:'',
                phone:'',
                email:'',
                speciality:''
            }
        }
    }
}
</script>

<style scoped>
.title {
    border-bottom: 4px solid blueviolet;
}
</style>