import HelloWorld from "../HelloWorld.vue";
import { mount } from "@vue/test-utils";

describe("HelloWorld", () => {
  it("should not fail", () => {
    const wrapper = mount(HelloWorld);

    expect(wrapper.exists).toBeTruthy();
  });
});
