//this is from stack overflow
//I should learn the stack overflow everyday

angular
    .module('myApp',[])
    .controller('myController', myController);

function myController() {
    var vm = this;
    vm.test1 = [];
    vm.test2 = [];
    vm.intersect = intersect;
    vm.result = [];

    function intersect(array1, array2) {
        var a = array1.slice(0);
        var b = array2.slice(0);

        var aLast = a.length - 1;
        var bLast = b.length - 1;

        while(aLast >= 0 && bLast >= 0) {
            if(a[aLast] > b[bLast]){
                a.splice(aLast,1);
                aLast--;
            }else if(a[aLast] < b[bLast]){
                b.splice(aLast,1);
                bLast--;
            }else{
                vm.result.push(a.pop());
                b.pop();
                aLast--;
                bLast--;
            }
        }
    }


}