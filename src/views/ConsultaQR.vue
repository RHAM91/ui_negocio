<template>
    <div class="contenedor">
        <div class="cabecera">

        </div>

        <div class="cuerpo">
            <div class="formulario">
                <b-container fluid="">
                    <b-row>
                        <b-col sm="12" class="mt-3">
                            <div class="nombre_producto">
                                {{ nombre }}
                            </div>
                        </b-col>
                        <b-col sm="12" class="mt-3">
                            <div class="precio">
                                Q{{ precio | decimales }}
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ConsultaQR',
    filters: {
        decimales: function(val){

            let r = parseFloat(val)
            return r.toFixed(2)
        }
    },
    data() {
        return {
            parametro: this.$route.params.codigo,
            nombre: '',
            precio: ''
        }
    },
    methods: {
        async buscar(){
            let f = {
                api: `productos?filters[codigo]=${this.parametro.trim()}`
            }

            let r = await this.obtener_data_publico(f)

            if (r.length != 0) {
                this.nombre = r[0].attributes.nombre
                this.precio = r[0].attributes.precio
            }else{
                this.nombre = 'NO HAY REGISTRO'
                this.precio = 0
            }
            
        },
        ...mapActions(['obtener_data_publico'])
    },
    mounted() {
        this.buscar()
    },
}
</script>
    
<style>
    .contenedor{
        width: 100%;
        height: 100vh;
        background-color: #e9e9e9;    
    }
        .cabecera{
            width: 100%;
            height: 40px;
            background-color: #4001b4;
        }

        .cuerpo{
            width: 100%;
            height: calc(100% - 40px);

            padding-top: 15px;
        }
            .formulario{
                width: 640px;
                height: auto;
                background-color: white;
                border-radius: 4px;
                border: 1px solid #e9e9e9;
                margin: auto;
                padding-bottom: 20px;

            }

    .nombre_producto{
        width: 100%;
        height: auto;
        font-size: 25px;
        font-weight: bold;
        text-align: center;
    }

    .precio{
        font-size: 45px;
        text-align: center;
        font-weight: bold;
    }

    @media only screen and (max-width: 640px) {
        .formulario {
            width: 100%;
        }

    }

</style>
