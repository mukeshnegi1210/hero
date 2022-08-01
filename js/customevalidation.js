$(document).ready(function(){
    // for mobile no fields
 // for mobile no fields
 jQuery.validator.addMethod("mobilenoOnly", function (value, element) {
    return /^[0-9]\d{9}$/i.test(value);
  });
  //for allow numbers only
  jQuery.validator.addMethod("numbersOnly", function (value) {
    return /^[0-9]+$/i.test(value);
  })
  //for allow only character
  jQuery.validator.addMethod("charactersOnly", function (value) {
    return /^[a-zA-Z&\s]+$/i.test(value);
  })
//   book-test-drive-form
var $form = $('#book-test-drive-form2'), $successMsg = $(".alert");
$form.validate({
    rules: {
      fullname: {
        required: true,
        charactersOnly: true
      },
      mobileno: {
        required: true,
        numbersOnly: true,
        mobilenoOnly: true
      },
      otpenter:{
        required:true,
        numbersOnly: true,
      },
      veniclename:{
        required: true,
      },
      variantname:{
        required: true,
      },
      statename:{
        required:true,
      },
      cityname:{
        required:true,
      }
    },
    messages: {
      fullname: {
        required: "Full name is required",
        charactersOnly: "Please enter letters only"
      },
      mobileno: {
        required: "Mobile no is required",
        numbersOnly: "Please enter numbers only",
        mobilenoOnly: "Please enter valid mobile number"
      },
      otpenter:{
        required: "OTP is required",
        numbersOnly: "Please enter valid OTP",
      }
    },
    // submitHandler: function () {
    //     alert('form submitted');
    // }
  })
  $("#subbtn").on("click",function(e){
    // e.preventDefault();
    if($("#book-test-drive-form2").valid()){
        e.preventDefault();
        $('.book-test-drive-loading').addClass('active');
        $('.book-test-drive-wrapper .collapse-btn').addClass('d-none');
        $('#bookTestRideCollapse').removeClass('show');
        setTimeout(function () {
          $('.book-test-drive-loading').removeClass('active');
          $('.book-test-thankyou').addClass('active');
        }, 3000);
    }
//    alert("ok");
  })
})