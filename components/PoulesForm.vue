<template>
    <div :class="['poules-form-container', addModeClass]">
        
        <div class="poules-form-wrapper">
            <liste-joueurs :allPlayers="playerAvailable" addMode @addPlayer="addPlayer"></liste-joueurs>
            
            <div class="poules-liste-wrapper">
                <div :class="['poule_A', poulesClasses.poule_A]" @click="onClickPoule('A')">
                    <div class="step-hint">Poule A :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_A" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                                <button class="remove-button" @click="removePlayer(joueur.id, 'A')"></button>
                            </p>
                        </li>
                    </ul>
                </div>

                <div :class="['poule_B', poulesClasses.poule_B]" @click="onClickPoule('B')">
                    <div class="step-hint">Poule B :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_B" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                                <button class="remove-button" @click="removePlayer(joueur.id, 'B')"></button>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="poules-list-wrapper">
                <div v-if="nbrPoule >= 3" :class="['poule_C', poulesClasses.poule_C]" @click="onClickPoule('C')">
                    <div class="step-hint">Poule C :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_C" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                                <button class="remove-button" @click="removePlayer(joueur.id, 'C')"></button>
                            </p>
                        </li>
                    </ul>
                </div>
                <div v-if="nbrPoule === 2 && !addMode" class="add-container">
                    <button class="cross-button" @click="addPoule"></button>
                </div>

                <div v-if="nbrPoule >= 4" :class="['poule_D', poulesClasses.poule_D]" @click="onClickPoule('D')">
                    <div class="step-hint">Poule D :</div>
                    <ul class="liste-poule-wrapper">
                        <li v-for="(joueur, index) in poule_D" :key="index">
                            <p>
                                <span class="bolded">{{joueur.nom}}</span>
                                <span>{{joueur.prenom}}</span>
                                <button class="remove-button" @click="removePlayer(joueur.id, 'D')"></button>
                            </p>
                        </li>
                    </ul>
                </div>
                <div v-if="nbrPoule === 3 && !addMode" class="add-container">
                    <button class="cross-button" @click="addPoule"></button>
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
                // {id: "1", nom: "LORIN", prenom: "Maxime"},
                // {id: "2", nom: "LORIN", prenom: "Cyril"},
                // {id: "3", nom: "LORIN", prenom: "Hugette"},
                // {id: "4", nom: "LORIN", prenom: "Marc"}
            ],
            poule_B: [
                // {id: "5", nom: "LECOUTY", prenom: "Renaud"},
                // {id: "6", nom: "LECOUTY", prenom: "Alexandre"},
                // {id: "7", nom: "LECOUTY", prenom: "Sebastien"},
            ],
            poule_C: [
            ],
            poule_D: [
            ],
            playerToAdd: null,
        }
    },
    watch: {
        poulesData(newValue, oldValue){
            this.$emit("updatePoules", newValue);
        }
    },
    computed: {
        tournamentPlayers(){
            return this.$store.state.newPlayerList;
        },
        playerAvailable(){
            let playersAvailable = [];
            this.tournamentPlayers.forEach(player => {
                if (!this.checkIfInPoules(player.id)){
                    playersAvailable.push(player)
                }
            });
            return playersAvailable;
        },
        addMode(){
            return !this.playerToAdd ? false : true;
        },
        addModeClass(){
            return this.addMode ? "add-player" : "";
        },
        poulesClasses(){
            return {
                poule_A: this.poule_A.length >= 4 ? "poule-container poule-container--full" : "poule-container",
                poule_B: this.poule_B.length >= 4 ? "poule-container poule-container--full" : "poule-container",
                poule_C: this.poule_C.length >= 4 ? "poule-container poule-container--full" : "poule-container",
                poule_D: this.poule_D.length >= 4 ? "poule-container poule-container--full" : "poule-container",
            }
        },
        poulesData() {
            return {
                poule_A: this.poule_A,
                poule_B: this.poule_B,
                poule_C: this.poule_C,
                poule_D: this.poule_D,
            }
        }
    },
    methods: {
        checkIfInPoules(playerId) {
            let isPlayerFound = false;
            this.poule_A.forEach(player => {
                if (player.id === playerId){
                    isPlayerFound = true;
                }
            })
            if (isPlayerFound){
                return true;
            }
            this.poule_B.forEach(player => {
                if (player.id === playerId){
                    isPlayerFound = true;
                }
            })
            if (isPlayerFound){
                return true;
            }
            this.poule_C.forEach(player => {
                if (player.id === playerId){
                    isPlayerFound = true;
                }
            })
            if (isPlayerFound){
                return true;
            }
            this.poule_D.forEach(player => {
                if (player.id === playerId){
                    isPlayerFound = true;
                }
            })
            
            return isPlayerFound;
        },
        addPoule(){
            if (this.nbrPoule < 4){
                this.nbrPoule++;
            }
        },
        addPlayer(player){
            this.playerToAdd = player;
        },
        removePlayer(playerId, poule){
            switch(poule){
                case "A": {
                    for (let i = 0; i < this.poule_A.length; i++){
                        if (this.poule_A[i].id === playerId){
                            this.poule_A.splice(i, 1);
                            break;
                        }
                    }
                    return;
                }
                case "B": {
                    for (let i = 0; i < this.poule_B.length; i++){
                        if (this.poule_B[i].id === playerId){
                            this.poule_B.splice(i, 1);
                            break;
                        }
                    }
                }
                case "C": {
                    for (let i = 0; i < this.poule_C.length; i++){
                        if (this.poule_C[i].id === playerId){
                            this.poule_C.splice(i, 1);
                            break;
                        }
                    }
                }
                case "D": {
                    for (let i = 0; i < this.poule_D.length; i++){
                        if (this.poule_D[i].id === playerId){
                            this.poule_D.splice(i, 1);
                            break;
                        }
                    }
                }
            }
        },
        onClickPoule(poule){
            if (!this.addMode){
                return;
            }

            switch(poule){
                case "A": {
                    this.poule_A.push(this.playerToAdd);
                    this.playerToAdd = null;
                    return;
                }
                case "B": {
                    this.poule_B.push(this.playerToAdd);
                    this.playerToAdd = null;
                    return;
                }
                case "C": {
                    this.poule_C.push(this.playerToAdd);
                    this.playerToAdd = null;
                    return;
                }
                case "D": {
                    this.poule_D.push(this.playerToAdd);
                    this.playerToAdd = null;
                    return;
                }
            }
        }
    }
    
}
</script>

