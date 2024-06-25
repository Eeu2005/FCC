function palindromeCheck ( str )
{
    const regex = /[_\W*-,\""+.]/gi;
    str = str.replace( regex, "" );
    str = str.toLowerCase();
    let strContrario = Array.prototype.toReversed.call( str );
    let a = "";
    strContrario.forEach( ( x ) =>
    {
        a = a.concat( x );
    } );
    document.querySelector("#texto").innerText = str == a
    return str == a;
}
console.log( palindrome( "My age is 0, 0 si ega ym." ) );