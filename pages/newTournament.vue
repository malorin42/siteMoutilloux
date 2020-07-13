<template>
    <div class="body-section">
        <h1>Création d'un nouveau Tournois</h1>
        <div class="top-step" v-if="steps > 0">
            <arrow-svg v-if="steps > 1" @click="stepBack"></arrow-svg>
            <arrow-svg v-if="steps < 3" @click="nextStep(steps)" :rotateRight="true"></arrow-svg>
        </div>

        <button class="btn" v-if="steps === 0" @click="newTournament">Créer un nouveau tournois</button>


        <!-- STEP [1] -->
        <div class="section-slot step step--1" v-if="steps === 1">
        <div class="step-status">Etape {{steps}} / 3</div>
            <div class="step-hint">Entrez le nom du tournois ici !</div>
            <v-text-field
                v-model="tournament.name"
                label="Nom du tournois"
                color="#025296"
            ></v-text-field>

            <div class="step-hint">Déterminez le type du Tournois !</div>
            <v-select
                v-model="tournament.type"
                :items="tournamentTypes"
                label="Type du tournois"
            ></v-select>

            <div class="form-footer">
                <button class="btn" :class="isTournamentNameEmpty ? 'btn--disabled' : ''" @click="nextStep(1)">Continuer</button>
            </div>
        </div>

        <!-- STEP [2] -->
        <div class="section-slot step step--2" v-if="steps === 2">
            <div class="step-status">Etape {{steps}} / 3</div>
            <div class="step-hint">Sélectionnez les Participants !</div>

            <div class="step-form">
                <nouveau-joueur @newPlayer="addPlayerToList"></nouveau-joueur>
                <liste-joueurs :allPlayers="selectedPlayer"></liste-joueurs>
            </div>

            <div class="form-footer">
                <button class="btn" :class="notEnoughtPlayer ? 'btn--disabled' : ''" @click="nextStep(2)">Continuer</button>
            </div>
            
        </div>

        <!-- STEP [3] -->
        <div class="section-slot step step--3" v-if="steps === 3">
            <div class="step-status">Etape {{steps}} / 3</div>
            <div class="step-hint">Construisez les poules !</div>

            <poules-form @updatePoules="updatePoules"></poules-form>

            <div class="form-footer">
                <button class="btn" @click="nextStep(3)">Terminer</button>
            </div>
        </div>

        <div class="section-slot step step--4" v-if="steps === 4">
            <div class="step-hint">Pré-Visualisation</div>

            <div class="form-footer">
                <button class="btn">Terminer</button>
            </div>
        </div>
   </div>
</template>


<script>

/**
 * ETAPES:
 *      1.a) Donnée un nom au tournois.
 *      1.b) Selectionner le type : Solo/equipe mixe/homme/femme
 *      2) Selectionner les joueurs : création uniquement pour l'instant
 * 
 *      ******** Première interaction avec le back pour initialisé la bdd et eventuellement retourné les participants dispo *****
 * 
 *      3) Gestion des poules : ajout des joueurs dans la poules (donc liste joueurs)
 *      
 *      ************* Deuxième intéraction avec le serveur pour créer les poules et l'arbre de tournois *************
 * 
 *      4) Affichage de l'arbre finale et des poules
 *
 * FRONT :
 *      - Il faut un système formulaire avec text-field / selecteurs
 *      - un système axios pour envoyer au BACK
 *      - Créer un composant Poules
 *      - Créer un composant arbre tournois
 * 
 * Server : 
 *      - Il faut refaire la connexion à la base.
 *      - Il faut une table tournois et joueurs
 *      - Il créer une logique générique pour modifié une table.
 *      - Première interaction, on ajoute les param du tournois à la base, on ajoute les joueurs et on récupère l'ID du tournois
 *      - Deuxième intéraction :
 *              - On Créer les poules avec les liaisons qu'il faut avec les joueurs
 *              - On Créer toutes les informations nécéssaire à l'arbre de tournois
 * 
 * 
 * 
 */

import ListeJoueurs from "~/components/ListeJoueurs.vue"
import NouveauJoueur from "~/components/NewPlayerForm.vue"
import PoulesForm from "~/components/PoulesForm.vue"
import ArrowSvg from "~/components/Boutton/Arrow.vue"

export default {
    components: {
        'liste-joueurs': ListeJoueurs,
        'nouveau-joueur': NouveauJoueur,
        'poules-form': PoulesForm,
        'arrow-svg': ArrowSvg
    },
    props: {
    },
    data(){
        return {
            steps: 0,
            tournament: {
                name: "",
                type: "solo_mixe"
            },
            tournamentTypes: [
                {text: "Solo mixe", value: "solo_mixe"},
                {text: "Solo femme", value: "solo_f"},
                {text: "Solo homme", value: "solo_h"},
                {text: "Double mixe", value: "double_mixe"},
                {text: "Double femme", value: "double_f"},
                {text: "Double homme", value: "double_h"},
            ],
            selectedPlayer: [
            ],
            poules: {

            }
        }
    },
    created(){
        console.log(this.tournamentTypes)
    },
    computed: {
        isTournamentNameEmpty() {
            return !this.tournament.name ? true : false;
        },
        notEnoughtPlayer(){
            if (!this.selectedPlayer){
                return true
            }
            return this.selectedPlayer.length <= 5
        }
    },
    methods: {
        newTournament(){
            this.steps = 1;
        },
        /**
         * 1) On vérifie l'étape
         * 2) On sauvegarde dans le store l'état du tournois en création
         * 3) On passe à l'étape suivante
         */
        nextStep(step){
            // 1)
            if (!this.checkStep(step)) {
                console.log("L'étape "+ step +" n'est pas valide...")
                return false
            }

            // 2)
            let data
            if (step === 1) {
                data = JSON.parse(JSON.stringify(this.tournament))
            }
            else if (step === 2){
                data = JSON.parse(JSON.stringify(this.selectedPlayer))
            }
            else if (step === 3){
                data = JSON.parse(JSON.stringify(this.poules))
            }
            this.$store.dispatch("saveStepProgress", {step: step, data: data})

            // 3)
            this.steps++;
        },
        checkStep(step) {
            switch (step) {
                case 1 : {
                    return !this.isTournamentNameEmpty;
                }
                case 2 : {
                    return !this.notEnoughtPlayer;
                }
                case 3 : {
                    return true;
                }
            }
            return false
        },
        addPlayerToList(newPlayer) {
            newPlayer.id = this.selectedPlayer.length + 1;
            this.selectedPlayer.push(newPlayer);
        },
        stepBack() {
            this.steps--;
        },
        updatePoules(newValue){
            console.log("nouvelle valeur de poules : ",newValue)
            this.poules = newValue;
        }
    }
}

</script>

<style lang="scss">
    .body-section {
        padding: 2rem;
        height: 100%;
        h1 {
            margin: 2rem auto 5rem auto;
        }
    }
    .step-status {
        font-size: 1.8rem;
        font-weight: bold;
    }

   .section-slot {
        height: 100%;
        margin: auto;
        width: 80%;
       .step-hint {
            font-size: 1.8rem;
            font-weight: bold;
            margin-top: 1rem;
       }

       &.step--2 {
           width: 100%;
       }
   }
   .step-form {
        display: flex;
        margin: 3rem 0;
        max-height: 65vh;
   }

   .top-step {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;

        .arrow-svg.right {
            margin-left: auto;
        }
   }
</style>