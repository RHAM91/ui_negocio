<template>
    <div class="contenedor">
        <div class="cabecera">

        </div>

        <div class="cuerpo">
            <div class="formulario">

            </div>
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

    @media only screen and (max-width: 640px) {
        .formulario {
            width: 100%;
        }

    }

</style>