$(() => {
    $.ajax('https://9u0gb30id0.execute-api.eu-west-1.amazonaws.com/Prod/counter?site=davealberttext')
    .done((res) => {
        console.log(res);
        $('#counter').html(res);
    });

    if (window.shouldrun) {
        window.shouldrun();
    }

    $('.close').on('click', function(event) {
        $('.modal').fadeOut();
    });

    $('.open-modal').on('click', function(event) {
        $('.modal').fadeIn();
    });

});

