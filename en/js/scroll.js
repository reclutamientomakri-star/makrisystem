document.addEventListener('DOMContentLoaded', function () {
                     const accordionToggles = document.querySelectorAll('.accordion-toggle');
                    accordionToggles.forEach(toggle => {
                        toggle.addEventListener('click', () => {
                            const content = toggle.nextElementSibling;
                            const isActive = toggle.classList.contains('active');

                            if (isActive) {
                                toggle.classList.remove('active');
                                content.style.maxHeight = null;
                            } else {
                                toggle.classList.add('active');
                                content.style.maxHeight = content.scrollHeight + "px";
                            }
                        });
                    });

                    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                        anchor.addEventListener('click', function (e) {
                            e.preventDefault();
                            const targetElement = document.querySelector(this.getAttribute('href'));
                            if (targetElement) {
                                targetElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        });
                    });
                });