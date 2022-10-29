jQuery(function($) {
//BEGIN JQUERY

// global functions 

function isLinksEmpty(el) {
    return !$.trim(el.html());
}

// Minimize the header height on scroll, show surveys
// Slide control
var lastScrollTop = 0;

$(window).scroll(function () {
  var windowWidth = $(window).width();
  var siteLogo = $(".header .site-logo-large");
  var siteHeader = $(".header");
  var searchDrawer = $("#search-drawer");
  var scrollTop = $(document).scrollTop();
  var st = $(this).scrollTop();

  // shrink the logo - legacy effect
  if (scrollTop > 500 && windowWidth >= 1068) {
    siteLogo.css("width", "75%");

    if (st > lastScrollTop) {
      siteHeader.css({ top: "-190px", height: "140px" });
      searchDrawer.collapse("hide");
    } else {
      siteHeader.css({ top: "0", height: "140px" });
      addStickyMargin();
    }
  } else if (windowWidth >= 1068) {
    siteLogo.css("width", "100%");
    siteHeader.css({ top: "0", height: "140px" });
  } else if (scrollTop > 500 && windowWidth <= 1068) {
    siteHeader.css({ height: "100px", top: "-100px", opacity: "0" });
    searchDrawer.collapse("hide");

    if (st > lastScrollTop) {
      siteHeader.css({ height: "100px", top: "-100px", opacity: "0" });
    } else {
      addStickyMargin();
      siteHeader.css({ height: "100px", top: "0", opacity: "1" });
    }
  }

  lastScrollTop = st;
});

function addStickyMargin() {
  if ($("body").hasClass("srits")) {
    //TO TARGET ONLY SRITS PAGE FOP STICKY BAR NOT OVERLAP WITH HEADER
    $(".srits-venue").css({ "margin-top": "150px" });
  }
}

// Check to see if divs are empty - Audience/Info pages
if (
  isLinksEmpty(
    $(".row-neutral-uoft-blue.linksBlock.band .container .col-md-12")
  )
) {
  $(".row-neutral-uoft-blue.linksBlock.band").hide();
} else if (
  isLinksEmpty(
    $(".infoPage .row-neutral-white.linksBlock .container .col-md-12")
  )
) {
  $(".row-neutral-white.linksBlock").hide();
}

if (
  isLinksEmpty($(".row-neutral-uoft-blue.linksBlock .container .col-md-12"))
) {
  $(".row-neutral-uoft-blue.linksBlock").hide();
}

if (isLinksEmpty($(".band.cont .featureOnlyBlock .col-md-12"))) {
  $(".band.cont").removeClass("band");
}

if (isLinksEmpty($(".band.cont .quoteOnlyBlock .col-md-12"))) {
  $(".band.cont").removeClass("band");
}

if (isLinksEmpty($(".row-neutral-white.newsBlock .container .panel-pane"))) {
  $(".row-neutral-white.newsBlock").hide();
}

if (isLinksEmpty($(".row-neutral-white.linksBlock .container .panel-pane"))) {
  $(".row-neutral-white.linksBlock").hide();
}

if (isLinksEmpty($(".featureQuoteBlock .panel-pane"))) {
  $(".featureQuoteBlock").hide();
}

if (isLinksEmpty($(".footerLinksBlock .col-md-12 .panel-pane"))) {
  $(".footerLinksBlock").hide();
}

if (isLinksEmpty($(".newsBlock.band .container .panel-pane"))) {
  $(".newsBlock.band").hide();
}

if (
  isLinksEmpty($(".row-neutral-feat-alum.alumBlock .container .panel-pane"))
) {
  $(".row-neutral-feat-alum.alumBlock").hide();
}

if (isLinksEmpty($(".featureOnlyBlock div"))) {
  $(".featureOnlyBlock").hide();
}

/*
if (isLinksEmpty($(".quoteOnlyBlock div"))) {
  $(".quoteOnlyBlock").hide();
}
*/

$(".quoteOnlyBlock").each(function () {
  if (isLinksEmpty($(this).find("div"))) {
    $(this).remove();
  }  
});


if (isLinksEmpty($(".twoColBlock .container div"))) {
  $(".twoColBlock").hide();
}

if (isLinksEmpty($(".campusBlock .container div"))) {
  $(".campusBlock").hide();
}

if (isLinksEmpty($(".pageBannerBlock div"))) {
  $(".pageBannerBlock").removeClass("pageBannerBlock");
}

//_news.js
$(".page-taxonomy-term .media-url")
  .siblings(".title")
  .find("a")
  .contents()
  .unwrap()
  .wrap("<strong/>");
$(
  ".page-news-latest-news .latest-news .views-exposed-widgets .views-submit-button .form-submit"
).attr("value", "Search");
$(
  ".page-news-find-a-story .latest-news .views-exposed-widgets .views-submit-button .form-submit"
).after(
  "<span class='resetBtn'><a href='/news/find-a-story?keys=&field_degrees_value=1' role='button'>Reset</a></span>"
);

$(".news-home-banner div.picture")
  .nextAll()
  .wrapAll($("<div></div>").addClass("title-header"));

var emptyOneCol = $(".audiencePage .one-col-body .row .col-xs-12");
var emptyMoreStories = $(".audiencePage .more-stories-body");
var emptyFullWidthStories = $(".audiencePage .full-width.dark");

if (isLinksEmpty(emptyOneCol)) {
  emptyOneCol
    .addClass("removeMe")
    .parent()
    .addClass("removeMe")
    .parent()
    .remove();
  emptyMoreStories.addClass("removeMe").remove();
  emptyFullWidthStories.addClass("removeMe").remove();
}

//NEWS TOPICS TAGS
var str = $(".pane-node-field-topic .links li a").text();
$(".links li a").addClass(str);
$('.mailchimp-newsletter-mergefields input[name="mergevars[EMAIL]"]').attr(
  "placeholder",
  "Email address"
);
$(".page-taxonomy-term .messages.warning").insertBefore(
  "form.mailchimp-signup-subscribe-form"
);
$(".page-taxonomy-term .messages.status").insertBefore(
  "form.mailchimp-signup-subscribe-form"
);
$(".page-news-contactus .messages.error").insertAfter(
  ".page-news-contactus .contact-form"
);

$(".sticky-stories-tag a").insertBefore(".news-tags a:nth-of-type(1)");

// News Home Page Styling for content type
$(".news-home .media-icon")
  .parent()
  .css({
    "background-color": "#495667",
    padding: "10px",
    "border-radius": "3px",
  });

$(".news-home .media-icon")
  .siblings(".date")
  .css({
    position: "absolute",
    top: "0",
    right: "30px",
    color: "#fff",
    "text-align": "right",
  });
$(".news-home .media-icon")
  .siblings(".title")
  .css({ padding: "0 0 10px 0", margin: "0" });
$(".news-home .media-icon")
  .siblings(".title")
  .find("a")
  .css({ color: "white" });
$(".news-home .media-icon").siblings(".picture").css({ display: "none" });
$(".news-home .media-icon, .news-home .youtube,.news-home .flickr-set")
  .siblings(".topic")
  .css({ display: "none" });
$(".news-search .view-content p:contains('embed_content nid=')").remove();
$(".media-body").each(function () {
  var link = $("a:first-child", this).attr("href");
  $(this).siblings(".title").find("a").attr("href", link);
});

/*** FOR CONTACT NEWS REPORTER FORM  ****/
$(".contact-form label").each(function () {
  var place = $(this).text();
  $(this).siblings("input").attr("placeholder", place);
  $(this).siblings("input").attr("aria-label", place);
  $(this).siblings("input").attr("aria-required", true);
  $(this).remove(); //REMOVE LABEL AFTER ALL ATTRIBUTES ADDED TO INPUT
});
$(".contact-form textarea").attr("placeholder", "Story Proposal");
$(".contact-form textarea").attr("aria-label", "Story Proposal");
$(".contact-form textarea").attr("aria-required", true);

$(".contact-form #edit-submit").val("submit");

//For the Tag Template
$(
  ".page-taxonomy.page-taxonomy-term .ds-1col.node.node-story.node-teaser"
).addClass("container");

/* News Individual Post*/
if ($(".info .author").text().length <= 3) {
  $(".info .author").text(" ");
}

function isSectionempty(el) {
  return !$.trim(el.html());
}

$(window).ready(function () {
  if ($("body").hasClass("story-page")) {
    var checkofficialstatment = $(".feature-picture .official-statement");
    var checkofficialstatmentSmall = $(
      ".small-feature-picture .official-statement"
    );
    if (
      !isSectionempty(checkofficialstatment) ||
      (isSectionempty(checkofficialstatment) &&
        isSectionempty(checkofficialstatmentSmall))
    ) {
      $(
        ".small-feature-picture .panel-pane.pane-custom.pane-4.clearfix"
      ).remove();
    }

    var original = $(".original-image").attr("src");
    if (typeof original !== "undefined" && original.length < 15) {
      $(
        ".small-feature-picture .panel-pane.pane-custom.pane-5.clearfix"
      ).remove();
    }
  }
});

// Append new authors field to the same line as the authors field
var newAuthors = $(
  ".info .pane-node-field-new-authors-reporters .pane-content"
).html();
$(".info .authors-internal .pane-content").append(newAuthors);
var newSauthors = $(
  ".info .pane-node-field-new-secondary-author-repor .pane-content"
).html();
$(".info .authors-external .pane-content").append(newSauthors);

//Append New Tags field into the Tags Field in individuals News Story
var newTags = $(".Tags .pane-node-field-new-story-tags .pane-content").html();
$(".Tags .news-tags .pane-content").append(newTags);

$(".topic-wrapper h3.topic-title").each(function () {
  $(this).siblings(".term-main.last").insertBefore(this);
});
$("body.node-type-story strong")
  .siblings("img.media-image")
  .insertBefore("body.node-type-story .node.node-story.node-teaser h2 a");
$("body.node-type-story img.media-image")
  .closest("body.node-type-story div.node.node-story.node-teaser")
  .addClass("width50");

if ($.trim($(".authors-reporters .image").html()) == "") {
  $(".authors-reporters .image").css({ display: "none" });
  $(".authors-reporters #page-title").css({ visibility: "hidden" });
  $(".authors-reporters .email").css({ display: "none" });
}
$(".page-news-searchnews .view-search-news-only .panel-col-first a").attr(
  "tabindex",
  -1
);

/** AODA FIX FOR NEWS SUBHEADLINE */
if ($("body").hasClass("story-page")) {
  if($("#news-subheadline").length) {
    if (isLinksEmpty($('.subhead'))) {
      $('#news-subheadline').remove();
    }    
  }
}
//City Building Blog - match height of news-home block
$(window).ready(function () {
  if ($("body[class*='page-about-u-of-t-city-building']").length) {
    var maxHeightBlog = -1;
    var maxHeightTrio = -1;
    var uoftBlogTrio = $(
      ".page-about-u-of-t-city-building .linksBlock .pane-block"
    );
    var uoftBlogBlocks = $(
      ".page-about-u-of-t-city-building .pane-latest-news .news-home"
    );

    function resizeTrio() {
      uoftBlogTrio.each(function () {
        maxHeightTrio =
          maxHeightTrio > $(this).height() ? maxHeightTrio : $(this).height();
      });

      uoftBlogTrio.each(function () {
        $(this).height(maxHeightTrio);
      });
    }

    resizeTrio();

    //resize news block for blogs
    function resizeNewsBlog() {
      uoftBlogBlocks.each(function () {
        maxHeightBlog =
          maxHeightBlog > $(this).height() ? maxHeightBlog : $(this).height();
      });

      uoftBlogBlocks.each(function () {
        $(this).height(maxHeightBlog);
      });
    }

    resizeNewsBlog();

    //resize the window, if tablet or less, height is auto
    $(window).resize(function () {
      if ($(window).width() > 992) {
        resizeNewsBlog();
        resizeTrio();
      } else {
        uoftBlogBlocks.css("height", "auto");
        uoftBlogTrio.css("height", "auto");
      }
    });
  }
});

// The Bulletin
// Control Feature Picture & Small Image
if ($(".node-type-the-bulletin .feature-picture img").length !== 0) {
  $(".node-type-the-bulletin .small-picture").css("display", "none");
}

if ($(".node-type-the-bulletin .small-picture img").length !== 0) {
  $(
    ".node-type-the-bulletin .feature-picture,.node-type-the-bulletin .feature-picture h1"
  ).css("display", "none");
}

//newsletters are released on tuesdays and thursdays
//generating current months issues
var today = new Date();
$("#calendar").fullCalendar({
  customButtons: {
    myCustomButton: { text: "Year" },
  },
  header: {
    left: "prev title next",
    center: "",
    right: "prevYear myCustomButton nextYear",
  },
  eventTextColor: "#fff",
  events: '//' + location.hostname + '/bulletin-api/' + moment(today).format("YYYY-MM-DD"),
  eventRender: function (event, element) {
    if (event.start) {
      var dataToFind = moment(event.start).format("YYYY-MM-DD");
      //make the title a link
      var linkformat = dataToFind.substr(2, 8);
      if (element.hasClass("pdf")) {
        $("td[data-date='" + dataToFind + "']")
          .addClass("bulletinDay")
          .find("span")
          .wrap(
            '<a href="http://sites.utoronto.ca/ebulletin/_bulletin/' +
              dataToFind +
              '.pdf"></a>'
          );
      } else {
        $("td[data-date='" + dataToFind + "']")
          .addClass("bulletinDay")
          .find("span")
          .wrap(
            '<a href="http://sites.utoronto.ca/ebulletin/' +
              linkformat +
              "/bulletin-" +
              linkformat +
              '.html"></a>'
          );
      }
    }
  },
  dayRender: function (date, cell) {
    var today = $.fullCalendar.moment();
    var dateMY = date.format("YYYY-MM-DD");
    var todayDate = today.format("YYYY-MM-DD");
    if (dateMY === todayDate) {
      cell.attr({ tabindex: 0, "aria-label": todayDate }).addClass("curDate");
    }
  },
});

// check if newsletter exist, then add event to calendar
function checkNewsletterAvailability(releaseDate) {
  //enable loading icon
  $('#calendar').append('<div class="loading"><i class="fas fa-sync-alt fa-spin"></i></div>');

  //disable buttons
  $('.fc-toolbar button').each(function(){
    if (!$(this).hasClass('fc-myCustomButton-button')) {
      $(this).attr('disabled','disabled');
      $(this).css('background-color','grey');
    }
  });

  var url = location.origin + '/bulletin-api/' + releaseDate;
  $.getJSON(url, function (data) {
    //add new events to the calendar
    if (data.length > 0) {
      $('#calendar').fullCalendar('removeEvents');
      $('#calendar').fullCalendar('addEventSource', (data));
    }
  }).always(function() {
    // enable buttons
    $('.fc-toolbar button').each(function() {
      if (!$(this).hasClass('fc-myCustomButton-button')) {
        $(this).removeAttr('disabled');
        $(this).css('background-color','#007fa3');
      }
    });
    //remove loading icon
    $('#calendar .loading').remove();
  });
}
//previous month
$('.page-bulletin .fc-prev-button').click(function() {
  var moment = $('#calendar').fullCalendar('getDate');
  checkNewsletterAvailability(moment.format("YYYY-MM-DD"));
});
//next month
$('.page-bulletin .fc-next-button').click(function() {
  var moment = $('#calendar').fullCalendar('getDate');
  checkNewsletterAvailability(moment.format("YYYY-MM-DD"));
});
//previous year
$('.page-bulletin .fc-prevYear-button').click(function() {
  var moment = $('#calendar').fullCalendar('getDate');
  checkNewsletterAvailability(moment.format("YYYY-MM-DD"));
});
//next year
$('.page-bulletin .fc-nextYear-button').click(function() {
  var moment = $('#calendar').fullCalendar('getDate');
  checkNewsletterAvailability(moment.format("YYYY-MM-DD"));
});

if ($("#calendar").length > 0) {
  $(".page-bulletin .fc-prev-button").attr("aria-label", "Previous Month");
  $(".page-bulletin .fc-next-button").attr("aria-label", "Next Month");
  $(".page-bulletin .fc-prevYear-button").attr("aria-label", "Previous Year");
  $(".page-bulletin .fc-nextYear-button").attr("aria-label", "Next Year");
}

$(".pop-over").popover({
  trigger: "focus",
});
$(".popup").click(function () {
  $(this).next("div.nextpopup").modal({ show: true });
});
$(".close").click(function () {
  $(this).parent(".form-popup").modal({ show: false });
});

// make all cards same height for Bulletin News
equalheight = function (container) {
  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
  $(container).each(function () {
    $el = $(this);
    $($el).height("auto");
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      // empty the array
      rowDivs.length = 0;
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest =
        currentTallest < $el.height() ? $el.height() : currentTallest;
    }
    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
};

// Use match media to fire these functions only above a certain breakpoint
if (matchMedia("only screen and (min-width: 768px)").matches) {
  $(window).on("load", function () {
    equalheight(".bulletin-news .subhead");
  });

  $(window).resize(function () {
    equalheight(".bulletin-news .subhead");
  });
}

$(".bulletin-news a.ariavalue").focus(function () {
  var bulletinId = $(this).attr("id");
  var storylabel = $(".bulletin-news a#" + bulletinId).attr("aria-label");
  replaced = storylabel.replace(/(<([^>]+)>)/gi, "");
  $(".bulletin-news a#" + bulletinId).attr("aria-label", replaced);
});

function accord(id) {
  var $accord = $(id);
  var $allLinks = $(".toggle");
  $accord.hide();

  $allLinks.click(function (e) {
    e.preventDefault();
    $allLinks.removeClass("close-icon");
    var $this = $(this).parent().next();
    var $linkEl = $(this);
    $accord.slideUp("normal");
    
    if ($this.is(":hidden") == true) {
      $linkEl.addClass("close-icon");
      $this.slideDown("normal");
    }
  });
}

// Accordion functionality for Bulletin page
if (window.location.href.indexOf("bulletin") > -1) {
  accord(".accord-section");
}

//CountDown Timer
if (window.location.href.indexOf("ironchef") > -1) {
  //countdown("Feb 25, 2017 08:00:00", "ic-countdown");
}

function countdown($date, $id) {
  // Set the date we're counting down to
  var countDownDate = new Date($date).getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById($id).innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById($id).innerHTML = "EXPIRED";
    }
  }, 1000);
}

