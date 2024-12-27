import { mount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';

describe('Parent.vue and Child.vue', () => {
  it('updates receivedText when Child emits send-text event', async () => {
    const wrapper = mount(Parent);
    const child = wrapper.findComponent({ name: 'Child' });
    await child.vm.$emit('send-text', 'Hello Parent!');
    expect(wrapper.text()).toContain('Received: Hello Parent!');
  });
});
