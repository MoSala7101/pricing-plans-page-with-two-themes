/**************************************
 * developer: Mohamed Salah
 * email: sala7thedeveloper@gmail.com
 **************************************/

/*************************************************************************** 
IF toggler is clicked:
------------------------
1- check the current state of the checkbox
2- change selected type title using 'active' class
3- change toggler area background color using 'toggled' class
4- change toggler position
5- change prices values according to the selected type (annually or monthly) 
6- change the current theme for all elements
7- change thhe current theme for selected plan
****************************************************************************/

$('#togglerButton').change(function() {
    /* if checked -> annually is active */
    if ($(this).prop("checked")) {
        /* Change toggler titles color */
        $('.annually').addClass('active');
        $('.monthly').removeClass('active');
        /* Change toggler area background */
        $('.toggler-area').addClass('toggled');
        /* Change toggler position */
        moveBallLeft();
        /* Change prices to annual values */
        makePricesAnnually();
        /* Enable Annually theme */
        enableAnnuallyPricesTheme();
        /* Change current active plan theme */
        $('.price-container.monthly-active-color').addClass('annually-active-color');
        $('.price-container.monthly-active-color').removeClass('monthly-active-color');
    } else {
        /* Change toggler titles color */

        $('.annually').removeClass('active');
        $('.monthly').addClass('active');
        /* Change toggler are background */
        $('.toggler-area').removeClass('toggled');
        moveBallRight();
        /* Update prices values */
        makePricesMonthly();
        /* Change theme */
        enableMonthlyPricesTheme();
        /* Change current active plan theme */
        $('.price-container.annually-active-color').addClass('monthly-active-color');
        $('.price-container.annually-active-color').removeClass('annually-active-color');
    }
});


/* Change current selected plan on click */
$('.price-container').click(function() {
    /* Clear all active classes */
    unsetActiveContainer();
    /* chheck the toggler state */
    if ($('#togglerButton').prop('checked') == true) {
        /* Annually is active */
        $(this).removeClass(' monthly-active-color');
        $(this).addClass(' annually-active-color');
        $(this).find('.learn-more-button').addClass('active');
    } else {
        /* Monthly is active */
        $(this).removeClass(' anually-active-color');
        $(this).addClass(' monthly-active-color');
        $(this).find('.learn-more-button').addClass('active');

    }
});


/********************* 
Helping Functions
**********************/

/* *******************************
Change toggler position functions
****** **************************/
function moveBallLeft() {
    $('.toggler-ball').css('left', '0');
    $('.toggler-ball').css('right', 'initial');

}

function moveBallRight() {
    $('.toggler-ball').css('right', '0');
    $('.toggler-ball').css('left', 'initial');

}

/* ****************************************
 XXX Change toggler position functions XXX 
****** ***********************************/

/* *****************************
Change Prices values Functions
****** ************************/
function makePricesAnnually() {
    $('.price-container').each(function() {
        var oldPrice = $(this).find('.price-number').text();
        oldPrice = parseFloat(oldPrice);
        var newPrice = (oldPrice * 12.00) - 80;
        $(this).find('.price-number').text(newPrice)
    })
}

function makePricesMonthly() {
    $('.price-container').each(function() {
        var oldPrice = $(this).find('.price-number').text();
        oldPrice = parseFloat(oldPrice);
        var newPrice = (oldPrice + 80) / 12.00;
        $(this).find('.price-number').text(newPrice)
    })
}

/* *************************************
XXX Change Prices values  FunctionsXXX
****** ********************************/

/* *******************************************
Clear active class from all prices containers
****** **************************************/
function unsetActiveContainer() {
    $('.price-container').each(function() {
        $(this).removeClass('active');
        $(this).removeClass('annually-active-color');
        $(this).removeClass('monthly-active-color');
        $('.learn-more-button').removeClass('active');
    })
}


/* *******************************
Change the active theme
****** **************************/
function enableAnnuallyPricesTheme() {
    /* Remove monthly theme */
    $('.price-container.active').removeClass('monthly-active-color ');
    $('.learn-more-button').removeClass('monthly-button-class');

    /* Add annually theme */
    $('.price-container.active').addClass('annually-active-color');
    $('.learn-more-button').addClass('annually-button-class');
}

function enableMonthlyPricesTheme() {
    /* Remove annually theme */
    $('.price-container.active').removeClass('annually-active-color');
    $('.learn-more-button').removeClass('annually-button-class');
    /* Add monthly theme */
    $('.price-container.active').addClass('monthly-active-color');
    $('.learn-more-button').addClass('monthly-button-class');
}


/*********************** 
XXX Helping FunctionsXXX 
************************/