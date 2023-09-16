import {createI18n} from "vue-i18n";
import { defaultLocale } from './';

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: {
        en: {
            title: 'Test query'
        },
        ru: {
            title: 'Тестовое задание'
        }
    }
})

const $t = i18n.global.t;

export { i18n, $t };