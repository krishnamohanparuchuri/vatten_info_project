<template>
  <div>
    <v-card flat class="mt-8 d-flex flex-column justify-center">
      <v-row class="btnColor">
        <v-col cols="12" md="1" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-3">S.No</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-3">order Number</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-2">Test name</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>

        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-2">Amount</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <v-row>
            <div class="text--black font-weight-bold ml-2">No Of Tests</div>
            <v-spacer></v-spacer>
            <span>|</span>
          </v-row>
        </v-col>
        <v-col cols="12" md="2" class="text--black font-weight-bold">
          <div class="text--black font-weight-bold ml-2">Status</div>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row
        class="bgColor1 d-flex flex-column"
        v-for="(order, index) in this.filterOrderDetails"
        :key="index"
      >
        <v-row>
          <v-col cols="12" md="1" class="text--black">
            <v-row class="ml-1" justify="start">
              <h5 class="serial-number">{{ index + 1 }}</h5>
            </v-row>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="2" class="text--black">
            <v-row class="ml-1" justify="start">
              <div>{{ order.orderNr }}</div>
            </v-row>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="2" class="text--black">
            <div>{{ order.orderProduct.testname }}</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="2" class="text--black">
            <div>{{ order.orderProduct.price }}</div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="2" class="text--black">
            <div class="text--black font-weight-bold ml-2">
              {{ order.orderProduct.quantity }}
            </div>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col cols="12" md="2" class="text--black d-flex">
            <div :class="`order ${order.orderStatus} colorstatus`" class="ma-4">
              {{ order.orderStatus }}
            </div>
            <v-btn
              small
              class="btnColor white--text ma-4"
              @click="moveToIndividualOrderPage(order.orderProduct._id)"
              >detail information</v-btn
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-divider></v-divider>
          </v-col>
        </v-row>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CompanyUser",
  data() {
    return {
      orders: [
        {
          number: 1,
          id: "2567896",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Pending",
        },
        {
          number: 2,
          id: "2567897",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Pending",
        },
        {
          number: 3,
          id: "2567898",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Confirmed",
        },
        {
          number: 4,
          id: "2567899",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Results",
        },
        {
          number: 5,
          id: "2567900",
          date: "2021-01-22",
          description: "three tests are ordered",
          amount: "360 SEK",
          status: "Pending",
          inset: false,
        },
      ],
    };
  },
  computed: {
    ...mapState(["company", "order"]),
    filterOrderNumber() {
      return this.order.individualOrders.map((order) => order.orderNumber);
    },
    filterOrderDetails() {
      let orderList = [];
      this.filterOrderNumber.forEach((test) => {
        test.forEach((individualTest) => {
          orderList.push(individualTest);
        });
      });

      return orderList;
    },
  },
  async mounted() {
    // const companyId = this.company.companyUser._id;
    // await this.$store.dispatch("order/getCompanyOrders", companyId);
  },
  methods: {
    moveToIndividualOrderPage(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
.bgColor {
  background-color: rgba(175, 116, 88, 0.966);
}
.bgColor1 {
  background-color: rgb(197, 195, 196);
}
.order.Pending {
  border-left: 5px solid orange;
  background-color: orange;
}
.order.Confirmed {
  border-left: 5px solid yellow;
  background-color: yellow;
}
.order.Results {
  border-left: 5px solid green;
  background-color: green;
}
.order.Pending.colorstatus {
  background-color: orange;
  border-radius: 10px;
  width: 50%;
}
.order.Confirmed.colorstatus {
  background-color: yellow;
  border-radius: 10px;
  width: 50%;
}
.order.Results.colorstatus {
  background-color: green;
  border-radius: 10px;
  width: 50%;
}

/* body {
  counter-reset: section; /* Set a counter named 'section', and its initial value is 0. 
}

h5::before {
  counter-increment: section; /* Increment the value of section counter by 1 
  content: "Section " counter(section) ": ";
} */
</style>