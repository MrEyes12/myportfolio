const openNav = () => {

    var showhide = document.getElementById("mysidenav");
    if (showhide.style.width = "0px") {
        showhide.style.width = "300px";
        document.getElementById("close").style.display = "block";
    }
}

const closeNav = () => {
    var showhide = document.getElementById("mysidenav");
    if (showhide.style.width = "300px") {
        showhide.style.width = "0px";
        document.getElementById("close").style.display = "none";
    }
}

$(document).ready(function () {
    $(window).on("resize", function () {
        if ($(window).width() < 786) {
            $(".hide").click(function () {
                $("#mysidenav").css("width", "0px");
                document.getElementById("close").style.display = "none";
            });
        }
    });
});


// JavaScript for form validation

function validateForm() {
    // name validation
    var x = document.forms["contact"]["name"].value;
    if (x == "") {
        alert("please fill out this field");
        document.contact.name.focus();
        return false;
    } else if (!isNaN(x)) {
        alert("please enter Text only");
        document.contact.name.focus();
        return false;
    }
}

