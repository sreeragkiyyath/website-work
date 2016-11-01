/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() {
    
    $("h2")
        .wrapInner("<span>");

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});


