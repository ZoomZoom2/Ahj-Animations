import PageCollapse from './PageCollapse';

export default class PageController {
  constructor() {
    this.container = null;
    this.doubleСlick = true;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Контейнер не является элементом "HTMLElement"');
    }
    this.container = container;
    this.pageCollapse = new PageCollapse(this.container);
  }

  init() {
    this.pageCollapse.init();
    this.pageCollapse.collapseBtn.addEventListener('click', (event) => this.onCollapse(event));
  }

  onCollapse(event) {
    event.preventDefault();
    setTimeout(() => this.pageCollapse.collapseBtn.blur(), 300);

    if (this.pageCollapse.headerContainer.classList.contains('hidden')) {
      this.pageCollapse.headerContainer.classList.remove('hidden');
      this.pageCollapse.headerContainer.classList.add('active');
      setTimeout(() => this.pageCollapse.headerContainer.classList.remove('active'), 10);
    } else {
      this.pageCollapse.headerContainer.classList.add('active');
      setTimeout(() => {
        this.pageCollapse.headerContainer.classList.remove('active');
        this.pageCollapse.headerContainer.classList.add('hidden');
      }, 500);
    }
  }
}