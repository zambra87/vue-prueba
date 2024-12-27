import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';
import { createStore } from 'vuex';

describe('Counter.vue', () => {
  let store;

  beforeEach(() => {
    store = createStore({
      modules: {
        counter: {
          namespaced: true,
          state: () => ({ count: 0 }),
          actions: {
            increment: jest.fn(),
            decrement: jest.fn(),
          },
          getters: {
            currentCount: (state) => state.count,
          },
        },
      },
    });
  });

  it('renders initial count', () => {
    const wrapper = mount(Counter, { global: { plugins: [store] } });
    expect(wrapper.text()).toContain('Counter: 0');
  });

  it('calls increment action on button click', async () => {
    const wrapper = mount(Counter, { global: { plugins: [store] } });
    await wrapper.find('button:nth-of-type(1)').trigger('click');
    expect(store._modulesNamespaceMap['counter/'].context.dispatch).toHaveBeenCalledWith('increment');
  });

  it('calls decrement action on button click', async () => {
    const wrapper = mount(Counter, { global: { plugins: [store] } });
    await wrapper.find('button:nth-of-type(2)').trigger('click');
    expect(store._modulesNamespaceMap['counter/'].context.dispatch).toHaveBeenCalledWith('decrement');
  });
});
