export default class Gallery {
  rootElement: HTMLDivElement;
  imagesElement: any;    // Kādu tipu šeit vajag?????
  prevButton: HTMLButtonElement;
  nextButton: HTMLButtonElement;
  slideIndex: number;

  constructor (selector: string) {
    this.rootElement = document.querySelector(selector);
    this.imagesElement = this.rootElement.querySelectorAll(".carousel__photo")
    this.prevButton = this.rootElement.querySelector(".js-prev");
    this.nextButton = this.rootElement.querySelector(".js-next");
    this.slideIndex = 0;

    this.initEvents();
  }

  initEvents() {
    this.nextButton.addEventListener('click', () => {
      this.removeActiveClass();
      this.changeSlideIndexNext();
      this.addActiveClass();
    })

    this.prevButton.addEventListener('click', () => {
      this.removeActiveClass();
      this.changeSlideIndexPrev();
      this.addActiveClass();
    })
  }

  removeActiveClass() {
    this.imagesElement.forEach((image: HTMLImageElement) => {
      image.classList.remove("photo__active");
    });
  }

  changeSlideIndexNext() {
    if (this.slideIndex === this.imagesElement.length - 1) {
      this.slideIndex = 0;
    } else {
      this.slideIndex += 1;
    }
  }

  changeSlideIndexPrev() {
    if (this.slideIndex === 0) {
      this.slideIndex = this.imagesElement.length - 1;
    } else {
      this.slideIndex -= 1;
    }
  }

  addActiveClass() {
    this.imagesElement[this.slideIndex].classList.add("photo__active")
  }
}