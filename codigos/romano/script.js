function convertToRoman ( num )
{
    let convertStr = "";
    let casa1 = "";
    let casa2 = "";
    let casa3 = "";
    let casa4 = "";
    convertStr += num;
    let array = [ ...convertStr ];
    if ( convertStr == "undefined" )
    {
        return "não ha numero";
    }
    else if ( array.length > 0 )
    {
        switch ( array[ array.length - 1 ] )
        {
            case "1": casa1 = "I";
                break;
            case "2": casa1 = "II";
                break;
            case "3": casa1 = "III";
                break;
            case '4': casa1 = "IV";
                break;
            case "5": casa1 = "V";
                break;
            case "6": casa1 = "VI";
                break;
            case "7": casa1 = "VII";
                break;
            case "8": casa1 = "VIII";
                break;
            case "9": casa1 = "IX";
                break;
        }
        switch ( array[ array.length - 2 ] )
        {
            case "1":
                casa2 = "X";
                break;
            case "2":
                casa2 = "XX";
                break;
            case "3":
                casa2 = "XXX";
                break;
            case "4":
                casa2 = "XL";
                break;
            case "5":
                casa2 = "L";
                break;
            case "6":
                casa2 = "LX";
                break;
            case "7":
                casa2 = "LXX";
                break;
            case "8":
                casa2 = "LXXX";
                break;
            case "9":
                casa2 = "XC";
                break;
        }

    }
    switch ( array[ array.length - 3 ] )
    {
        case "0":
            casa3 = "";
            break;
        case "1":
            casa3 = "C";
            break;
        case "2":
            casa3 = "CC";
            break;
        case "3":
            casa3 = "CCC";
            break;
        case "4":
            casa3 = "CD";
            break;
        case "5":
            casa3 = "D";
            break;
        case "6":
            casa3 = "DC";
            break;
        case "7":
            casa3 = "DCC";
            break;
        case "8":
            casa3 = "DCCC";
            break;
        case "9":
            casa3 = "CM";
            break;
    }
    switch ( array[ array.length - 4 ] )
    {
        case "0": casa4 = "";
            break;
        case "1": casa4 = "M";
            break;
        case "2": casa4 = "MM";
            break;
        case "3": casa4 = "MMM";
    }
   
    return casa4 + casa3 + casa2 + casa1;
}
console.log("1527")
