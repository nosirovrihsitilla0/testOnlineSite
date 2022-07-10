$('.ask').on('click', function(event){
    event.preventDefault()
    $('.ask').removeClass('active')
    $('.answer').slideUp()
    $(this).toggleClass('active').next().stop(true).slideToggle();
})

function typing(element){
    let fullText = ''
    i = 0
    innerText = element.text()

    let interval = setInterval(() => {
        fullText += innerText[i]
            i++

            element.html(fullText)
        if(i > innerText.length - 1){
            clearInterval(interval)
        }        
    }, 250)
}

typing($('h1'))

$('button[data-filter]').click(function () {
    let attr = $(this).attr('data-filter')
    console.log(attr);
    if(attr == 'primary'){
        $('.js-filter-card').not(`[data-filter=${attr}]`).slideUp(500)
    } else if(attr == 'success'){
        $('.js-filter-card').not(`[data-filter=${attr}]`).slideUp(500)
    }else if(attr == 'danger'){
        $('.js-filter-card').not(`[data-filter=${attr}]`).slideUp(500)
    }else{
        $('.js-filter-card').slideDown(500)
    }

    $(`.js-filter-card[data-filter=${attr}]`).slideDown(500)
})


$('.js-modal-show').click(function (e) {
    e.preventDefault()
    $('.modal').fadeIn(500)
})

$('.close').click(function (e) {
    e.preventDefault()
    $('.modal').fadeOut(500)
})

$('.modal').click(function (e){
    if(e.currentTarget == e.target){
        $('.modal').fadeOut(500)
    }
})

$('.nav').css({
    position: 'fixed',
    width: '100%',
    zIndex: '10'
})

let oldYOffset = pageYOffset    

$(window).on('scroll', function(){
    if((pageYOffset > oldYOffset || $('header').innerHeight() > oldYOffset) && pageYOffset !== 0){
        $('.nav').fadeOut(500)
    }else if(oldYOffset > pageYOffset || pageYOffset == 0) {
        $('.nav').fadeIn(500)
    }
    oldYOffset = pageYOffset
})