import galleryItems from '../data/gallery.json';

const galleryList = document.querySelector('.gallery');

const description = 'Tattoo made by Exodus';
const placeholder = './images/tattoo-placeholder.png';
const pathTo = '../../src/';
const img = './images/gallery/tattoo-1.webp';

const markup = galleryItems.data
  .map(
    el =>
      `<li class="gallery__item"><a class="gallery__link" href=${img}><picture><img class="gallery__image" src=${img} data-src="${img}" alt=${description} title=${description}  loading="lazy"/></picture></a></li>`
  )
  .join('');

//FIXME: src doesn't show properly on live page
galleryList.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
});

// `<li class="gallery__item"><a class="gallery__link" href=${
//   pathTo + el.original
// }><picture><img class="gallery__image" src=${
//   pathTo + el.original ?? placeholder
// } data-src="${
//   pathTo + el.original ?? placeholder
// }" alt=${description} title=${description}  loading="lazy"/></picture></a></li>`;
