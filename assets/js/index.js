// var letter = [];

// var word = "racecar";

// var rword = "";

// for (var i = 0; i < word.length; i++) {
//   letter.push(word[i]);
//   console.log(word)
// }

// for (var i = 0; i < word.length; i++) {
//   rword += letter.pop();
//   console.log(rword)
// }

// if (rword === word) {
//   console.log(word + " " + "is a palindrome.")
// } else {
//   console.log(word + " " + "is a not palindrome.")
// }

// class Stack {
//   constructor() {
//     this.count = 0;
//     this.storage = {};
//   }

//   push(value) {
//     this.storage[this.count++] = value;
//   }

//   pop() {
//     if (this.count === 0) return undefined;
//     return this.storage[--this.count];
//   }

//   size() {
//     return this.count;
//   }

//   peek() {
//     return this.storage[this.count - 1];
//   }
// }

// var myStack = new Stack();

// myStack.push(1);
// myStack.push(3);
// myStack.push(5);
// myStack.push(5);
// myStack.push(5);
// console.log(myStack.size());
// console.log(myStack.pop());
// console.log(myStack.peek());

//  Dropdown with toggle
// $('.button').click(function () {
//   var button = this;
//   var Buttonid = button.getAttribute('data-id');
//   $("#" + Buttonid).toggle("active");
// })

/// find text number
// let text = "sanjay $100000 spend for job 50";
// console.log(text);
// let textnumber = text.match(/\d+/g);
// let convert = textnumber.map(Number);
// console.log(convert.join());

//  Dropdown with Active Class
$(".button").click(function () {
  var button = this;
  var Buttonid = button.getAttribute("data-id");
  buttonDrodown = $("#" + Buttonid);
  if (buttonDrodown.hasClass("active")) {
    buttonDrodown.removeClass("active");
  } else {
    buttonDrodown.addClass("active");
  }
});

// table add and remove
$(document).ready(function () {
  $(".table .add").click(function () {
    var tableRow = $(".row-table:last").clone(true);
    $(".row-table").find(".add").addClass("hide");
    $("#table").append(tableRow);
  });

  $("#table").on("click", ".remove", function () {
    var parentRow = $(this).closest(".row-table");
    if (!parentRow.is(":last-child")) {
      parentRow.hide();
    }
  });

  $("#selectAll").on("change", function () {
    deleteButton();
    $(".singleCheckbox").prop("checked", $(this).prop("checked"));
    updateActiveClass();
    deleteButton();
    $(".singleCheckbox").on("change", function () {
      var allCheckbox =
        $(".singleCheckbox:checked").length === $(".singleCheckbox").length;
      $("#selectAll").prop("checked", allCheckbox);
    });
  });

  $(".singleCheckbox").on("change", function () {
    deleteButton();
    var allCheckbox =
      $(".singleCheckbox:checked").length === $(".singleCheckbox").length;
    $("#selectAll").prop("checked", allCheckbox);
    updateActiveClass();
    deleteButton();
  });

  // table delete row
  function deleteButton() {
    var allCheckboxes = $(".singleCheckbox");
    var isChecked =
      allCheckboxes.length === allCheckboxes.filter(":checked").length;
    $(".delete-btn")
      .toggleClass("hide", !isChecked)
      .on("click", function () {
        $(".row-table").toggleClass("hide", isChecked);
      });
  }

  //  Table checkbox active class
  function updateActiveClass() {
    $(".singleCheckbox").each(function () {
      var isChecked = $(this).prop("checked");
      var row = $(this).closest("tr");
      if (isChecked) {
        row.addClass("active");
      } else {
        row.removeClass("active");
      }
    });
  }
});

////  Modal
$(document).ready(function () {
  var buttons = document.querySelectorAll("[data-action]");
  var mobileMenu = $(".mobile-menu");
  $(buttons).click(function () {
    var ButtonID = $(this).data("action");
    console.log(ButtonID);
    var matchingModal = $("[data-modal-id=" + ButtonID + "]");
    if (matchingModal) {
      $(".modal-overlay").addClass("active");
      matchingModal.addClass("active");
    }
  });
  $(".btn-close").click(function () {
    $(mobileMenu).removeClass("active");
    $(".modal-overlay").removeClass("active");
  });

  $(document).on("click", function (event) {
    if (!$(event.target).closest(".mobile-menu, [data-action]").length) {
      mobileMenu.removeClass("active");
      $(".modal-overlay").removeClass("active");
    }
  });
});

/// selectedOption
$(document).ready(function () {
  var selectLabel = $(".selectlabel");
  var selectDropDown = $("#selectDropDown");
  var downSelect = $("#downSelect");
  var closeBtn = $(".close");
  var selectedLabel = $(".selectlabel label.selectted");
  var placeholder = $(".placeholder");
  var hiddenClass = "hidden";
  var activeClass;

  selectLabel.on("click", function () {
    selectDropDown.toggleClass("active");
  });

  $("#selectDropDown li a").on("click", function (e) {
    e.preventDefault();
    activeClass = $(this).attr("class");
    updateSelectOptions();
  });

  closeBtn.on("click", function () {
    resetSelectOptions();
  });

  function updateSelectOptions() {
    downSelect.val(activeClass);
    var options = downSelect.find("option");

    options.each(function () {
      var option = $(this);
      if (option.val() === activeClass) {
        option.show();
        selectedLabel.text(option.val());
        selectDropDown.removeClass("active");
        closeBtn.addClass("active");
        placeholder.addClass(hiddenClass);
        $(".selectted").removeClass(hiddenClass);
      } else {
        option.hide();
      }
    });
  }

  function resetSelectOptions() {
    closeBtn.removeClass("active");
    downSelect.find("option").removeAttr("style");
    downSelect[0].selectedIndex = 0;
    placeholder.removeClass(hiddenClass);
    selectDropDown.addClass("active");
    $(".selectted").addClass(hiddenClass);
  }
});

