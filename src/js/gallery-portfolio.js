import galleryItems from '../data/gallery.json';

const galleryList = document.querySelector('.gallery');

const description = 'Tattoo made by Exodus';
const placeholder = './images/tattoo-placeholder.png';

const markup = galleryItems.data
  .map(
    el =>
      `<li class="gallery__item"><a class="gallery__link" href=${
        el.original
      }><picture><img class="gallery__image" src=${
        el.original ?? placeholder
      } data-src="${
        el.original ?? placeholder
      }" alt=${description} title=${description}  loading="lazy"/></picture></a></li>`
  )
  .join('');

galleryList.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
});
