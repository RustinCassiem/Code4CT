// This is the slide counter
let slideNow = 0;

$("#slideBtn_1").click(function(){
    slideNow = 1;
    $("#img_1").fadeIn("slow");
    $("#img_2").fadeOut("slow");
    $("#img_3").fadeOut("slow");
    $("#slideBtn_1").css('height', '20px');
    $("#slideBtn_1").css('background', '#e1918a');
    $("#slideBtn_2").css('height', '10px');
    $("#slideBtn_2").css('background', 'white');
    $("#slideBtn_3").css('height', '10px');
    $("#slideBtn_3").css('background', 'white');
});

$("#slideBtn_2").click(function(){
    slideNow = 2;
    $("#img_2").fadeIn("slow");
    $("#img_1").fadeOut("slow");
    $("#img_3").fadeOut("slow");
    $("#slideBtn_1").css('height', '10px');
    $("#slideBtn_1").css('background', 'white');
    $("#slideBtn_2").css('height', '20px');
    $("#slideBtn_2").css('background', '#e1918a');
    $("#slideBtn_3").css('height', '10px');
    $("#slideBtn_3").css('background', 'white');
});

$("#slideBtn_3").click(function(){
    slideNow = 3;
    $("#img_3").fadeIn("slow");
    $("#img_1").fadeOut("slow");
    $("#img_2").fadeOut("slow");
    $("#slideBtn_1").css('height', '10px');
    $("#slideBtn_1").css('background', 'white');
    $("#slideBtn_2").css('height', '10px');
    $("#slideBtn_2").css('background', 'white');
    $("#slideBtn_3").css('height', '20px');
    $("#slideBtn_3").css('background', '#e1918a');
});


// This is my simple Smooth scroller, this takes to you to the top of the page when clicked
// $("#nav_menu_btn").click(function(){
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth',
//     })
// })

$("#nav_menu_btn").click(function(){
    let line1 = $("#menu_line1");
    let line2 = $("#menu_line2");
    let line3 = $("#menu_line3");

    if (line1.css("margin-top") == "30px"){
        line1.css("margin-top","20px");
        line1.css("transform","rotate(0deg)");
        line2.css("margin-top","10px");
        line2.css("transform","rotate(0deg)");
        line3.css("opacity","1");
    }

    else{
        line1.css('margin-top','30px');
        line1.css('transform','rotate(45deg)');
        line2.css("margin-top","0px");
        line2.css("transform","rotate(-45deg)");
        line3.css("opacity","0");
    }
})

function changeToClose() {
    let navbarLinks = document.getElementById("nav_links");

    if (navbarLinks.style.visibility == "visible"){
        navbarLinks.style.visibility = "collapse";
        navbarLinks.style.height = "0vh";
        navbarLinks.style.transition = "all 0.7s";
    }
    else{
        navbarLinks.style.visibility = "visible";
        navbarLinks.style.height = "80vh";
        navbarLinks.style.transition = "all 0.7s";
    }

    // if (window.matchMedia("(max-width: +500px)").matches){
    //     navbarLinks.style.visibility = "visible";
    //     navbarLinks.style.height = "75px";
    // }
    // else if (!window.matchMedia("(max-width: 500px)").matches){
    //     navbarLinks.style.visibility = "collapse";
    //     navbarLinks.style.height = "80vh";
    // }
}

$(".portfolio_1").show();
$(".portfolio_2").hide();
$(".portfolio_3").hide();

$("#portfolio_btn_1").click(function(){
    $(".portfolio_1").fadeIn(500);
    $(".portfolio_2").fadeOut(500);
    $(".portfolio_3").fadeOut(500);
    $(".portfolio_2").hide();
    $(".portfolio_3").hide();
});

$("#portfolio_btn_2").click(function(){
    $(".portfolio_1").fadeOut(500);
    $(".portfolio_3").fadeOut(500);
    $(".portfolio_2").fadeIn(500);
    $(".portfolio_1").hide();
    $(".portfolio_3").hide();
});

$("#portfolio_btn_3").click(function(){
    $(".portfolio_1").fadeOut(500);
    $(".portfolio_2").fadeOut(500);
    $(".portfolio_3").fadeIn(500);
    $(".portfolio_1").hide();
    $(".portfolio_2").hide();
});

function countUpStatistics() {
    let coffeeNumber = $("#coffee_value");
    let girlsNumber = $("#girls_value");
    let projectNumber = $("#project_value");
    let codingNumber = $("#hours_value");
    let statisticSection = document.getElementById("statistic_section");

    function countUpTimer() {
        let coffeeValue = 0;
        setInterval(function() {
            if (coffeeValue == 3000){
                clearInterval;
            }
            else{
                coffeeValue += 20;
                coffeeNumber.html(coffeeValue + "+");
                coffeeNumber.css("fontSize", "1.5em");
                coffeeNumber.css("fontWeight","bolder");
            }
        },10);

        let girlsValue = 0;
        setInterval(function(){
            if (girlsValue == 780){
                clearInterval;
            }
            else{
                girlsValue += 20;
                girlsNumber.html(coffeeValue + "+");
                girlsNumber.css("fontSize", "1.5em");
                girlsNumber.css("fontWeight","bolder");
            }
        },50);

        let projectValue = 0;
        setInterval(function(){
            if (projectValue == 3120){
                clearInterval;
            }
            else{
                projectValue += 20;
                projectNumber.html(coffeeValue + "+");
                projectNumber.css("fontSize", "1.5em");
                projectNumber.css("fontWeight","bolder");
            }
        },10);

        let codingValue = 7000;
        setInterval(function(){
            if (codingValue == 8765){
                clearInterval;
            }
            else{
                codingValue += 5;
                codingNumber.html(coffeeValue + "+");
                codingNumber.css("fontSize", "1.5em");
                codingNumber.css("fontWeight","bolder");
            }
        },0);
    }

    countUpTimer();

    function startCarousel() {
        let sponsor1 = $("#sponsor_logo1");
        let sponsor2 = $("#sponsor_logo2");
        let sponsor3 = $("#sponsor_logo3");
        let sponsor4 = $("#sponsor_logo4");
        let sponsor5 = $("#sponsor_logo5");
        let sponsor6 = $("#sponsor_logo6");
        let sponsor7 = $("#sponsor_logo7");
        let sponsor8 = $("#sponsor_logo8");
        let sponsor9 = $("#sponsor_logo9");
        let sponsor10 = $("#sponsor_logo10");
    
        let theSponsors = [sponsor1, sponsor2, sponsor3, sponsor4, sponsor5, sponsor6,sponsor7, sponsor8, sponsor9, 
            sponsor10];
    
        for (let i = 0; i < theSponsors.length; i++){
            $(theSponsors[i]).animate({marginLeft: "+=250px"},1000);
        }

        function checkSponsorPos() {

            for (let i = 0; i < theSponsors.length; i++){
                if (theSponsors[i].css("margin-left") == "1750px"){
                    theSponsors[i].css("margin-left","-750px");
                }
            }
        }

        setInterval(checkSponsorPos, 1100);
    }

    setInterval(startCarousel, 2000);
    
}

countUpStatistics();

function initMap() {
    // The location of Code4CT
    var Code4CT = {lat: -33.924692, lng: 18.448723};
    // The map, centered at Code4CT
    var map = new google.maps.Map(
        document.getElementById('contact_map_box'), {zoom: 18, center: Code4CT});
    // The marker, positioned at Code4CT
    var marker = new google.maps.Marker({position: Code4CT, map: map});
}

initMap();

// This checks if the webpage is loaded completely
//   window.onload = function () { alert("It's loaded!") }