<style lang="scss">
.poules-form-container {
    display: flex;
    margin: 2rem 0;

    &.add-player {
        .list-container {
            position: relative;
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #868686;
                opacity: 0.6;
            }
            &::after {
                content: "Sélectionnez une poule pour ce joueur !";
                margin: auto;
                color: #025296;
                z-index: 1;
                font-weight: bold;
                font-style: italic;
                text-align: center;
            }
        }

        .poule-container {
            
            &--full {
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #868686;
                    opacity: 0.6;
                }
            }

            &:not(.poule-container--full) {
                border-color: green !important;
                cursor: pointer;
                transition: 0.3s all;

                &:hover {
                    transition: 0.3s all;
                    transform: translateY(-3px);
                }
            }
        }
    }

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

                > li {
                    display: flex;
                    position: relative;

                    p {
                        margin: 0;

                        .remove-button {
                            position: relative;
                            &::before {
                                content: "";
                                position: absolute;
                                height: 2px;
                                width: 6px;
                                background-color: #025296;
                            }

                            &::before, &::after {
                                position: absolute;
                                left: 10px;
                                top: -12px;
                                content: " ";
                                height: 15px;
                                width: 2px;
                                background-color:  #025296;
                            }
                            &::before {
                                transform: rotate(45deg);
                            }
                            &::after {
                                transform: rotate(-45deg);
                            }
                        }
                        
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        left: -10px;
                        top: 8px;
                        width: 5px;
                        height: 5px;
                        border-radius: 50%;
                        background-color: #025296;
                    }

                    // .remove-button {
                    //     position: absolute;
                    //     right: 10px;
                    //     // top: 32px;
                    //     // width: 32px;
                    //     // height: 32px;
                        
                    //     background-color: #025296;
                    //     border-radius: 50%;

                        

                    // }
                }
            }
        }

        .add-container {
            height: 250px;
            min-width: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    
}
</style>