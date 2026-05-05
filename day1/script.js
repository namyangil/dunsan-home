const quotes = [
    "오늘도 힘내세요!",
    "당신은 충분히 잘하고 있어요.",
    "작은 노력이 모여 큰 성취를 이룹니다.",
    "힘들 땐 잠시 쉬어가도 괜찮아요.",
    "내일은 오늘보다 더 빛날 거예요.",
    "포기하지 않는 당신이 가장 아름답습니다.",
    "스스로를 믿는 것부터 시작하세요.",
    "웃음은 가장 강력한 에너지입니다.",
    "오늘 하루도 고생 많으셨어요.",
    "당신이 꿈꾸는 미래가 기다리고 있어요."
];

const messageElement = document.getElementById('cheer-message');
const nextBtn = document.getElementById('next-quote-btn');

let currentIdx = 0;
const colors = [
    { bg: '#3b82f6', glow: 'rgba(59, 130, 246, 0.5)' }, // Blue
    { bg: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.5)' }, // Purple
    { bg: '#ec4899', glow: 'rgba(236, 72, 153, 0.5)' }, // Pink
    { bg: '#10b981', glow: 'rgba(16, 185, 129, 0.5)' }, // Green
    { bg: '#f59e0b', glow: 'rgba(245, 158, 11, 0.5)' }, // Amber
    { bg: '#ef4444', glow: 'rgba(239, 68, 68, 0.5)' },  // Red
    { bg: '#06b6d4', glow: 'rgba(6, 182, 212, 0.5)' },  // Cyan
    { bg: '#f43f5e', glow: 'rgba(244, 63, 94, 0.5)' },  // Rose
    { bg: '#6366f1', glow: 'rgba(99, 102, 241, 0.5)' }, // Indigo
    { bg: '#14b8a6', glow: 'rgba(20, 184, 166, 0.5)' }  // Teal
];

function changeQuote() {
    // Change button color and text index immediately
    currentIdx = (currentIdx + 1) % quotes.length;
    const color = colors[currentIdx % colors.length];
    
    // Applying colors directly for maximum reliability
    nextBtn.style.backgroundColor = color.bg;
    nextBtn.style.boxShadow = `0 0 20px ${color.glow}`;
    // Also update CSS variables just in case
    nextBtn.style.setProperty('--btn-color', color.bg);
    nextBtn.style.setProperty('--btn-glow', color.glow);

    // Add fade-out effect for text
    messageElement.classList.add('fade-out');
    
    setTimeout(() => {
        // Change text
        messageElement.textContent = quotes[currentIdx];
        
        // Remove fade-out and add fade-in
        messageElement.classList.remove('fade-out');
        messageElement.classList.add('fade-in');
        
        // Cleanup fade-in after animation finishes
        setTimeout(() => {
            messageElement.classList.remove('fade-in');
        }, 500);
    }, 500);
}

nextBtn.addEventListener('click', changeQuote);
