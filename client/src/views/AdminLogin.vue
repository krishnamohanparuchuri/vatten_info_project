<template>
  <div class="container">
    <v-main>
      <v-row class="d-flex justify-center">
        <v-col cols="4">
          <h1>Adminkonto</h1>
          <form>
            <v-text-field v-model="userName" label="Användarnamm" required>
            </v-text-field>
            <v-text-field
              v-model="password"
              label="Lösenord"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              hint="At least 8 characters"
              counter
              @click:append="showPassword = !showPassword"
              required
            >
            </v-text-field>

            <v-btn class="mr-2" dark @click="moveToAdminAccount"
              >Logga In</v-btn
            >
            <v-btn @click="clearTheInputdata">Rensa</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-main>
  </div>
</template>


<script>
import { mapState } from "vuex";
import store from "../store";
export default {
  data() {
    return {
      userName: "",
      password: "",
      showPassword: false,
    };
  },
  computed: {
    ...mapState(["admin"]),
  },
  methods: {
    async moveToAdminAccount() {
      await store.dispatch("admin/login", {
        userName: this.userName,
        password: this.password,
      });
      if (this.admin.isLoggedIn && this.admin.isAdmin) {
        this.$router.push("/adminpage");
      } else {
        this.$router.push("/login/admin");
      }
    },
    clearTheInputdata() {
      (this.userName = ""), (this.password = "");
    },
  },
};
</script>

<style scoped>
</style>