import GalleryTwo from "./galleryTwo";

export default class GalleryThree extends GalleryTwo {
  imageOne: HTMLImageElement;
  imageTwo: HTMLImageElement;
  imageThree: HTMLImageElement;
  imageFour: HTMLImageElement;
  imageFive: HTMLImageElement;

  smallImageOne: HTMLImageElement;
  smallImageTwo: HTMLImageElement;
  smallImageThree: HTMLImageElement;
  smallImageFour: HTMLImageElement;
  smallImageFive: HTMLImageElement;


  constructor(selector: string) {
    super(selector);

    this.imageOne = this.rootElement.querySelector(".js-photo-first");
    this.imageTwo = this.rootElement.querySelector(".js-photo-second");
    this.imageThree = this.rootElement.querySelector(".js-photo-third");
    this.imageFour = this.rootElement.querySelector(".js-photo-fourth");
    this.imageFive = this.rootElement.querySelector(".js-photo-fifth");

    this.smallImageOne = this.rootElement.querySelector(".js-small-one");
    this.smallImageTwo = this.rootElement.querySelector(".js-small-two");
    this.smallImageThree = this.rootElement.querySelector(".js-small-three");
    this.smallImageFour = this.rootElement.querySelector(".js-small-four");
    this.smallImageFive = this.rootElement.querySelector(".js-small-five");

    this.getFirstImage()
    this.getSecondImage()
    this.getThirdImage()
    this.getFourthImage()
    this.getFifthImage()
  }

  getFirstImage() {
    this.smallImageOne.addEventListener('click', () => {
      this.removeActiveClass();
      this.imageOne.classList.add("photo__active");
    })
  }

  getSecondImage() {
    this.smallImageTwo.addEventListener('click', () => {
      this.removeActiveClass();
      this.imageTwo.classList.add("photo__active");
    })
  }

  getThirdImage() {
    this.smallImageThree.addEventListener('click', () => {
      this.removeActiveClass();
      this.imageThree.classList.add("photo__active");
    })
  }

  getFourthImage() {
    this.smallImageFour.addEventListener('click', () => {
      this.removeActiveClass();
      this.imageFour.classList.add("photo__active");
    })
  }

  getFifthImage() {
    this.smallImageFive.addEventListener('click', () => {
      this.removeActiveClass();
      this.imageFive.classList.add("photo__active");
    })
  }
}