document.addEventListener('DOMContentLoaded', () => {
    const correctDate = '2003-09-12'; // Fecha de cumpleaños correcta en formato ISO
    const continueBtn = document.getElementById('continue-btn');
    const submitBtn = document.getElementById('submit-btn');
    const passwordSection = document.getElementById('password-section');
    const mainContent = document.getElementById('main-content');
    const errorImage = document.getElementById('error-image');
    const errorMessage = document.getElementById('error-message');
    const birthdayInput = document.getElementById('birthday-input');

    continueBtn.addEventListener('click', () => {
        document.getElementById('welcome-section').style.display = 'none';
        passwordSection.style.display = 'block';
    });

    submitBtn.addEventListener('click', () => {
        const inputDate = birthdayInput.value;
        if (inputDate === correctDate) {
            passwordSection.style.display = 'none';
            mainContent.style.display = 'block';
            errorImage.style.display = 'none';
            errorMessage.style.display = 'none';
        } else {
            passwordSection.style.display = 'none';
            errorImage.style.display = 'flex'; // Muestra el contenedor de error
            errorMessage.style.display = 'block'; // Muestra el mensaje de error
        }
    });

    const buttons = {
        'like-btn': 'like-content',
        'love-btn': 'love-content',
        'beautiful-btn': 'beautiful-content'
    };

    Object.keys(buttons).forEach(id => {
        document.getElementById(id).addEventListener('click', () => {
            const contentId = buttons[id];
            document.querySelectorAll('.content').forEach(content => {
                content.style.display = 'none';
            });
            document.getElementById(contentId).style.display = 'block';
        });
    });
});
