
window.proegLayout = {
  init() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const headerHTML = `
      <div class="fixed top-0 left-0 w-full z-50 bg-blue-800 text-white text-[0.65rem] font-bold uppercase tracking-[0.15em] py-2.5 text-center">
        Build Your proeg² Bundle with up to 20% off
      </div>

     <header class="fixed top-[34px] left-0 w-full z-40 bg-[#0B132B] dark:bg-[#0B132B] border-b border-slate-800 h-[75px] flex items-center px-6 text-white">
  <div class="max-w-7xl mx-auto w-full flex items-center justify-between">
    <!-- Logo & Name -->
    <div class="flex items-center gap-2">
      
      <a href="index.html" class="flex items-center gap-2 inline-flex group no-underline">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrYv7bQadLSGQkjXOU1Zk5vYmwK1VUJNSmIiHhdRuMA&s=10" class="w-8 h-8 rounded-full object-cover" alt="logo">
              <span class="font-black text-2xl tracking-tighter text-white group-hover:text-[#E63946] transition-colors">
                PROEG<sup class="text-[#E63946] font-bold text-sm">2</sup>
              </span>
            </a>
    </div>

    <!-- Navigation Menu with Active Highlight (Desktop) -->
    <nav class="hidden lg:flex items-center gap-7 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-slate-300">
      <!-- Home Dropdown -->
      <div class="relative group cursor-pointer py-6">
        <span class="flex items-center gap-1 hover:text-white transition-colors ${currentPath === 'index.html' || currentPath === 'index-saas.html' ? 'text-[#E63946]' : ''}">Home ▾</span>
        <div class="absolute top-full left-0 w-48 bg-[#0B132B] border border-slate-800 shadow-xl rounded-xl py-2 hidden group-hover:block z-50">
          <a href="index.html" class="block px-4 py-2 text-xs hover:bg-slate-800 ${currentPath === 'index.html' ? 'text-[#E63946]' : 'text-slate-300'}">Customer Portal</a>
          <a href="index-saas.html" class="block px-4 py-2 text-xs hover:bg-slate-800 ${currentPath === 'index-saas.html' ? 'text-[#E63946]' : 'text-slate-300'}">Business SaaS</a>
        </div>
      </div>
      <a href="products.html" class="transition-colors ${currentPath === 'products.html' ? 'text-[#E63946]' : 'hover:text-white'}">Shop</a>
      <a href="about.html" class="transition-colors ${currentPath === 'about.html' ? 'text-[#E63946]' : 'hover:text-white'}">About</a>
      <a href="blog.html" class="transition-colors ${currentPath === 'blog.html' ? 'text-[#E63946]' : 'hover:text-white'}">Blog</a>
      <a href="pricing.html" class="transition-colors ${currentPath === 'pricing.html' ? 'text-[#E63946]' : 'hover:text-white'}">Pricing</a>
      <a href="contact.html" class="transition-colors ${currentPath === 'contact.html' ? 'text-[#E63946]' : 'hover:text-white'}">Contact</a>
    </nav>

    <!-- Right Actions & Primary CTA -->
    <div class="flex items-center gap-3 text-xs font-bold uppercase">
      <!-- Primary CTA Button (Desktop) -->
      <a href="products.html" class="hidden sm:inline-flex items-center px-4 py-2.5 bg-[#E63946] text-white rounded-xl font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg">
        Shop Now
      </a>

      <!-- Desktop RTL Toggle -->
      <button id="rtlToggle" class="hidden lg:inline-flex p-2 border border-slate-700 rounded-xl text-slate-900 hover:text-slate-100 bg-white hover:bg-blue-950 transition-colors" title="Toggle RTL/LTR">
        <span id="rtlLabel" class="text-[0.6rem]">RTL</span>
      </button>
      
     <!-- Desktop Theme Toggle -->
      <button id="themeToggle" class="hidden lg:inline-flex items-center justify-center p-2.5 border border-slate-700 rounded-xl text-slate-300 hover:border-white transition-colors" title="Toggle Theme">
        <!-- Sun Icon (Visible in Light Mode to switch to Dark) -->
        <svg class="dark:hidden w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/>
        </svg>
        <!-- Moon Icon (Visible in Dark Mode to switch to Light) -->
        <svg class="hidden dark:block w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
        </svg>
      </button>

      <!-- Cart Icon -->
      <a href="cart.html" class="relative p-2 border border-slate-700 rounded-xl text-slate-300 hover:border-white transition-colors ${currentPath === 'cart.html' ? 'border-[#E63946] text-[#E63946]' : ''}" title="Cart">
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
        <span id="cartBadge" class="absolute top-0 right-0 bg-[#E63946] text-white text-[0.45rem] font-bold w-4 h-4 rounded-full flex items-center justify-center" style="display:none;">0</span>
      </a>

      <!-- Mobile Hamburger Button -->
      <button id="mobileMenuBtn" class="lg:hidden p-2 border border-slate-700 rounded-xl text-slate-300 hover:border-white transition-colors" title="Toggle Menu">
        <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>
</header>

      <!-- Mobile Dropdown Navigation Menu Drawer (Containing Navigation Links + RTL & Theme Toggles) -->
      <div id="mobileMenu" class="fixed top-[109px] left-0 w-full z-30 bg-[#0B132B] text-white border-b border-slate-800 p-6 space-y-4 hidden shadow-2xl lg:hidden transition-all">
        <div class="flex flex-col space-y-3 text-xs font-bold uppercase tracking-widest">
          <a href="index.html" class="py-2.5 px-3 rounded-xl hover:bg-slate-800 transition-colors ${currentPath === 'index.html' ? 'text-[#E63946] bg-slate-800/80' : 'text-slate-300'}">Customer Portal (Home)</a>
          <a href="index-saas.html" class="py-2.5 px-3 rounded-xl hover:bg-slate-800 transition-colors ${currentPath === 'index-saas.html' ? 'text-[#E63946] bg-slate-800/80' : 'text-slate-300'}">Business SaaS Portal</a>
          <a href="products.html" class="py-2.5 px-3 rounded-xl hover:bg-slate-800 transition-colors ${currentPath === 'products.html' ? 'text-[#E63946] bg-slate-800/80' : 'text-slate-300'}">Shop All Products</a>
          <a href="about.html" class="py-2.5 px-3 rounded-xl hover:bg-slate-800 transition-colors ${currentPath === 'about.html' ? 'text-[#E63946] bg-slate-800/80' : 'text-slate-300'}">About Us</a>
          <a href="blog.html" class="py-2.5 px-3 rounded-xl hover:bg-slate-800 transition-colors ${currentPath === 'blog.html' ? 'text-[#E63946] bg-slate-800/80' : 'text-slate-300'}">Journal & Blog</a>
          <a href="pricing.html" class="py-2.5 px-3 rounded-xl hover:bg-slate-800 transition-colors ${currentPath === 'pricing.html' ? 'text-[#E63946] bg-slate-800/80' : 'text-slate-300'}">Pricing Plans</a>
          <a href="contact.html" class="py-2.5 px-3 rounded-xl hover:bg-slate-800 transition-colors ${currentPath === 'contact.html' ? 'text-[#E63946] bg-slate-800/80' : 'text-slate-300'}">Contact Us</a>
          
          <!-- Mobile Controls Section (RTL & Theme Toggles inside menu) -->
          <div class="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3">
  <!-- Interactive RTL/LTR Toggle Button -->
  <button id="rtlToggleMobile" class="py-3 px-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-xl text-white text-[0.7rem] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer">
    <span><span id="rtlLabelMobile" class="text-[#E63946]">RTL</span></span>
  </button>

  <!-- Interactive Dark/Light Theme Toggle Button -->
  <button id="themeToggleMobile" class="py-3 px-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-xl text-white text-[0.7rem] font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer">
    <!-- Light Mode Sun Icon -->
    <svg class="hidden dark:block text-amber-400 shrink-0" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
    <!-- Dark Mode Moon Icon -->
    <svg class="dark:hidden text-indigo-300 shrink-0" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
    <span id="themeLabelMobile"></span>
  </button>
</div>
        </div>
      </div>
    `;

   const footerHTML = `
      <footer class="bg-[#0B132B] text-white py-16 px-6 mt-20 border-t border-slate-800">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-xs uppercase tracking-wider mb-12">
          <div class="space-y-4">
            <!-- Footer Logo with Home Redirection Link -->
            <a href="index.html" class="flex items-center gap-2 inline-flex group no-underline">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrYv7bQadLSGQkjXOU1Zk5vYmwK1VUJNSmIiHhdRuMA&s=10" class="w-8 h-8 rounded-full object-cover" alt="logo">
              <span class="font-black text-2xl tracking-tighter text-white group-hover:text-[#E63946] transition-colors">
                PROEG<sup class="text-[#E63946] font-bold text-sm">2</sup>
              </span>
            </a>
            <p class="text-slate-400 text-[0.65rem] leading-relaxed">From Egg to proeg² — powered by the natural goodness of eggs and advanced bio-collagen science.</p>
          </div>
          <div>
            <h4 class="font-bold text-[#E63946] mb-4 tracking-[0.2em]">Shop</h4>
            <ul class="space-y-2 text-slate-300 font-medium">
              <li><a href="products.html" class="hover:text-white">All products</a></li>
              <li><a href="products.html?goal=Joint%20Support" class="hover:text-white">Pure Collagen</a></li>
              <li><a href="products.html?goal=Muscle%20Health" class="hover:text-white">Protein Powder</a></li>
              <li><a href="products.html?goal=Snacking" class="hover:text-white">Protein Bars</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-[#E63946] mb-4 tracking-[0.2em]">Learn more</h4>
            <ul class="space-y-2 text-slate-300 font-medium">
              <li><a href="about.html" class="hover:text-white">About us</a></li>
              <li><a href="buying-guide.html" class="hover:text-white">Research</a></li>
              <li><a href="blog.html" class="hover:text-white">Blog</a></li>
              <li><a href="contact.html" class="hover:text-white">Contact Information</a></li>
              <li><a href="terms.html" class="hover:text-white">Terms of Service</a></li>
              <li><a href="privacy.html" class="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="space-y-4">
            <h4 class="font-bold text-[#E63946] mb-4 tracking-[0.2em]">Follow on</h4>
            <div class="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#E63946] transition-colors" title="Facebook">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#E63946] transition-colors" title="Instagram">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#E63946] transition-colors" title="TikTok">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
              </a>
            </div>
            <p class="text-slate-400 text-[0.6rem] leading-relaxed pt-2">SIA APF Trading &bull; Reg. Nr. 50203051041<br>Malduguņu iela 4, Mārupe, Latvija</p>
          </div>
        </div>
        <div class="max-w-7xl mx-auto pt-6 border-t border-slate-800 text-center text-[0.6rem] uppercase tracking-[0.2em] text-slate-500">
          &copy; 2026, proeg2.com Powered by Shopify Replica
        </div>
      </footer>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    this.initHandlers();
    this.updateCartBadge();
    window.addEventListener('cartUpdated', () => this.updateCartBadge());
  },
  initHandlers() {
    const applyThemeAndRtl = () => {
      const isDark = localStorage.getItem('proeg_theme') === 'dark';
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      const savedDir = localStorage.getItem('proeg_dir') || 'ltr';
      document.documentElement.setAttribute('dir', savedDir);

      const rtlLabel = document.getElementById('rtlLabel');
      const rtlLabelMobile = document.getElementById('rtlLabelMobile');
      if (rtlLabel) rtlLabel.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
      if (rtlLabelMobile) rtlLabelMobile.textContent = savedDir === 'rtl' ? 'LTR' : 'RTL';
    };

    applyThemeAndRtl();

    // Desktop Theme Toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('proeg_theme', isDark ? 'dark' : 'light');
      });
    }

    // Mobile Theme Toggle
    const themeBtnMobile = document.getElementById('themeToggleMobile');
    if (themeBtnMobile) {
      themeBtnMobile.addEventListener('click', () => {
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('proeg_theme', isDark ? 'dark' : 'light');
      });
    }

    // Desktop RTL Toggle
    const rtlBtn = document.getElementById('rtlToggle');
    if (rtlBtn) {
      rtlBtn.addEventListener('click', () => {
        const currentDir = document.documentElement.getAttribute('dir');
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('proeg_dir', newDir);
        applyThemeAndRtl();
      });
    }

    // Mobile RTL Toggle
    const rtlBtnMobile = document.getElementById('rtlToggleMobile');
    if (rtlBtnMobile) {
      rtlBtnMobile.addEventListener('click', () => {
        const currentDir = document.documentElement.getAttribute('dir');
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        document.documentElement.setAttribute('dir', newDir);
        localStorage.setItem('proeg_dir', newDir);
        applyThemeAndRtl();
      });
    }

    // Mobile Menu Toggle Handler
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
  },
  updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    const cart = window.proegDB ? window.proegDB.getCart() : [];
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  }
};

document.addEventListener('DOMContentLoaded', () => proegLayout.init());
