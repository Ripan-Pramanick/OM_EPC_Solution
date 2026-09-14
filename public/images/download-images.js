const fs = require('fs');
const https = require('https');
const path = require('path');

// ২০টি আইটি ও ইনফ্রাস্ট্রাকচার রিলেটেড ছবির লিংক (400x300 সাইজে)
const downloadList = [
  { name: 'item_1.jpg', url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400&h=300' }, // Data Center
  { name: 'item_2.jpg', url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=400&h=300' }, // Network
  { name: 'item_3.jpg', url: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=400&h=300' }, // CCTV
  { name: 'item_4.jpg', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300' }, // Workstation
  { name: 'item_5.jpg', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=300' }, // Tech Support
  { name: 'item_6.jpg', url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400&h=300' }, // Hardware
  { name: 'item_7.jpg', url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400&h=300' }, // Server Mgmt
  { name: 'item_8.jpg', url: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=400&h=300' }, // Power UPS
  { name: 'item_9.jpg', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400&h=300' }, // Fiber Optics
  { name: 'item_10.jpg', url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400&h=300' }, // Surveillance
  { name: 'item_11.jpg', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=300' }, // IT Consulting
  { name: 'item_12.jpg', url: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=400&h=300' }, // Cloud Infra
  { name: 'item_13.jpg', url: 'https://images.unsplash.com/photo-1516322073387-8fb9d41d99d1?auto=format&fit=crop&q=80&w=400&h=300' }, // Smart Office
  { name: 'item_14.jpg', url: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=400&h=300' }, // Accessories
  { name: 'item_15.jpg', url: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=400&h=300' }, // Data Security
  { name: 'item_16.jpg', url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=400&h=300' }, // Laptops
  { name: 'item_17.jpg', url: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=400&h=300' }, // Enterprise Printers
  { name: 'item_18.jpg', url: 'https://images.unsplash.com/photo-1620283085439-3f6226dff063?auto=format&fit=crop&q=80&w=400&h=300' }, // Industrial UPS
  { name: 'item_19.jpg', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=400&h=300' }, // AMC Services
  { name: 'item_20.jpg', url: 'https://images.unsplash.com/photo-1581092926214-7eb356f932e6?auto=format&fit=crop&q=80&w=400&h=300' }  // Automation
];

const downloadDir = path.join(__dirname, 'downloaded_images');
if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir);
}

function downloadImage(url, filename) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.log(`⚠️ Skipped (Error): ${path.basename(filename)}`);
        resolve();
        return;
      }
      const fileStream = fs.createWriteStream(filename);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Downloaded: ${path.basename(filename)}`);
        resolve();
      });
    }).on('error', (err) => {
      console.log(`❌ Error Network: ${path.basename(filename)} - ${err.message}`);
      resolve();
    });
  });
}

async function startDownload() {
  console.log('🚀 ২০টি নতুন ছবি ডাউনলোড শুরু হচ্ছে...');
  for (const img of downloadList) {
    const filename = path.join(downloadDir, img.name);
    await downloadImage(img.url, filename);
  }
  console.log('\n🎉 ডাউনলোড শেষ! ছবিগুলো "downloaded_images" ফোল্ডারে আছে।');
}

startDownload();