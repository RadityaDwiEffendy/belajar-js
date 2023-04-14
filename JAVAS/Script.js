function check(){
    var nilai = document.getElementById('nilai').value
    var hasil = document.getElementById('hasil')

    hasil.innerHTML = "bagus"

    if(nilai >= 90 && nilai <= 100){
        hasil.innerHTML = nilai + " Predikat A"
        
    }else if(nilai >= 80 && nilai < 90){
        hasil.innerHTML = nilai + " Predikat B"
    }else if(nilai >= 70 && nilai <80){
        hasil.innerHTML = nilai + " Predikat C"
    }else if(nilai >= 50 && nilai < 70){
        nilai.innerHTML = nilai + " Predikat E"
    }else if(nilai >= 20 && nilai < 50 ){
        hasil.innerHTML = nilai + " Predikat F"
    }
        
}