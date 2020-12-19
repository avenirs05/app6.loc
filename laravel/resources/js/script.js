// SwitchToActualLang
export function switchToActualLang() {
    function insertText() {
        let actualLang = event.target.innerText
        document.querySelector('.lang-text-actual').innerText = actualLang
        location.href = '/locale/' + actualLang.trim().toLowerCase()
    }

    document.querySelector('.lang-choice-desktop .lang-list').addEventListener('click', insertText)
    document.querySelector('.lang-choice-mobile .lang-list').addEventListener('click', insertText)
}

// We have to delete 'active' class on Menu Item 
export function markActualMenuPage() {
    let collection = document.querySelectorAll('#navbarCollapse .nav-link')

    for (let i = 0; i < collection.length; i++) {
        let str = collection[i].getAttribute('href')
        let arr = str.split('/')
        let pageName = arr[arr.length - 1]

        if (location.pathname === '/') {
            collection[i].parentElement.classList.remove("active")
            return
        }

        if (('/' + pageName) === location.pathname) {
            collection[i].parentElement.classList.remove("active")
            return
        }
    }
}

// Прижать футер к низу
export function footerToBottom() {
    if ($(document).height() <= $(window).height()) {
        $(".footer").addClass("fixed-bottom");
    }
}


export function openLightGalleryIfClickMainImg() {
    let imgMain = document.querySelector('.img-main-lightgallery')

    if (imgMain) {
        imgMain.addEventListener('click', function () {
            document.querySelector('.img-thumb-lightgallery').click()
        })
    }
}

export function getLocation(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    
    return match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostname: match[3],
        port: match[4],
        pathname: match[5],
        search: match[6],
        hash: match[7]
    }
}

export function getPath(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match[5]    
}

export function getTotalPagesForPagination(totalCount, perPage) {
    return totalCount % perPage === 0 ? 
      totalCount / perPage : 
      Math.ceil(totalCount / perPage)
  }



