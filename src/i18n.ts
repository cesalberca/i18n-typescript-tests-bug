import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const en = Object.assign({}, { test: "hello world" });
const locale = "en";

const messages = {
  en
};

export const i18n = new VueI18n({
  locale,
  fallbackLocale: "en",
  messages
});
