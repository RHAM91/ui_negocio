<template>
    <div class="contenedor">
        <div class="cuadro_principal" @click="redirigir">
            <i class="fas fa-bolt"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Principal',
    data() {
        return {
        
        }
    },
    methods: {
        redirigir(){
            console.log('...')
        }
    },
}
</script>

<style>
    .cuadro_principal{
        width: 150px;
        height: 150px;
        font-size: 5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>