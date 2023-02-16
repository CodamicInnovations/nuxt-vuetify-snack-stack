<template>
  <v-snackbar v-model="show" :timeout="current.timeout || timeout" :color="currentColor">
    <v-icon v-if="currentIcon" v-text="currentIcon" />
    {{ currentMessage }}
    <template #action="{ attrs }">
      <v-btn fab icon small v-bind="attrs" @click="show = false">
        <span v-if="messages.length - 1 > 0">{{ messages.length - 1 }}</span>
        <v-icon>{{ hasNext ? 'mdi-skip-next' : 'mdi-close' }}</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'SnackStack',
  props: {
    color: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      next: false,
    }
  },
  computed: {
    pluginOptions() {
      return this._options || {}
    },

    pluginNamespace() {
      return this.pluginOptions.namespace
    },

    timeout() {
      return this.pluginOptions.timeout
    },

    types() {
      return this.pluginOptions.types
    },

    messages() {
      return this.$store.getters[this.pluginNamespace + '/messages']
    },

    current() {
      let curr = {}
      if (this.messages && this.messages[0]) {
        if (typeof this.messages[0] === 'object') {
          curr = this.messages[0]
        } else if (typeof this.messages[0] === 'string') {
          curr = {
            text: this.messages[0],
          }
        }
      }
      return curr
    },
    currentMessage() {
      return this.current.text
    },
    currentIcon() {
      return this.current.icon
        ? this.current.icon
        : this.types[this.current.type]
        ? this.types[this.current.type].icon
        : null
    },
    currentColor() {
      return this.current.color
        ? this.current.color
        : this.types[this.current.type]
        ? this.types[this.current.type].color
        : this.color
    },
    show: {
      get() {
        return !!(this.messages.length > 0 && !this.next)
      },
      set() {
        this.next = true
        this.$nextTick(() => {
          this.hide()
          this.next = false
        })
      },
    },
    hasNext() {
      return !!this.messages[1]
    },
  },
  methods: {
    hide() {
      this.$store.commit(this.pluginNamespace + '/hide')
    },
  },
}
</script>