$(".ironchef-body .desktopyoutube").click(function (e) {
  var utube = $(this).siblings(".youtube");
  var closebnt = $(this).siblings(".btnc").find(".closebtn");
  utube.addClass("showvideo");
  utube.removeClass("hidevideo");
  closebnt.addClass("showvideo");
  closebnt.removeClass("hidevideo");
});

$(".ironchef-body .fa.fa-play").click(function (e) {
  var utube = $(this).parent().siblings(".youtube");
  var closebnt = $(this).parent().siblings(".btnc").find(".closebtn");
  utube.addClass("showvideo");
  utube.removeClass("hidevideo");
  closebnt.addClass("showvideo");
  closebnt.removeClass("hidevideo");
});

$(".ironchef-body .btnc").click(function (e) {
  var utube = $(this).siblings(".youtube");
  utube.addClass("hidevideo");
  utube.removeClass("showvideo");
  $(".ironchef-body .video .closebtn").addClass("hidevideo");
  $(".ironchef-body .video .closebtn").removeClass("showvideo");
});

$(".ironchef-body .bio .closebtn").click(function (e) {
  var bio = $(this).parents(".bio");
  bio.addClass("hidevideo");
  bio.removeClass("showvideo");
  $("html").css("overflow", "scroll");
  $("body").unbind("touchmove");
});

$(".ironchef-body .team .title a").click(function (e) {
  e.preventDefault();
  var openbio = $(this).parent().siblings(".bio");
  openbio.addClass("showvideo");
  openbio.removeClass("hidevideo");
  $("html").css("overflow", "hidden");
  $("body").bind("touchmove", function (e) {
    e.preventDefault();
  });
});

//Resizer Mobile JS
window.sizeCheck = Number(0);
$(window)
  .on("resize", function () {
    $(window).off("resize", resizeMaster);
    var mobWidth = Number(780);
    var deskWidth = Number(1024);
    if ($(window).width() < mobWidth && window.sizeCheck != 3) {
      resizeMaster(3);
      window.sizeCheck = 3;
    } else if (
      $(window).width() > mobWidth &&
      $(window).width() < deskWidth &&
      window.sizeCheck != 2
    ) {
      resizeMaster(2);
      window.sizeCheck = 2;
    } else if ($(window).width() > deskWidth && window.sizeCheck != 1) {
      resizeMaster(1);
      window.sizeCheck = 1;
    }
  })
  .resize();

