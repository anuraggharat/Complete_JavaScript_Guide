//reverse an array using recursion

function reverse(str){

    if(str.length === 0) return ""
    return str[str.length-1] + reverse(str.slice(0,str.length-1))

}


console.log(reverse('anurag'))