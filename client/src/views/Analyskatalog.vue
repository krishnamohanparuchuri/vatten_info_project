<template>
  <v-main class="ma-0 pa-0">
    <v-row class="d-flex flex-column justify-center align-center mt-6">
      <v-col
        class="d-flex flex-column justify-center align-center mt-2"
        cols="8"
      >
        <h1 class="blue--text display-1">Våra analyser</h1>
        <p class="text--primary mt-2">
          Dricksvatten bör vara hälsosamt och rent samt ha en acceptabel
          kvalitet både estetiskt och tekniskt. Oavsett om du har en egen eller
          en gemensam vattenbrunn är det viktigt att kontrollera
          vattenkvaliteten regelbundet. Här kan du enkelt beställa provkit och
          flaskor för din önskade analys.
        </p>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="2">
        <img src="@/assets/wave.png" height="125px" width="100px"
      /></v-col>
      <v-col cols="5" class="d-flex flex-column justify-center align-center">
        <div
          class="pointer d-flex flex-column justify-center align-center"
          @click="moveToEnsikltdricksvatten"
        >
          <img src="@/assets/kran.png" height="140px" width="214px" />
          <div class="lowertext d-flex align-center flex-column justify-center">
            <h3 class="blue--text">Enskilt dricksvatten</h3>
            <p class="text--secondary ma-3 text--secondary">
              För dig med egen brunn eller gemensam brunn<br />
              för upp till 50 personer
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="3" class="d-flex flex-column">
        <div
          class="pointer d-flex flex-column justify-center align-center"
          @click="moveToVerksamhet"
        >
          <img src="@/assets/Samfalligheter.png" height="140px" width="214px" />

          <div class="lowertext d-flex align-center flex-column justify-center">
            <h3 class="blue--text">Verksamhet & samfällighet</h3>
            <p class="text--secondary ma-3">
              Ackrediterade analyser för er med en registrerad anlägging
            </p>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="mt-8 mb-12">
      <v-col cols="2" class="d-flex align-center">
        <img src="@/assets/wave.png" height="125px" width="100px"
      /></v-col>
      <v-col cols="5" class="d-flex flex-column justify-center align-center">
        <div class="pointer d-flex flex-column justify-center align-center">
          <img
            @click="moveToBygglovTillstand"
            src="@/assets/Avtal.png"
            height="140px"
            width="214px"
            class=""
          />
          <div class="lowertext d-flex align-center flex-column justify-center">
            <h3 class="blue--text">Bygglov & tillstånd</h3>
            <p class="text--secondary ma-3">
              För dig som ska söka tillstånd för att bygga <br />
              eller inför att du ska söka bygglov.
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="2" class="d-flex flex-column">
        <div class="pointer d-flex flex-column justify-center align-center">
          <img
            @click="moveToAvloppAnalyser"
            src="@/assets/analys.png"
            height="140px"
            width="214px"
          />
          <div class="lowertext d-flex align-center flex-column justify-center">
            <h3 class="blue--text">Avloppanalyser</h3>
            <p class="text--secondary ma-3">
              För dig som behöver provta ditt avloppsvatten.
            </p>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center align-center mb-12">
      <v-col cols="2" class="d-flex justify-center align-center">
        <v-btn
          height="70px"
          width="250px"
          color="light-blue darken-3"
          class="rounded-0"
          @click.prevent="moveToGuiden()"
        >
          <div class="d-flex flex-column justify-center align-center">
            <h1
              class="pt-3 subtitle font-weight-medium white--text text-capitalize"
            >
              Snabbguide
            </h1>
            <p class="white--text caption text-capitalize mt-1">
              Vilken analys passar mig?
            </p>
          </div>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-12 mb-12">
      <v-col cols="3" class="d-flex align-center">
        <img src="@/assets/wave.png" height="125px" width="100px"
      /></v-col>
      <v-col cols="3" class="d-flex flex-column justify-start align-center">
        <img src="@/assets/waterdroplet.png" />
        <img
          src="@/assets/droplet.png"
          class="moveRight"
          height="70px"
          width="70px"
        />
      </v-col>
      <v-col cols="4" class="d-flex flex-column">
        <h1 class="blue--text font-weight-bold">Boka rådgivning</h1>
        <p class="text--secondary ma-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
          Aspernatur eum dolorem. <span class="linkText">BOKA LÄNK</span>
        </p>
        <v-btn
          height="50px"
          width="100px"
          color="white--text light-blue darken-3"
          class="rounded-0"
          >LÄS MER
        </v-btn>
      </v-col>
    </v-row>
  </v-main>
</template>

<script>
export default {
  methods: {
    moveToEnsikltdricksvatten() {
      this.$router.push("/enskiltdricksvatten");
    },
    moveToAvloppAnalyser() {
      this.$router.push("/avlopp_analyser");
      console.log("avlopp");
    },
    moveToBygglovTillstand() {
      this.$router.push("/bygglov_tillstand");
      console.log("bygglov_tillstand");
    },
    moveToVerksamhet() {
      this.$router.push("/verksamhet");
    },
    moveToGuiden() {
      this.$router.push("/vattenguide");
    },
  },
};
</script>

<style scoped>
.container {
  box-shadow: 2px 2px 5px #00000090;
}
.lowertext {
  /* margin-left: 31px; */
}
.linkText {
  color: red;
  font-size: 16px;
  font-weight: 800;
}
.moveRight {
  margin-left: 250px;
}
.pointer {
  cursor: pointer;
  /* box-shadow: 2px 2px 5px #00000090; */
}

.lowertext {
}
</style>