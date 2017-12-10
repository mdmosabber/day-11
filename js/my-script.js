

var btnElement = document.getElementById('btn');

btnElement.onclick = function () {

    var firstNameValue = document.getElementById('firstName').value;
    var lastNameValue = document.getElementById('lastName').value;
    var fullName = firstNameValue +" "+ lastNameValue;

    document.getElementById('fullName').value = fullName;
};


var numberPlus = document.getElementById('addition');

numberPlus.onclick = function () {

    var firstNumberValue = Number(document.getElementById('firstNumber').value);
    var firstNumberValue = Number(document.getElementById('secondNumber').value);

    var result = firstNumberValue+firstNumberValue;

    document.getElementById('result').value = result;
}




//
// </script>
//
//
// //
// // </script>
// //
// // <!--<script>-->
// //
// // <!--//        function amiFun() {-->
// // <!--//          var firstName = "Rubel";-->
// // <!--//          var lastName = 'Khan';-->
// // <!--//          var fullName = firstName + ' ' + lastName;-->
// // <!--//-->
// // <!--//          document.write(fullName);-->
// // <!--////        }-->
// // <!--//        function amiFun( firstName , lastName) {-->
// // <!--//-->
// // <!--//            var fullName = firstName + ' ' + lastName;-->
// // <!--//            document.write(fullName);-->
// // <!--//        }//-->
// // <!--//-->
// // <!--//        document.write('<br />===================<br/>')-->
// // <!--//        amiFun('Imran','Hossain');-->
// // <!--//        document.write('<br />===================<br/>')-->
// // <!--//        amiFun('Maruf','Hossain');-->
// // <!--//        document.write('<br />===================<br/>')-->
// // <!--//        amiFun('Mehedi','Hasan');-->
// //
// //
// // <!--//        var paragraphElement = document.getElementsByTagName('p');-->
// // <!--//-->
// // <!--////        document.write(paragraphElement[0].innerHTML);-->
// // <!--//-->
// // <!--//        for(var key=0; key<paragraphElement.length; key++){-->
// // <!--//            document.write(paragraphElement[key].innerHTML+'<br/>');-->
// // <!--//        };-->
// // <!--//        var name = ['Hello','Bangladesh','Rahim'];-->
// // <!--//-->
// // <!--//        document.write(name[0]);-->
// //
// // <!--</script>-->
// //
// //
// // <!--<script>-->
// // <!--//        var data = new Array();-->
// // <!--//        var data1 = Array();-->
// //
// // <!--//        var data = ['Mosiur','Dhaka','Bangladesh'];///-->
// //
// // <!--//        data[0]=10; //Numerical-->
// // <!--//        data[1]=20;-->
// // <!--//        data[2]=30;-->
// // <!--//-->
// // <!--//        data['name']   ='Mosiur';-->
// // <!--//        data['city']   ='Mirpur-1';-->
// // <!--//        data['country']='Bangladesh'; //associative-->
// // <!--//-->
// // <!--////        document.write(data['name']);-->
// // <!--//-->
// // <!--//        for(var key in data){-->
// // <!--//            document.write(data[key]+'<br/>');-->
// // <!--}-->
// //
// // <!--//            var data = ['Mosiur','Dhaka','Bangladesh'];-->
// // <!--//-->
// // <!--//            document.write(data.length-1);-->
// // <!--</script>-->
//
