$(document).ready(function(){
    $('button').click(function(){
        $('button').removeClass('active');
        $(this).addClass('active');
    });
    $('.ft').click(function(){ $('#shape').removeClass().addClass('show-ft');$('#desc').text("This tool does not need any internet connection to work.");$('#desc1').text("Load your file to the tool, and start writing sql queries to analyze the data.");$('#desc2').text("");  });
    $('.rt').click(function(){ $('#shape').removeClass().addClass('show-rt'); $('#desc').text("The tool is lightweight, no installation is even required.");$('#desc1').text("Download the .exe file and starting working with it.");$('#desc2').text("");  });
    
    $('.bk').click(function(){ $('#shape').removeClass().addClass('show-bk'); $('#desc').text("The tool in open source, the code is available in Git.");$('#desc1').text("Anyone can get a copy of the code and modify to meet any need of theirs.");$('#desc2').text("");  });
    $('.lt').click(function(){ $('#shape').removeClass().addClass('show-lt'); $('#desc').text("This tool does not need any internet connection to work. ");$('#desc1').text("Load your file to the tool and start writing sql queries to analyze the data. ");;$('#desc2').text("So the data security is not at question. All the data stays in the local computer. "); });
    
    $('.tp').click(function(){ $('#shape').removeClass().addClass('show-tp'); $('#desc').text("Copy and paste the modified data onto any device and start playing with it.") ;$('#desc1').text(""); $('#desc2').text("");});
    $('.bm').click(function(){ $('#shape').removeClass().addClass('show-bm'); $('#desc').text("The capacity of the data storage is as much as the system.");$('#desc1').text("");$('#desc2').text("");  });
    
    $('.zi').click(function(){ $('#shape').removeClass('zi').addClass('zi'); });
    $('.zo').click(function(){ $('#shape').removeClass('zi'); });
    
    $('.spinstart').click(function(){ $('#shape').addClass('spin'); });
    $('.spinstop').click(function(){ $('#shape').removeClass('spin'); });
});
