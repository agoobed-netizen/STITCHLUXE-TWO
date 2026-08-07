// StitchLuxe Catalog Data
const catalogData = [
  {
    id: 1,
    title: "Royal Imperial Silk Agbada (3-Piece)",
    category: "Agbada",
    price: "₦250,000",
    type: "BESPOKE DESIGN",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Emerald Green Corset Asoebi Dress",
    category: "Corset Asoebi",
    price: "₦180,000",
    type: "BESPOKE DESIGN",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Executive Off-White Senator Set",
    category: "Senator",
    price: "₦95,000",
    type: "READY TO WEAR",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Vintage Ankara Kaftan Robe",
    category: "Wardrobe",
    price: "₦45,000",
    type: "WARDROBE PRE-LOVED",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80"
  }
];

// Progress Stages Notes
const stageNotes = [
  "Fabric received and inspected for quality in atelier.",
  "Pattern drafted and precision fabric cutting initiated.",
  "Fabric cut successfully. Inner lining & neck embroidery ongoing.",
  "Assembly complete. Preparing for client fitting session & QC check.",
  "Garment completed, ironed, and packaged for pickup or delivery!"
];

// WhatsApp URL Generator
const whatsappNumber = "2348123456789";
const message = encodeURIComponent("Hello Lumiverse Couture, I am inquiring about a bespoke design on StitchLuxe!");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

document.getElementById("whatsappBtn").href = whatsappUrl;
document.getElementById("whatsappTextLink").href = whatsappUrl;

// Render Products Grid
function renderProducts(category = "ALL") {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const filtered = category === "ALL" 
    ? catalogData 
    : catalogData.filter(item => item.category === category);

  filtered.forEach(item => {
    grid.innerHTML += `
      <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col">
        <div class="relative h-64 w-full bg-gray-100">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover">
          <span class="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase">
            ${item.type}
          </span>
        </div>
        <div class="p-4 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[10px] font-bold text-amber-600 uppercase">${item.category}</span>
            <h3 class="text-sm font-bold text-gray-900 mt-1">${item.title}</h3>
          </div>
          <div class="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-gray-400 block">Price</span>
              <span class="text-sm font-extrabold text-slate-900">${item.price}</span>
            </div>
            <button onclick="alert('Order request sent to designer on StitchLuxe!')" class="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg text-xs transition">
              Order / Book
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

// Category Filter Handler
function filterCategory(cat) {
  renderProducts(cat);
}

// Progress Stage Tracker Simulation
function setStage(index) {
  const progressLine = document.getElementById("progressLine");
  const stageNote = document.getElementById("stageNote");

  // Update line width percentage
  const percentages = [0, 25, 50, 75, 100];
  progressLine.style.width = `${percentages[index]}%`;

  // Update notes
  stageNote.innerText = stageNotes[index];

  // Update Nodes Styling
  for (let i = 0; i < 5; i++) {
    const node = document.getElementById(`node-${i}`);
    if (i < index) {
      node.className = "step-node w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-amber-600 text-white";
      node.innerText = "✓";
    } else if (i === index) {
      node.className = "step-node w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-amber-600 text-white ring-4 ring-amber-300 animate-pulse";
      node.innerText = i + 1;
    } else {
      node.className = "step-node w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm bg-gray-100 text-gray-400 border border-gray-300";
      node.innerText = i + 1;
    }
  }
}

// Bank Modal Toggle Logic
const bankModal = document.getElementById("bankModal");
document.getElementById("openBankBtn").addEventListener("click", () => bankModal.classList.remove("hidden"));
document.getElementById("closeBankBtn").addEventListener("click", () => bankModal.classList.add("hidden"));

// Initial Run
renderProducts("ALL");