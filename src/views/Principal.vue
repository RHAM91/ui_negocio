<template>
    <div class="contenedor_principal">
        <div class="logo">
            <i class="fas fa-cube"></i>
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
    
    },
}
</script>

<style>
    .contenedor_principal{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

        .logo{
            width: 200px;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 5em;
        }
</style>