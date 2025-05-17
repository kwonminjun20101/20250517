// script.js
document.getElementById('pick-btn').addEventListener('click', () => {
    const total = 25;
    const count = 4;
    const numbers = Array.from({ length: total }, (_, i) => i + 1);

    const picked = [];
    while (picked.length < count) {
        const randomIndex = Math.floor(Math.random() * numbers.length);
        picked.push(numbers.splice(randomIndex, 1)[0]);
    }

    // SweetAlert2로 결과 보여주기
    Swal.fire({
        title: '🎉 오늘 청소당번 🎉',
        html: `<strong class="text-lg">${picked.join(', ')}</strong>`,
        icon: 'success',
        confirmButtonText: '확인',
        background: '#f9f9ff',
        backdrop: `
            rgba(118, 75, 162, 0.4)
            url("https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif")
            left top
            no-repeat
        `
    });
});
