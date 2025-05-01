document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05) rotate(1deg)";
            card.style.boxShadow = "0px 6px 15px rgba(255, 140, 66, 0.5)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1) rotate(0deg)";
            card.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const showSection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    };

    const observer = new IntersectionObserver(showSection, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skills = [
                    { className: "html", value: "95%" },
                    { className: "css", value: "90%" },
                    { className: "js", value: "85%" },
                    { className: "react", value: "70%" },
                    { className: "java", value: "80%" },
                    { className: "mysql", value: "75%" },
                    { className: "c", value: "85%" }
                ];

                skills.forEach(skill => {
                    let element = document.querySelector(`.${skill.className}`);
                    if (element) {
                        element.style.width = skill.value;
                        element.textContent = skill.value;
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    skillObserver.observe(document.getElementById("skills"));
});
