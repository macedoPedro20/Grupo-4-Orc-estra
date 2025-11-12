document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("vCyD18OSFHqY-Flbn");

    const form = document.getElementById('form');
    if (form) {
        
        const dataField = document.createElement('input');
        dataField.type = 'hidden';
        dataField.name = 'date';
        dataField.value = new Date().toLocaleString('pt-BR');
        form.appendChild(dataField);

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            emailjs.sendForm('service_zjhm75i', 'template_vo9yt0p', this)
                .then(function() {
                    alert('Email enviado com sucesso!');
                    form.reset();
                }, function(error) {
                    alert('Erro ao enviar email: ' + JSON.stringify(error));
                });
        });
    }
});