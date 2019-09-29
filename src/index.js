module.exports = function check(str, bracketsConfig) {
    let config = bracketsConfig;
    let find  = config.toString().replace( /\,/g ,'');
    let nstr = str;
    let reg;
    
    for(let z = 0; z < find.length; z ++){
        for (let j = 0; j < find.length; j+=2){
            if(!isNaN (find)){
                reg = new RegExp(find[j] + + find[j+1],'g');
            }else{
                reg = new RegExp('\\' +  find[j] +  '\\'  + find[j+1], 'g');
            }
            for(let i = 0; i < nstr.length; i++){
                nstr = nstr.replace( reg, '');
            }
        }   
    }
              
    return nstr ? false:true;
}
