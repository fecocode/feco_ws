<template>
    <div>
        <hr>
        <div class="main-footer">
            Sitio construido con <img class="vueico" src="https://images.opencollective.com/vuejs/25a8146/logo/256.png"/>
            www.fecocode.com
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',
}
</script>

<style>
    .main-footer{
        height: 3em;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: .85em;
    }
    .vueico{
        max-height: 3em;
    }
</style>