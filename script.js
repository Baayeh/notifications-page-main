const ul = document.querySelector('#message-list');
const readBtn = document.querySelector('.read-btn');

const notifications = [
  {
    avatar: './assets/images/avatar-mark-webber.webp',
    name: 'Mark Webber',
    reaction: 'reacted to your recent post',
    description: 'My first tournament today!',
    read: false,
    message: '',
    img: '',
    time: '1m ago'
  },
  {
    avatar: './assets/images/avatar-angela-gray.webp',
    name: 'Angela Gray',
    reaction: 'followed you',
    description: '',
    read: false,
    message: '',
    img: '',
    time: '5m ago'
  },
  {
    avatar: './assets/images/avatar-jacob-thompson.webp',
    name: 'Jacob Thompson',
    reaction: 'has joined your group',
    description: 'Chess Club',
    read: false,
    message: '',
    img: '',
    time: '1 day ago'
  },
  {
    avatar: './assets/images/avatar-rizky-hasanuddin.webp',
    name: 'Rizky Hassanuddin',
    reaction: 'sent you a private message',
    description: '',
    read: true,
    message: "Hello, thanks for setting up the Chess Club. I've been a memeber for a weeks now and I'm already having lots of fun and improving my game.",
    img: '',
    time: '5 days ago'
  },
  {
    avatar: './assets/images/avatar-kimberly-smith.webp',
    name: 'Kimberly Smith',
    reaction: 'commented on your picture',
    description: '',
    read: true,
    message: '',
    img: './assets/images/image-chess.webp',
    time: '1 week ago'
  },
  {
    avatar: './assets/images/avatar-nathan-peterson.webp',
    name: 'Nathan Peterson',
    reaction: 'reacted to your recent post',
    description: '5 end-game strategies to increase your win rate',
    read: true,
    message: '',
    img: '',
    time: '2 weeks ago'
  },
  {
    avatar: './assets/images/avatar-anna-kim.webp',
    name: 'Anna Kim',
    reaction: 'left the group',
    description: 'Chess Club',
    read: true,
    message: '',
    img: '',
    time: '2 weeks ago'
  },
];

function displayNotifications() {
  notifications.forEach(notification => {
    addNotificationToList(notification);
  });
}

function addNotificationToList(notification) {
  const li = `<li class="card">
    <div class="main-card ${notification.read && 'bg-color'}">
      <img src="${notification.avatar}" alt="Avatar" class="card-img">
      <div class="card-body">
        <div>
          <p>
            <strong>${notification.name}</strong>
            <span class="reaction">${notification.reaction}</span>
            ${
              notification.description ? `<span class="description">${notification.description}</span>` : ''
            }
            ${
              !notification.read ? `<span class="rounded-badge"></span>` : ''
            }
          </p>
          ${
            notification.img ? `<img src="${notification.img}" />` : ''
          }
        </div>
        <p class="time">${notification.time}</p>
      </div>
    </div>
    ${
      notification.message ? `<p class="message">${notification.message}</p>` : ''
    }
  </li>`;
  ul.innerHTML += li;
}

function markAsRead() {
  const badge = document.querySelector('.badge');
  badge.innerHTML = '0';
  const li = document.querySelectorAll('.main-card');
  li.forEach(list => {
    if(list.classList.contains('false')) {
      const spans = document.querySelectorAll('.rounded-badge');
      spans.forEach(span => {
        span.style.display = 'none';
      });
      list.classList.remove('false');
      list.classList.add('bg-color');
    }
  });
}

document.addEventListener('DOMContentLoaded', displayNotifications);

readBtn.addEventListener('click', markAsRead);