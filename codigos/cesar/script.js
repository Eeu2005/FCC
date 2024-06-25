function rot13 ( str )
{
    let alfabetica = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let codigo = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    let novaString = "";

    for ( let x = 0; x < str.length; x++ )
    {
        if ( /\w/ig.test( str[ x ] ) )
        {
            novaString = novaString.concat( alfabetica[ codigo.indexOf( str[ x ] ) ] );
        } else novaString = novaString.concat( str[ x ] );
    }
    console.log(str)
    return novaString;
}

console.log( rot13( "SERR CVMMN!") );