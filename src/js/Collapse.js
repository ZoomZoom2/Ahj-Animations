export default class Collapse {
  constructor(startElem, changeElem) {
    this.startElem = startElem;
    this.changeElem = changeElem;
    this.collapse = false;
  }

  addListener(){
    this.startElem.addEventListener('click', (event) => this.onCollapse(event));
  }

  onCollapse(event) {
    event.preventDefault();
    setTimeout(() => this.startElem.blur(), 300);

    if (this.changeElem.classList.contains('hidden')) {
      this.changeElem.classList.remove('hidden');
      this.changeElem.classList.add('active');
      setTimeout(() => this.changeElem.classList.remove('active'), 10);
    } else {
      this.changeElem.classList.add('active');
      setTimeout(() => {
        this.changeElem.classList.remove('active');
        this.changeElem.classList.add('hidden');
      }, 500);
    }
  }

  animation() {
    if (this.changeElem.classList.contains('collapseElemShow')) this.changeElem.classList.remove('collapseElemShow');
    if (this.changeElem.classList.contains('collapseElemHide')) this.changeElem.classList.remove('collapseElemHide');
    if (!this.collapse) {
      this.changeElem.style.display = 'block';
      this.changeElem.classList.toggle('collapseElemShow');
      this.collapse = true;
    } else {
      this.changeElem.classList.toggle('collapseElemHide');
      this.collapse = false;
    }
  }
}
