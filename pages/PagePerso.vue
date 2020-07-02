<template>
  <div>
     <h1>Page Perso</h1>
     <div @click="Ping('ping')" class="button">Ping server</div>
        <div @click="Ping('pong')" class="button">Pong server</div>
        <div @click="updateFiche" class="button">Update</div>

    <div>
      <div v-for="fiche in userFiches" :key="fiche.id">
        <router-link :to="'/fichePersonnage/'+fiche.id">{{fiche.name}}</router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
          userFiches: [{id: 1, name: "Première fiche !"}, {id: 2, name: "Deuxième fiche !"}]
        }
    },
    mounted() {
        this.$store.dispatch("_socket/listenPing")
        this.$store.dispatch("_socket/listenFicheUpdate")
    },
    computed: {
    },
    methods: {
        test(){
            this.$store.commit("test")
        },
        Ping(value) {
            this.$store.dispatch("_socket/emitPing", {data: value})
        },
        updateFiche() {
            this.$store.dispatch("_socket/getFichePersonnage")
        }
    }
    
}
</script>

<style>

</style>