<template>
  <div class="background container mt-12">
    <v-row class="ma-1 pa-0 d-flex justify-center">
      <v-col cols="12" class="blue--text d-flex justify-center">
        <h3>
          {{ this.user.statusMessage }}
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        height="200px"
        cols="12"
        md="3"
        class="d-flex align-center justify-start"
      >
        <div class="wave">
          <v-img
            src="@/assets/wave.png"
            max-height="100"
            max-width="100"
            border-radius="100"
          ></v-img>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex justify-center">
        <div class="middle_section">
          <div class="labb blue--text ma-2">VATTENINFO LABBTJÄNSTER</div>
          <div class="rubrik ma-0 pa-0">
            <p class="green--text ma-0 pa-0">kvalitetssäkra</p>
            <p class="green--text mt-0 pt-0">ditt vatten.</p>
          </div>
          <div class="bread">
            <p>
              Vi erbjuder mikrobiologiska och kemiska analyser för enskilt
              vatten, livsmedelsklassat vatten samt avlopp
            </p>
          </div>
          <v-btn class="btnColor white--text" @click="moveToAnalysKatalog"
            >läs mer</v-btn
          >
        </div>
      </v-col>

      <v-col cols="12" md="3" class="d-flex flex-row align-start fixed">
        <div class="fixed">
          <v-img
            class="image"
            src="@/assets/landing/OmtankeH20crop.png"
            max-width="400"
          ></v-img>
        </div>

        <svg viewBox="0 0 500 500">
          <path
            id="curve"
            fill="transparent"
            d="M73.2,148.6c4-6.1,65.5-96.8,178.6-30c111.3,1.2,170.8,90.3,175.1,97"
          />
          <text width="500">
            <textPath xlink:href="#curve">bli mer vattenmedveten</textPath>
          </text>
        </svg>
      </v-col>
    </v-row>
    <!-- landning fort -->
    <v-row class="mt-16">
      <v-col class="d-flex align-center" cols="2">
        <div class="wave">
          <v-img
            src="@/assets/wave.png"
            max-height="100"
            max-width="100"
            border-radius="100"
          ></v-img>
        </div>
      </v-col>

      <v-col cols="8" class="d-flex flex-column justify-center">
        <v-row class="d-flex justify-center align-center">
          <h1
            class="care blue--text font-weight-class text-uppercase d-flex justify-start"
          >
            Ta hand om vattnet så <br />tar vattnet hand om dig
          </h1>
        </v-row>
        <v-row class="d-flex justify-center align-center ml-8 mt-4" cols="12">
          <p class="care-bread d-flex justify-center align-center ml-16">
            Lorem ipsum dolor, sit amet consectetur elit. Aspernatur doloremque
            voluptatem <br />
            dignissimos soluta incidunt non velit recusandae quia amet
            quibusdam.
          </p>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="d-flex justify-center px-2 mt-10" cols="8">
      <v-col class="d-flex flex-row justify-center justify-space-evenly">
        <v-card
          class="d-flex flex-column justify-evenly align-center white ma-1"
          v-for="test in this.displayTests"
          :key="test.id"
          v-bind:style="{ backgroundColor: test.color }"
        >
          <img
            :src="require('@/assets/' + test.image)"
            height="120px"
            width="70px"
          />
          <div
            class="provInfo d-flex flex-column pt-6 ma-3 align-center btnColor rounded-2"
          >
            <h5 class="title white--text">{{ test.name }}</h5>
            <p class="caption-1 white--text">
              {{ test.description }}
            </p>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mt-12">
      <v-col cols="10" class="d-flex justify-center align-center">
        <v-btn color="btnColor" class="white--text" @click="moveToEnskillt"
          >FLER PROVER</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      displayTests: [
        {
          id: 1,
          name: "BAS",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing.",
          path: "/baspaket",
          image: "FlaskaBas.png",
        },
        {
          id: 2,
          name: "FAMILJ",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing.",
          path: "/familjpaket",
          image: "FlaskorFamilj.png",
        },
        {
          id: 3,
          name: "STORA",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing.",
          path: "/storapaket",
          image: "FlaskorStora.png",
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch("tests/getTests");
  },
  computed: {
    ...mapState(["tests", "user", "company"]),
  },
  methods: {
    moveToIndividual(id, test) {
      console.log(id);
      this.$router.push({
        name: "TestStartsidan",
        params: { id: id, test },
      });
      console.log("hit");
    },
    // FLER PROVER
    moveToEnskillt() {
      this.$router.push("/enskiltdricksvatten");
    },
    // LÄS MER
    moveToAnalysKatalog() {
      this.$router.push("/Vara_analyser");
    },
  },
};
</script>

<style scoped lang="scss">
.fixed {
  position: fixed;
  right: 0;
  top: 148px;
}
.image {
  position: absolute;
  right: 0;
  top: 148px;
}
svg {
  transform: rotate(324deg);
  height: 900px;
  position: absolute;
  top: -136px;
  right: -398px;
}
.container {
  width: 100vw;
  margin: 0;
  padding: 0;
}
.labb {
  letter-spacing: 5px;
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  font-size: 24px;
}

/*  text starts here */
.rubrik {
  text-transform: uppercase;
  font-size: 42px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

.bread {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 400px;
  font-weight: bold;
}
.care {
  font-size: 34px;
  font-family: "Poppins", sans-serif;
}
.care-bread {
  font-family: "Poppins", sans-serif;
  width: 570px;
  font-size: 16px;
  font-weight: bold;
}

/* bread text ends here here */

/* curved text starts here */
path {
  fill: transparent;
}
text {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  text-transform: uppercase;
  fill: #449a63;
}
/* curved text ends here */

/* landingfort starts here */
.heading-fort {
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 800;
}

.bread-fort {
  font-weight: 300;
}
.image-position {
  position: absolute;
}

.provInfo {
  width: 200px;
  height: 150px;
  text-align: center;
  color: white;
}

.mainBox {
  box-shadow: 1.5px 1.5px 10px #00000075;
  border-radius: 4px;
  cursor: pointer;
}
/* landingfort ends here */
</style>