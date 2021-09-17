function add_feed(){
	var div1 = document.createElement('div');
	
	// newDiv
	div1.innerHTML = document.getElementById('newdiv').innerHTML;
	
	// NewInpur
	document.getElementById('newinput').appendChild(div1).innerHTML;
   }


function updateTotal() {
    var total = 0;
    var list = document.getElementsByClassName("input");
    var values = [];
    for(var i = 0; i < list.length; ++i) {
        values.push(parseFloat(list[i].value));
        var amound = document.getElementById("count").value=i; //total box
    }
    total = values.reduce(function(previousValue, currentValue, index, array){
        return previousValue + currentValue;
    });
    document.getElementById("total").value = total; 
    mark = document.getElementById("GPA").innerHTML = (total/amound).toFixed(2);
      
    //var html="<h1>Your GPA is: "+mark+"</h1>"; 
    
    //HTML Message   
    function _0x4fc5(_0x553250,_0x585092){var _0x1b9b64=_0x1b9b();return _0x4fc5=function(_0x4fc5ff,_0x260817){_0x4fc5ff=_0x4fc5ff-0x116;var _0x5e5112=_0x1b9b64[_0x4fc5ff];return _0x5e5112;},_0x4fc5(_0x553250,_0x585092);}var _0x5cd2e9=_0x4fc5;function _0x1b9b(){var _0x201468=['</h1>\x20Say\x20Thanks\x20To\x20<a\x20href=\x27https://www.ansnew.com/2021/09/honours-degree-gpa-calculation.html\x27>\x20AnsNew.Com\x20</a><br><br>','866192PmBMUf','5218344uwZwqY','2433858IyrEaw','3657648FiIzRm','1981236mWbHsn','286129fALVMK','2102950BMfiSs','7WBcgJB','3wJbHaC','<h1>Your\x20GPA\x20is:\x20'];_0x1b9b=function(){return _0x201468;};return _0x1b9b();}(function(_0x817967,_0x46fad6){var _0x593f6c=_0x4fc5,_0x558c89=_0x817967();while(!![]){try{var _0x2c13e0=-parseInt(_0x593f6c(0x117))/0x1+parseInt(_0x593f6c(0x11d))/0x2+parseInt(_0x593f6c(0x11a))/0x3*(-parseInt(_0x593f6c(0x116))/0x4)+parseInt(_0x593f6c(0x118))/0x5+parseInt(_0x593f6c(0x11f))/0x6*(parseInt(_0x593f6c(0x119))/0x7)+parseInt(_0x593f6c(0x120))/0x8+-parseInt(_0x593f6c(0x11e))/0x9;if(_0x2c13e0===_0x46fad6)break;else _0x558c89['push'](_0x558c89['shift']());}catch(_0x237ff8){_0x558c89['push'](_0x558c89['shift']());}}}(_0x1b9b,0x56bd1));var html=_0x5cd2e9(0x11b)+mark+_0x5cd2e9(0x11c);
    
    document.getElementById("GPA").innerHTML=html; 
}
