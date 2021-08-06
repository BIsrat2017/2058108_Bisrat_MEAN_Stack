
          var array = [];
          function myfun(){
            var title = document.getElementById("title").value;
            var article = document.getElementById("article").value;
            var image = document.getElementById("addimage").value;

            console.log(title+article+image);
            
           var obj = {imgtitle:title, imgarticle: article, img:image}

            
            array.push(obj);

            console.log(array.length);

            if(array.length > 3){
                array.shift();
            }

            console.log(array.length);
            
            var allTable = "<b> Title</b>: "+ String(array[0].imgtitle) + "<br> <b><i>Article </b></i>: " +String(array[0].imgarticle) ;
            document.getElementById("first").innerHTML = allTable;
            // var imgsource = String(array[1].img)
            var imgTag = "<img class='card-img-top' src='"+ array[0].img +"' >";
            document.getElementById("firstimg").innerHTML = imgTag;

            var allTable = "<b> Title</b>:"+ String(array[1].imgtitle) + "<br> <b><i>Article </b></i>:" +String(array[1].imgarticle) ;
            document.getElementById("second").innerHTML = allTable;
            // var imgsource = String(array[1].img)
            var imgTag = "<img class='card-img-top' src='"+ array[1].img +"' >";
            document.getElementById("secondimg").innerHTML = imgTag;

            var allTable = " <b> Title</b>:"+ String(array[2].imgtitle) + "<br> <b><i>Article </b></i>:" +String(array[2].imgarticle) ;
            document.getElementById("third").innerHTML = allTable;
            // var imgsource = String(array[1].img)
            var imgTag = "<img class='card-img-top' src='"+ array[2].img +"' >";
            document.getElementById("thirdimg").innerHTML = imgTag;

          }