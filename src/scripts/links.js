const { shell } = require('electron');
const linkToCode = 'https://github.com/narghev/ReEPl';

export const goToCodeLink = () => {
  shell.openExternal(linkToCode);
}
