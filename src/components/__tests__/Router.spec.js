import { createRouter, createWebHistory } from 'vue-router';
import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

describe('Router', () => {
  const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  it('renders Home component on / route', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = mount({ template: '<router-view />' }, { global: { plugins: [router] } });
    expect(wrapper.html()).toContain('This is the home page');
  });

  it('renders About component on /about route', async () => {
    router.push('/about');
    await router.isReady();
    const wrapper = mount({ template: '<router-view />' }, { global: { plugins: [router] } });
    expect(wrapper.html()).toContain('This is the about page');
  });
});
