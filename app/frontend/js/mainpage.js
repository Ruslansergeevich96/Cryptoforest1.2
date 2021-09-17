
$(document).ready(function() {
    $("header").toggleClass("header-glass");
  });

/* Добавление нового портфеля*/
 
$("#createportfolio").click(function () {
    $(".table_col > tbody:last").append('<tr> <td>Первый портфель</td> <td>151212</td> <td>0.12323223</td> <td>+1232500$</td> <td>12.12.2012</td> <td><input type="button" class="delete" name="delete" value="Удалить" ></td> </tr>');    
/* Удаление портфеле*/    
});    


$('.delete').click(function(){
    ConfirmDialog('Are you sure');
        function ConfirmDialog(message) {
            $('<div></div>').appendTo('body')
            .html('<div><h6>' + message + '?</h6></div>')
             .dialog({
                modal: true,
                title: 'Удалить портфель?',
                zIndex: 10000,
                autoOpen: true,
                width: 500,
                resizable: false,
                buttons: {
                    Да: function() {
                      // $(obj).removeAttr('onclick');                                
                      // $(obj).parents('.Parent').remove();

                        $(this).parent().parent().remove();
                        return false;

                        $(this).dialog("close");
                    },
                    НЕТ: function() {
                        $('body').append('<h1>Confirm Dialog Result: <i>No</i></h1>');

                        $(this).dialog("close");
                    }
                  },
                  close: function(event, ui) {
                    $(this).remove();
                  }
                });
            };          
            });
            

/*  Donut Chart */



