const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae quam non turpis finibus suscipit. Nulla facilisi. Aenean euismod, sapien a tempor fermentum.",
    name: "Biru Kumar",
    role: "VP of Engineering",
    img: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    text: "Sed euismod sapien sed ipsum fermentum, enim nisl commodo elit, sed imperdiet nibh turpis non odio. Curabitur eu dignissim turpis.",
    name: "Rita Sharma",
    role: "Director of Operations",
    img: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    text: "Sed convallis arcu nec metus egestas, non gravida velit feugiat. Nulla facilisi. Praesent eget justo euismod, rhoncus ipsum et, mattis lorem.",
    name: "Ajay Patel",
    role: "CTO",
    img: "https://randomuser.me/api/portraits/men/42.jpg"
  }
];

let currentIndex1 = 0;

function showTestimonial(index) {
  const container = document.getElementById('carousel1');
  container.innerHTML = `
    <div class="gettouch-testimonial active">
      <p>${testimonials[index].text}</p>
      <div class="gettouch-author">
        <img src="${testimonials[index].img}" alt="${testimonials[index].name}" />
        <div class="gettouch-author-info">
          <h4>${testimonials[index].name}</h4>
          <span>${testimonials[index].role}</span>
        </div>
      </div>
    </div>
  `;
}

function nextSlide() {
  currentIndex1 = (currentIndex1 + 1) % testimonials.length;
  showTestimonial(currentIndex1);
}

function prevSlide() {
  currentIndex1 = (currentIndex1 - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex1);
}

// Initialize
showTestimonial(currentIndex1);
