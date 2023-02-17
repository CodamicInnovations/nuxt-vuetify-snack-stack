<template>
  <v-snackbar
    v-model="isVisible"
    :timeout="current.timeout || timeout"
    :color="current.color"
  >
    <v-icon v-if="current.icon">
      {{ current.icon }}
    </v-icon>
    {{ current.text }}
    <template #action="{ attrs }">
      <v-btn
        fab
        icon
        small
        v-bind="attrs"
        @click="isVisible = false"
      >
        <span v-if="messages?.length - 1 > 0">{{ messages?.length - 1 }}</span>
        <v-icon>{{ hasNext ? 'mdi-skip-next' : 'mdi-close' }}</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { computed, ref, nextTick } from 'vue';
import { useState } from '@nuxt/bridge-edge/dist/runtime/composables'
import { SnackMessage } from '../../module'

const messages = useState<SnackMessage[]>('snack-stack-messages')

const hasNext = computed(() => messages.value ? !!messages.value[1] : false)

const timeout = ref(8000)

const next = ref(false)
const isVisible = computed({
  get() {
    return !!(messages.value?.length > 0 && !next.value)
  },
  set() {
    next.value = true
    nextTick(() => {
      hide()
      next.value = false
    })
  },
})

const current = computed<SnackMessage>(() => messages.value &&  messages.value[0] ? messages.value[0] : {text:''})

function hide() {
  messages.value.shift()
}
</script>
