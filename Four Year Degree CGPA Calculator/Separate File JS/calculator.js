       function calculate()
       {
           var x=document.getElementById("result1").innerText;
           var y=document.getElementById("result2").innerText;
           var z=document.getElementById("result3").innerText;
           var a=document.getElementById("result4").innerText;
           var result1=parseFloat(x) + parseFloat(y) + parseFloat(z) 
           + parseFloat(a); // conversion to numbers; this is necessary for +, other    operators will automatically convert 
           var result5=x%y;
           

          //Check if empty
          if(x === '' || y === '' || z === '' || a === ''){
           alert('Please Fill Up Each Year GPA & Click Confirm Button');
          } 
         
          
           //var html="<p>Your Final CGPA is: "+result1/4+"</p> <br> Say Thanks to <a href='https://www.ansnew.com/2021/09/four-year-degree-cgpa-calculation.html'>AnsNew.Com</a>";
           
           //HTML Message
           var _0x44d2b6=_0x7ba0;(function(_0x4de74d,_0x58a2dc){var _0x3bf254=_0x7ba0,_0x182887=_0x4de74d();while(!![]){try{var _0x5958c7=-parseInt(_0x3bf254(0x18d))/0x1*(-parseInt(_0x3bf254(0x195))/0x2)+-parseInt(_0x3bf254(0x191))/0x3*(parseInt(_0x3bf254(0x18b))/0x4)+-parseInt(_0x3bf254(0x189))/0x5*(parseInt(_0x3bf254(0x193))/0x6)+-parseInt(_0x3bf254(0x199))/0x7+-parseInt(_0x3bf254(0x18c))/0x8*(-parseInt(_0x3bf254(0x192))/0x9)+-parseInt(_0x3bf254(0x194))/0xa*(parseInt(_0x3bf254(0x18e))/0xb)+-parseInt(_0x3bf254(0x18a))/0xc*(-parseInt(_0x3bf254(0x196))/0xd);if(_0x5958c7===_0x58a2dc)break;else _0x182887['push'](_0x182887['shift']());}catch(_0x2a6c55){_0x182887['push'](_0x182887['shift']());}}}(_0x55aa,0x52a18));var html='<p>Your\x20Final\x20CGPA\x20is:\x20'+result1/0x4+_0x44d2b6(0x190);function _0x55aa(){var _0x384cb4=['innerHTML','total','681275MkplGv','128665ySYDzJ','5628nInwWt','8hvCOqj','24esgKuy','28111DlHlTt','15697ZPzfvI','getElementById','</p>\x20<br>\x20Say\x20Thanks\x20to\x20<a\x20href=\x27https://www.ansnew.com/2021/09/four-year-degree-cgpa-calculation.html\x27>AnsNew.Com</a>','652341NUwAPN','666504QJDjMr','138JpgnwA','350HowhlV','26bMuanq','25636hrdsMi'];_0x55aa=function(){return _0x384cb4;};return _0x55aa();}function _0x7ba0(_0x97425c,_0x2332e4){var _0x55aa9f=_0x55aa();return _0x7ba0=function(_0x7ba062,_0x5787f6){_0x7ba062=_0x7ba062-0x189;var _0xba30da=_0x55aa9f[_0x7ba062];return _0xba30da;},_0x7ba0(_0x97425c,_0x2332e4);}document[_0x44d2b6(0x18f)](_0x44d2b6(0x198))[_0x44d2b6(0x197)]=html;
           
            
           document.getElementById("total").innerHTML=html; 
       }
       
       
   function calculateGpa (form) {
       var gpa = form.gpa1.value;
   
           if (gpa == "A") {
                gpa = 4;
                }
           if (gpa == "B") {
                gpa = 3;
                }
           if (gpa == "C") {
                gpa = 2;
                }
           if (gpa == "D") {
                gpa = 1;
               }
           if (gpa == "F") {
                gpa = 0;
               }
           if (gpa == "a") {
                gpa = 4;
                }
           if (gpa == "b") {
                gpa = 3;
                }
           if (gpa == "c") {
                gpa = 2;
                }
           if (gpa == "d") {
                gpa = 1;
               }
           if (gpa == "f") {
                gpa = 0;
               }
       document.getElementById("result1").innerHTML = gpa + ' GPA';
   }
   
  
function calculateGpa2 (form) {
       var gpa = form.gpa2.value;
   
           if (gpa == "A") {
                gpa = 4;
                }
           if (gpa == "B") {
                gpa = 3;
                }
           if (gpa == "C") {
                gpa = 2;
                }
           if (gpa == "D") {
                gpa = 1;
               }
           if (gpa == "F") {
                gpa = 0;
               }
           if (gpa == "a") {
                gpa = 4;
                }
           if (gpa == "b") {
                gpa = 3;
                }
           if (gpa == "c") {
                gpa = 2;
                }
           if (gpa == "d") {
                gpa = 1;
               }
           if (gpa == "f") {
                gpa = 0;
               }
       document.getElementById("result2").innerHTML = gpa + ' GPA';
   }
   
   
 function calculateGpa3 (form) {
       var gpa = form.gpa3.value;
   
           if (gpa == "A") {
                gpa = 4;
                }
           if (gpa == "B") {
                gpa = 3;
                }
           if (gpa == "C") {
                gpa = 2;
                }
           if (gpa == "D") {
                gpa = 1;
               }
           if (gpa == "F") {
                gpa = 0;
               }
           if (gpa == "a") {
                gpa = 4;
                }
           if (gpa == "b") {
                gpa = 3;
                }
           if (gpa == "c") {
                gpa = 2;
                }
           if (gpa == "d") {
                gpa = 1;
               }
           if (gpa == "f") {
                gpa = 0;
               }
       document.getElementById("result3").innerHTML = gpa + ' GPA';
   }
   
   
 
 
 function calculateGpa4(form) {
       var gpa = form.gpa4.value;
   
           if (gpa == "A") {
                gpa = 4;
                }
           if (gpa == "B") {
                gpa = 3;
                }
           if (gpa == "C") {
                gpa = 2;
                }
           if (gpa == "D") {
                gpa = 1;
               }
           if (gpa == "F") {
                gpa = 0;
               }
           if (gpa == "a") {
                gpa = 4;
                }
           if (gpa == "b") {
                gpa = 3;
                }
           if (gpa == "c") {
                gpa = 2;
                }
           if (gpa == "d") {
                gpa = 1;
               }
           if (gpa == "f") {
                gpa = 0;
               }
       document.getElementById("result4").innerHTML = gpa + ' GPA';
   
   
   }
