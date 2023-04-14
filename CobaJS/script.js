
function klik(){
    var nama = document.getElementById('nama').value
    var email = document.getElementById('email').value
    var hp = document.getElementById('nohp').value
    var hasil = document.getElementById('hasil').innerHTML

    function pindah(){
        location.href = "https://www.ovagames.com/"
    }

    if(nama == 'radit' && email == 'bagus@gmail.com' && hp == '0812'  ){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
    }else if(nama != 'radit' && email){
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'Signed in successfully'
          })
    }

    setTimeout(pindah, 2000)

}
