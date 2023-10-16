<template>
    <div class="contenedor_">
        <div class="cabecera">
            <b-button type="button" variant="danger" size="sm" @click="cerrar_sesione"><i class="fas fa-times"></i></b-button>
        </div>
        <div class="contenedor_formulario">
            <div class="formulario_registro">
                <b-container fluid="">
                    <form @submit.prevent="guardar">
                        <b-row>
                            <b-col sm="12" class="mt-3">
                                <h3>
                                    Registro
                                </h3>
                            </b-col>
                            <b-col sm="12" class="mt-4">
                                <label for="">Código</label>
                                <b-form-input type="text" v-model="codigo" required size="sm"></b-form-input>
                            </b-col>
                            <b-col sm="12" class="mt-3">
                                <label for="">Nombre</label>
                                <b-form-input type="text" v-model="nombre" required size="sm"></b-form-input>
                            </b-col>
                            <b-col sm="12" class="mt-3">
                                <label for="">Precio</label>
                                <b-form-input type="number" step="0.01" v-model="precio" required size="sm"></b-form-input>
                            </b-col>
    
                            <b-col sm="12" class="mt-4">
                                <b-button type="submit" block size="success" variant="sm">Guardar</b-button>
                            </b-col>
                        </b-row>
                    </form>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Registro',
    data() {
        return {
            codigo: this.$route.query.k,
            nombre: '',
            precio: ''
        }
    },
    methods: {
        async guardar(){
            let f = {
                api: 'productos',
                formulario: {
                    codigo: this.codigo.trim(),
                    nombre: this.nombre.trim().toUpperCase(),
                    precio: this.precio
                }
            }

            await this.guardar_data(f)
            this.codigo = ''
            this.nombre = ''
            this.precio = ''
        },
        cerrar_sesione(){
            this.cerrar_sesion()
        },
        ...mapActions(['guardar_data', 'cerrar_sesion'])
    },
}
</script>

<style>
    .contenedor_{
        width: 100%;
        height: 100vh;
        background-color: #e9e9e9;
    }
        .cabecera{
            width: 100%;
            height: 40px;
            background-color: rgb(68, 146, 68);
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            padding-right: 10px;
        }

        .contenedor_formulario{
            width: 100%;
            height: calc(100% - 40px);
            display: flex;
            justify-content: center;
            padding-top: 15px;
            padding-bottom: 15px;
        }

        .formulario_registro{
            width: 610px;
            height: auto;
            background-color: white;
            border-radius: 4px;
        }
</style>