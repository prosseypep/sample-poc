(function($){
  $(function(){

    var group0Value = $("input[name='group0']:checked").val();
    var group1Value = $("input[name='group1']:checked").val();
    var group2Value = $("input[name='group2']:checked").val();
    var group3Value = $("input[name='group3']:checked").val();
    

  
       // $("input[type=radio][checked]").each(
    //       function() {
    //         $('#submit').removeAttrb('disabled', false);
    //       }
    //   );
      

    $('.sidenav').sidenav();
    $('.dropdown-trigger').dropdown();
    $('.tabs').tabs();
    $('#tb1').on({
      'click': function(){
          $('#im1').attr('src','images/img4.jpg');
      }
    });
    $('#tb2').on({
      'click': function(){
          $('#im1').attr('src','');
      }
    });
    $('#tb3').on({
      'click': function(){
          $('#im1').attr('src','');
      }
    });
    $('#tb4').on({
      'click': function(){
          $('#im1').attr('src','images/img1.jpg');
      }
    });

      console.log()

  }); // end of document ready
})(jQuery); // end of jQuery name space
