
$(function(){
    var tu=$('.lunbo-box .bohezi .tu');
    var kaiguan=true;
    var zuo=$('.zuo');
    var you=$('.you');
    var dian=$('.dian li');
    move=function(n,fangxiang){

        var now=$('.bohezi .now');

        var nn=(fangxiang==='left'?'right':'left');
        now.addClass(fangxiang)
            .delay(600)
            .queue(function(){
                $(this)
                    .removeClass('now')
                    .removeClass(fangxiang)
                    .dequeue();
                     kaiguan=true;
            })
        $(n).addClass(nn);
        $(n).get(0).offsetWidth;
        $(n).removeClass(nn);
        $(n).addClass('now')
        //点点

        if(now.next().length){
            var biao=now.next().index();
        }else {
            var biao=$('.bohezi:first-child').index();
        }
        dian.removeClass('bian');
        dian.eq(biao).addClass('bian');
    }
    movetwo=function(n,fangxiang){

        var now=$('.bohezi .now');

        var nn=(fangxiang==='top'?'bottom':'top');
        now.addClass(fangxiang)
            .delay(600)
            .queue(function(){
                $(this)
                    .removeClass('now')
                    .removeClass(fangxiang)
                    .dequeue();
                kaiguan=true;
            })
        $(n).addClass(nn);
        $(n).get(0).offsetWidth;
        $(n).removeClass(nn);
        $(n).addClass('now')
        //点点

        if(now.next().length){
            var biao=now.next().index();
        }else {
            var biao=$('.bohezi:first-child').index();
        }
        dian.removeClass('bian');
        dian.eq(biao).addClass('bian');
    }
    you.on('click',function(){

        if(kaiguan){
            console.log(kaiguan)
            var kk=$('.now');
            xiayige=kk.next();
            if(xiayige.length){
                xiayige=kk.next();
            }else {
                xiayige=$('.tu').eq(0);
            }
            move(xiayige,'left');
            kaiguan=false;

             }else{
            return;
        }
        console.log(kaiguan)


    })
    zuo.on('click',function(){
        if(kaiguan){
            var kk=$('.now');
            xiayige=kk.prev();
            if(xiayige.length){
                xiayige=kk.prev();
            }else {
                xiayige=$('.tu').eq(3);
            }
            move(xiayige,'right');
            var biao=xiayige.index();
            dian.removeClass('bian');
            dian.eq(biao).addClass('bian');
            kaiguan=false;
        }else {
            return;
        }

    })
 $(document).on('mousewheel',function(e){
     var ee=e.originalEvent.deltaY;
     if(ee>0){

         if(kaiguan){
             console.log(kaiguan)
             var kk=$('.now');
             xiayige=kk.next();
             if(xiayige.length){
                 xiayige=kk.next();
             }else {
                 xiayige=$('.tu').eq(0);
             }
             movetwo(xiayige,'top');
             kaiguan=false;

         }else{
             return;
         }
     }
     if(ee<0){

         if(kaiguan){
             console.log(kaiguan)
             var kk=$('.now');
             xiayige=kk.next();
             if(xiayige.length){
                 xiayige=kk.next();
             }else {
                 xiayige=$('.tu').eq(0);
             }
             movetwo(xiayige,'bottom');
             kaiguan=false;

         }else{
             return;
         }
     }
 })

});