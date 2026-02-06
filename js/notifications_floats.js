
                function showToast(type, message = '') {
                    const formSuccess = document.getElementById('form-success');
                    const formError = document.getElementById('form-error');
                    const errorMessageText = document.getElementById('error-message-text');

                    const element = type === 'success' ? formSuccess : formError;
                    if (type === 'error' && message) {
                        errorMessageText.textContent = message;
                    }
                    
                    element.classList.remove('opacity-0', 'pointer-events-none');
                    element.classList.add('opacity-100');

                    setTimeout(() => {
                        element.classList.remove('opacity-100');
                        element.classList.add('opacity-0', 'pointer-events-none');
                    }, 4000);
                }
           