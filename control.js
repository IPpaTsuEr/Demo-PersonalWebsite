var page_height,page_width;
var canscroll=false;
var iswheel=false;
var extype;


window.onload=function(){

    console.log("正在寻找工作，欢迎联系我。");
    console.log("若您有意，则请来电：13340218949，或发送邮件到 272768762@QQ.com,姓名：尹剑锋");

    if (navigator.userAgent.indexOf("Firefox")!=-1 || navigator.userAgent.indexOf("Chrome")!=-1){
        page_height=$(window).height();//||$(document).height();
        page_width=$(window).width();//||$(document).width();

        $("body").attr("marginTop","0px");
        $("body>section").css("display","none");
        $("#pop_panel").css("display","none");
        $("#list_panel").css("display","none");
        $("#close_list").css("display","none");
        window.scrollto(0,0);
        document.documentElement.scrollTop=0;

        if (navigator.userAgent.indexOf("Firefox") != -1){extype="ff";}
        else if(navigator.userAgent.indexOf("Chrome") != -1){extype="go";}
        else{extype="ot";}

        $("section").height(page_height);
        $("#prj_panel").width(page_width*4).height(page_height-128);
        document.getElementById("prj_panel").style.left=0;
        $("#prj_panel>div").width(page_width-30).height(page_height-128);
}else
    {
        $("#note_panel").css("display","block");
        document.onmousewheel=function(){};
        document.addEventListener('DOMMouseScroll',function(e){},false);
        $("nav").css("display","none");
        $("section").css("display","none");
        $("footer").css("display","none");
    }

};
$("#enter").click(function(){
    $("#mask").addClass("maska");
    setTimeout (function(){
        $("#mask").remove();
        $("body>section").css("display","block");
    },1000);
    canscroll=true;

});

window.onresize=function(){
    if (navigator.userAgent.indexOf("Firefox")!=-1 || navigator.userAgent.indexOf("Chrome")!=-1) {
        page_height = $(window).height();//||$(document).height();
        page_width = $(window).width();//||$(document).width();
     /*   if (page_height<600){
            page_height=600;
            $("body").css("overflow-y","auto").height(600);
        }
        else{
            $("body").css("overflow-y","hidden").height("100%");
        }
        if(page_width<900){
            page_width=900;
            $("body").css("overflow-x","auto").width(900);
        }
        else{
            $("body").css("overflow-x","hidden").width("100%");
        }*/
        $("section").height(page_height);
        $("#prj_panel").width(page_width*4).height(page_height-128);
        document.getElementById("prj_panel").style.left=0;
        $("#prj_panel>div").width(page_width-30).height(page_height-128);
       // window.scrollto(0,0);
       // document.documentElement.scrollTop=0;
    }
    };

document.onmousewheel=function(e){pageroll(e);};
document.addEventListener('DOMMouseScroll',function(e){pageroll(e);},false);
//setInterval(function(){ iswheel=false;},400);
function pageroll(e){
    if(iswheel){return false;}
    if(canscroll){
        iswheel=true;
        if(e.wheelDelta){//IE/Opera/Chrome
            var a=$("body").scrollTop()- $("#section_three").offset().top;

            if(a>=0 && a<=page_height-15){
                var b =$("#prj_panel");
                if (b.position().left<page_width*-2){
                    b.animate({left :page_width*-2},1);
                    window.scrollTo(0,$("body").scrollTop()-e.wheelDelta/Math.abs(e.wheelDelta)*page_height);
                    iswheel=false;
                } else if($("#prj_panel").position().left>0){
                    b.animate({left : 0},1);
                    window.scrollTo(0,$("body").scrollTop()-e.wheelDelta/Math.abs(e.wheelDelta)*page_height);
                    iswheel=false;
                }else {
                    b.animate({left : b.position().left+page_width*e.wheelDelta/Math.abs(e.wheelDelta)},1);
                    iswheel=false;
                }

            }
            else {
                window.scrollTo(0,$("body").scrollTop()-e.wheelDelta/Math.abs(e.wheelDelta)*page_height);
                iswheel=false;
            }

        }else if(e.detail){//Firefox
            var a=document.documentElement.scrollTop- $("#section_three").offset().top;
          if(a>=0 && a<=page_height-15){
              var b =$("#prj_panel");
              if (b.position().left<page_width*-2){
                 b.animate({left :page_width*-2},1);
                  window.scrollTo(0,document.documentElement.scrollTop+e.detail/Math.abs(e.detail)*page_height);
                  iswheel=false;
              } else if($("#prj_panel").position().left>0){
                  b.animate({left : 0},1);
                  window.scrollTo(0,document.documentElement.scrollTop+e.detail/Math.abs(e.detail)*page_height);
                  iswheel=false;
              }else {
                 b.animate({left : b.position().left-page_width*e.detail/Math.abs(e.detail)},1);
                  iswheel=false;
              }

            }
            else {
              window.scrollTo(0,document.documentElement.scrollTop+e.detail/Math.abs(e.detail)*page_height);
              iswheel=false;
          }


        }
    }

}
function scrollto(e){
if (navigator.userAgent.indexOf("Firefox") != -1){
    if(e==1){$(document.documentElement).animate({scrollTop: $("#section_one").offset().top+'px'}, 1000);}
    else if(e==2){$(document.documentElement).animate({scrollTop:($("#panel_one").offset().top+32)+'px' }, 1000);}
    else if(e==3){$(document.documentElement).animate({scrollTop: ($("#panel_two").offset().top+32)+'px'}, 1000);}
    else{$(document.documentElement).animate({scrollTop:($("#panel_three").offset().top+32)+'px'}, 1000);}
}
else if(navigator.userAgent.indexOf("Chrome") != -1){
    if(e==1){$("body").animate({scrollTop: $("#section_one").offset().top+'px'}, 1000);}
    else if(e==2){$("body").animate({scrollTop:($("#panel_one").offset().top+32)+'px' }, 1000);}
    else if(e==3){$("body").animate({scrollTop: ($("#panel_two").offset().top+32)+'px'}, 1000);}
    else{$("body").animate({scrollTop:($("#panel_three").offset().top+32)+'px'}, 1000);}
}
    else
{
    if(e==1){$(document.documentElement).animate({scrollTop: $("#section_one").offset().top+'px'}, 1000);}
    else if(e==2){$(document.documentElement).animate({scrollTop:($("#panel_one").offset().top+32)+'px' }, 1000);}
    else if(e==3){$(document.documentElement).animate({scrollTop: ($("#panel_two").offset().top+32)+'px'}, 1000);}
    else{$(document.documentElement).animate({scrollTop:($("#panel_three").offset().top+32)+'px'}, 1000);}
}

return false;
}


