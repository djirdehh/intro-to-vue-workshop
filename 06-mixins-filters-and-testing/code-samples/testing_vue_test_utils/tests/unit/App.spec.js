import { shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('should render correct initial content', () => {
    expect(wrapper.find('.title').text()).toBe('todos');
    expect(wrapper.find('.new-todo').element.placeholder).toBe('What needs to be done?');
  });

  it('should set correct default data', () => {
    expect(wrapper.vm.todos).toEqual([]);
    expect(wrapper.vm.newTodo).toEqual('');
  });

  describe('the user populates the text input field', () => {
    it("should update the 'newTodo' data property", () => {
      const inputField = wrapper.find('.new-todo');

      inputField.element.value = 'New Todo';
      inputField.trigger('input');

      expect(wrapper.vm.newTodo).toEqual('New Todo');
    });
  });

  describe('the user populates the text input field and presses Enter', () => {
    it("should add a new todo to the 'todos' array", () => {
      const inputField = wrapper.find('.new-todo');

      inputField.element.value = 'New Todo';
      inputField.trigger('input');
      inputField.trigger('keyup.enter');

      expect(wrapper.vm.todos).toEqual(['New Todo']);
    });
  });
});
