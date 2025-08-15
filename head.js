        document.addEventListener('DOMContentLoaded', () => {
            const headerBlock = document.querySelector('.ccc-header-block');
            const toggleMenu = headerBlock.querySelector('.ccc-mobile-menu-toggle');
            const navMenu = headerBlock.querySelector('.ccc-bottom-navigation');

            const btnLanguage = headerBlock.querySelector('.ccc-top-navigation-language-button');
            const languageSelector = headerBlock.querySelector('.ccc-top-navigation-language-selector');

            const resizeHandler = (extra=0) => {
                 requestAnimationFrame(()=> {
                    const h = document.body.clientHeight + extra;
                    const w = document.body.clientWidth;

                    const top = window.top;
                    console.log(top);
                    top.postMessage({"action":"header-resize", "w":w,"h":h },"*")
                 });

            }


            btnLanguage.addEventListener('click', () => {
                languageSelector.classList.toggle('language-selector-open');
                resizeHandler( languageSelector.classList.contains("language-selector-open") ? 25 : 0  );
            });


            toggleMenu.addEventListener('click', () => {
                navMenu.classList.toggle('open');
                if(navMenu.classList.contains('open')) {
                    toggleMenu.setAttribute('aria-expanded', 'true');
                } else {
                    toggleMenu.setAttribute('aria-expanded', 'false');      
                }
                toggleMenu.innerHTML = navMenu.classList.contains('open') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
                resizeHandler();
            });





        });
      
