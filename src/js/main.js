/* globals jQuery */
'use strict'

jQuery(function ($) {
  // Nav Trigger
  $('.site-nav-trigger').on('click', function (e) {
    e.preventDefault()
    $('body').toggleClass('site-nav-is-open')
  })

  // Nav dropdowns
  var $subNavTrigger = $('.sub-nav--trigger')

  $subNavTrigger.each(function (ev) {
    var $this = $(this)
    var $subnav = $this.next()
    var openClass = 'sub-nav--open'

    // attach a corresponding data attribute for later use on the click handler
    $subnav.data('sub-nav-pane', $this.data('sub-nav-link'))

    $this.on('click', function (e) {
      e.preventDefault()
      // is the corresponding subnav currently open *before* any changes occur?
      var isOpen = $subnav.hasClass(openClass)
      // remove all open subnav classes, therefore closing any that are open
      $('.' + openClass).removeClass(openClass)
      // if the corresponding subnav was closed already, user intends to open it
      if (!isOpen) $subnav.addClass(openClass)
    })
  })

  // Search
  $('.search-form-trigger').on('click', function (e) {
    e.preventDefault()
    $('body').toggleClass('search-form-is-open')
  })
  $('.search-input').on('submit', function () {
    $('body').removeClass('search-form-is-open')
  })

  // Customers
  $('#RecoverPassword').on('click', function (e) {
    e.preventDefault()
    $('#RecoverPasswordForm').removeClass('hide')
    $('#CustomerLoginForm').addClass('hide')
  })

  $('#HideRecoverPasswordLink').on('click', function (e) {
    e.preventDefault()
    $('#RecoverPasswordForm').addClass('hide')
    $('#CustomerLoginForm').removeClass('hide')
  })

  $('.address-new-toggle').on('click', function (e) {
    e.preventDefault()
    $('#AddressNewForm').toggleClass('hide')
  })

  $('.address-edit-toggle').on('click', function (e) {
    e.preventDefault()
    $('#EditAddress_').toggleClass('hide')
  })

  // Tabs
  var tabs = $('.tab')
  tabs.addClass('conceal').addClass('conceal').filter(':first').attr('aria-hidden', 'true').removeClass('conceal')

  $('.tabs li a').click(function () {
    tabs.addClass('conceal').attr('aria-hidden', 'true')
    tabs.filter(this.hash).attr('aria-hidden', 'false').removeClass('conceal')
    $('.tabs li a').removeClass('selected').attr('aria-expanded', 'false')
    $(this).addClass('selected').attr('aria-expanded', 'true')
    return false
  }).filter(':first').click().attr('aria-expanded', 'true').removeClass('conceal')

  // Currency Form
  $('.shopify-currency-form select').on('change', function () {
    $(this).parents('form').submit()
  })

  // eol
})
