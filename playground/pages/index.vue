<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row class="pb-8">
          <v-col cols="3">
            <v-card @click="showErrorSnack('Error happend!')">
              <v-card-text>Show Error Message</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card @click="showSuccessSnack('SUCCESS!')">
              <v-card-text>Show Success Message</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card @click="showWarningSnack('Warning Message!')">
              <v-card-text>Show Warning Message</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card @click="showInfoSnack('Info Message!')">
              <v-card-text>Show Info Message</v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="mb-8">
          <v-card-title>Show Snack</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-text-field
                  v-model="message.text"
                  outlined
                  label="Message"
                />
              </v-col>
              <v-col cols="3">
                <v-select
                  v-model="message.color"
                  outlined
                  :items="colors"
                  label="Color"
                />
              </v-col>
              <v-col cols="3">
                <v-select
                  v-model="message.icon"
                  clearable
                  outlined
                  :items="icons"
                  label="Icon"
                />
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model="message.timeout"
                  type="text"
                  clearable
                  outlined
                  label="Timeout"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn @click="showSnack(message)">
              Show it
            </v-btn>
          </v-card-actions>
        </v-card>

        <v-card>
          <v-card-title>Show Snack With Type</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="messageType.text"
                  outlined
                  label="Message"
                />
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="messageType.type"
                  outlined
                  clearable
                  :items="types"
                  label="Type"
                />
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn @click="showSnackWithType(messageType.type, messageType.text)">
              Show it
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
    <NuxtVuetifySnackStack />
  </v-app>
</template>

<script setup lang="ts">

const { showErrorSnack, showSuccessSnack, showInfoSnack, showWarningSnack, showSnack, showSnackWithType } = useSnack()

const message = ref({
  text: '',
  color: '',
  icon: '',
  timeout: 5000,
})

const icons = [
  'mdi-plus',
  'mdi-account',
  'mdi-air-horn',
  'mdi-radioactive',
  'mdi-battery-high',
  'mdi-pokeball',
]

const colors = [
  'primary',
  'secondary',
  'success',
  'error',
  'info',
  'warning',
  'pink',
  'indigo',
  'deep-purple',
  'cyan',
  'teal',
]

const messageType = ref({
  text: '',
  type: ''
})

const types = [
  'error',
  'success',
  'info',
  'warning',
  'custom'
]

</script>
