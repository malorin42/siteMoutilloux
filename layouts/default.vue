<template>
  <v-app>
            <div class="top-section">

            <nuxt-link to="/">Accueil</nuxt-link>
            <nuxt-link to="/NewTournament">Créer un tournois</nuxt-link>
            <nuxt-link to="/test/coucou">Test</nuxt-link>
            <!-- <router-link to="/Login">Go to Login</router-link> -->

        </div>
        <div class="content-section">
          <nuxt></nuxt>
        </div>
        
        <footer class="footer-section"></footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
html {
    font-size: 62.5% !important;
}

body {
    margin: 0;
    padding: 0;
    font-size: 1.4rem;
}

.v-application {
    .top-section {
    display: flex;
    padding: 10px;
    background: #025296a3;

    a {
        color: white;
        text-decoration: unset;
        margin-right: 10px;

        &:hover {
            text-decoration: underline;
        }
    }
}

.content-section {
    margin: auto;
    // box-shadow: 0 5px 36.4px 3.6px rgba(109,93,175,.3);
    height: 100%;
    min-width: 60%;
}

.form-footer {
    display: flex;
}

.btn {
    margin: auto;
    padding: 1rem;
    border-radius: 5px;
    border: solid 1px #025296;
    color: #fff;
    background: #025296;
    box-shadow: 0 5px 36.4px 3.6px rgba(109,93,175,.3);
    transition: all 0.3s;

    &:hover {
        border: solid 1px #025296;
        color: #025296;
        background: #fff;
        box-shadow: 0 5px 36.4px 3.6px rgba(109,93,175,.6);
    }

    &--disabled , &--disabled:hover {
        cursor: initial;
        border-color: #dddddd;
        background: #dddddd;
        color:#868686;
        box-shadow: none;

        &:focus {
            outline: none;
        }
    }
}

.v-input {
    label {
        color:#025296;

    }

    .v-input__slot:before {
        border-color:#025296 !important ;
    }
}

.bolded {
    font-weight: bold;
}

.empty-form-text {
    margin: auto;
    font-style: italic;
}

.cross-button {
    position: relative;
    width: 30px;
    height: 30px;
    padding: 1rem;
    background-color: #025296;
    border-radius: 50%;
    box-shadow: 0 5px 36.4px 3.6px rgba(109,93,175,.3);
    transition: 0.2s all;

    &:before {
        content: "+";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        color: #fff;
        font-size: 30px;
        line-height: 28px;
    }

    &:hover {
        box-shadow: 0 5px 36.4px 3.6px rgba(109,93,175,.6);
        transform: translateY(-2px);
        transition: 0.2s all;
    }
}

.add-link {
    position: relative;
    color: #025296;

    &:before {
        content: "+";
        top: 0;
        left: -10px;
        position: absolute;
        color: #025296;
        // font-size: 30px;
        // line-height: 28px;
    }
}

}

button {
    &:focus {
        outline: none;
    }
}

</style>
