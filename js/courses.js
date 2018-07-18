'use strict';

let itemCount = 0;

window.onscroll = function slideInCart() {
    if (window.scrollY > 300){
        $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
    }
    else if (window.scrollY < 300 && itemCount !=0){
        $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
    }
    else{
        $("#shopping_cart").css('right', '-85px', 'transition', 'all 0.4s');
    }
    if ($("#shopping_list").css('right') == "0px"){
        $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
    }
    if($("#shopping_list").css('right') == "0px"){
        $("#shopping_list").css('right', '-305px', 'transition', 'all 0.4s');
    }
}

if (window.matchMedia("(max-width: 500px)").matches){
    $("#shopping_cart").click(function(){
        if ($("#shopping_list").css('right') == "0px"){
            $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '-205', 'transition', 'all 0.4s');
        }
        else {
            $("#shopping_cart").css('right', '205px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
        }
    })
    $("button").click(function(){
        $("#shopping_cart").css('right', '205px', 'transition', 'all 0.4s');
        $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
    })
}

else if (!window.matchMedia("(max-width: 500px)").matches){
    $("#shopping_cart").click(function(){
        if ($("#shopping_list").css('right') == "0px"){
            $("#shopping_cart").css('right', '0px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '-305px', 'transition', 'all 0.4s');
        }
        else {
            $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
            $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
        }
    })
    
    $("button").click(function(){
        $("#shopping_cart").css('right', '305px', 'transition', 'all 0.4s');
        $("#shopping_list").css('right', '0px', 'transition', 'all 0.4s');
    })
}

// ******************************************************************** //

let totalAmount = [0];
let theList = [];

$("#amountInCart").text(itemCount);

function getSum(total, num){
    return total + num;
}


let course1 = { name : "Create with Code : Web Pages", price: 250, };

let course2 = { name : "Intro to Coding : Web Pages", price: 960, };

let course3 = { name : "Intro to Coding : Getting stated as a dev", price: 250, };

let course4 = { name : "Intro of coding : Music", price: 250, };

let course5 = { name : "Create with Code : Music", price: 960, };

let course6 = { name : "Intro to coding : Animations", price: 250, };

let course7 = { name : "Create with Code : Animation", price: 960, };

let course8 = { name : "JavaScrip for Beginners", price: 1800, };

let course9 = { name : "Front End Web Development for Beginners", price: 1800, };

let course10 = { name : "Python for Beginner ", price: 1800, };

let course11 = { name : "Full Stack JavaScript for Intermediate", price: 1800, };

let course12 = { name : "Website Deployment for Intermediate", price: 1200, };

let course13 = { name : "Innovation Challenge for Social Innovation", price: 750, };

let course14 = { name : "CodeStorm for Social Innovation", price: 1500, };

let course15 = { name : "Industry Immersion for Social Innovation", price: 1500, };

let course16 = { name : "Code Conversation for Career and life skills", price: 300, };

let course17 = { name : "Networking for Career and life skills", price: 300, };

let course18 = { name : "Presentation skills for Career and life skills", price: 300, };
    
let course19 = { name : "Digital Communication Skills for Career and life skills  ", price: 300, };

let course20 = { name : "CV & Linkdln for Career and life skills  ", price: 300, };

let course21 = { name : "Applying to Tertiary Studies for Career and life skills ", price: 300, };

let cartListText = document.getElementById("cartItemList");

let remove_btn1 = "<button id='remove_course1'>remove</button>";
let remove_btn2 = "<button id='remove_course2'>remove</button>";
let remove_btn3 = "<button id='remove_course3'>remove</button>";
let remove_btn4 = "<button id='remove_course4'>remove</button>";
let remove_btn5 = "<button id='remove_course5'>remove</button>";
let remove_btn6 = "<button id='remove_course6'>remove</button>";
let remove_btn7 = "<button id='remove_course7'>remove</button>";
let remove_btn8 = "<button id='remove_course8'>remove</button>";
let remove_btn9 = "<button id='remove_course9'>remove</button>";
let remove_btn10 = "<button id='remove_course10'>remove</button>";
let remove_btn11 = "<button id='remove_course11'>remove</button>";
let remove_btn12 = "<button id='remove_course12'>remove</button>";
let remove_btn13 = "<button id='remove_course13'>remove</button>";
let remove_btn14 = "<button id='remove_course14'>remove</button>";
let remove_btn15 = "<button id='remove_course15'>remove</button>";
let remove_btn16 = "<button id='remove_course16'>remove</button>";
let remove_btn17 = "<button id='remove_course17'>remove</button>";
let remove_btn18 = "<button id='remove_course18'>remove</button>";
let remove_btn19 = "<button id='remove_course19'>remove</button>";
let remove_btn20 = "<button id='remove_course20'>remove</button>";
let remove_btn21 = "<button id='remove_course21'>remove</button>";


let course1Text = remove_btn1 + course1.name + "<br>";
let course2Text = remove_btn2 + course2.name + "<br>";
let course3Text = remove_btn3 + course3.name + "<br>";
let course4Text = remove_btn4 + course4.name + "<br>";
let course5Text = remove_btn5 + course5.name + "<br>";
let course6Text = remove_btn6 + course6.name + "<br>";
let course7Text = remove_btn7 + course7.name + "<br>";
let course8Text = remove_btn8 + course8.name + "<br>";
let course9Text = remove_btn9 + course9.name + "<br>";
let course10Text = remove_btn10 + course10.name + "<br>";
let course11Text = remove_btn11 + course11.name + "<br>";
let course12Text = remove_btn12 + course12.name + "<br>";
let course13Text = remove_btn13 + course13.name + "<br>";
let course14Text = remove_btn14 + course14.name + "<br>";
let course15Text = remove_btn15 + course15.name + "<br>";
let course16Text = remove_btn16 + course16.name + "<br>";
let course17Text = remove_btn17 + course17.name + "<br>";
let course18Text = remove_btn18 + course18.name + "<br>";
let course19Text = remove_btn19 + course19.name + "<br>";
let course20Text = remove_btn20 + course20.name + "<br>";
let course21Text = remove_btn21 + course21.name + "<br>";



// This function checks if there is a value in the array `theList`
function checkArray() {
    cartListText.innerHTML = "";
    for (let i in theList){
        let theText = theList[i];
        cartListText.innerHTML += theText;
    }
}

// This function adds up the values in the array `totalAmount`
function getTotal() {
    document.getElementById("cartTotal").innerHTML = "Total : " + totalAmount.reduce(getSum);
}

$("#course_btn1").click(function(){
    let iCourse1 = theList.indexOf(course1Text);
    let course1Price = totalAmount.indexOf(course1.price);
    totalAmount.push(course1.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course1Text);
    checkArray();
});

$("body").on('click', '#remove_course1', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse1 = theList.indexOf(course1Text);
        let course1Price = totalAmount.indexOf(course1.price);
        totalAmount.splice(course1Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse1, 1);
        checkArray();
    }
})

