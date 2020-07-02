<template>
<div class="new-player-form">
    <div class="step-hint">Ajoutez un joueur :</div>
    <div>
        <v-text-field
            v-model="prenom"
            label="Prenom du Joueur"
            color="#025296"
        ></v-text-field>

        <v-text-field
            v-model="nom"
            label="Nom du Joueur"
            color="#025296"
        ></v-text-field>

        <v-text-field
            v-model.number="age"
            @change="ageVerif"
            label="Age du Joueur"
            hide-details
            single-line
            type="number"
            color="#025296"
        ></v-text-field>

        <v-select
            v-model="sexe"
            :items="sexeTypes"
            label="Sexe du Joueurs"
        ></v-select>

        <div class="form-footer"><button :class="['btn', disabledClass]" @click="addPlayer">Ajouter</button></div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            prenom: "",
            nom: "",
            age: null,
            sexe: "",
            sexeTypes: ['Homme', 'Femme', 'Non-binaire']
        }
    },
    computed: {
        isPrenomEmpty(){
            return !this.prenom
        },
        disabledClass(){
            return this.isPrenomEmpty ? 'btn--disabled' : ''
        }
    },
    methods: {
        ageVerif() {
            if (this.age > 120) {
                this.age = 120
            }
            else if (this.age < 0) {
                this.age = 0
            }
        },
        addPlayer(){
            if (this.isPrenomEmpty){
                return false
            }
            this.$emit("newPlayer", {
                prenom: this.prenom,
                nom: this.nom,
                age: this.age ? this.age : 0,
                sexe: this.sexe
            })
        }
    }
}
</script>

<style lang="scss">
.new-player-form {
    border: solid 2px #025296;
    background: #e2f2ff;
    padding: 2rem;
    margin-right: 1rem;
}
</style>