//resizeMaster size checker
function resizeMaster(res) {
  // Tablet = 2 , Mobile = 3, Desktop = 1
  if (res >= 2) {
    if ($("body").hasClass("page-coronavirus")) {
      $("#news-menu-wrapper").insertBefore("#page-title");
      $("html,body").scrollTop(0);
    } else {
      $("#news-menu-wrapper").insertAfter(".news-banner-title");
    }

    $(".page-news-back-to-school #news-menu-wrapper").insertBefore(
      ".boilerplateBlock .row"
    );
    $(".news-home .media-icon")
      .siblings(".date")
      .css({ background: "transparent", "margin-top": "0" });
    $(".news-home .media-icon")
      .siblings(".title")
      .css({ background: "transparent" });
    $(".mobile-news-menu .fa-caret-down").click(function () {
      $("#block-menu-block-5").show();
      $(".mobile-news-menu .fa.fa-caret-down").hide();
      $(".mobile-news-menu .fa.fa-times").show();
    });
    $(".mobile-news-menu  .fa-times").click(function () {
      $("#block-menu-block-5").hide();
      $(".mobile-news-menu  .fa.fa-times").hide();
      $(".mobile-news-menu .fa.fa-caret-down").show();

      // remove the class to hide the scroll bars on html - 
      // hideDoubleScroll found in _newHeader
    });
    $(
      ".ironchef-body team>div, .ironchef-body video >div, ironchef-body news >div"
    ).hide();
    $(".page-news-find-a-story .container-inline-date")
      .addClass("container popup-date")
      .removeClass("container-inline-date");
    $(".ironchef-wrapper .col-md-4")
      .removeClass("equalheight")
      .css("height", "");
    $(
      ".ironchef-body .team>div,.ironchef-body .video>div,.ironchef-body .news>div "
    )
      .addClass("ironchef-section")
      .hide();
    if (window.location.href.indexOf("ironchef") > -1) {
      accord(".ironchef-section");
    }
  } else {
    $(".banner-wrapper .col-md-4").addClass("equalheight");
    equalheight(".equalheight");
    $(
      ".ironchef-body .team>div,.ironchef-body .video>div,.ironchef-body .news>div "
    )
      .removeClass("ironchef-section")
      .show();
    $(
      ".page-news-back-to-school .bts .news-home .media-icon, .page-news .col3-equal .news-home.mobile-news-home .media-icon"
    )
      .parent()
      .css({ "border-right": "20px solid #fff" });
    $(
      ".page-news .col3-equal.more-stories-row3:not(.bts) .news-home.mobile-news-home .media-icon, .page-news .col2-leftbig:not(.bts) .news-home.mobile-news-home .media-icon, .page-news .col2-equal:not(.bts) .news-home.mobile-news-home .media-icon"
    )
      .parent()
      .css({ "border-right": "20px solid  #EDF2F8" });
    $("#news-menu-wrapper").insertAfter(".sub-menu-wrapper");
    $(".small-feature-picture .special").insertBefore(".info");
    $(".feature-picture .special").insertBefore(".info");
    $(".page-news-find-a-story popup-date")
      .addClass("container-inline-date")
      .removeClass("container");

    // close mobile menu
    $(".off-canvas-wrapper").slideUp(400);
    $(".mobile .fa.fa-bars").fadeIn().addClass("rubberBand");
    $(".mobile .fa.fa-times").hide();
    $("html").removeClass("hideDoubleScroll");
  }
}

$(".mobile-sub-navbar").click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});

// TOOLTIP activation
$(".photo-caption-toggle").tooltip();

//match height of white blocks in links row
var maxHeight = -1;
var linksWhiteBg = $(".linksBlock .white-bg");

linksWhiteBg.each(function () {
  maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
});

linksWhiteBg.each(function () {
  $(this).height(maxHeight);
});

//For AODA
//remove empty divs
$(".homeEventsBlock .node h2").remove();
$(".homeEventsBlock h2.pane-title").remove();
$(".page-alumni .pane-pull-quotes h2.pane-title").remove();
$(".page-academics .featureOnlyBlock .changeable .--title").remove();
$(".page-university-life-campuses .pane-content .node h2").remove();

//alt tags
var cfText = $(".view-changeable-feature h2.field-content").text();
$(".view-id-changeable_feature .field-content img").attr("alt", cfText);
var cfText1 = $(".featureQuoteBlock .col-md-4 .pane-title").text();
$(".col-md-8 .view-id-changeable_feature img").attr("alt", cfText1);
var cfText2 = $(".twoColBlock .col-md-4 .pane-title").text();
$(".col-md-8 .view-id-changeable_feature img").attr("alt", cfText2);
var pullQText = $(".view-pull-quotes .name").text();
$(".view-pull-quotes .pq--round img").attr("alt", pullQText);
var bannerText = $(".page-banner-title a").text();
$(".views-field-field-banner img").attr("alt", bannerText);
var newsText = $(".view-latest-news h4 a").text();
$(".view-latest-news .field-content img").attr("alt", "news item image");

//add labels to forms
$("#edit-jump").attr("aria-label", "label");
$("#edit-field-campus-value").attr("aria-label", "label");
$("#edit-submit-social-media-directory-tabs").attr("aria-label", "label");

//CAROUSEL in View
$(".carouselBlock .donor-container:first").addClass("active");
$(".carouselBlock .donor-container").addClass("item");
$(".carouselBlock .view-content .donor-container").appendTo(
  ".carouselBlock #carousel-example-generic .carousel-inner"
);

$(".story-content .pane-node-body p strong:contains('[embed_content')").hide();
$(".story-content .pane-node-body p strong:contains('(class=')").hide();

// Add clearfix - non-essential so not a big deal if js doesn't load
$(".newsBlock .view-content").addClass("clearfix");
$(".linksBlock .pane-content").addClass("clearfix");
$(".footerLinksBlock .pane-content").addClass("clearfix");
$(".panel-pane").addClass("clearfix");
$(".campusBlock .pane-content").addClass("clearfix");

// Add the BS markup to pullquotes created from Views
$(".pane-pull-quotes .panel-col-first").addClass("col-md-6");
$(".pane-pull-quotes .panel-col-last").addClass("col-md-6");

// Add container to subnav menus to center
$(".academics-sub-nav .menu-block-wrapper").addClass("container");
$(".universitylife-sub-nav .menu-block-wrapper").addClass("container");
$(".aboutUoft-sub-nav .menu-block-wrapper").addClass("container");

// YT Click Override - REMOVE THIS WHEN BTS DONE
// Handle resize event
$(window).ready(ytOverride);
$(window).on("resize", ytOverride);

function ytOverride() {
  if ($(window).width() >= 768) {
    $(".vid-cont .caption_wrapper").click(function () {
      window.location.href = "/back-to-school";
    });
  }
}

//TODO make this load faster
function btsMenuTakeover() {
  $('.subMenuCont .menu a[href*="visitors"]').each(function () {
    $(
      ".page-home .subMenuCont .menu, .page-future-students .subMenuCont .menu, .page-current-students .subMenuCont .menu, .page-academics-programs-directory .header .sub-menu-wrapper .subMenuCont .menu-block-3 .menu, .page-back-to-school .subMenuCont .menu, .page-news .subMenuCont .menu"
    ).addClass("forceHov");
    $(
      ".page-home .subMenuCont .menu .last.leaf, .page-future-students .subMenuCont .menu .last.leaf, .page-current-students .subMenuCont .menu .last.leaf, .page-academics-programs-directory .header .sub-menu-wrapper .subMenuCont .menu-block-3 .menu .last, .page-back-to-school .subMenuCont .menu .last.leaf, .page-news .subMenuCont .menu .last.leaf"
    ).addClass("forceHov");
  });
}

$("#header").ready(btsMenuTakeover);

//BTS - TODO: move to separate bts.js file
var btsPage = window.location.pathname == "/back-to-school";

if (btsPage) {
  $(window).ready(btsWrap);
  $(window).on("resize", btsBoxHeight);

  $(
    "#mailchimp-signup-subscribe-block-the-bulletin-subscribe-form-form"
  ).addClass("clearfix");

  function btsWrap() {
    $(".utm-bts-events, .utsg-bts-events, .utsc-bts-events").wrapAll(
      "<div class='col-md-12 eventsWrap'></div>"
    );
    $(".bts-news-signup").wrapAll(
      "<div class='bts-signupWrap clearfix'><div class='container'></div></div>"
    );
    $(".linksBlock").wrapAll("<a href='/news'></a>");
    btsBoxHeight();
  }

  function btsBoxHeight() {
    var btsBox = $(".eventsWrap .col-md-4 .pane-content");
    btsBox.each(function () {
      $(this).css("height", "auto");
    });

    btsRecalcBoxHeight();
  }

  function btsRecalcBoxHeight() {
    var maxHeight = -1;
    var btsBox = $(".eventsWrap .col-md-4 .pane-content");

    //assigns new height
    btsBox.each(function () {
      maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
    });

    btsBox.each(function () {
      $(this).height(maxHeight);
    });
  }
}

//PLYR
var homeRoot = window.location.pathname == "/";
var home = window.location.pathname == "/home";
if (homeRoot || home) {
  // VIDEO WIDGET - plyr.js
  // Setup the player
  var instances = plyr.setup({
    debug: false,
    title: "Video",
    tooltips: {
      controls: true,
    },
    captions: {
      defaultActive: false,
    },
  });
}

// Handle resize event
$(window).ready(loadResizeVid);
$(window).on("resize", loadResizeVid);

function loadResizeVid() {
  $(".duration").fadeIn("fast");
  $(".pane-video-widget .cat-desc p:first-of-type").append($(".duration"));

  if ($(window).width() <= 768) {
    $(".pane-video-widget .yt").insertBefore(".pane-video-widget .content");
  } else {
    $(".pane-video-widget .content").insertBefore(".pane-video-widget .yt");
  }
}

//TWEET THIS
if ($(".quote").is(":visible")) {
  $(".quote").append(
    "<button id='tweetThis' class='btn btn-primary'><i class='fa fa-twitter'></i> Tweet this</button>"
  );
}

//Tweet this Block Quote
$("#tweetThis").click(function () {
  var phrase = $(".quote").clone();
  $("#tweetThis", phrase).remove();
  var newPhrase = phrase.text();
  if (newPhrase.length > 116) {
    newPhrase = newPhrase.substr(0, 113) + "...";
  }

  var tweetUrl =
    "https://twitter.com/share?text=" + encodeURIComponent(newPhrase);
  window.open(tweetUrl);
});

// Programs of Study
$(".node-progam-of-study .col-xs-3")
  .not(".STG, .UTSG, .UTM, .OS, .UTS, .UTSC, .OC")
  .addClass("noCampus");

//a to z, campus code
$(".views-field.views-field-field-campus:contains('UTSG')").replaceWith(
  "<span class='atoz dt'>St. George</span>"
);
$(".views-field.views-field-field-campus:contains('UTM')").replaceWith(
  "<span class='atoz m'>Mississauga</span>"
);
$(".views-field.views-field-field-campus:contains('UTSC')").replaceWith(
  "<span class='atoz s'>Scarborough</span>"
);
$(".views-field.views-field-field-campus:contains('OC')").replaceWith(
  "<span class='atoz oc'>Off Campus</span>"
);
$(".views-field.views-field-field-campus:contains('OS')").replaceWith(
  "<span class='atoz os'>Online Services</span>"
);
$(
  ".directory.atoz .attachment.attachment-before .view-content .views-summary.views-summary-unformatted:last-child"
).after(
  "<span class='resetBtn'><a href='/directory/a-to-z/' role='button'>All <i class='fa fa-check'></i></a></span>"
);
//AODA fix for ATOZ page for search input and select
if ($("body").hasClass("page-a-to-z-directory")) {

  $('#edit-query-atoz-wrapper').find('label').remove();
  $('#edit-query-atoz-wrapper').find('input#edit-query-atoz').attr('aria-label','search');

  $('#edit-alpha-wrapper').find('label').remove();
  $('#edit-alpha-wrapper').find('select#edit-alpha').attr('aria-label','atoz');
}