$("#course_btn2").click(function(){
    let iCourse2 = theList.indexOf(course2Text);
    let course2Price = totalAmount.indexOf(course2.price);
    totalAmount.push(course2.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course2Text);
    checkArray();
});

$("body").on('click', '#remove_course2', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse2 = theList.indexOf(course2Text);
        let course2Price = totalAmount.indexOf(course2.price);
        totalAmount.splice(course2Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse2, 1);
        checkArray();
    }
});

$("#course_btn3").click(function(){
    let iCourse3 = theList.indexOf(course3Text);
    let course3Price = totalAmount.indexOf(course3.price);
    totalAmount.push(course3.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course3Text);
    checkArray();
});

$("body").on('click', '#remove_course3', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse3 = theList.indexOf(course3Text);
        let course3Price = totalAmount.indexOf(course3.price);
        totalAmount.splice(course3Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse3, 1);
        checkArray();
    }
});

$("#course_btn4").click(function(){
    let iCourse4 = theList.indexOf(course4Text);
    let course4Price = totalAmount.indexOf(course4.price);
    totalAmount.push(course4.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course4Text);
    checkArray();
});

$("body").on('click', '#remove_course4', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse4 = theList.indexOf(course4Text);
        let course4Price = totalAmount.indexOf(course4.price);
        totalAmount.splice(course4Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse4, 1);
        checkArray();
    }
});

$("#course_btn5").click(function(){
    let iCourse5 = theList.indexOf(course5Text);
    let course5Price = totalAmount.indexOf(course5.price);
    totalAmount.push(course5.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course5Text);
    checkArray();
});

$("body").on('click', '#remove_course5', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse5 = theList.indexOf(course5Text);
        let course5Price = totalAmount.indexOf(course5.price);
        totalAmount.splice(course5Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse5, 1);
        checkArray();
    }
});

$("#course_btn6").click(function(){
    let iCourse6 = theList.indexOf(course6Text);
    let course6Price = totalAmount.indexOf(course6.price);
    totalAmount.push(course6.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course6Text);
    checkArray();
});

$("body").on('click', '#remove_course6', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse6 = theList.indexOf(course6Text);
        let course6Price = totalAmount.indexOf(course6.price);
        totalAmount.splice(course6Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse6, 1);
        checkArray();
    }
});

