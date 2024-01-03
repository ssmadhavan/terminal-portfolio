const terminalBody = document.getElementById('terminalBody');
const terminalInput = document.getElementById('terminalInput');

function writeToTerminal(text) {
  const newLine = document.createElement('div');
  newLine.textContent = text;
  terminalBody.appendChild(newLine);
  terminalBody.scrollTop = terminalBody.scrollHeight;
}

function processCommand(command) {
  const input = command.trim().toLowerCase();

  switch (input) {
    case 'help':
      writeToTerminal('Available commands: about, projects, contact');
      break;
    case 'about':
      writeToTerminal('This is my portfolio website. I am a web developer.');
      writeToTerminal('I am SHREEMADHAVAN S');
      writeToTerminal('M.Sc. Cyber Security');
      break;
    case 'projects':
      writeToTerminal('Listing projects...');
      writeToTerminal('Personal Portfolio Website')
      break;
    case 'contact':
      writeToTerminal('mobile: 1234567890');
      writeToTerminal('Email: abcd@gmail.com');
      writeToTerminal('Linkedin: abcd_1234');
      writeToTerminal('Instagram: Hacker_boy');
      break;
    default:
      writeToTerminal(`Command '${input}' not recognized. Type 'help' for commands.`);
  }
}

terminalInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = terminalInput.textContent;
    writeToTerminal(`> ${command}`);
    processCommand(command);
    terminalInput.textContent = '';
    e.preventDefault();
  }
});