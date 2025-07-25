// auth.js - Include di setiap halaman utama (index, sertifikat)
if (localStorage.getItem('loggedIn') !== 'true') {
  window.location.href = 'login.html';
}
// Untuk logout
function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}
