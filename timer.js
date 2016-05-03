        var timer = (function(){
          var obj = {};
          var begin = null;
          var finish = null;

          obj.start = function(){
            begin = null;
            finish = null;
            begin = new Date().getTime();
          }

          obj.end = function(){
            finish = (begin)?new Date().getTime() - begin:0;
            console.log(finish/1000 + 's');
          }
          return obj;
        })();
