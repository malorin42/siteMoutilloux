<template>
    <div class="body-section">
        <h1>Bienvenue Au Moutilloux !!!</h1>

        <button class="btn" @click="test(0)">TEST</button>
        <button class="btn" @click="test(2)">TEST2</button>
        <div>Résultat : {{data}}</div>
   </div>
</template>

<script>

export default {
    props: {
    },
    data(){
        return {
            data: ""
        }
    },
    created() {
        this.test(2);
    },
    methods: {
        async test(value) {
            console.log("test")
            if (!value) {
                this.data = (await this.$axios.get('/api/users')).data
            }
            else {
                this.data = (await this.$axios.get('/api/users/'+ value)).data
            }
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