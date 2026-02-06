document.addEventListener('DOMContentLoaded', function () {
                    const mobileMenuButton = document.getElementById('mobile-menu-button');
                    const closeMenuButton = document.getElementById('close-menu-button');
                    const mobileMenu = document.getElementById('mobile-menu');
                    const menuOverlay = document.getElementById('menu-overlay');
                    const body = document.body;

                    const openMenu = () => {
                        mobileMenu.classList.remove('translate-x-full');
                        menuOverlay.classList.remove('hidden');
                        body.classList.add('overflow-hidden');
                    };

                    const closeMenu = () => {
                        mobileMenu.classList.add('translate-x-full');
                        menuOverlay.classList.add('hidden');
                        body.classList.remove('overflow-hidden');
                    };

                    mobileMenuButton.addEventListener('click', openMenu);
                    closeMenuButton.addEventListener('click', closeMenu);
                    menuOverlay.addEventListener('click', closeMenu);
                    mobileMenu.querySelectorAll('a').forEach(link => {
                        if(!link.parentElement.classList.contains('accordion-content')) {
                            link.addEventListener('click', closeMenu);
                        }
                    });

                    const header = document.getElementById('header');
                    const logoImg = document.getElementById('header-logo');
                    window.addEventListener('scroll', () => {
                        if (window.scrollY > 50) {
                            header.classList.add('scrolled');
                            logoImg.classList.add('filter', 'brightness-0', 'invert');
                        } else {
                            header.classList.remove('scrolled');
                            logoImg.classList.remove('filter', 'brightness-0', 'invert');
                        }
                    });
                });