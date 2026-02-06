 document.addEventListener('DOMContentLoaded', function () {
                    const whatsappIcon = document.getElementById('whatsappIcon');
                    const notificationBadge = document.getElementById('notificationBadge');
                    const whatsappPush = document.getElementById('whatsappPush');
                    const chatContainer = document.getElementById('chatContainer');
                    const closeChatBtn = document.getElementById('closeChatBtn');
                    const chatMessages = document.getElementById('chatMessages');
                    const chatInput = document.getElementById('chatInput');
                    const sendMessageBtn = document.getElementById('sendMessageBtn');
                    const whatsappNumber = '+5804146873924';
                    
                    setTimeout(() => {
                        notificationBadge.classList.add('show');
                        whatsappPush.classList.add('show');
                    }, 3000);

                    function getCurrentTime() {
                        const now = new Date();
                        const hours = String(now.getHours()).padStart(2, '0');
                        const minutes = String(now.getMinutes()).padStart(2, '0');
                        return `${hours}:${minutes}`;
                    }

                    function addMessage(text, messageType) {
                        const messageBubble = document.createElement('div');
                        messageBubble.classList.add('message-bubble');
                        messageBubble.classList.add(messageType === 'sent' ? 'sent' : 'received-bot-welcome');

                        const messageContent = document.createElement('div');
                        messageContent.textContent = text;
                        messageBubble.appendChild(messageContent);

                        const messageInfo = document.createElement('div');
                        messageInfo.classList.add('message-info');
                        messageInfo.textContent = getCurrentTime();

                        const checkmarkIcon = document.createElement('i');
                        checkmarkIcon.classList.add('fas', messageType === 'sent' ? 'fa-check-double' : 'fa-check', 'single-check');
                        messageInfo.appendChild(checkmarkIcon);

                        messageBubble.appendChild(messageInfo);
                        chatMessages.appendChild(messageBubble);
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                    }

                    function showTypingIndicator() {
                        const typingIndicator = document.createElement('div');
                        typingIndicator.classList.add('typing-indicator');
                        typingIndicator.innerHTML = '<span></span><span></span><span></span>';
                        chatMessages.appendChild(typingIndicator);
                        chatMessages.scrollTop = chatMessages.scrollHeight;
                        return typingIndicator;
                    }

                    whatsappIcon.addEventListener('click', () => {
                        notificationBadge.classList.remove('show');
                        whatsappPush.classList.remove('show');
                        chatContainer.classList.add('active');
                        chatMessages.innerHTML = '';

                        const indicator = showTypingIndicator();

                        setTimeout(() => {
                            indicator.remove();
                            addMessage('Hi, I am Maybe 👋, how can we help you?', 'welcome-bot');
                        }, 1500);
                    });

                    closeChatBtn.addEventListener('click', () => {
                        chatContainer.classList.remove('active');
                    });

                    function sendMessage() {
                        const messageText = chatInput.value.trim();
                        if (messageText) {
                            addMessage(messageText, 'sent');
                            setTimeout(() => {
                                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;
                                window.open(whatsappUrl, '_blank');
                                chatInput.value = '';
                                chatContainer.classList.remove('active');
                            }, 500);
                        }
                    }

                    sendMessageBtn.addEventListener('click', sendMessage);
                    chatInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                            sendMessage();
                        }
                    });
                });