$(function(){
    $('#dowebok').fullpage({
        anchors:['page1','page2','page3','page4'],
        loopBottom:true,
        afterLoad:function(Link,index){
            switch (index){
                case 1:
                    $('.zg-main1 b').animate({'marginTop':'0'},800);
                    $('.download').animate({'marginLeft':'0.4rem'},800);
                    break;
                case 2:
                    $('.zg-main2 b').animate({'marginTop':'0'},800);
                    $('.download').animate({'marginLeft':'0.4rem'},800);
                    break;
                case 3:
                    $('.zg-main3 b').animate({'marginTop':'0'},800);
                    $('.download').animate({'marginLeft':'0.4rem'},800);
                    break;
                case 4:
                    $('.zg-main4 b').animate({'marginTop':'0'},800);
                    $('.download').animate({'marginLeft':'0.4rem'},800);
                    break;
            }
        }
        // onLeave:function (link,index) {
        //     switch (index){
        //         case 1:
        //             $('.zg-main1 b').animate({'marginTop':'-1rem'},200);
        //             $('.download').animate({'marginLeft':'-0.4rem'},200);
        //             break;
        //         case 2:
        //             $('.zg-main2 b').animate({'marginTop':'-1rem'},200);
        //             $('.download').animate({'marginLeft':'1rem'},200);
        //             break;
        //         case 3:
        //             $('.zg-main3 b').animate({'marginTop':'-1rem'},200);
        //             $('.download').animate({'marginLeft':'-0.4rem'},200);
        //             break;
        //         case 4:
        //             $('.zg-main4 b').animate({'marginTop':'-1rem'},200);
        //             $('.download').animate({'marginLeft':'1rem'},200);
        //             break;
        //     }
        // }
    })
})