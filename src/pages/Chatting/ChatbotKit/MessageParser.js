class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("안녕")) {
      this.actionProvider.greet();
    } else if (lowerCaseMessage.includes("잘가")) {
      this.actionProvider.handleGoodbye();
    } else {
      this.actionProvider.handleUserMessage(message);
    }
  }
}

export default MessageParser;
