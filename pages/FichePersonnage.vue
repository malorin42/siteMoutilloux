<template>
    <div class="fiche-container">
        <div class="fiche-block fiche-block--identification">
            <div class="fiche-block-wrapper">
                <div class="fiche-row">
                    <div class="fiche-textstats fiche-textstats--nom">Nom</div>
                    <div class="fiche-textstats fiche-textstats--prenom">Prenom</div>
                    <div class="fiche-textstats fiche-textstats--lvl">Niveau</div>
                </div>
                <div class="fiche-row">
                    <div class="fiche-textstats fiche-textstats--race">Race</div>
                    <div class="fiche-textstats fiche-textstats--classe">Classe</div>
                    <div class="fiche-textstats fiche-textstats--alignement">Alignement</div>                    
                </div>
                <div class="fiche-row">
                    <div class="fiche-textstats fiche-textstats--sexe">Sexe</div>
                    <div class="fiche-textstats fiche-textstats--poids">Poids</div>
                    <div class="fiche-textstats fiche-textstats--taille">Taille</div>
                    <div class="fiche-textstats fiche-textstats--divinite">Divinité</div>
                </div>
            </div>
            <div class="fiche-visuel">Visuel</div>
        </div>

        <div class="fiche-block fiche-block--caracteristique">
            <div class="fiche-row"></div>
            <div class="fiche-tab">
                <div class=""></div>
            </div>
   
        </div>

        <div class="fiche-block fiche-block--armes">
            <div class="fiche-equipement"></div>
            <div class="fiche-equipement"></div>
            <div class="fiche-equipement"></div>
        </div>

        <div class="fiche-block fiche-block--armures">
            <div class="fiche-equipement"></div>
            <div class="fiche-equipement"></div>
            <div class="fiche-equipement"></div>
        </div>

        <div class="fiche-block fiche-block--competences">
            <ul class="fiche-liste">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <div class="fiche-block fiche-block--maitrise">
            <ul class="fiche-liste">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <div class="fiche-block fiche-block--dons">
            <ul class="fiche-liste">
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        <router-link to="/">Retour à l'accueil</router-link>
   </div>
</template>

<script>

/**
 * Données en base que l'on doit pouvoir retrouvé dans une fiche de personnages
 * Elles sont sensé pouvoir définir toutes les informations d'un personnage par la suite
 * 
 *      1) Identification:
 * - Nom
 * - Prenom
 * - Race
 * - Sexe
 * - Classe
 * - Niveau
 * - Alignement
 * 
 *      2) Caractéristiques
 * 
 * - Points de vie max
 * - Dextérité
 * - Force
 * - Constitution
 * - Intelligence
 * - Sagesse
 * - Charisme
 *  
 *     3) Compétences, maitrise et dons *pour plus tard*
 * 
 *     4) Equipement *pour plus tard*
 * 
 *     5) Sorts / actions spéciales *pour plus tard*
 * 
 *     6) Histoire *pour plus tard*
 * 
 *     7) Visuel *pour plus tard*
 * 
 *     8) Notes *pour plus tard*
 */

export default {
    props: {
        ficheData: {
            required: true
        }
    },
    data(){
        return {
        }
    },

}

</script>

<style lang="scss">
.fiche-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: gray;
    .fiche-block {
        display: flex;
        // flex: 0 0 50%;

        background: rgba(0,0,0,0.5);

        &--identification {
            // flex: 1 1 auto;

            .fiche-block-wrapper {
                flex: 1 1 auto;
                background-color: red;

                .fiche-row {
                    display: flex;
                    padding: 20px;

                    .fiche-textstats {
                        border-bottom: 1px solid black;
                        flex: 1 1 auto;
                        margin: 0px 15px;

                        &--lvl {
                            flex: 0 0 75px;
                        }
                    }
                }
            }

            .fiche-visuel {
                flex: 0 0 150px;
                min-height: 150px;
                background-color: green;
            }
        }

        &--caracteristique {

        }
    }
}
</style>