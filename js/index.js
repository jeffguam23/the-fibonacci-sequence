const n = prompt('enter n');
let a, b, result;
a=0;
b=1;
result=b;

for(let i=1; i<=n; i++)
    {
        document.write (result + "<br>");
        result = a+b
        a=b;
        b=result;
    }
    