//programs of study
$(".view-content .node-progam-of-study .campus:contains('STG')").replaceWith(
  "<p class='campus'>St. George</p>"
);
$(".node-atoz .campus:contains('UTSG')").replaceWith(
  "<p class='campus'>St. George</p>"
);
$(".view-content .node-progam-of-study .campus:contains('UTM')").replaceWith(
  "<p class='campus'>Mississauga</p>"
);
$(".node-atoz .campus:contains('UTM')").replaceWith(
  "<p class='campus'>Mississauga</p>"
);
$(".view-content .node-progam-of-study .campus:contains('UTSC')").replaceWith(
  "<p class='campus'>Scarborough</p>"
);
$(".node-atoz .campus:contains('UTSC')").replaceWith(
  "<p class='campus'>Scarborough</p>"
);

//search result
$(
  ".group-result-progam-of-study .col-md-3 .campus:contains('STG')"
).replaceWith("<p class='campus'>St. George</p>");
$(
  ".group-result-progam-of-study .col-md-3 .campus:contains('UTM')"
).replaceWith("<p class='campus'>Mississauga</p>");
$(
  ".group-result-progam-of-study .col-md-3 .campus:contains('UTSC')"
).replaceWith("<p class='campus'>Scarborough</p>");
$(".group-result-progam-of-study .col-md-3 .options:contains('N')").hide();

//hide new line
$(".view-content .node-progam-of-study .options:contains('N')").hide();
$(".view-programs-of-study #edit-jump .options:contains('N')").hide();
$(".view-programs-of-study #edit-jump option:contains('Master')").hide();
$(".view-programs-of-study #edit-jump option:contains('Doctor')").hide();

$(":radio[value=1]").addClass("undergrad");
$(".view-programs-of-study .undergrad").click(function () {
  $(".view-programs-of-study #edit-jump option:contains('Bachelor')").show();
  $(".view-programs-of-study #edit-jump option:contains('Master')").hide();
  $(".view-programs-of-study #edit-jump option:contains('Doctor')").hide();
  window.location = "/academics/programs-directory?field_degrees_value=1&keys=";
});

$(":radio[value=2]").addClass("grad");
$(".view-programs-of-study .grad").click(function () {
  window.location = "/academics/programs-directory?field_degrees_value=2&keys=";
});

if ($(":radio[value=2]:checked").val()) {
  $(".view-programs-of-study #edit-jump option:contains('Bachelor')").hide();
  $(".view-programs-of-study #edit-jump option:contains('Master')").show();
  $(".view-programs-of-study #edit-jump option:contains('Doctor')").show();
}

//new Programs Directory code
//remove -Any- button
$(window).ready(function () {
  $(
    ".page-academics-programs-of-study .programs-directory .view-filters #edit-category .form-item:first-of-type"
  ).remove();
  $(
    ".page-academics-programs-of-study .programs-directory .view-header, .page-academics-programs-of-study .programs-directory .view-filters"
  ).wrapAll("<div id='programs-header' class='clearfix'></div>");
  $(
    ".page-academics-programs-of-study .programs-directory .view-filters .views-submit-button"
  ).insertBefore(
    ".page-academics-programs-of-study .programs-directory .view-filters #edit-category-wrapper"
  );
  $(
    ".page-academics-programs-of-study .programs-directory .boilerplate"
  ).insertAfter(".page-academics-programs-of-study #page-title");
  //filter on click
  $("#edit-category .grad").click(function () {
    window.location =
      "/academics/programs-of-study?search_api_views_fulltext=&category=2";
  });
  //filter on click - undergrad
  $("#edit-category .undergrad").click(function () {
    window.location =
      "/academics/programs-of-study?search_api_views_fulltext=&category=1";
  });
  //add placeholder text
  $("#edit-search-api-views-fulltext-wrapper input").attr(
    "placeholder",
    "Search by location, specialty, degree or program"
  );

  if ($(".form-radio.grad").is(":checked")) {
    $(
      ".page-academics-programs-of-study #edit-category .form-item:last-of-type"
    ).addClass("active");
    $(".page-academics-programs-of-study").addClass("grad");
    $("<h3 class='grad-title'>Graduate programs</h3>").insertAfter(
      ".page-academics-programs-of-study.grad #programs-header"
    );
  } else {
    $(
      ".page-academics-programs-of-study #edit-category .form-item:last-of-type"
    ).removeClass("active");
    $(".page-academics-programs-of-study").removeClass("grad");
    $(".grad-title").remove();
  }
  if ($(".form-radio.undergrad").is(":checked")) {
    $(
      ".page-academics-programs-of-study #edit-category .form-item:first-of-type"
    ).addClass("active");
    $(".page-academics-programs-of-study").addClass("undergrad");
    $("<h3 class='undergrad-title'>Undergraduate programs</h3>").insertAfter(
      ".page-academics-programs-of-study.undergrad #programs-header"
    );
  } else {
    $(
      ".page-academics-programs-of-study #edit-category .form-item:first-of-type"
    ).removeClass("active");
    $(".page-academics-programs-of-study").removeClass("undergrad");
    $(".undergrad-title").remove();
  }
});

//blue book entry
$(".node-bluebook .bluebook-entry .location:contains('St.George')").replaceWith(
  "<p class='location'>St. George</p>"
);
$(
  ".node-bluebook .bluebook-entry .location:contains('U of T Scarborough')"
).replaceWith("<p class='location'>Mississauga</p>");
$(
  ".node-bluebook .bluebook-entry .location:contains('U of T Mississauga')"
).replaceWith("<p class='location'>Scarborough</p>");

// find out how to add this button from within Drupal - not great as is
$(".programs-directory .attachment .form-item.form-type-select").after(
  "<span class='resetBtn'><a href='/academics/programs-directory/?keys=&field_degrees_value=1' role='button'>Reset</a></span>"
);

//removes empty node
$(
  ".front-banner .caption_wrapper .caption .caption-body:contains('[node:body]')"
).hide();

//adds container to search pages
$(".page-search .block.block-system.block-system-main").addClass("container");
$(".page-search .block.block-xml-search.block-xml-search-xml-search").addClass(
  "container"
);
//fix float, if there's a better place to assign this class, we should
$(
  ".search-drawer-wrapper .search-form .form-radios.custom-search-selector"
).addClass("clearfix"); 

$(".search-drawer-wrapper .search-form .option:contains('AtoZ')").replaceWith(
  "A-Z Directory"
);
$(
  ".search-drawer-wrapper .search-form .option:contains('Program of Study')"
).replaceWith("Programs of Study");
$(".search-drawer-wrapper .search-form .option:contains('Story')").replaceWith(
  "News Stories"
);

//Directories - search field
$(
  ".programs-directory .view-filters .views-widget-filter-keys .form-type-textfield .form-text"
).focus(function () {
  $(".programs-directory .views-widget-filter-keys .form-text").attr(
    "value",
    " "
  );
});

//Link to all
$(
  "<a style='padding-left: 40px; text-decoration: underline;' href='/academics/programs-directory/all'>Show all</p>"
).insertAfter(".pane-programs-of-study .view-programs-of-study .pager .last");
//clearfix on all - bug to investigate
$(".view-programs-of-study .view-content").addClass("clearfix");

//change action on search to print /search/content/Search
$("#custom-search-blocks-form-1").attr("action", "/search/content/");

$(".tiles .views-row .m").parent().css({ "background-color": "#07766c" });
$(".tiles .views-row .s").parent().css({ "background-color": "#5B6BC8" });
$(".tiles .views-row span:contains('STG')").replaceWith("St. George");

// adding fontawesome icon for select
if ($(".programs-directory .form-type-select").length > 0) {
  $(".programs-directory .form-type-select").append(
    '<i class="fas fa-chevron-down"></i>'
  );
}

// Mobile Menu ==== hide/show bars
$(".mobile .fa-bars").click(function () {
  $(".off-canvas-wrapper").slideDown(400);
  $(".mobile .fa.fa-times").fadeIn().addClass("rubberBand");
  $(".mobile .fa.fa-bars").hide();
  // add the class to hide the scroll bars on html - hideDoubleScroll found in _newHeader
  $("html").addClass("hideDoubleScroll");
});

$(".mobile .fa-times").click(function () {
  $(".off-canvas-wrapper").slideUp(400);
  $(".mobile .fa.fa-bars").fadeIn().addClass("rubberBand");
  $(".mobile .fa.fa-times").hide();
  // remove the class to hide the scroll bars on html - hideDoubleScroll found in _newHeader
  $("html").removeClass("hideDoubleScroll");
});

if ($("header .right-menu .jump-to").length > 0) {
  var innermenu = $("header .right-menu .menu li.first .menu");
  var jumpmenu = $("header .right-menu .menu li .jump-to");
  innermenu.attr("id", "jump-to-inner");
  innermenu.addClass("collapse");
}

var announcementClose = $(".head-announcement");

// Minimize the header height on scroll, show surveys
$(window).scroll(function () {
  var scrollTop = $(document).scrollTop();
  var windowWidth = $(window).width();
  var siteLogo = $(".header .site-logo-large");

  if (scrollTop > 300 && windowWidth >= 1024) {
    siteLogo.css("width", "75%");
    announcementClose.slideUp();
  } else {
    siteLogo.css("width", "100%");
    announcementClose.slideDown();
  }
});

$(".head-announcement #close").click(function () {
  announcementClose.remove();
});

//TAKEOVER BTN

if ($("#sub-menu-wrapper .btn-takeover").length) {
  $("#sub-menu-wrapper").addClass("active takeover");
}

// external links in menu
if ($(".menu").length > 0) {
  $(".menu").children('li').each(function () {
    if ($(this).hasClass('external')) {
      $(this).children('a').append('<i class="fas fa-external-link-alt"></i>');
    }
  })
}

var $contoggle = $('button[aria-controls="morecontent"]');
$contoggle.click(function (e) {
  e.preventDefault();
  $contoggle.removeClass("showthis");
  $(this).siblings("button").addClass("showthis");
});

//ADMIN screen
$("body.page-user #user-login").addClass("container");
$("body.page-user .section h1.title").addClass("container");

