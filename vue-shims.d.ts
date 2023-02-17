import { ModuleOptions } from './src/interface';
import { useSnack } from './src/runtime/composables';

declare module '@nuxt/schema'
{
    interface PublicRuntimeConfig
    {
      snackStack: ModuleOptions;
    }
}

declare module 'vue/types/vue' {
  interface Vue {
    $snack:   ReturnType<typeof useSnack>
  }
}
