<template>
    <div class="poules-form-container">
        
        <div class="poules-form-wrapper">
            <liste-joueurs :allPlayers="playerAvailable"></liste-joueurs>
            
            <div class="poules-liste-wrapper">
                <div class="poule-container poule_A">
                    <div class="step-hint">Poule A :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_A" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                            </p>
                        </li>
                    </ul>
                </div>

                <div class="poule-container poule_B">
                    <div class="step-hint">Poule B :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_B" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="poules-list-wrapper">
                <div v-if="nbrPoule >= 3" class="poule-container poule_C">
                    <div class="step-hint">Poule C :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_C" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div v-if="nbrPoule === 2" class="form-footer">
                    <button class="btn" @click="addPoule">Ajouter une poule</button>
                </div>

                <div v-if="nbrPoule >= 4" class="poule-container poule_D">
                    <div class="step-hint">Poule D :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_D" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <div v-if="nbrPoule === 3" class="form-footer">
                    <button class="btn" @click="addPoule">Ajouter une poule</button>
                </div>
                
            </div>
        </div>

        
    </div>
</template>

<script>

import ListeJoueurs from "~/components/ListeJoueurs.vue"

export default {
    components: {
        'liste-joueurs': ListeJoueurs,
    },
    data(){
        return {
            nbrPoule: 2,
            poule_A: [
                {id: "1", nom: "LORIN", prenom: "Maxime"},
                {id: "2", nom: "LORIN", prenom: "Cyril"},
                {id: "3", nom: "LORIN", prenom: "Hugette"},
                {id: "4", nom: "LORIN", prenom: "Marc"}
            ],
            poule_B: [
                {id: "5", nom: "LECOUTY", prenom: "Renaud"},
                {id: "6", nom: "LECOUTY", prenom: "Alexandre"},
                {id: "7", nom: "LECOUTY", prenom: "Sebastien"},
                {id: "8", nom: "LECOUTY", prenom: "Gilou"}
            ],
            poule_C: [
            ],
            poule_D: [
            ],
        }
    },
    computed: {
        tournamentPlayers(){
            return this.$store.state.newPlayerList;
        },
        playerAvailable(){
            return this.tournamentPlayers;
        }
    },
    methods: {
        addPoule(){
            if (this.nbrPoule < 4){
                this.nbrPoule++;
            }
        }
    }
    
}
</script>

<style lang="scss">
.poules-form-container {
    display: flex;
    margin: 2rem 0;

    .poules-form-wrapper {
        display: flex;

        .poule-container {
            margin: 1rem;
            border: solid 2px #025296;
            background: #e2f2ff;
            padding: 2rem;    
            min-width: 200px;
            min-height: 250px;
            .liste-poule-wrapper {
                margin-top: 1rem;
            }
        }
    }
    
}
</style>