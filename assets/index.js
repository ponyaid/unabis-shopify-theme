const links = Array.from(document.querySelectorAll('.header__nav-item_drop'))
const productsMegaMenu = document.querySelector('#products-mega-menu')
const benefitsMegaMenu = document.querySelector('#benefits-mega-menu')
const spectrumsMegaMenu = document.querySelector('#spectrums-mega-menu')


links.forEach(link => {
    link.addEventListener('mouseover', mouseEventHandler)
    link.addEventListener('mouseout', mouseEventHandler)
})


function mouseEventHandler(e) {
    switch (e.currentTarget.id) {
        case 'products-drop-link':
            productsMegaMenu.classList.toggle('mega-menu_active')
            break;
        case 'benefits-drop-link':
            benefitsMegaMenu.classList.toggle('mega-menu_active')
            break;
        case 'spectrums-drop-link':
            spectrumsMegaMenu.classList.toggle('mega-menu_active')
            break;
    }
}
