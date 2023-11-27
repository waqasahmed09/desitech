let currentSlide = 0;
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

function nextSlide() {
  currentSlide = (currentSlide + 1) % dots.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + dots.length) % dots.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Auto slide every 3 seconds



const phones = [
  {
    brand: 'Samsung',
    model: 'S20',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
  },
  {
    brand: 'Xiomi',
    model: 'note10',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000
  },
  {
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
  },
  {
    brand: 'Tecno',
    model: 'spark10',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
  },
  {
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
  },
  {
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
  },
  {
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
  },
  {
    brand: 'Techno',
    model: 's50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
  },
  {
    brand: 'Abdullah',
    model: 's50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
  },

]

const div = document.querySelector('.render-phones');
for (let i = 0; i < phones.length; i++) {
  div.innerHTML += `
    <div class="p-5 border border-1  rounded-1 shadow-lg m-2">
            <p><span class="font-bold text-lg">brand:</span> ${phones[i].brand}</p>
            <p><span class="font-bold text-lg">Model:</span> ${phones[i].model}</p>
            <p><span class="font-bold text-lg">RAM:</span> ${phones[i].ram}</p>
            <p><span class="font-bold text-lg">ROM:</span> ${phones[i].rom}</p>
            <p><span class="font-bold text-lg">Camera:</span> ${phones[i].camera}</p>
            <p><span class="font-bold text-lg">Price:</span> ${phones[i].price}</p>
            <button onclick='addToCart(${i})' class="btn btn-primary m-2">Add to Cart</button>
    </div>
    `

}

function addToCart(index) {
  console.log(phones[index]);
}