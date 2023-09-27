$(document).ready(function () {
  const sidebar = $(".sidebar");
  const toggleButton = $("#toggleSidebar");
  const closeSidebarButton = $("#closeSidebar");
  const submenuItems = $(".menu > li");
  const hamburgerButton = $("#toggleSidebar");
  const overlay = $("#overlay");

  sidebar.hide();
  overlay.hide();

  function openSidebar() {
    sidebar.show("slide", { direction: "left" }, 300);
    overlay.show();
    hamburgerButton.addClass("active");
  }

  function closeSidebar() {
    sidebar.hide("slide", { direction: "left" }, 300);
    overlay.hide();
    hamburgerButton.removeClass("active");
  }

  toggleButton.on("click", function () {
    openSidebar();
  });

  overlay.on("click", function () {
    closeSidebar();
  });

  closeSidebarButton.on("click", function () {
    closeSidebar();
  });

  submenuItems.on("click", function () {
    const submenu = $(this).find(".submenu");
    submenu.slideToggle(200);
  });

  $(".menu a").on("click", function (e) {
    e.preventDefault();
    const content = $(this).text();
    $("#mainContent").html(`<p>${content} Page Content</p>`);
  });
});

// TAB

$(document).ready(function () {
  // Function to show the initial content for the first set of tabs
  function showInitialTabContentForFirstSet() {
    $('.content[id^="content-1"]').hide();
    $("#content-1-1").show();
    $("#content-2-1").show();
  }

  // Trigger a click event on the initially checked radio button for the first set of tabs
  showInitialTabContentForFirstSet();

  // Handle tab switching for the first set of tabs
  $('.input[name="tabs-1"]').change(function () {
    $('.content[id^="content-1"]').hide();
    var target = $(this).attr("id").replace("tab-", "content-");
    $("#" + target).show();
  });

  // Handle tab switching for the second set of tabs
  $('.input[name="tabs-2"]').change(function () {
    $('.content[id^="content-2"]').hide();
    var target = $(this).attr("id").replace("tab-", "content-");
    $("#" + target).show();
  });
});
// TAB END

// SLIDER

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll on each navigation
    autoplay: true, // Autoplay the slider
    autoplaySpeed: 2000, // Autoplay speed in milliseconds (2 seconds)
    arrows: true, // Display navigation arrows
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // Add custom click event handlers for the arrow buttons
  $(".arrow-left").click(function () {
    $(".slider").slick("slickPrev");
  });

  $(".arrow-right").click(function () {
    $(".slider").slick("slickNext");
  });
});

// SLIDER END
