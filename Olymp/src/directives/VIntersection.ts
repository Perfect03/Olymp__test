import type { DirectiveBinding } from 'vue';

export default {
  // директива, выполняющая функцию binding при пролистывании пользователем страницы до элемента el
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const options = {
      rootMargin: '0px',
      threshold: 1.0,
    };
    const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entries[0].isIntersecting) binding.value();
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
  },
  name: 'Intersection',
};
