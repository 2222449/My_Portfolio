document.addEventListener("DOMContentLoaded", () => {
    // 1. Typing Effect Logic
    const texts = ["Programmer", "Web Developer", "JavaFX Developer", "Problem Solver"];
    let count = 0;
    let index = 0;
    const target = document.querySelector(".dynamic-text");

    function typeEffect() {
        if (count === texts.length) count = 0;
        const currentText = texts[count];
        const letter = currentText.slice(0, ++index);
        if (target) target.textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(typeEffect, 2000);
        } else {
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // 2. Project Filtering Logic
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    function updateProjectCounts() {
        filterBtns.forEach(btn => {
            const category = btn.getAttribute("data-category");
            const countSpan = btn.querySelector(".count");
            if (category === "all") {
                countSpan.textContent = `(${projectCards.length})`;
            } else {
                const num = document.querySelectorAll(`.project-card[data-category="${category}"]`).length;
                countSpan.textContent = `(${num})`;
            }
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const selectedCategory = btn.getAttribute("data-category");
            projectCards.forEach(card => {
                card.style.display = "none";
                if (selectedCategory === "all" || card.getAttribute("data-category") === selectedCategory) {
                    card.style.display = "block";
                }
            });
        });
    });
    updateProjectCounts();

    // 3. Technical Skill Bars Animation (Horizontal)
    const skillBars = document.querySelectorAll(".fill");
    skillBars.forEach(bar => {
        const width = bar.getAttribute("data-width");
        // Small delay to ensure the animation triggers after page load
        setTimeout(() => {
            bar.style.width = width + "%";
        }, 300);
    });

    // 4. Professional Skills Logic (Circular)
    const circles = document.querySelectorAll(".circle-box");
    circles.forEach(box => {
        const percent = box.getAttribute("data-percent");
        const circle = box.querySelector("circle:last-child");
        
        // The radius is 40 (from your HTML SVG)
        const radius = 40;
        // Circumference = 2 * PI * r (approx 251.2)
        const circumference = 2 * Math.PI * radius;

        // Set the stroke properties
        circle.style.strokeDasharray = circumference;
        
        // Calculate the offset: (100 - percentage) / 100 * circumference
        const offset = circumference - (percent / 100) * circumference;

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 500);
    });
});
// Add this inside your DOMContentLoaded block
const contactForm = document.getElementById('portfolio-form');

if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic Button Animation
        const btn = this.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        
        // Simulate sending (In reality, you would use an API here)
        setTimeout(() => {
            btn.style.background = '#3EE332';
            btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
            
            // Reset form
            contactForm.reset();
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = ''; // Resets to CSS gradient
            }, 3000);
        }, 2000);
    });
}