//Geolocation Banner
$(".page-home .view-home-banner div[data-country]").each(function () {
  var parent = $(this).parent(".views-row");
  parent.addClass("geolocation");
  
  var country = $(this).data("country");
  if (country) {
    var split = country.toLowerCase().split(",");
    for (i = 0; i < split.length; i++) {
      var format = split[i].trim().replace(/\W/g, "-");
      parent.addClass(format);
    }
  }

  var region = $(this).data("region");
  if (region) {
    var split2 = region.toLowerCase().split(",");
    for (i = 0; i < split2.length; i++) {
      var format = split2[i].trim().replace(/\W/g, "-");
      parent.addClass(format);
    }
  }

  var city = $(this).data("city");
  if (city) {
    var split3 = city.toLowerCase().split(",");
    for (i = 0; i < split3.length; i++) {
      var format = split3[i].trim().replace(/\W/g, "-");
      parent.addClass(format);
    }
  }
});

//randomize the banner
$(document).ready(function () {
  $(".news-home-banner .youtube")
    .siblings(".title-header")
    .css({ "background-color": "#fff", opacity: ".7" });
  var geo = $(".page-home .view-home-banner").find(".views-row.geolocation");
  var geolen = geo.length;
  var divs = $(".page-home .view-home-banner").find(
      ".views-row:not(.geolocation)"
    ),
    len = divs.length, //number of divs on page
    randomDiv, //random number that will be generated
    randomDiv = Math.floor(Math.random() * len);
  divs.removeClass("show");
  divs.eq(randomDiv).addClass("show");

  if (geolen >= 1) {
    var nocache = new Date().getTime();
    $.get(
      "https://ipinfo.io?token=4153ce3b33bbb9&cache=" + nocache,
      function (response) {
        var geocity = response.city.toLowerCase().replace(/\W/g, "-");
        var georegion = response.region.toLowerCase().replace(/\W/g, "-");
        var geocountry = response.country.toLowerCase().replace(/\W/g, "-");

        if (geo.hasClass(geocountry)) {
          if (geo.hasClass(georegion)) {
            var geotarget = $(".page-home .view-home-banner").find(
                ".views-row.geolocation." + geocountry + "." + georegion
              ),
              lenr = geotarget.length, //number of divs on page
              randomDivr,
              randomDivr = Math.floor(Math.random() * lenr);
            geo.removeClass("show");
            divs.removeClass("show");
            geotarget.eq(randomDivr).fadeIn("slow", function () {
              $(this).addClass("show");
            });
          } else if (geo.hasClass(geocity)) {
            var geotarget2 = $(".page-home .view-home-banner").find(
                ".views-row.geolocation." + geocountry + "." + geocity
              ),
              lenc = geotarget2.length, //number of divs on page
              randomDivc,
              randomDivc = Math.floor(Math.random() * lenc);
            geo.removeClass("show");
            divs.removeClass("show");
            geotarget2.eq(randomDivc).fadeIn("slow", function () {
              $(this).addClass("show");
            });
          } else if (!geo.hasClass(geocity) && !geo.hasClass(georegion)) {
            var geotarget3 = $(".page-home .view-home-banner").find(
                ".views-row.geolocation." + geocountry
              ),
              lenc = geotarget3.length, //number of divs on page
              randomDivc,
              randomDivc = Math.floor(Math.random() * lenc);
            geo.removeClass("show");
            divs.removeClass("show");
            geotarget3.eq(randomDivc).fadeIn("slow", function () {
              $(this).addClass("show");
            });
          }
        }
      },
      "jsonp"
    );
  }
});

//switch focus to search box when search drawer opens
$("#search-drawer").on("shown.bs.collapse", function () {
  $("#search-drawer input.form-text").focus();
});

//collapse search drawer by esc key
$("#search-drawer input.form-text").bind("focus", function () {
  $(this).keydown(function (e) {
    if (e.keyCode === 27) {
      $("#search-drawer").collapse("hide");
      $("#header .search").focus();
    }
  });

  $(this).unbind("focus");
});

//collapse search drawer by clicking anywhere
$(document).click(function (e) {
  if ($(e.target).closest("#search-drawer").length === 0) {
    $("#search-drawer").collapse("hide");
  }
});

//scroll to top of page when search clicked
$(".page-search a.search").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

// UofT Search, remove break
$("#xml-search-result .xml-search-items-list .body br").remove();

// Social Media Directory pages
var socialTab = $(".page-social-media-directory .tabs");
var socialContent = $(
  ".page-social-media-directory .region.region-content .view-social-media-directory-tabs .view-content"
);
socialTab.insertBefore(socialContent);

//replace urls with FA icons
var fbDirectory = $(
  ".views-field-field-fb-url .field-content a:contains('facebook')"
);
var fbEntry = $(".node-social-media-entry p:contains('facebook')");
if (fbDirectory || fbEntry) {
  fbEntry.html('<i class="fa fa-facebook"></i>');
  fbDirectory.html('<i class="fa fa-facebook"></i>');
}

var igDirectory = $(
  ".views-field-field-ig-url .field-content a:contains('instagram')"
);
var igEntry = $(".node-social-media-entry p:contains('instagram')");
if (igDirectory || igEntry) {
  igDirectory.html('<i class="fa fa-instagram"></i>');
  igEntry.html('<i class="fa fa-instagram"></i>');
}

var liDirectory = $(
  ".views-field-field-linkedin-url .field-content a:contains('linkedin')"
);
var liEntry = $(".node-social-media-entry p:contains('linkedin')");
if (liDirectory || liEntry) {
  liDirectory.html('<i class="fa fa-linkedin"></i>');
  liEntry.html('<i class="fa fa-linkedin"></i>');
}

var ytDirectory = $(
  ".views-field-field-youtube-url .field-content a:contains('youtube')"
);
var ytEntry = $(".node-social-media-entry p:contains('youtube')");
if (ytDirectory || ytEntry) {
  ytDirectory.html('<i class="fa fa-youtube"></i>');
  ytEntry.html('<i class="fa fa-youtube"></i>');
}

var twitterDirectory = $(
  ".views-field-field-twitter-url .field-content a:contains('twitter')"
);
var twitterEntry = $(".node-social-media-entry p:contains('twitter')");
if (twitterDirectory || twitterEntry) {
  twitterDirectory.html('<i class="fa fa-twitter"></i>');
  twitterEntry.html('<i class="fa fa-twitter"></i>');
}

//remove empty divs containing no social icons
$(".views-field .field-content:empty").addClass("removeMe");
if ($(".views-field").find(".removeMe").length > 0) {
  $(".removeMe").parent().remove();
}

// //replace text
// $(".view-social-media-directory-tabs .views-submit-button .form-submit").attr(
//   "value",
//   ""
// );
$(
  ".view-social-media-directory-tabs .views-widget-filter-keys .form-type-textfield .form-text"
).attr("placeholder", "Example: Medicine");
$(".view-social-media-directory-tabs .view-filters").before(
  "<h3>Search for schools, departments, or topics:</h3>"
);

//custom type: ok
$(
  ".campus-status-wrapper .col-sm-4 .ok .stat-title + .field .field-item"
).before("<div class='greenCirc'></div>");
if ($(".campus-status-wrapper .col-sm-4 .status-body").hasClass("ok")) {
  if ($(".campus-status-wrapper .col-sm-4").find(".ok").length > 0) {
    $(".ok").parent().addClass("statusOpen clearfix");
    $(".statusOpen .msg-body").addClass("openBody");
  }
}

//custom type: standy
$(
  ".campus-status-wrapper .col-sm-4 .standby .stat-title + .field .field-item"
).before("<div class='orangeCirc'></div>");

if ($(".campus-status-wrapper .col-sm-4 .status-body").hasClass("standby")) {
  if ($(".campus-status-wrapper .col-sm-4").find(".standby").length > 0) {
    $(".standby").parent().addClass("statusStandby clearfix");
    $(".statusStandby .msg-body").addClass("standbyBody");
  }
}

//in custom type: select list with alert
$(
  ".campus-status-wrapper .col-sm-4 .alert .stat-title + .field .field-item"
).before("<div class='redCirc'></div>");

if ($(".campus-status-wrapper .col-sm-4 .status-body").hasClass("alert")) {
  if ($(".campus-status-wrapper .col-sm-4").find(".alert").length > 0) {
    $(".alert").parent().addClass("statusClosed clearfix");
    $(".statusClosed .msg-body").addClass("closedBody");
  }
}

//Main page/footer
var campusBarOpen = $(
  ".campusStatus .pane-campus-status .pane-content .field-content:contains('ok')"
);
var campusFooterOpen = $(
  ".campusStatusFooter .views-field-field-main-campus-status .field-content:contains('ok')"
);
if (campusBarOpen || campusFooterOpen) {
  campusBarOpen.replaceWith(
    "<a href='/campus-status' aria-label='campus is ok' alt='campus is ok' tabindex=-1><i class='fa fa-check-circle green okLevel' aria-hidden='true'></i></a>"
  );
  campusFooterOpen.replaceWith(
    "<a href='/campus-status' aria-label='campus is ok' alt='campus is ok'><i class='fa fa-check-circle green okLevel' aria-hidden='true'></i></a>"
  );

  if (
    $(
      ".campusStatus .pane-campus-status .pane-content .views-field-field-main-campus-status i"
    ).hasClass("okLevel")
  ) {
    $(".campusStatus .pane-campus-status .pane-title a").css(
      "color",
      "#4CAF50"
    );
  }
}

var campusBarStandby = $(
  ".campusStatus .pane-campus-status .pane-content .field-content:contains('standby')"
);
var campusFooterStandby = $(
  ".campusStatusFooter .views-field-field-main-campus-status .field-content:contains('standby')"
);
if (campusBarStandby || campusFooterStandby) {
  campusBarStandby.replaceWith(
    "<a href='/campus-status' aria-label='campus is on standby' alt='campus is on standby' tabindex=-1><i class='fa fa-exclamation-circle orange standbyLevel' aria-hidden='true'></i></a>"
  );
  campusFooterStandby.replaceWith(
    "<a href='/campus-status' aria-label='campus is on standby' alt='campus is standby'><i class='fa fa-exclamation-circle orange standbyLevel' aria-hidden='true'></i></a>"
  );
  if (
    $(
      ".campusStatus .pane-campus-status .pane-content .views-field-field-main-campus-status i"
    ).hasClass("standbyLevel")
  ) {
    $(".campusStatus .pane-campus-status .pane-title a").css(
      "color",
      "#FFE498"
    );
  }
}

