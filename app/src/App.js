import Swal from 'sweetalert2';

function App() {
  const showAlert = () => {
    Swal.fire({
      title: 'My Dialog',
      text: 'Message on Dialog',
      icon: 'success',
    })
  }

  const confirmDialog = () => {
    Swal.fire({
      title: 'Are you sure ?',
      text: 'You went Delete',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((res) => {
      if (res.isConfirmed) {
        console.log('you confirm');
      }
    })
  }

  return (
    <div>
      <button onClick={showAlert}>Click Me</button>
      <button onClick={confirmDialog}>Confirm Dialog</button>
    </div>
  );
}

export default App;
