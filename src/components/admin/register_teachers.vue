<template>
    <button type="button" class="btn btn-primary mx-2 mt-2" @click="back_menu()"><i
            class="fa-solid fa-arrow-left me-2"></i>Volver al menu</button>

    <div class="container full-height justify-content-center">
        <div class="text-center">
            <h2 class="title">Añade Profesores al Sistema</h2>

            <div class="row mb-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i class="fas fa-user"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Apellidos" aria-label="Apellidos">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i class="fas fa-calendar-alt"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Edad" aria-label="Edad">
                    </div>
                </div>
            </div>

            <div class="row mb-3">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i class="fas fa-id-card"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Cédula" aria-label="Cédula">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i class="fas fa-phone"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Teléfono" aria-label="Teléfono">
                    </div>
                </div>
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i class="fas fa-envelope"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Correo Electrónico"
                            aria-label="Correo Electrónico">
                    </div>
                </div>
            </div>

            <div class="row mb-2">
                <div class="col">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text d-flex justify-content-center align-items-center">
                                <i class="fas fa-chalkboard-teacher"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder="Especialidad" aria-label="Especialidad">
                    </div>
                </div>
            </div>

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
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>30</td>
                        <td>123456789</td>
                        <td>(555) 123-4567</td>
                        <td>john.doe@example.com</td>
                        <td>Matemáticas</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>28</td>
                        <td>987654321</td>
                        <td>(555) 765-4321</td>
                        <td>mary.moe@example.com</td>
                        <td>Historia</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>35</td>
                        <td>555555555</td>
                        <td>(555) 555-5555</td>
                        <td>july.dooley@example.com</td>
                        <td>Ciencias</td>
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
            form: {
                first_row: [
                    { name: 'Nombre', icon: 'fas fa-user', placeholder: 'nombre' },
                    { name: 'Apellidos', icon: 'fas fa-user', placeholder: 'apellidos' },
                    { name: 'Edad', icon: 'fas fa-calendar-alt', placeholder: 'edad' }
                ],
                second_row: [
                    { name: 'Cédula', icon: 'fas fa-id-card', placeholder: 'cédula' },
                    { name: 'Teléfono', icon: 'fas fa-phone', placeholder: 'teléfono' },
                    { name: 'Correo Electrónico', icon: 'fas fa-envelope', placeholder: 'correo electrónico' }
                ],
                third_row: [
                    { name: 'Especialidad', icon: 'fas fa-chalkboard-teacher', placeholder: 'especialidad' }
                ]
            }
        }
    },
    methods: {
        back_menu() {
            this.$router.push('/panel2')
        }
    }
}
</script>

<style scoped>
.title {
    border-bottom: 4px solid blueviolet;
}
</style>