var campusBarClosed = $(
  ".campusStatus .pane-campus-status .pane-content .field-content:contains('alert')"
);
var campusFooterClosed = $(
  ".campusStatusFooter .views-field-field-main-campus-status .field-content:contains('alert')"
);
if (campusBarClosed || campusFooterClosed) {
  campusBarClosed.replaceWith(
    "<a href='/campus-status' aria-label='campus is on alert' alt='campus is on alert' tabindex=-1><i class='fa fa-flag red alertLevel' aria-hidden='true'></i></a>"
  );
  campusFooterClosed.replaceWith(
    "<a href='/campus-status' aria-label='campus is on alert' alt='campus is on alert'><i class='fa fa-flag red alertLevel' aria-hidden='true'></i></a>"
  );
  if (
    $(
      ".campusStatus .pane-campus-status .pane-content .views-field-field-main-campus-status i"
    ).hasClass("alertLevel")
  ) {
    $(".campusStatus .pane-campus-status .pane-title a").css(
      "color",
      "#F64747"
    );
    $(".campusStatus .pane-campus-status .pane-content").addClass(
      "circleEmerg"
    );
  }
}

//TODO - emergency (high-alert, icon with white background, red flag)
var campusBarEmerg = $(
  ".campusStatus .pane-campus-status .pane-content .field-content:contains('emergency')"
);
var campusFooterEmerg = $(
  ".campusStatusFooter .views-field-field-main-campus-status .field-content:contains('emergency')"
);
if (campusBarEmerg || campusFooterEmerg) {
  campusBarEmerg.replaceWith(
    "<a href='/campus-status' aria-label='campus is on emergency' tabindex=-1><i class='fa fa-flag red emerg' aria-hidden='true'></i></a>"
  );
  campusFooterEmerg.replaceWith(
    "<a href='/campus-status' aria-label='campus is on emergency'><i class='fa fa-flag red emerg' aria-hidden='true'></i></a>"
  );
  if (
    $(
      ".campusStatus .pane-campus-status .pane-content .views-field-field-main-campus-status i"
    ).hasClass("emerg")
  ) {
    $(".campusStatus .col-md-3").css("background-color", "#F64747");
    $(".campusStatus .pane-campus-status .pane-content").addClass(
      "circleEmerg"
    );
  }
}

$(".campusStatusFooter.footer-5cols .view-content .views-field .fa").before(
  "<p class='campusStatusLabel'><a href='/campus-status' aria-label='campus status label'>Campus Status: </a></p>"
);

// Announcements bar
$('.campusStatus .col-md-9 .pane-content p:contains("emptyAnnouncementsBox")')
  .parent()
  .addClass("hideAnnouncement");
if ($(".campusStatus .col-md-9 .pane-content").hasClass("hideAnnouncement")) {
  $(".hideAnnouncement").parent().addClass("hideAnnouncementParent");
  $(".hideAnnouncementParent").parent().addClass("hideAnnouncementCont");
}

//Announcement banner overlay
$(window).load(function () {
  $(".banner-teaser").addClass("bannerDown").delay(800);
});

//uoft world blocks
$(window).load(function () {
  var maxHeightUTW = -1;
  var uoftWorldBlocks = $(".view-u-of-t-world .uoftworld-row");
  uoftWorldBlocks.each(function () {
    maxHeightUTW =
      maxHeightUTW > $(this).height() ? maxHeightUTW : $(this).height();
  });

  uoftWorldBlocks.each(function () {
    $(this).height(maxHeightUTW);
  });
});

// U of T World - v2
//add clearfixes to view-header and view-content
$(".view-u-of-t-world .view-header").addClass("clearfix");
$(".view-u-of-t-world .view-content").addClass("clearfix");

//.ready prevents the footer from loading before the view-content is ready
$(window).ready(function () {
  //move view-footer out of view so that it goes 100% width
  $(".view-u-of-t-world .view-footer").insertAfter(
    "#block-system-main .utw-content"
  );
  $(".view-u-of-t-world ").addClass("animated fadeIn");

  //check to see that this is an inner UTW page, filtered by attachment
  if ($("body[class*='page-uoft-world-']").length) {
    $("#block-system-main .view-footer").hide();
  }

  //check to see that this is an Edition of UTW, if yes, show bottom nav
  if ($("body[class*='page-uoft-world-editions']").length) {
    $("#block-system-main .view-footer").show();
  }

  //add previous and next edition buttons
  if ($("body[class*='page-uoft-world']").length) {
    $("<span>Previous Edition</span>").insertBefore(
      ".page-uoft-world #main .view-footer .menu .first.leaf a"
    );
    $("<h3>Want more U of T World?</h3>").insertBefore(
      ".page-uoft-world #main .view-footer .menu .first.leaf + .leaf a"
    );
    $(".page-uoft-world #main .view-footer .menu .first.leaf + .leaf").addClass(
      "middle-leaf"
    );
    $("<span>Next Edition</span>").insertBefore(
      ".page-uoft-world #main .view-footer .menu .last.leaf a"
    );
  }

  if ($("body[class*='page-uoft-world-from-publication']").length) {
    $(
      "<div class='view-footer'><ul class='menu'><li class='archive leaf'><h3>Want more U of T World?</h3><a href='/uoft-world/archives'><span>Explore</span></a></li></ul></div>"
    ).insertAfter(".page-uoft-world-from-publication #main .utw-content");
  }

  //wrap text in button style
  $(".page-uoft-world #main .view-footer .menu .middle-leaf a").wrapInner(
    "<span></span>"
  );

  //if has -special in class, hide From Publication
  if ($(".page-uoft-world div[class*='-special']").length) {
    $(".uoftworld-row .node-u-of-t-world .from-pub").remove();
  }

  //do the same for homepage
  if ($(".page-home div[class*='-special']").length) {
    $(".node-u-of-t-world-homepage .story-text .article-from").remove();
  }
});

$(
  "<li class='mobile leaf'><h3>Want more U of T World?</h3><a href='/uoft-world/archives'><span>Explore</span></a></li>"
).insertBefore(".utw-content .block-menu .menu .first.leaf");
$(window).bind("resize", function (event) {
  //Whatever you want to run here
  if ($(window).width() <= 768) {
    $(".page-uoft-world #main .view-footer .menu .first.leaf").show();
    $(".page-uoft-world #main .view-footer .menu .first.leaf").css(
      "visibility",
      "visible"
    );
  }
});

$(window).bind("resize", function (event) {
  if ($(window).width() <= 990) {
    $("#courses .img-ent").insertAfter("#courses .title-ent");
    $("#schedule .img-ent").insertAfter("#schedule .title-ent");
  } else {
    $("#courses .img-ent").insertAfter("#courses .body-ent");
    $("#schedule .img-ent").insertAfter("#schedule .body-ent");
  }
});

var $togglebutton = $('button[aria-controls="morestories"]');
$togglebutton.click(function (e) {
  e.preventDefault();
  $togglebutton.removeClass("showthis");
  $("#moreEntNews").removeClass("hide");
  $("#moreEntNews").addClass("showthis");
});

var $togglebutton1 = $('button[aria-controls="morestartup"]');
$togglebutton1.click(function (e) {
  e.preventDefault();
  $togglebutton1.removeClass("showthis");
  $(this).siblings("button").addClass("showthis");
});

// FOR startup Stories page
if ($("body").hasClass("story-page")) {
  if ($("#story-type").length) {
    var storyType = $.trim($("#story-type").find(".pane-content").html());
    if (storyType == "startup") {
      $("#content").addClass("ent-outer-wrapper");
    }
  }
}

// award submenu effect
$(".search-award-filter").click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    if ($(this).siblings(".search-filters").length > 0) {
      $(this).siblings(" .search-filters").removeClass("active");
      $(this)
        .siblings(" .search-filters")
        .css({ display: "none", height: "auto" });
    }
  } else {
    $(this).addClass("active");
    if ($(this).siblings(".search-filters").length > 0) {
      $(this).siblings(".search-filters").addClass("active");
      $(this)
        .siblings(" .search-filters")
        .css({ display: "block", height: "auto" });
    }
  }
});

$(".awardfilters .search-filters #award-reset").focusout(function (e) {
  e.preventDefault();

  if ($(".awardfilters .search-award-filter").hasClass("active")) {
    $(".awardfilters .search-award-filter").removeClass("active");
    if (
      $(".awardfilters .search-award-filter").siblings(".search-filters")
        .length > 0
    ) {
      $(".awardfilters .search-award-filter")
        .siblings(".search-filters")
        .removeClass("active");
      $(".awardfilters .search-filters").css({
        display: "none",
        height: "auto",
      });
    }
  }
});

$(".submission-type .menu-item")
  .click(function () {
    awardForm($(this));
  })
  .bind("focus", function (event) {
    $(this).keydown(function (e) {
      if (e.keyCode === 13) {
        awardForm($(this));
      }
    });
    unbind_focus(this);
  });

function awardForm(menuitem) {
  if ($(".award-form").length > 0) {
    $(".award-form").removeClass("active");
  }

  if (menuitem.hasClass("general-inquiry")) {
    $(".award-form.form-general-inquiry").addClass("active");
    $(".submission-type .menu-item").removeClass("active");
    sessionStorage.setItem("award-form-value", "general-inquiry");
    $(".submission-type .mobile-sub-navbar").html(
      'General Inquiry <span class="icon"><i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i></span>'
    );
  } else if (menuitem.hasClass("site-feedback")) {
    $(".award-form.form-site-feedback").addClass("active");
    $(".submission-type .menu-item").removeClass("active");
    sessionStorage.setItem("award-form-value", "site-feedback");
    $(".submission-type .mobile-sub-navbar").html(
      'Site Feedback <span class="icon"><i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i></span>'
    );
  } else if (menuitem.hasClass("suggest")) {
    $(".award-form.form-suggest").addClass("active");
    $(".submission-type .menu-item").removeClass("active");
    sessionStorage.setItem("award-form-value", "suggest");
    $(".submission-type .mobile-sub-navbar").html(
      'Suggest a New Award Announcement <span class="icon"><i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i></span>'
    );
  }

  $("#award-menu").collapse("hide");
}

if ($(".award-form.form-suggest").length > 0) {
  if (sessionStorage.getItem("award-form-value") === "suggest") {
    $(".award-form.form-suggest").addClass("active");
    $(".submission-type .mobile-sub-navbar").html(
      'Suggest a New Award Announcement <span class="icon"><i class="fas fa-caret-up"></i><i class="fas fa-caret-down"></i></span>'
    );
  }

  $(".webform-component").each(function () {
    $(this).find(".description").insertAfter($(this).find("label"));
  });
}

//clear session storage after submitting form
$(".award-form input.webform-submit").click(function (e) {
  sessionStorage.removeItem("award-form-value");
});

// find a story date filter label
if ($(".page-news-searchnews .views-widget-filter-changed").length > 0) {
  $(".page-news-searchnews .views-widget-filter-changed label").text(
    "Start date"
  );
  $(".page-news-searchnews .views-widget-filter-changed_1 label").text(
    "End date"
  );
}

