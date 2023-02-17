<template>
  <v-app>
    <v-btn @click="addErrorMessage">
      Add Error Message
    </v-btn>
    <v-btn @click="addSuccessMessage">
      Add Success Message
    </v-btn>
    <v-btn @click="addInfoMessage">
      Add Info Message
    </v-btn>
    <v-btn @click="addWarningMessage">
      Add Info Message
    </v-btn>
    <v-btn @click="$snack.showSnack({ text: 'TES!', timeout: -1, icon: 'mdi-alien' })">
      TEST!
    </v-btn>
    <NuxtVuetifySnackStack />
  </v-app>
</template>

<script setup lang="ts">

function addErrorMessage() {
  useSnack().showErrorSnack({ text: 'Error happend!', timeout: -1 })
}
function addSuccessMessage() {
  useSnack().showSuccessSnack({ text: 'SUCCESS!', timeout: 500000 })
}
function addInfoMessage() {
  useSnack().showInfoSnack({ text: 'Info Message!!', timeout: 5000 })
}
function addWarningMessage() {
  useSnack().showWarningSnack({
    text: 'Warning Message!! Warning Message!! Warning Message!! Warning Message!! Warning Message!! Warning Message!! Warning Message!! Warning Message!! Warning Message!! Warning Message!! ',
    timeout: 8000,
  })
}

</script>
