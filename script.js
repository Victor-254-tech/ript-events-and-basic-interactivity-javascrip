// ---------------------------
// 1️⃣ DARK/LIGHT MODE TOGGLE
// ---------------------------
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// ---------------------------
// 2️⃣ LIKE COUNTER FEATURE
// ---------------------------
const likeBtn = document.getElementById('likeBtn');
const likeCount = document.getElementById('likeCount');
let count = 0;

likeBtn.addEventListener('click', () => {
  count++;
  likeCount.textContent = count;
});

// ---------------------------
// 3️⃣ FAQ TOGGLE INTERACTION
// ---------------------------
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ---------------------------
// 4️⃣ CUSTOM FORM VALIDATION
// ---------------------------
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents form from reloading page

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Custom validation logic
  if (name === '' || email === '' || password === '') {
    message.textContent = "⚠️ All fields are required!";
    message.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    message.textContent = "❌ Invalid email format!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.textContent = "🔒 Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  message.textContent = "✅ Form submitted successfully!";
  message.style.color = "green";

  // Optional: clear form
  form.reset();
});
