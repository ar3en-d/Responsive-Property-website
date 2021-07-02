
(function () {
  "use strict";

  // saving logic
  $(document).ready(function () {


    // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result;
    var calculator = $('.calculator');
    var calculatorSell = calculator.find('.calculator__sell');
    var calculatorFee = calculator.find('.calculator__fee');
    var calculatorResult = calculator.find('.calculator__result');
    var feeAmount = calculator.find('.selling-amount');
    var results = calculator.find('.results');
    var sellingAmount = calculator.find('.fee-amount');


    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
      feeAmount.text(calculatorFee.val() + '%');
      console.log(calculatorFee.val());
      amount = calculatorSell.val() * 1;
      percent = calculatorFee.val() * 1;
      sellingAmount.text(amount + '€');
      result = amount + amount * (percent / 100);
      calculatorResult.text(result.toFixed(2) + '€');
    })


    // RANGE FUNCTION
    // ----------------------------------------------------------

    calculatorFee.on('change', function () {

      if (calculatorSell.val() === '' || isNaN(calculatorSell.val())) {
        alert('please Enter valid value!')
      } else if (calculatorSell.val() < 50000 || calculatorSell.val() > 5000000) {
        alert('Please enter within the valid range!')
      } else {
        amount = calculatorSell.val() * 1;
      }

      feeAmount.text(calculatorFee.val() + '%');

      percent = calculatorFee.val() * 1;
      result = amount * (percent / 100);
      calculatorResult.text(result.toFixed(0) + '€');
      result > 2500 ?
        results.text((result - (2500)).toFixed(0) + '€') : results.text('0€');
    });
  });


  // Easy selector helper function

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  // Easy event listener function

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  // Easy on scroll event listener 

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  // Toggle .navbar-reduce

  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 10) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }



  // Back to top button

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 500) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }


  // Preloader

  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }


  // Search window open/close

  let body = select('body');
  on('click', '.navbar-toggle-box', function (e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function (e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })

})()
