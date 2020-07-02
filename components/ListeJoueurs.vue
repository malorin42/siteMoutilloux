<template>
    <div class="list-container">
        <h3 class="step-hint">Liste des Joueurs :</h3>
        <ul class="list-joueurs">
            <li v-for="(player, index) in allPlayers" :key="index">{{player.prenom}} {{player.nom}}</li>
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
        } 
    },
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
    }
}

</style>