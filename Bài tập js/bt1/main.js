//in tất cả số nguyên dương chẵn lẻ tư 1-100



function inSoChanLe() {
    var soChan = "";
    var soLe = "";
    for (var i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            //chẵn
            soChan += i + " ";
        } else {
            //lẻ
            soLe += i + " ";
        }
    }
    console.log("So chan: " + soChan);
    console.log("So le: " + soLe);
}
inSoChanLe();



function inSoChanLe() {
    var soChan = "";
    var soLe = "";
    var i = 0;
    while (i<100){
        
            if (i % 2 === 0) {
                //chẵn
                soChan += i + " ";
                i++;
               
            } else {
                //lẻ
                soLe += i + " ";
                i++;
               
            }
            
    }
    console.log("So chan: " + soChan);
    console.log("So le: " + soLe);
}
inSoChanLe();