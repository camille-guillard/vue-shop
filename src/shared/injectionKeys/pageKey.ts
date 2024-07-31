import type { InjectionKey, Ref } from 'vue';

export const pageKey = Symbol() as InjectionKey<Ref<number>>;