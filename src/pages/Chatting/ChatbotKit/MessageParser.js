// MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    // message를 분석하고 actionProvider의 메소드를 호출합니다.
    if (message.includes("안녕")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;