class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleUserMessage = async (message) => {
    try {
      const response = await fetch('/api/v1/chatbot/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();
        const botMessage = this.createChatBotMessage(data.response);
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      } else {
        console.error('Failed to send message:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  greet() {
    const greetingMessage = this.createChatBotMessage("안녕하세요! 무엇을 도와드릴까요?");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, greetingMessage],
    }));
  }

  handleGoodbye() {
    const goodbyeMessage = this.createChatBotMessage("안녕히 가세요! 좋은 하루 보내세요!");
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, goodbyeMessage],
    }));
  }
  
}

export default ActionProvider;
