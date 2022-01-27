import {seasons} from './cardText.js';

const markdownEngine = (journal, scale) => {
  const month = new Date().toLocaleString('default', { month: 'short' });
  const day = new Date().getDay();
  const year = new Date().getFullYear();

  let file =
    `# FIRE CYCLE
## A year in the peaks.
${day} ${month}., ${year}
`;

  journal.forEach(entry => {
    if (entry.week === 1 || seasons(entry.week, scale) !== seasons(entry.week - 1, scale)) {
      file += `### ${seasons(entry.week, scale)}`;
      file += '\n';
    }
    file += `#### Week ${entry.week}: The ${entry.event.rank} of ${entry.event.suit}`;
    file += '\n';
    file += entry.log;
    file += '\n';
  })

  return file;
}

export default markdownEngine;