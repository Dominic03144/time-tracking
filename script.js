// Data for all timeframes
const data = {
  daily: [
    { current: '5hrs', previous: 'Yesterday - 7hrs' },
    { current: '1hr', previous: 'Yesterday - 2hrs' },
    { current: '0hrs', previous: 'Yesterday - 1hr' },
    { current: '1hr', previous: 'Yesterday - 1hr' },
    { current: '1hr', previous: 'Yesterday - 3hrs' },
    { current: '0hrs', previous: 'Yesterday - 1hr' },
  ],
  weekly: [
    { current: '32hrs', previous: 'Last Week - 36hrs' },
    { current: '10hrs', previous: 'Last Week - 8hrs' },
    { current: '4hrs', previous: 'Last Week - 7hrs' },
    { current: '4hrs', previous: 'Last Week - 5hrs' },
    { current: '5hrs', previous: 'Last Week - 10hrs' },
    { current: '2hrs', previous: 'Last Week - 2hrs' },
  ],
  monthly: [
    { current: '103hrs', previous: 'Last Month - 128hrs' },
    { current: '23hrs', previous: 'Last Month - 29hrs' },
    { current: '13hrs', previous: 'Last Month - 19hrs' },
    { current: '11hrs', previous: 'Last Month - 18hrs' },
    { current: '21hrs', previous: 'Last Month - 23hrs' },
    { current: '7hrs', previous: 'Last Month - 11hrs' },
  ],
};


function updateCards(timeframe) {
  const cards = document.querySelectorAll('.card');
  data[timeframe].forEach((item, index) => {
    const card = cards[index];
    card.querySelector('h3').textContent = item.current;
    card.querySelector('p').textContent = item.previous;
  });
}


const buttons = document.querySelectorAll('.time-options button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    
    const timeframe = button.textContent.toLowerCase();
    updateCards(timeframe);
  });
});

updateCards('weekly');
