function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.7749, lng: -122.4194 },
    zoom: 12,
  });
}
<script>
  function initMap() {
    // ...
  }
  google.maps.event.addDomListener(window, 'load', initMap);
</script>
google.maps.event.addDomListener(window, 'load', initMap);
const inputField = document.getElementById('input-field');
const submitBtn = document.getElementById('submit-btn');

const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Please fill out all required fields.');
  }
})
function sendToWhatsapp(){
      let number = "+234 8032290603";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    var url = "https://wa.me/ " + number + "?text="
    + " Name : " +name+  "%0a"
     + " Email : " +email+  "%0a"
      + " Message : " +message+  "%0a%0a"

      window.open(url, '_blank').focus();
}