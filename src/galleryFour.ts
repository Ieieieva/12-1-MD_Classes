import GalleryThree from "./galleryThree";

export default class GalleryFour extends GalleryThree {

  slideshowButton: HTMLImageElement;
  stopSlideShowButton: HTMLImageElement;
  fullscreenButton: HTMLImageElement;
  regularscreenButton: HTMLImageElement;
  autoSlideIndex: number;

  constructor(selector: string) {
    super(selector);

    this.slideshowButton = this.rootElement.querySelector(".js-icon__slideshow");
    this.stopSlideShowButton = this.rootElement.querySelector(".js-icon__slideshow-end");
    this.fullscreenButton = this.rootElement.querySelector(".js-icon__fullscreen");
    this.regularscreenButton = this.rootElement.querySelector(".js-icon__regularscreen");
    this.autoSlideIndex = 0;

    this.enterFullscreen()
    this.exitFullscreen()
    this.slideshow() 
  }

  enterFullscreen() {
    this.fullscreenButton.addEventListener('click', () => {
      this.hideFullScIcon()
      this.showRegScIcon()
      this.fullscreenImageOn()
    })
  }

  exitFullscreen() {
    this.regularscreenButton.addEventListener('click', () => {
      this.showFullScIcon()
      this.hideRegScIcon()
      this.fullScreenImageOff()
    })
  }

  hideFullScIcon() {
    this.fullscreenButton.classList.add("icon__hidden");
  }

  showFullScIcon() {
    this.fullscreenButton.classList.remove("icon__hidden");
  }

  hideRegScIcon() {
    this.regularscreenButton.classList.add("icon__hidden");
  }

  showRegScIcon() {
    this.regularscreenButton.classList.remove("icon__hidden");
  }

  fullscreenImageOn() {
    this.imagesElement.forEach((image: HTMLImageElement) => {
      image.classList.add("fullscreen")
    })
  }

  fullScreenImageOff() {
    this.imagesElement.forEach((image: HTMLImageElement) => {
      image.classList.remove("fullscreen")
    })
  }

  slideshow() {
    this.slideshowButton.addEventListener('click', () => {
      this.hideSlideShowIcon()
      this.showEndSlideShowIcon()
      slideShowOn();
    })

    const slideShowOn = () => {
      for (let i = 0; i < this.imagesElement.length; i += 1) {
        this.imagesElement[i].classList.remove("photo__active");
      }
      this.autoSlideIndex += 1;

      if (this.autoSlideIndex > this.imagesElement.length) {
        this.autoSlideIndex = 1;
      }

      this.imagesElement[this.autoSlideIndex - 1].classList.add("photo__active");
      const autoSLide = setTimeout(slideShowOn, 5000);

      this.stopSlideShowButton.addEventListener('click', () => {
        this.hideEndSlideShowIcon();
        this.showSlideShowIcon()
        stopSlideShow()
      })

      const stopSlideShow = () => {
        clearTimeout(autoSLide)
      }
    }

  }

  hideSlideShowIcon() {
    this.slideshowButton.classList.add("icon__hidden");
  }

  showSlideShowIcon() {
    this.slideshowButton.classList.remove("icon__hidden");
  }

  hideEndSlideShowIcon() {
    this.stopSlideShowButton.classList.add("icon__hidden");
  }
  showEndSlideShowIcon() {
    this.stopSlideShowButton.classList.remove("icon__hidden");
  }

}