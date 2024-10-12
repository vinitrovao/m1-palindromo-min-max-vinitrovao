function isPalindrome(str){
    let fraseMinuscula = str.toUpperCase();
    let reverser = "";
    let fraseLimpa = "";

    for (let i = 0; i < fraseMinuscula.length; i++){
        if(fraseMinuscula[i] != " "){
            fraseLimpa += fraseMinuscula[i];
        }

    }
    
    for (let i = 0; i < fraseLimpa.length; i++){
        reverser += fraseLimpa[fraseLimpa.length-1-i]
    }

    if (reverser === fraseLimpa){
        return true
    }
    else{
        return false
    }

}

function arrayMaxMin(arr){
    let max = 0;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return [min, max];
}
