let imageIcon = document.getElementById('imageIcon');
let fileInput = document.getElementById('fileInput');
imageIcon.addEventListener('click', function() {
    fileInput.click();
});
fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        alert('Selected file: ' + fileInput.files[0].name);
    }
});



const togglePasswordIcons = document.querySelectorAll('.toggle-password');
        
togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        const input = document.querySelector(`#${this.getAttribute('data-toggle')}`);
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
        this.classList.toggle('fa-eye');
    });
});



const NvPrForm = document.getElementById('NvPrForm');
const NvSendButton = document.getElementById("NvSendButton");

NvSendButton.addEventListener("click",function(){
    NvPrForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = new FormData(this);
            fetch('NvPr.php', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data[0] == "true") {
                    console.log(data[0]);                    
                }else {
                    console.log(data[0]);
                    
                    }    
        })
        .catch(error => {
            console.log('Error:', error);
        });
    });
    })