$("#course_btn7").click(function(){
    let iCourse7 = theList.indexOf(course7Text);
    let course7Price = totalAmount.indexOf(course7.price);
    totalAmount.push(course7.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course7Text);
    checkArray();
});

$("body").on('click', '#remove_course7', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse7 = theList.indexOf(course7Text);
        let course7Price = totalAmount.indexOf(course7.price);
        totalAmount.splice(course7Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse7, 1);
        checkArray();
    }
});

$("#course_btn8").click(function(){
    let iCourse8 = theList.indexOf(course8Text);
    let course8Price = totalAmount.indexOf(course8.price);
    totalAmount.push(course8.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course8Text);
    checkArray();
});

$("body").on('click', '#remove_course8', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse8 = theList.indexOf(course8Text);
        let course8Price = totalAmount.indexOf(course8.price);
        totalAmount.splice(course8Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse8, 1);
        checkArray();
    }
});


$("#course_btn9").click(function(){
    let iCourse9 = theList.indexOf(course9Text);
    let course9Price = totalAmount.indexOf(course9.price);
    totalAmount.push(course9.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course9Text);
    checkArray();
});


$("body").on('click', '#remove_course9', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse9 = theList.indexOf(course9Text);
        let course9Price = totalAmount.indexOf(course9.price);
        totalAmount.splice(course9Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse9, 1);
        checkArray();
    }
});
  
$("#course_btn10").click(function(){
    let iCourse10 = theList.indexOf(course10Text);
    let course10Price = totalAmount.indexOf(course10.price);
    totalAmount.push(course10.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course10Text);
    checkArray();
});

$("body").on('click', '#remove_course10', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse10 = theList.indexOf(course10Text);
        let course10Price = totalAmount.indexOf(course10.price);
        totalAmount.splice(course10Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse10, 1);
        checkArray();
    }
});

$("#course_btn11").click(function(){
    let iCourse11 = theList.indexOf(course11Text);
    let course11Price = totalAmount.indexOf(course11.price);
    totalAmount.push(course11.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course11Text);
    checkArray();
});

$("body").on('click', '#remove_course11', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse11 = theList.indexOf(course11Text);
        let course11Price = totalAmount.indexOf(course11.price);
        totalAmount.splice(course11Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse11, 1);
        checkArray();
    }
});

$("#course_btn12").click(function(){
    let iCourse12 = theList.indexOf(course12Text);
    let course12Price = totalAmount.indexOf(course12.price);
    totalAmount.push(course12.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course12Text);
    checkArray();
});

$("body").on('click', '#remove_course12', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse12 = theList.indexOf(course12Text);
        let course12Price = totalAmount.indexOf(course12.price);
        totalAmount.splice(course12Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse12, 1);
        checkArray();
    }
});

$("#course_btn13").click(function(){
    let iCourse13 = theList.indexOf(course13Text);
    let course13Price = totalAmount.indexOf(course13.price);
    totalAmount.push(course13.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course13Text);
    checkArray();
});

$("body").on('click', '#remove_course13', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse13 = theList.indexOf(course13Text);
        let course13Price = totalAmount.indexOf(course13.price);
        totalAmount.splice(course13Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse13, 1);
        checkArray();
    }
});
  
$("#course_btn14").click(function(){
    let iCourse14 = theList.indexOf(course14Text);
    let course14Price = totalAmount.indexOf(course14.price);
    totalAmount.push(course14.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course14Text);
    checkArray();
});

$("body").on('click', '#remove_course14', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse14 = theList.indexOf(course14Text);
        let course14Price = totalAmount.indexOf(course14.price);
        totalAmount.splice(course14Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse14, 1);
        checkArray();
    }
});
  
$("#course_btn15").click(function(){
    let iCourse15 = theList.indexOf(course15Text);
    let course15Price = totalAmount.indexOf(course15.price);
    totalAmount.push(course15.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course15Text);
    checkArray();
});

$("body").on('click', '#remove_course15', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse15 = theList.indexOf(course15Text);
        let course15Price = totalAmount.indexOf(course15.price);
        totalAmount.splice(course15Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse15, 1);
        checkArray();
    }
});

$("#course_btn16").click(function(){
    let iCourse16 = theList.indexOf(course16Text);
    let course16Price = totalAmount.indexOf(course16.price);
    totalAmount.push(course16.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course16Text);
    checkArray();
});

$("body").on('click', '#remove_course16', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse16 = theList.indexOf(course16Text);
        let course16Price = totalAmount.indexOf(course16.price);
        totalAmount.splice(course16Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse16, 1);
        checkArray();
    }
});

