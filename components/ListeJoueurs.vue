<template>
    <div class="list-container">
        <h3 class="step-hint">Liste des Joueurs :</h3>
        <div v-if="isAllPlayersEmpty" class="empty-form-text">{{emptyText}}</div>
        <ul :class="['list-joueurs', addClass]">
            <li v-for="(player, index) in allPlayers" :key="index" @click="addPlayer(player)">{{player.prenom}} {{player.nom}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        allPlayers: {
            type: Array,
            default: () => {
                return [];
            },
        },
        addMode: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isAllPlayersEmpty() {
            return this.allPlayers.length === 0
        },
        addClass() {
            return this.addMode ? "add-mode" : "";
        },
        emptyText(){
            return this.addMode ? 'Aucun joueurs disponible' : 'Aucun joueur sélectionné'
        }
    },
    methods: {
        addPlayer(player) {
            if (!this.addMode){
                return;
            }
            console.log("player selected: ",player);
            this.$emit("addPlayer", player);
        }
    }
}
</script>

<style lang="scss">

.list-container {
    display: flex;
    min-width: 250px;
    flex-direction: column;
    margin: 0 1rem;
    border: solid 2px #025296;
    background: #e2f2ff;
    padding: 2rem;

    .list-joueurs {
        display: flex;
        flex-direction: column;
        overflow: auto;
        margin-top: 1rem;

        li {
            color: #025296;
        }

        &.add-mode li:hover {
            cursor: pointer;
            font-weight: bold;
            &:after {
                content: "+";
                margin-left: 15px;
                padding: 1px 5px;
                border-radius: 50%;
                background: #025296;
                color: #fff;
            }
        }
    }

    .cross-button {
        margin-left: 30px;
    }
}

</style>