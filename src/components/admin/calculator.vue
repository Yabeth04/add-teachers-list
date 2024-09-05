<template>
    <button type="button" class="btn btn-primary mx-2 mt-2" @click="back_menu()"><i
            class="fa-solid fa-arrow-left me-2"></i>Volver al menu</button>
    <div class="d-flex justify-content-center align-items-center" style="height: 94vh;">
        <div class="calculator card border rounded p-2 shadow">
            <div class="calculator-screen z-depth-1 mt-4 me-2 screen" ref="calculatorScreen">{{ displayValue }}</div>
            <div class="calculator-keys">
                <button type="button" class="operator btn btn-info" v-for="(item, key) in calculator.operators"
                    :key="key" @click="inputScreen(item.value)"><i :class="item.name"></i></button>

                <!-- numbers -->
                <button type="button" value="7" class="btn btn-light waves-effect"
                    v-for="(item, key) in calculator.numbers" :key="key" @click="inputScreen(item.value)">{{ item.name
                    }}</button>

                <button type="button" class="all-clear function btn btn-danger btn-sm"
                    @click="clearScreen()">AC</button>

                <button type="button" class="equal-sign operator btn btn-info" value="="><i
                        class="fa-solid fa-equals" @click="calculate()"></i></button>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Calculator',
    data() {
        return {
            displayValue: '',
            calculator: {
                operators: {
                    suma: { name: 'fa-solid fa-plus', value: '+' },
                    resta: { name: 'fa-solid fa-minus', value: '-' },
                    division: { name: 'fa-solid fa-divide', value: '/' },
                    multiplicacion: { name: 'fa-solid fa-xmark', value: '*' },
                },
                numbers: {
                    0: { name: '0', value: 0 },
                    1: { name: '1', value: 1 },
                    2: { name: '2', value: 2 },
                    3: { name: '3', value: 3 },
                    4: { name: '4', value: 4 },
                    5: { name: '5', value: 5 },
                    6: { name: '6', value: 6 },
                    7: { name: '7', value: 7 },
                    8: { name: '8', value: 8 },
                    9: { name: '9', value: 9 },
                    ',': { name: ',', value: ',' },
                },

            }
        }
    },
    watch: {
        displayValue() {
            const screen = this.$refs.calculatorScreen;
            screen.scrollLeft = screen.scrollWidth
        }
    },
    methods: {
        back_menu() {
            this.$router.push('/panel2')
        },
        inputScreen(value) {
            this.displayValue += value;
        },
        clearScreen() {
            this.displayValue = ''
        },
        calculate(){
            try{
                this.displayValue = eval(this.displayValue) //realiza la operacion con eval
            }catch(error){
                this.$notify({
                    type:'error',
                    title:'Ha ocurrido un error.',
                    text:'Ha realizado una operación prohibida.'
                })
            }
        }
    }
}
</script>

<style scoped>
.screen {
    text-align: right; /* Alinea el texto a la derecha */
    overflow-x: auto; /* Permite el desplazamiento horizontal */
    white-space: nowrap; /* Evita que el contenido se divida en varias líneas */
    font-size: 2rem;
    padding: 0.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
}

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