$("#course_btn17").click(function(){
    let iCourse17 = theList.indexOf(course17Text);
    let course17Price = totalAmount.indexOf(course17.price);
    totalAmount.push(course17.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course17Text);
    checkArray();
});

$("body").on('click', '#remove_course17', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse17 = theList.indexOf(course17Text);
        let course17Price = totalAmount.indexOf(course17.price);
        totalAmount.splice(course17Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse17, 1);
        checkArray();
    }
});

$("#course_btn18").click(function(){
    let iCourse18 = theList.indexOf(course18Text);
    let course18Price = totalAmount.indexOf(course18.price);
    totalAmount.push(course18.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course18Text);
    checkArray();
});

$("body").on('click', '#remove_course18', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse18 = theList.indexOf(course18Text);
        let course18Price = totalAmount.indexOf(course18.price);
        totalAmount.splice(course18Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse18, 1);
        checkArray();
    }
});
  
$("#course_btn19").click(function(){
    let iCourse19 = theList.indexOf(course19Text);
    let course19Price = totalAmount.indexOf(course19.price);
    totalAmount.push(course19.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course19Text);
    checkArray();
});

$("body").on('click', '#remove_course19', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse19 = theList.indexOf(course19Text);
        let course19Price = totalAmount.indexOf(course19.price);
        totalAmount.splice(course19Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse19, 1);
        checkArray();
    }
});
  
$("#course_btn20").click(function(){
    let iCourse20 = theList.indexOf(course20Text);
    let course20Price = totalAmount.indexOf(course20.price);
    totalAmount.push(course20.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course20Text);
    checkArray();
});

$("body").on('click', '#remove_course20', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse20 = theList.indexOf(course20Text);
        let course20Price = totalAmount.indexOf(course20.price);
        totalAmount.splice(course20Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse20, 1);
        checkArray();
    }
});
  
$("#course_btn21").click(function(){
    let iCourse21 = theList.indexOf(course21Text);
    let course21Price = totalAmount.indexOf(course21.price);
    totalAmount.push(course21.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course21Text);
    checkArray();
});

$("body").on('click', '#remove_course21', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse21 = theList.indexOf(course21Text);
        let course21Price = totalAmount.indexOf(course21.price);
        totalAmount.splice(course21Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse21, 1);
        checkArray();
    }
});
  
$("#course_btn22").click(function(){
    let iCourse22 = theList.indexOf(course22Text);
    let course22Price = totalAmount.indexOf(course22.price);
    totalAmount.push(course22.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course22Text);
    checkArray();
});

$("body").on('click', '#remove_course22', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse22 = theList.indexOf(course22Text);
        let course22Price = totalAmount.indexOf(course22.price);
        totalAmount.splice(course22Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse22, 1);
        checkArray();
    }
});
  
$("#course_btn23").click(function(){
    let iCourse23 = theList.indexOf(course23Text);
    let course23Price = totalAmount.indexOf(course23.price);
    totalAmount.push(course23.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course23Text);
    checkArray();
});

$("body").on('click', '#remove_course23', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse23 = theList.indexOf(course23Text);
        let course23Price = totalAmount.indexOf(course23.price);
        totalAmount.splice(course23Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse23, 1);
        checkArray();
    }
});
  
$("#course_btn24").click(function(){
    let iCourse24 = theList.indexOf(course24Text);
    let course24Price = totalAmount.indexOf(course24.price);
    totalAmount.push(course24.price);
    getTotal();
    itemCount++;
    $("#amountInCart").text(itemCount);
    theList.push(course24Text);
    checkArray();
});

$("body").on('click', '#remove_course24', function(){
    let userDelete = confirm("Are you sure you want to delete this item ?");
    if(userDelete == true){
        let iCourse24 = theList.indexOf(course24Text);
        let course24Price = totalAmount.indexOf(course24.price);
        totalAmount.splice(course24Price, 1);
        getTotal();
        itemCount--;
        $("#amountInCart").text(itemCount);
        theList.splice(iCourse24, 1);
        checkArray();
    }
});
  

$("#emptyCartList").click(function(){
    $("#cartItemList").text("");
    document.getElementById("cartTotal").innerHTML = "Total : " + 0;
    itemCount = 0;
    $("#amountInCart").text("0");
    totalAmount = [];
    theList = [];
})


$("#emptyCartList").click(function(){
    $("#cartItemList").text("");
    document.getElementById("cartTotal").innerHTML = "Total : " + 0;
    itemCount = 0;
    $("#amountCart").text("0");
    totalAmount = [];
    theList = [];
})
