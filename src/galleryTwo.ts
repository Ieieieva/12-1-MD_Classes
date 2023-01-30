import Gallery from "./galleryOne";

export default class GalleryTwo extends Gallery {
  dots: any;        //Tips????
  dotIndex: number;

  constructor (selector: string) {
    super(selector);

    this.dots = this.rootElement.querySelectorAll('.dot')
    this.dotIndex = 0

    this.initDots()
  }

  initDots() {
    this.nextButton.addEventListener('click', () => {
      this.removeActiveClassDots();
      this.changeDotIndexNext();
      this.addActiveClassDots();
    })

    this.prevButton.addEventListener('click', () => {  
      this.removeActiveClassDots();
      this.changeDotIndexPrev();
      this.addActiveClassDots();
    })
  }

  removeActiveClassDots() {
    this.dots.forEach((dot: HTMLDivElement) => {
      dot.classList.remove("dot__active");
    });
  }

  changeDotIndexNext() {
    if (this.dotIndex === this.dots.length - 1) {
      this.dotIndex = 0;
    } else {
      this.dotIndex += 1;
    }
  }

  changeDotIndexPrev() {
    if (this.dotIndex === 0) {
      this.dotIndex = this.dots.length - 1;
    } else {
      this.dotIndex -= 1;
    }
  }

  addActiveClassDots() {
    this.dots[this.dotIndex].classList.add("dot__active")
  }
}