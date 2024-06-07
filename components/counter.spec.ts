import { mount } from '@vue/test-utils';
import Counter from './counter.vue';
import { test, expect } from 'vitest';

test('counter', () => {
    const wrapper = mount(Counter, {
        props: {
            count: 10
        }
    });
    expect(wrapper.text()).toContain('10');
})