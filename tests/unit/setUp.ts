import { config } from "@vue/test-utils";

config.mocks = {
  $t: (key: string) => key
};
config.logModifiedComponents = false;
