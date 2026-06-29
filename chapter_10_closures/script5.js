function z(){
    var b = 900;
    function x(){
        var a = 500;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();