$(".button").click(function(){
    if( $("#title").val()==""|| $("#info").val()=="" || $("#mail").val()==""){
        $("#pop_panel span").text("请填写必要信息！");
        $("#pop_panel").css("display","block");

    }
    else{
        $.ajax(
            {
                type: "POST",
                url: "intodb.php",
                data: {title:$("#title").val(), info:$("#info").val(), mail:$("#mail").val(),type:"insert"},
                dataType: "json",
                error:function(){
                    $("#pop_panel span").text("网络问题，请稍后再试");
                    $("#pop_panel").css("display","block");
                   
                },
                success: function(data){
                    if(data[0]="success"){
                        $("#pop_panel span").text("留言成功，请注意收回复邮件");
                        $("#pop_panel").css("display","block");
                        $("#title").val("");
                        $("#info").val("");
                        $("#mail").val("");
                    }
                    else{
                        $("#pop_panel span").text("操作失败，请稍后再试");
                        $("#pop_panel").css("display","block");
                    }
                }
            }
        );
    }
		
        setTimeout(function(){
		$("#pop_panel").css("display","none")
		},1000);

});
function selectall(){
        $.ajax(
            {
                type: "POST",
                url: "intodb.php",
                data: {title: $("#title").val(), info: $("#info").val(), mail: $("#mail").val(), type: "select"},
                dataType: "json",
                error: function () {
                    $("#pop_panel span").text("网络问题，请稍后再试");
                    $("#pop_panel").css("display","block");
                },
                success:function(data){
                   if (data[0]=="emputy"){
                       $("#pop_panel span").text("还没有人留言");
                       $("#pop_panel").css("display","block");
                   }
                    else if(data[0]!="error" || data[0]!="success"){
                       canscroll=false;
                       $("#list_panel").css("display","block");
                       $("#close_list").css("display","block");
                       $("#list_zone").html("");
                           $.each(data,function(index){
                                  var str= '<div>'+
                                    '<div><span>主题:</span><span class="tit">'+data[index].title+'</span></div>'+
                                    '<div><span >内容:</span><span class="conte">'+data[index].info+'</span></div>'+
                                    '<div><span class="e_mail">'+data[index].mail+'</span><span class="time">'+data[index].time+'</span></div>'+
                                    '</div>';
                               $("#list_zone").append(str);
                           });
                       }
                   }

            });

    setTimeout(function(){
        $("#pop_panel").css("display","none")
    },1000);

}
$("#close_list").click(function(){
    canscroll=true;
    $("#close_list").css("display","none");
    $("#list_panel").css("display","none");
});

$(document).keydown(function(e) {
    var keycode = e.which||e.keyCode||window.event.which||window.event.keyCode;
    if(keycode== 37 /* Arrow Left*/){
       return false;
    }
    else if (keycode== 39 /* Arrow Right */) {
        return false;
    }
    else if (keycode== 38 ){
        return false;
    }
    else if(keycode== 40 ){
        return false;
    }
});