// filter submit button styling
if ($(".page-news-searchnews .views-submit-button").length > 0) {
  $(".page-news-searchnews .views-submit-button").wrap(
    '<div class="submit-buttons"></div>'
  );
}

// back to top animation
if ($(".back-to-top i").length > 0) {
  let position = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > position || scroll === 0) {
      if ($(".back-to-top").hasClass("active")) {
        $(".back-to-top").removeClass("active");
      }
    } else {
      if (!$(".back-to-top").hasClass("active")) {
        $(".back-to-top").addClass("active");
      }
    }
    position = scroll;
  });

  $(".back-to-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      300
    );
  });
}

// arrow animation on hero block
if ($(".award-hero-block .title i").length > 0) {
  $(".award-hero-block .title").hover(
    function () {
      $(".award-hero-block .title i").addClass("active");
    },
    function () {
      $(".award-hero-block .title i").removeClass("active");
    }
  );
}

// update filters form urls
if ($(".search-filters").length > 0) {
  $(".search-filters input[type=submit]").on("click", function (e) {
    e.preventDefault();
    if ($(this).val() == "Apply") {
      $(".search-filters form")
        .attr("action", window.location.pathname)
        .submit();
    } else if ($(this).val() == "Reset") {
      window.location.href = window.location.pathname;
    }
  });
}

// update search bar submit url
if ($("body.award .search-global").length > 0) {
  $(".search-global input[type=submit]").on("click", function (e) {
    e.preventDefault();
    // when new term is entered, reset all filters except for search term.
    window.location.href =
      "/celebrates/search?keyword=" +
      $(".search-global input[name=keyword]").val();
  });
}

// add keywords for "Result for:"
if ($(".award .search-global").length > 0) {
  var options = [];
  var keyword = "";
  var filters = {
    type: {
      "6074": "Research & Innovation",
      "6076": "Academic Achievement",
      "6075": "Teaching",
      "6077": "Community",
    },
    campus: {
      "6067": "Mississauga",
      "6069": "St. George",
      "6068": "Scarborough",
    },
    people: {
      "6070": "Faculty",
      "6071": "Students",
      "6072": "Staff",
      "6073": "Alumni",
    },
  };

  // add keyword in options array
  if (window.location.search) {
    var queryStrings = window.location.search.split("&");
    queryStrings.map(function (queryString) {
      var query = queryString.replace("?", "").split("=");
      if (query[0] === "keyword" && query[1].length > 0) {
        keyword = decodeURIComponent(query[1]).replace("+", " ");
        $(
          ".search-filters input[name=keyword], .search-global input[name=keyword]"
        ).val(keyword);
      } else if (query[0].indexOf("type") >= 0) {
        options.push(filters["type"][query[1]]);
        $(".search-filters input[value=" + query[1] + "]").prop(
          "checked",
          true
        );
        $(".search-filters input[value=" + query[1] + "]")
          .siblings("label")
          .attr("aria-checked", true);
      } else if (query[0].indexOf("campus") >= 0) {
        options.push(filters["campus"][query[1]]);
        $(".search-filters input[value=" + query[1] + "]").prop(
          "checked",
          true
        );
        $(".search-filters input[value=" + query[1] + "]")
          .siblings("label")
          .attr("aria-checked", true);
      } else if (query[0].indexOf("people") >= 0) {
        options.push(filters["people"][query[1]]);
        $(".search-filters input[value=" + query[1] + "]").prop(
          "checked",
          true
        );
        $(".search-filters input[value=" + query[1] + "]")
          .siblings("label")
          .attr("aria-checked", true);
      }
    });
  }

  // set url for clear all button
  $(".award-keywords .clear a").attr("href", window.location.pathname);

  if ($("body").hasClass("page-taxonomy-term")) {
    var path = window.location.pathname.split("/");
    keyword = path[path.length - 1].split("-").join(" ");
    $(".award-keywords .clear a").attr("href", "/celebrates/search");
  }

  if (keyword.length > 0 || options.length > 0) {
    $(".award-keywords").addClass("active");

    //add keyword to "Searched for:"
    if (keyword.length > 0) {
      $(".award-keywords .searched-for").addClass("active");
      $(".award-keywords .searched-for .options").text(keyword);
    }

    //add checked option to "Filtered by:"
    if (options.length > 0) {
      $(".award-keywords .filtered-by").addClass("active");
      $(".award-keywords .filtered-by .options").text(options.join(", "));
    }
  } else {
    $(".award-keywords").removeClass("active");
  }
}

if ($(".award-hub").length > 0) {
  var page = 0;
  loadMoreAwards(page, false);

  $(window).scroll(function () {
    if ($(".award-list").hasClass("done")) {
      return false;
    }

    if (
      $(window).scrollTop() + $(window).height() >
        $(document).height() - $("footer").height() &&
      $(".loading").hasClass("active") === false
    ) {
      page++;
      loadMoreAwards(page, true);
    }
  });
}

$(window).load(function () {
  $(".footer-first .footer-5cols .menu li a").attr("tabindex", "-1");
  $(".footer-logo-link").attr("tabindex", "-1");
});

function loadMoreAwards(page, tabfocus) {
  var url = "/jsonapi/celebrates";
  var queries = decodeURIComponent(window.location.search);
  var classList = $("body").attr("class").split(/\s+/);

  if (queries) {
    var queriesArr = queries.split("&");
    queriesArr.map(function (query) {
      if (query.split("=")[0].replace("?", "") === "keyword") {
        url = "/jsonapi/celebrates-search";
      }
    });
  }

  $.each(classList, function (index, classItem) {
    if (classItem.indexOf("page-taxonomy-term-") >= 0) {
      var str = classItem.split("-");

      if ($.isNumeric(str[str.length - 1])) {
        url += "/" + str[str.length - 1];
      }
    }
  });

  if (queries) {
    url += queries;

    if (page) {
      url += "&page=" + page;
    }
  } else {
    if (page) {
      url += "?page=" + page;
    }
  }

  // show loading icon
  $(".loading").addClass("active");
  $(".loading").focus();

  var firstNid = 0;
  // request award list from json api
  $.getJSON(url, function (data) {
    var items = [];

    if (data.nodes && data.nodes.length > 0) {
      $.each(data.nodes, function (key, val) {
        //Parsing urls for proxy servers
        var image_path = "";
        var node_path = "";

        if (val["node"].field_picture.src) {
          image_path = getPathName(val["node"].field_picture.src);
        }

        if (val["node"].url) {
          node_path = getPathName(val["node"].url);
        }

        if (key === 0) {
          firstNid = val["node"].nid;
        }

        items.push(
          '    <div class="views-row col col-md-3 col-sm-6 col-xs-6">'
        );
        items.push(
          '      <a href="' +
            node_path +
            '" aria-label="Read more about ' +
            val["node"].title +
            '" id="tabfocus-' +
            val["node"].nid +
            '" ><img typeof="foaf:Image" src="' +
            image_path +
            '" alt="' +
            val["node"].field_picture.alt +
            '" ></a>'
        );
        items.push(
          '      <div class="award-type"><a href="/celebrates/search?' +
            getAwardTypeUrl(val["node"].type) +
            '" aria-label="More stories in ' +
            val["node"].type +
            '">' +
            val["node"].type +
            "</a></div>"
        );
        items.push(
          '      <h2><a href="' +
            node_path +
            '" aria-label="Read more about ' +
            val["node"].title +
            '">' +
            val["node"].title +
            "</a></h2>"
        );
        items.push("    </div>");
      });

      items.push("  </div>");
      $("<div/>", {
        class: "rows-wrapper",
        html: items.join(""),
      }).appendTo(".award .content .award-list .view-content");
    }
  }).done(function (data) {
    // remove loading icon
    $(".loading").removeClass("active");

    if (tabfocus) {
      $("#tabfocus-" + firstNid).focus();
    }

    if (data.pager.page + 1 == data.pager.pages) {
      $(".footer-audiences .menu li a").attr("tabindex", "0");
      $(".award-list").addClass("done");
    }

    if (data.pager.count == 0) {
      $("<div/>", {
        class: "no-result-message",
        html: "<p>Sorry, we can’t seem to find what you are looking for.</p>",
      }).appendTo(".award .content .award-list .view-content");
    }
  });
}

function getAwardTypeUrl(key) {
  var filters = {
    "Research & Innovation": "type[]=6074",
    "Academic Achievement": "type[]=6076",
    Teaching: "type[]=6075",
    Community: "type[]=6077",
  };

  return filters[decodeURI(key)];
}

function getPathName(str) {
  var url = $("<a>", {
    href: str,
  });

  if (url.prop("pathname")) {
    return url.prop("pathname");
  }

  return str;
}

if ($(".award-hub").length > 0) {
  var isClick = false;
  $("label.option")
    .click(function () {
      isClick = true;
      toggleCheckbox($(this).attr("id"), isClick);
    })
    .bind("focus", function (event) {
      var focused_label = $(this).attr("id");
      var item = $("#" + focused_label);

      $(item).keydown(function (e) {
        var flag = false;
        if (e.keyCode === 32) {
          toggleCheckbox(focused_label, isClick);
          flag = true;
        }

        if (flag) {
          e.stopPropagation();
          e.preventDefault();
        }
      });
      unbind_focus(this);
      isClick = false;
    });
}

function unbind_focus(el) {
  $(el).unbind("focus");
}

function toggleCheckbox(focused_label, isClick) {
  let item_toggle = $("#" + focused_label);
  if (item_toggle.attr("aria-checked") === "true") {
    item_toggle.attr("aria-checked", "false");
    if (!isClick) {
      item_toggle.siblings("input").prop("checked", false);
    }
  } else {
    item_toggle.attr("aria-checked", "true");
    if (!isClick) {
      item_toggle.siblings("input").prop("checked", true);
    }
  }
}

// Aria alert on programs of study page for graduate and undergraduate radio button selection
$(".view-programs-of-study .alert-message i").bind("focus", function (e) {
  if ($("p.alert-message").length > 0) {
    $("p.alert-message").attr("role", "alert");
  }

  $(this).unbind("focus");
});

if ($('.mailchimp-signup-subscribe-form').length > 0 ) {
  $('.mailchimp-signup-subscribe-form input[type=text]').each(function() {
    if ($(this).hasClass('required')) {
      $(this).prop('required',true);
    }
  })
}

//https://www.ibm.com/able/guidelines/web/webstructure.html
if ($('.webform-client-form').length > 0 ) {
  $('.webform-client-form .form-radios').each(function() {
    $(this).attr("role", "radiogroup");
    $(this).prop("required", true);
    
    $(this).find('input[type=radio]').each(function() {
        $(this).prop( "required", false );
    })
  })
}

