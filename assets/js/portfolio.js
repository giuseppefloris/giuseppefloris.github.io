(function () {
  "use strict";

  function initWorkFilters() {
    var buttons = Array.prototype.slice.call(document.querySelectorAll(".research-topic"));
    var cards = Array.prototype.slice.call(document.querySelectorAll(".work-card"));
    var reset = document.getElementById("work-filter-reset");
    var status = document.getElementById("work-filter-status");

    if (!buttons.length || !cards.length || !reset || !status) return;

    function showSelected() {
      buttons.forEach(function (button) {
        button.classList.remove("is-active");
        button.setAttribute("aria-pressed", "false");
      });

      cards.forEach(function (card) {
        card.hidden = card.getAttribute("data-featured") !== "true";
      });

      reset.hidden = true;
      status.textContent = "A selection of publications and current research.";
    }

    function filterBy(button) {
      var topic = button.getAttribute("data-topic");
      var label = button.textContent.trim();
      var visibleCount = 0;

      buttons.forEach(function (item) {
        var active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", active ? "true" : "false");
      });

      cards.forEach(function (card) {
        var topics = (card.getAttribute("data-topics") || "").split(/\s+/);
        var visible = topics.indexOf(topic) !== -1;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });

      reset.hidden = false;
      status.textContent = visibleCount + (visibleCount === 1 ? " item" : " items") + " related to “" + label + "”.";
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.getAttribute("aria-pressed") === "true") {
          showSelected();
        } else {
          filterBy(button);
        }
      });
    });

    reset.addEventListener("click", showSelected);
    showSelected();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWorkFilters);
  } else {
    initWorkFilters();
  }
})();
