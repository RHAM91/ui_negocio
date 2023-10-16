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
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Login',
    computed: {
        ...mapState(['preferencias'])
    },
    data() {
        return {
            usuario: '',
            pass: ''
        }
    },
    methods: {
        async login(){
            let formulario  = {
                identifier: this.usuario,
                password: this.pass
            }

            try {
                let query = await axios.post(`${this.preferencias.IP}/api/auth/local`, formulario)
                if (query.data.message == 'Invalid identifier or password') {
                    alert('USUARIO Y/O CONTRASEÑA INVALIDOS_')
                }else if(query.data.user.blocked){
                    alert('USUARIO BLOQUEADO POR ADMINISTRADOR_')
                }else{
                    this.set_token_sesion(query.data.jwt)
                    this.$router.replace('Registro')
                }
            } catch (e) {
                console.log(e)
                if (e.response.data.error.message == 'Invalid identifier or password') {
                    alert('USUARIO O CONTRASEÑA INVALIDOS')
                }else if(e.response.data.error.message == 'Your account has been blocked by an administrator'){
                    alert('SISTEMA BLOQUEADO TEMPORALMENTE')
                }else{
                    alert('ERROR DESCONOCIDO')
                }

            }

        },
        ...mapMutations(['set_token_sesion'])
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