//END JQUERY
});
jQuery(function($) {
  $(document).ready(function() {

    // ammount to add on each button press
    const confettiCount = 20
    const sequinCount = 10

    // "physics" variables
    const gravityConfetti = 0.3
    const gravitySequins = 0.55
    const dragConfetti = 0.075
    const dragSequins = 0.02
    const terminalVelocity = 3

    // init other global elements
    const button = document.getElementById('confetti-button')
    var disabled = false
    const canvas = document.getElementById('confetti-canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let cx = ctx.canvas.width / 2
    let cy = ctx.canvas.height / 2

    // add Confetto/Sequin objects to arrays to draw them
    let confetti = []
    let sequins = []

    // colors, back side is darker for confetti flipping
    const colors = [
      { front : '#6FC7EA', back: '#6FC7EA' }, // light blue
      { front : '#F1C500', back: '#F1C500' }, // yellow
      { front : '#AB1368', back: '#AB1368' }  // pink
    ]

    // helper function to pick a random number within a range
    randomRange = (min, max) => Math.random() * (max - min) + min

    // helper function to get initial velocities for confetti
    // this weighted spread helps the confetti look more realistic
    initConfettoVelocity = (xRange, yRange) => {
      const x = randomRange(xRange[0], xRange[1])
      const range = yRange[1] - yRange[0] + 1
      let y = yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range)
      if (y >= yRange[1] - 1) {
        // Occasional confetto goes higher than the max
        y += (Math.random() < .25) ? randomRange(1, 3) : 0
      }
      return {x: x, y: -y}
    }

    // Confetto Class
    function Confetto() {
      this.randomModifier = randomRange(0, 99)
      this.color = colors[Math.floor(randomRange(0, colors.length))]
      this.dimensions = {
        x: randomRange(5, 9),
        y: randomRange(8, 15),
      }
      this.position = {
        x: randomRange(canvas.width/2 - button.offsetWidth/4, canvas.width/2 + button.offsetWidth/4),
        y: randomRange(canvas.height/2 + button.offsetHeight/2 + 8, canvas.height/2 + (1.5 * button.offsetHeight) - 8),
      }
      this.rotation = randomRange(0, 2 * Math.PI)
      this.scale = {
        x: 1,
        y: 1,
      }
      this.velocity = initConfettoVelocity([-9, 9], [6, 11])
    }
    Confetto.prototype.update = function() {
      // apply forces to velocity
      this.velocity.x -= this.velocity.x * dragConfetti
      this.velocity.y = Math.min(this.velocity.y + gravityConfetti, terminalVelocity)
      this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random()
      
      // set position
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y

      // spin confetto by scaling y and set the color, .09 just slows cosine frequency
      this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09)    
    }

    // Sequin Class
    function Sequin() {
      this.color = colors[Math.floor(randomRange(0, colors.length))].back,
      this.radius = randomRange(1, 2),
      this.position = {
        x: randomRange(canvas.width/2 - button.offsetWidth/3, canvas.width/2 + button.offsetWidth/3),
        y: randomRange(canvas.height/2 + button.offsetHeight/2 + 8, canvas.height/2 + (1.5 * button.offsetHeight) - 8),
      },
      this.velocity = {
        x: randomRange(-6, 6),
        y: randomRange(-8, -12)
      }
    }
    Sequin.prototype.update = function() {
      // apply forces to velocity
      this.velocity.x -= this.velocity.x * dragSequins
      this.velocity.y = this.velocity.y + gravitySequins
      
      // set position
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y   
    }

    // add elements to arrays to be drawn
    initBurst = () => {
      for (let i = 0; i < confettiCount; i++) {
        confetti.push(new Confetto())
      }
      for (let i = 0; i < sequinCount; i++) {
        sequins.push(new Sequin())
      }
    }

    // draws the elements on the canvas
    render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      confetti.forEach((confetto, index) => {
        let width = (confetto.dimensions.x * confetto.scale.x)
        let height = (confetto.dimensions.y * confetto.scale.y)
        
        // move canvas to position and rotate
        ctx.translate(confetto.position.x, confetto.position.y)
        ctx.rotate(confetto.rotation)

        // update confetto "physics" values
        confetto.update()
        
        // get front or back fill color
        ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back
        
        // draw confetto
        ctx.fillRect(-width / 2, -height / 2, width, height)
        
        // reset transform matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0)

        // clear rectangle where button cuts off
        if (confetto.velocity.y < 0) {
          ctx.clearRect(canvas.width/2 - button.offsetWidth/2, canvas.height/2 + button.offsetHeight/2, button.offsetWidth, button.offsetHeight)
        }
      })

      sequins.forEach((sequin, index) => {  
        // move canvas to position
        ctx.translate(sequin.position.x, sequin.position.y)
        
        // update sequin "physics" values
        sequin.update()
        
        // set the color
        ctx.fillStyle = sequin.color
        
        // draw sequin
        ctx.beginPath()
        ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI)
        ctx.fill()

        // reset transform matrix
        ctx.setTransform(1, 0, 0, 1, 0, 0)

        // clear rectangle where button cuts off
        if (sequin.velocity.y < 0) {
          ctx.clearRect(canvas.width/2 - button.offsetWidth/2, canvas.height/2 + button.offsetHeight/2, button.offsetWidth, button.offsetHeight)
        }
      })

      // remove confetti and sequins that fall off the screen
      // must be done in seperate loops to avoid noticeable flickering
      confetti.forEach((confetto, index) => {
        if (confetto.position.y >= canvas.height) confetti.splice(index, 1)
      })
      sequins.forEach((sequin, index) => {
        if (sequin.position.y >= canvas.height) sequins.splice(index, 1)
      })

      window.requestAnimationFrame(render)
    }

    // cycle through button states when clicked
    clickButton = () => {
      if (!disabled) {
        disabled = true
        // Loading stage
        setTimeout(() => {
          // Completed stage
          setTimeout(() => {
            window.initBurst()
            setTimeout(() => {
              // Reset button so user can select it again
              disabled = false
              window.location.href = '/convocation';
            }, 1000)
          }, 320)
        }, 0)
      }
    }

    // re-init canvas if the window size changes
    resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      cx = ctx.canvas.width / 2
      cy = ctx.canvas.height / 2
    }

    // resize listenter
    window.addEventListener('resize', () => {
      resizeCanvas()
    })

    // kick off the render loop
    render()

    // confetti on takeover button
    $('ul.menu a.btn-takeover').on('mouseenter', function(e) {
      //e.preventDefault();
      //clickButton();
      window.initBurst();
    })

    // confetti on takeover button mobile
    $('ul.menu a.btn-takeover-mobile').on('click', function(e) {
      e.preventDefault();
      clickButton();
    })

  });
});

//SITE FEEDBACK SET USER AGENT AND REFERAL URL
jQuery(function ($) {
  $(document).ready(function () {
    if ($("body").hasClass("site-feedback-form")) {
      var referrer = document.referrer;
      var userAgent = navigator.userAgent;
      var referrerURL = "https://www.utoronto.ca/site-feedback";

      if (referrer != "" && typeof referrer != "undefined") {
        // SET REFERER URL
        referrerURL = referrer;
      }

      if ($('input[name="submitted[page_you_are_reffering_to]"]').val() == "") {
        //ONLY CHANGE IF FIELD IS EMPTY
        $('input[name="submitted[page_you_are_reffering_to]"]').val(
          referrerURL
        );
      }

      if ($('input[name="submitted[field_1]"]').val() == "") {
        //ONLY CHANGE IF FIELD IS EMPTY
        $('input[name="submitted[field_1]"]').val(referrerURL);
      }

      if (userAgent != "" && typeof referrer != "undefined") {
        // SET USER AGENT URL
        $('input[name="submitted[field_2]"]').val(userAgent);
      }
    }
  });
});

// JS target only SRITS PAGE
jQuery(function ($) {
  $(document).ready(function () {
    if ($("body").hasClass("srits")) {
      //FOR SHOW HIDE INTRO DIV
      var $togglebutton1 = $('a[aria-controls="collapseIntro"]');
      $togglebutton1.click(function (e) {
        e.preventDefault();
        $togglebutton1.addClass("hide");
        $(this).siblings("a").removeClass("hide");
      });

      var stickyWidth = $(".srits-venue").width();

      function sticky_relocate() {
        var window_top = $(window).scrollTop();
        var footer_top = $("footer").offset().top;
        var div_top = $("#sticky-anchor").offset().top;
        var div_height = $(".srits-venue").outerHeight(true);

        var diff = footer_top - div_top - div_height - 100;

        if (window_top + div_height > footer_top) {
          $(".srits-venue").css({ position: "absolute", top: diff });
        } else if (window_top > div_top) {
          $(".srits-venue").width(stickyWidth);
          $(".srits-venue").css({ position: "fixed", top: 0 });
        } else {
          // TO NOT OVERLAP WITH HEADER
          $(".srits-venue").css({ "margin-top": "0px" }); 
          $(".srits-venue").css({ position: "absolute", top: "initial" });
        }
      }

      $(function () {
        //STICKY ONLY FOR DESKTOP
        if ($(".srits-venue").css("display") != "none") {
          $(window).scroll(sticky_relocate);
          sticky_relocate();
        }
      });
    }
  });

  // Participants lightbox.
  $(".symposium-participants .participant").click(function (e) {
    if (
      $(".participant-lightbox").length &&
      !$(".participant-lightbox").hasClass("active")
    ) {
      const content = $(this).html();
      $(".participant-lightbox").addClass("active");
      $(".participant-lightbox .content .participant").append(content);
      $(".participant-lightbox .modal-close").focus();
      $("html, body").css("overflow", "hidden");
    }
  });

  // closing lightbox
  $(".participant-lightbox i").click(function (e) {
    $(".participant-lightbox").removeClass("active");
    $(".participant-lightbox .content .participant").empty();
    $("html, body").css("overflow", "visible");
  });
  $(".participant-lightbox").click(function () {
    $(".participant-lightbox").removeClass("active");
    $(".participant-lightbox .content .participant").empty();
    $("html, body").css("overflow", "visible");
  });
  $(".participant-lightbox .content .participant").click(function (e) {
    e.stopPropagation();
  });
});

//Utogether
function cycleImages(){
  var $active = jQuery('#cycler .active');
  var $next = ($active.next().not('.base').length > 0) ? $active.next().not('.base') : jQuery('#cycler img').not('.base').first();
  $next.css('z-index',2);//move the next image up the pile
  $active.fadeOut(1500,function(){//fade out the top image
    $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}

jQuery(function ($) {

  $(document).ready(function () {  
    if ($("body").hasClass("page-utogether")) {  
      $('#cycler img.base').clone().prependTo('#cycler');
      $('#cycler img.base').last().removeClass('base').addClass('active');
      $('#cycler img').show();
      // run every 4s
      setInterval('cycleImages()', 4000);    }
  });
});
;
