<template>
    <button type="button" class="btn btn-primary mx-2 mt-2" @click="back_menu()"><i
            class="fa-solid fa-arrow-left me-2"></i>Volver al menu</button>
    <div class="d-flex justify-content-center align-items-center" style="height: 94vh;">
        <div class="calculator card border rounded p-2 shadow">
            <div class="calculator-screen z-depth-1 mt-4 me-2" :text-content="displayValue" contenteditable="true">{{  }}</div>
            <div class="calculator-keys">
                <button type="button" data-mdb-button-init class="operator btn btn-info"
                    v-for="(item, key) in calculator.operators" :key="key"><i :class="item.name"></i></button>

                <!-- primera fila -->
                <button type="button" data-mdb-button-init value="7" data-mdb-ripple-init
                    class="btn btn-light waves-effect">7</button>
                <button type="button" data-mdb-button-init value="8" data-mdb-ripple-init
                    class="btn btn-light waves-effect">8</button>
                <button type="button" data-mdb-button-init value="9" data-mdb-ripple-init
                    class="btn btn-light waves-effect">9</button>
                <!-- segunda fila -->
                <button type="button" data-mdb-button-init value="4" data-mdb-ripple-init
                    class="btn btn-light waves-effect">4</button>
                <button type="button" data-mdb-button-init value="5" data-mdb-ripple-init
                    class="btn btn-light waves-effect">5</button>
                <button type="button" data-mdb-button-init value="6" data-mdb-ripple-init
                    class="btn btn-light waves-effect">6</button>
                <!-- tercera fila -->
                <button type="button" data-mdb-button-init value="1" data-mdb-ripple-init
                    class="btn btn-light waves-effect">1</button>
                <button type="button" data-mdb-button-init value="2" data-mdb-ripple-init
                    class="btn btn-light waves-effect">2</button>
                <button type="button" data-mdb-button-init value="3" data-mdb-ripple-init
                    class="btn btn-light waves-effect">3</button>
                <!-- cuarta fila -->
                <button type="button" data-mdb-button-init value="0" data-mdb-ripple-init
                    class="btn btn-light waves-effect">0</button>
                <button type="button" data-mdb-button-init class="decimal function btn btn-secondary"
                    value=".">.</button>
                <button type="button" data-mdb-button-init class="all-clear function btn btn-danger btn-sm"
                    value="all-clear">AC</button>

                <button type="button" data-mdb-button-init class="equal-sign operator btn btn-info" value="="><i
                        class="fa-solid fa-equals"></i></button>

            </div>
        </div>
    </div>

</template>
<script>
export default {
    name: 'Calculator',
    data() {
        return {
            calculator: {
                operators: {
                    suma: { name: 'fa-solid fa-plus', value: '+' },
                    resta: { name: 'fa-solid fa-minus', value: '-' },
                    division: { name: 'fa-solid fa-divide', value: '/' },
                    multiplicacion: { name: 'fa-solid fa-xmark', value: '*' },
                }
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
html {
    font-size: 62.5%;
    box-sizing: border-box;
}

.calculator {
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 400px;
    background-color: rgb(21, 35, 54);
}

.calculator-screen {
    width: 100%;
    height: 80px;
    border: none;
    background-color: #252525;
    color: #fff;
    text-align: right;
    padding-right: 20px;
    padding-left: 10px;
    font-size: 4rem;
}

.calculator-keys>button {
    height: 60px;
    font-size: 2rem !important;
}

.equal-sign {
    height: 98%;
    grid-area: 2 / 4 / 6 / 5;
}

.calculator-keys {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 20px;
}
</style>