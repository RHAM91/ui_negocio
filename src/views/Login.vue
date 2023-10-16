<template>
    <div class="contenedor">
        <div class="formulario_login">
            <div class="logo">
                <i class="fas fa-bolt"></i>
            </div>
            <div class="formulario">
                <b-container fluid="">
                    <form @submit.prevent="login">
                        <b-row>
                            <b-col sm="12" class="mt-3">
                                <label for="">Usuario</label>
                                <b-form-input type="text" v-model="usuario" size="sm"></b-form-input>
                            </b-col>
                            <b-col sm="12" class="mt-3">
                                <label for="">Contraseña</label>
                                <b-form-input type="password" v-model="pass" size="sm"></b-form-input>
                            </b-col>
                            <b-col sm="12" class="mt-4">
                                <b-button type="submit" variant="outline-danger" block size="sm">Entrar</b-button>
                            </b-col>
                        </b-row>
                    </form>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            usuario: '',
            pass: ''
        }
    },
    methods: {
        async login(){
            
        }
    },
}
</script>

<style>
    .contenedor{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

        .formulario_login{
            width: 350px;
            height: auto;
        }
            .logo{
                width: 150px;
                height: 150px;
                margin: auto;
                font-size: 5em;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .formulario{
                width: 100%;
                height: auto;
            }
</style>