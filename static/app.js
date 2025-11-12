const urlInput = document.getElementById('urlInput');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrDisplay = document.getElementById('qrDisplay');
const qrCanvas = document.getElementById('qrCanvas');
const errorMessage = document.getElementById('errorMessage');
const loading = document.getElementById('loading');

let currentUrl = '';

// Generate QR Code
generateBtn.addEventListener('click', generateQRCode);

// Allow Enter key to generate
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        generateQRCode();
    }
});

// Download QR Code
downloadBtn.addEventListener('click', downloadQRCode);

function generateQRCode() {
    const url = urlInput.value.trim();
    
    // Hide previous results and errors
    hideError();
    qrDisplay.style.display = 'none';
    
    if (!url) {
        showError('Please enter a URL or text to encode');
        return;
    }
    
    // Show loading
    loading.style.display = 'block';
    generateBtn.disabled = true;
    
    // Generate QR code using the library
    setTimeout(() => {
        try {
            QRCode.toCanvas(qrCanvas, url, {
                width: 300,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            }, (error) => {
                loading.style.display = 'none';
                generateBtn.disabled = false;
                
                if (error) {
                    showError('Failed to generate QR code. Please try again.');
                    console.error('Error:', error);
                } else {
                    currentUrl = url;
                    qrDisplay.style.display = 'block';
                }
            });
        } catch (error) {
            loading.style.display = 'none';
            generateBtn.disabled = false;
            showError('Failed to generate QR code. Please try again.');
            console.error('Error:', error);
        }
    }, 300); // Small delay for better UX
}

function downloadQRCode() {
    if (!currentUrl) {
        showError('Please generate a QR code first');
        return;
    }
    
    downloadBtn.disabled = true;
    downloadBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg> Downloading...';
    
    try {
        // Convert canvas to blob and download
        qrCanvas.toBlob((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'qrcode.png';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            // Reset button
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download QR Code';
        });
    } catch (error) {
        showError('Failed to download QR code. Please try again.');
        console.error('Error:', error);
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> Download QR Code';
    }
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    setTimeout(() => {
        hideError();
    }, 5000);
}

function hideError() {
    errorMessage.classList.remove('show');
}
