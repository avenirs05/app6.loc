export function switchToActualLang() {
    document.querySelector('.lang-list').addEventListener('click', function() {
        let textActual = document.querySelector('.lang-text-actual')
        textActual.innerText = event.target.innerText
    })
}