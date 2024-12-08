import Swal from 'sweetalert2';



export const showAlert = () => {
   Swal.fire({
      title: 'Success!',
      text: 'This is a success alert.',
      icon: 'success',
      confirmButtonText: 'OK',
   });
};
