const START_DATE = new Date('2026-01-19T00:00:00');
const GRADUATION_DATE = new Date('2026-07-21T00:00:00');
const TOTAL_DURATION = GRADUATION_DATE - START_DATE;

function calculateProgress() {
    const now = new Date();

    if (now < START_DATE) {
        return 0;
    }

    if (now >= GRADUATION_DATE) {
        return 100;
    }

    const elapsed = now - START_DATE;
    return (elapsed / TOTAL_DURATION) * 100;
}

function calculateCountdown() {
    const now = new Date();
    let diff = GRADUATION_DATE - now;

    if (diff <= 0) {
        return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    diff -= years * (1000 * 60 * 60 * 24 * 365.25);

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
    diff -= months * (1000 * 60 * 60 * 24 * 30.44);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    return { years, months, days, hours, minutes, seconds };
}

function updateUI() {
    const progress = calculateProgress();
    const countdown = calculateCountdown();

    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-percent').textContent = progress.toFixed(2);

    document.getElementById('years').textContent = countdown.years;
    document.getElementById('months').textContent = countdown.months;
    document.getElementById('days').textContent = countdown.days;
    document.getElementById('hours').textContent = countdown.hours;
    document.getElementById('minutes').textContent = countdown.minutes;
    document.getElementById('seconds').textContent = countdown.seconds;
}

updateUI();

setInterval(updateUI, 1000);
