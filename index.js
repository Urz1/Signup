


$(".done").click(function () {

    var email = $("#emails").val();

    for(var i=0;i<email.length;i++){
        if (email[i] == '.') {
            $("span").removeClass("close");

            $("#emails").addClass("show");
            $('#emails').css("color",'hsl(4, 88%, 68%)');

            break;
        }
        else if (email[i] == '@') {
            $(".main").addClass("close");
            $(".open").removeClass("close");
            break;
        }
    }
});
$('#dismiss').click(function () {
    $(".main").removeClass("close");
    $(".open").addClass("close");
    $('#emails').css("color",'black');
    $("span").addClass("close");
    $("#emails").removeClass("show");
});
    // $.each(email, function (index, character) {
        
    //     }
    // });
// var email=$('#emails').val();
// $('.done').click(function (email) {
//     $(".main").addClass("close");
//     $(".open").removeClass("close");
// });