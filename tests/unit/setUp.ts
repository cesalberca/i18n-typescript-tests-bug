import VueTestUtils from "@vue/test-utils";
;(VueTestUtils.config.mocks as any)['$t'] = (key: string) => key
