<template>
  <v-card>
    <v-card-title>
      <span v-text="title"></span>

      <v-spacer></v-spacer>

      <v-btn @click="$emit('action-btn:clicked')">
        Action
      </v-btn>
    </v-card-title>

    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  }
</script>