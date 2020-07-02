<template>
    <div class="body-section">
        <h1>Bienvenue Au Moutilloux !!!</h1>

   </div>
</template>

<script>

export default {
    props: {
    },
    data(){
        return {
        }
    },
    methods: {
        newTournament() {
            this.$router.push("newTournament")
        }
    }
}

</script>

<style lang="scss">
    .body-section {
       display:flex;
       flex-direction: column;
    }

    .button {
        margin: auto;
        border-radius: 5px;
        padding: 10px;
        transition: all 0.3s;
        box-shadow: 0 5px 36.4px 3.6px rgba(109,93,175,.3);

        &:hover {
            cursor: pointer;
            transform: translateY(-3px);
            transition: all 0.3s;
            box-shadow: 0 5px 36.4px 3.6px rgba(109,93,175,.6);
        }
    }
</style>