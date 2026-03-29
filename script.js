const WA = '5591982386167';

/* ✏️ ══════════════════════════════════════════
   LOGO — cole a URL da sua logo aqui.
   Formatos aceitos: JPG, PNG, WEBP, SVG
   Tamanho recomendado: 400×400px (quadrada)
   Deixe vazio ('') para usar o emoji 🍔
═══════════════════════════════════════════════ */
const LOGO_URL = '';

(function renderLogo(){
  const el = document.getElementById('logoContainer');
  if(!el) return;
  if(LOGO_URL){
    const img = document.createElement('img');
    img.src = LOGO_URL;
    img.alt = 'Logo Pit Burguer';
    img.className = 'logo-img';
    img.onerror = ()=>{ el.innerHTML = '<div class="logo-icon">🍔</div>'; };
    el.appendChild(img);
  } else {
    el.innerHTML = '<div class="logo-icon">🍔</div>';
  }
})();

/* ════════════════════════════════
   ADICIONAIS
════════════════════════════════ */
const ADICIONAIS = [
  {id:'ad1',emoji:'🥩',img:'https://images.unsplash.com/photo-1558030006-450675393462?w=80&h=80&fit=crop&auto=format',name:'Blend 150g',               price:12},
  {id:'ad2',emoji:'🍳',img:'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=80&h=80&fit=crop&auto=format',name:'Ovo',                      price:4},
  {id:'ad3',emoji:'🥓',img:'https://images.unsplash.com/photo-1528607929212-2636ec44253e?w=80&h=80&fit=crop&auto=format',name:'Bacon',                    price:5},
  {id:'ad4',emoji:'🥔',img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=80&h=80&fit=crop&auto=format',name:'Macaxeira palha',          price:4},
  {id:'ad5',emoji:'🌶️',img:'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=80&h=80&fit=crop&auto=format',name:'Calabresa',               price:6},
  {id:'ad6',emoji:'🥄',img:'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=80&h=80&fit=crop&auto=format',name:'Molho caseiro',            price:4},
  {id:'ad7',emoji:'🧀',img:'https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=80&h=80&fit=crop&auto=format',name:'Queijo cheddar',           price:5},
  {id:'ad8',emoji:'🍍',img:'https://images.unsplash.com/photo-1587049352851-8d4e89133924?w=80&h=80&fit=crop&auto=format',name:'Geleia apimentada de abacaxi',price:4},
];

/* ════════════════════════════════
   MENU DATA
════════════════════════════════ */
const menu = [
  { id:'lanches', anchorId:'sec-lanches', icon:'🍔', title:'Lanches', type:'burger',
    items:[
      {id:'l1',emoji:'🍔',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop&auto=format',name:'X-Pit',        price:19,  desc:'Pão brioche, blend bovino 150g e queijo mussarela.'},
      {id:'l2',emoji:'🔥',img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop&auto=format',name:'Pitizinho Burg',price:25,  desc:'Blend bovino 150g, cheddar, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e salada.'},
      {id:'l3',emoji:'🐷',img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop&auto=format',name:'Pig Burg',     price:23,  desc:'Blend suíno 150g, cheddar, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.'},
      {id:'l4',emoji:'🐔',img:'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&h=200&fit=crop&auto=format',name:'Pollos Burg',  price:23,  desc:'Blend de frango 150g, cheddar, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.'},
      {id:'l5',emoji:'🍳',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop&auto=format',name:'Pit Burg',     price:27,  desc:'Blend bovino 150g, cheddar, ovo, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi.'},
      {id:'l6',emoji:'🥓',img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=200&h=200&fit=crop&auto=format',name:'Bull Burg',    price:29,  desc:'Blend bovino 150g, cheddar, bacon, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.'},
      {id:'l7',emoji:'❤️',img:'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?w=200&h=200&fit=crop&auto=format',name:'Pit Love Burg',price:29,  desc:'Blend bovino 150g, cheddar, calabresa, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.'},
      {id:'l8',emoji:'👑',img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop&auto=format',name:'Picanha Burg', price:35,  desc:'Blend de picanha 150g, cheddar, bacon, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha, abacaxi e geleia apimentada de abacaxi.'},
      {id:'l9',emoji:'💪',img:'https://images.unsplash.com/photo-1627308595127-d9e6e6e98822?w=200&h=200&fit=crop&auto=format',name:'Pitbull Burg', price:37,  desc:'2 blends bovino 150g, 2 cheddars, 2 bacons, 2 maioneses, 2 cebolas caramelizadas, molho barbecue, macaxeira palha, 2 abacaxis e geleia apimentada de abacaxi.'},
    ]
  },
  { id:'combos', anchorId:'sec-combos', icon:'🍟', title:'Combos', subtext:'Acompanha batata + refri ou suco', type:'burger',
    items:[
      {id:'c1',emoji:'🍔',img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop&auto=format',name:'Combo X-Pit',          price:32.99,desc:'X-Pit + batata frita + refrigerante ou suco.'},
      {id:'c2',emoji:'🐷',img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop&auto=format',name:'Combo Pig Burg',        price:33.99,desc:'Pig Burg + batata frita + refrigerante ou suco.'},
      {id:'c3',emoji:'🐔',img:'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=200&h=200&fit=crop&auto=format',name:'Combo Pollos Burg',     price:32.99,desc:'Pollos Burg + batata frita + refrigerante ou suco.'},
      {id:'c4',emoji:'🔥',img:'https://images.unsplash.com/photo-1550547660-d9450f859349?w=200&h=200&fit=crop&auto=format',name:'Combo Pitizinho Burg',  price:36.99,desc:'Pitizinho Burg + batata frita + refrigerante ou suco.'},
      {id:'c5',emoji:'🍳',img:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop&auto=format',name:'Combo Pit Burg',        price:37.99,desc:'Pit Burg + batata frita + refrigerante ou suco.'},
      {id:'c6',emoji:'🥓',img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=200&h=200&fit=crop&auto=format',name:'Combo Bull Burg',       price:39.99,desc:'Bull Burg + batata frita + refrigerante ou suco.'},
      {id:'c7',emoji:'❤️',img:'https://images.unsplash.com/photo-1605789538467-f715d58e03f9?w=200&h=200&fit=crop&auto=format',name:'Combo Pit Love Burg',   price:39.99,desc:'Pit Love Burg + batata frita + refrigerante ou suco.'},
      {id:'c8',emoji:'👑',img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=200&h=200&fit=crop&auto=format',name:'Combo Picanha Burg',    price:43.99,desc:'Picanha Burg + batata frita + refrigerante ou suco.'},
      {id:'c9',emoji:'💪',img:'https://images.unsplash.com/photo-1627308595127-d9e6e6e98822?w=200&h=200&fit=crop&auto=format',name:'Combo Pitbull Burg',    price:50.99,desc:'Pitbull Burg + batata frita + refrigerante ou suco.'},
    ]
  },
  { id:'caldos', anchorId:'sec-caldos', icon:'🍲', title:'Caldos', type:'simple',
    items:[
      {id:'ca1',emoji:'🐔',img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&h=200&fit=crop&auto=format',name:'Caldo de Frango',price:20,desc:'Ovo, azeitona, queijo, torrada e limão.'},
      {id:'ca2',emoji:'🥩',img:'https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=200&h=200&fit=crop&auto=format',name:'Caldo de Carne', price:20,desc:'Ovo, azeitona, queijo, calabresa, torrada e limão.'},
      {id:'ca3',emoji:'🫘',img:'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&h=200&fit=crop&auto=format',name:'Caldo de Feijão',price:20,desc:'Ovo, azeitona, couve, queijo, calabresa, bacon, torrada e limão.'},
    ]
  },
  { id:'porcoes', anchorId:'sec-porcoes', icon:'🍟', title:'Porções', type:'simple',
    items:[
      {id:'p1',emoji:'🍟',img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&h=200&fit=crop&auto=format',name:'Batata frita simples',price:14,desc:'Batata frita crocante. Acompanha catchup.'},
      {id:'p2',emoji:'🧀',img:'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=200&h=200&fit=crop&auto=format',name:'Batata turbo',        price:22,desc:'Com mussarela, cheddar e bacon. Incrível!'},
    ]
  },
  { id:'bebidas', anchorId:'sec-bebidas', icon:'🥤', title:'Bebidas', type:'drink',
    items:[
      { id:'b_rl',emoji:'🥤',img:'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&h=200&fit=crop&auto=format',name:'Refrigerante lata',price:6,  desc:'Lata 350ml gelada.',
        variants:[
          {id:'rl_coca', label:'🥤 Coca-Cola',          extra:0},
          {id:'rl_gua',  label:'🟡 Guaraná Antarctica', extra:0},
          {id:'rl_fan',  label:'🟠 Fanta Laranja',      extra:0},
          {id:'rl_spr',  label:'🫧 Sprite',             extra:0},
        ]
      },
      { id:'b_r1',emoji:'🍾',img:'https://images.unsplash.com/photo-1624552184280-9e48734657cc?w=200&h=200&fit=crop&auto=format',name:'Refrigerante 1L',price:11, desc:'Garrafa 1 litro.',
        variants:[
          {id:'r1_coca',label:'🥤 Coca-Cola 1L',  extra:0},
          {id:'r1_gua', label:'🟡 Guaraná 1L',    extra:0},
          {id:'r1_fan', label:'🟠 Fanta 1L',      extra:0},
        ]
      },
      { id:'b_r2',emoji:'🍾',img:'https://images.unsplash.com/photo-1624552184280-9e48734657cc?w=200&h=200&fit=crop&auto=format',name:'Refrigerante 2L',price:15, desc:'Garrafa 2 litros.',
        variants:[
          {id:'r2_coca',label:'🥤 Coca-Cola 2L',  extra:0},
          {id:'r2_gua', label:'🟡 Guaraná 2L',    extra:0},
          {id:'r2_fan', label:'🟠 Fanta 2L',      extra:0},
        ]
      },
      { id:'b_sj',emoji:'🍹',img:'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=200&h=200&fit=crop&auto=format',name:'Suco 300ml',price:6, desc:'Natural. Escolha o sabor.',
        variants:[
          {id:'sj_ace',label:'🍒 Acerola',   extra:0},
          {id:'sj_mar',label:'💛 Maracujá',  extra:0},
        ]
      },
      { id:'b_ag',emoji:'💧',img:'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=200&h=200&fit=crop&auto=format',name:'Água',price:3, desc:'Com ou sem gás.',
        basePrice:3,
        variants:[
          {id:'ag_sem',label:'💧 Sem gás', extra:0},
          {id:'ag_com',label:'💦 Com gás', extra:1},
        ]
      },
    ]
  },
];

/* ════════════════════════════════
   BURGER STATE
   expandedId  = which card is open
   addonQtys   = { itemId: { adId: qty } }
   comboDrink  = { itemId: { type:'refri'|'suco', flavor:'label' } }
════════════════════════════════ */
let expandedId = null;
const addonQtys = {};
const comboDrink = {};

const COMBO_DRINKS = {
  refri: ['🥤 Coca-Cola','🟡 Guaraná Antarctica','🟠 Fanta Laranja','🫧 Sprite'],
  suco:  ['🍒 Suco de Acerola','💛 Suco de Maracujá'],
};

function selectComboDrinkType(itemId, type){
  if(!comboDrink[itemId]) comboDrink[itemId] = {};
  comboDrink[itemId].type = type;
  comboDrink[itemId].flavor = '';

  // highlight button
  ['refri','suco'].forEach(t=>{
    document.getElementById(`cdt-${t}-${itemId}`)?.classList.toggle('active', t===type);
  });

  // populate and show flavor dropdown
  const sel = document.getElementById(`cflavorsel-${itemId}`);
  const wrap = document.getElementById(`cflavor-${itemId}`);
  if(!sel||!wrap) return;
  sel.innerHTML = `<option value="">— Escolha o sabor —</option>`
    + COMBO_DRINKS[type].map(f=>`<option value="${f}">${f}</option>`).join('');
  sel.onchange = ()=>{ comboDrink[itemId].flavor = sel.value; };
  wrap.classList.add('show');

  // hide hint if was showing
  document.getElementById(`chint-${itemId}`)?.classList.remove('show');
}

function validateComboDrink(itemId){
  const isCombo = itemId.startsWith('c');
  if(!isCombo) return true;
  const d = comboDrink[itemId];
  if(!d || !d.type || !d.flavor){
    document.getElementById(`chint-${itemId}`)?.classList.add('show');
    document.getElementById(`cflavor-${itemId}`)?.querySelector('select')?.focus();
    return false;
  }
  return true;
}

/* ════════════════════════════════
   CART
════════════════════════════════ */
let cart = {};
let seq  = 0;

/* ════════════════════════════════
   IMG HELPER — renders photo with emoji fallback
════════════════════════════════ */
function imgTag(item){
  if(!item.img) return `<span class="img-fallback">${item.emoji}</span>`;
  return `<img src="${item.img}" alt="${item.name}" loading="lazy"
    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
    <span class="img-fallback" style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;">${item.emoji}</span>`;
}

/* ════════════════════════════════
   RENDER MENU
════════════════════════════════ */
function renderMenu(){
  const root = document.getElementById('menuRoot');
  root.innerHTML = '';
  menu.forEach(sec => {
    const el = document.createElement('div');
    el.className = 'section section-anchor';
    el.id = sec.anchorId;
    const sub = sec.subtext
      ? `<span style="font-size:.72rem;color:var(--accent2);font-weight:600;background:rgba(255,107,0,.1);padding:3px 10px;border-radius:20px;">${sec.subtext}</span>` : '';
    el.innerHTML = `
      <div class="section-header">
        <span class="section-icon">${sec.icon}</span>
        <span class="section-title">${sec.title}</span>
        ${sub}
        <div class="section-line"></div>
      </div>
      <div class="items-grid" id="grid-${sec.id}"></div>`;
    root.appendChild(el);
    const grid = el.querySelector(`#grid-${sec.id}`);
    sec.items.forEach(item => {
      if(sec.type === 'burger') grid.appendChild(buildBurgerCard(item));
      else if(sec.type === 'drink') grid.appendChild(buildDrinkCard(item));
      else grid.appendChild(buildSimpleCard(item));
    });
  });
}

/* ── SIMPLE CARD ── */
function buildSimpleCard(item){
  const c = document.createElement('div');
  c.className = 'item-card';
  c.innerHTML = `
    <div class="card-top">
      <div class="item-img${item.img?' has-img':''}">${imgTag(item)}</div>
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        <div class="item-bottom">
          <div class="item-price">R$ ${fmt(item.price)}</div>
          <button class="add-btn" onclick="addSimple('${item.id}')">+</button>
        </div>
      </div>
    </div>`;
  return c;
}

/* ── DRINK CARD ── */
function buildDrinkCard(item){
  const c = document.createElement('div');
  c.className = 'item-card';
  c.id = `card-${item.id}`;

  const opts = item.variants.map(v => {
    const fp = (item.basePrice !== undefined ? item.basePrice : item.price) + v.extra;
    const diff = v.extra > 0 ? ` (+R$ ${fmt(v.extra)})` : '';
    return `<option value="${v.id}" data-extra="${v.extra}">${v.label} — R$ ${fmt(fp)}${diff}</option>`;
  }).join('');

  c.innerHTML = `
    <div class="card-top">
      <div class="item-img${item.img?' has-img':''}">${imgTag(item)}</div>
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        <div class="drink-select-wrap">
          <select class="drink-select" id="sel-${item.id}" onchange="drinkSelectChange('${item.id}')">
            ${opts}
          </select>
          <div class="drink-add-row">
            <div class="drink-price-final" id="dprice-${item.id}">R$ ${fmt((item.basePrice!==undefined?item.basePrice:item.price) + item.variants[0].extra)}</div>
            <button class="drink-add-btn" onclick="addDrink('${item.id}')">🛒 Adicionar</button>
          </div>
        </div>
      </div>
    </div>`;
  return c;
}

function drinkSelectChange(itemId){
  const item = findItem(itemId);
  const sel  = document.getElementById(`sel-${itemId}`);
  const opt  = sel.options[sel.selectedIndex];
  const extra = parseFloat(opt.dataset.extra)||0;
  const fp = (item.basePrice!==undefined?item.basePrice:item.price) + extra;
  document.getElementById(`dprice-${itemId}`).textContent = `R$ ${fmt(fp)}`;
}

function addDrink(itemId){
  const item = findItem(itemId);
  const sel  = document.getElementById(`sel-${itemId}`);
  const varId= sel.value;
  const opt  = sel.options[sel.selectedIndex];
  const extra= parseFloat(opt.dataset.extra)||0;
  const unitPrice = (item.basePrice!==undefined?item.basePrice:item.price) + extra;
  const label = opt.label.split(' — ')[0].replace(/^[^\w]* /,'').trim(); // clean emoji prefix
  const labelClean = opt.label.split(' — ')[0];
  const key = `d_${itemId}_${varId}`;
  if(!cart[key]) cart[key]={label:labelClean, unitPrice, qty:0, emoji:item.emoji, extras:''};
  cart[key].qty++;
  updateCartBar();
  showToast(`✅ ${labelClean} adicionado!`);
}

/* ── BURGER CARD ── */
function buildBurgerCard(item){
  const c = document.createElement('div');
  c.className = 'item-card';
  c.id = `card-${item.id}`;
  if(!addonQtys[item.id]) addonQtys[item.id] = {};
  const isCombo = item.id.startsWith('c');

  const comboDrinkHTML = isCombo ? `
    <div class="combo-drink-section">
      <div class="combo-drink-badge">🎁 Incluso no combo — escolha sua bebida</div>
      <div class="combo-drink-type">
        <div class="cdt-btn" id="cdt-refri-${item.id}" onclick="selectComboDrinkType('${item.id}','refri')">
          <div class="cdt-icon">🥤</div>
          <div class="cdt-name">Refrigerante</div>
        </div>
        <div class="cdt-btn" id="cdt-suco-${item.id}" onclick="selectComboDrinkType('${item.id}','suco')">
          <div class="cdt-icon">🍹</div>
          <div class="cdt-name">Suco</div>
        </div>
      </div>
      <div class="combo-flavor-wrap" id="cflavor-${item.id}">
        <select class="combo-flavor-select" id="cflavorsel-${item.id}"></select>
      </div>
      <div class="combo-required-hint" id="chint-${item.id}">⚠️ Escolha a bebida do combo para continuar</div>
    </div>` : '';

  c.innerHTML = `
    <div class="card-top">
      <div class="item-img${item.img?' has-img':''}">${imgTag(item)}</div>
      <div class="item-info">
        <div class="item-name">${item.name}</div>
        <div class="item-desc">${item.desc}</div>
        <div class="item-bottom">
          <div class="item-price" id="price-${item.id}">R$ ${fmt(item.price)}</div>
          <button class="add-btn" id="addbtn-${item.id}" onclick="toggleBurger('${item.id}')">+</button>
        </div>
      </div>
    </div>
    <div class="expand-panel" id="panel-${item.id}">
      <div class="expand-inner">
        ${comboDrinkHTML}
        <div class="expand-label">➕ Adicionais opcionais</div>
        <div id="addonlist-${item.id}"></div>
        <div class="panel-footer">
          <div>
            <div class="panel-total-lbl">Total do item</div>
            <div class="panel-total-val" id="ptotal-${item.id}">R$ ${fmt(item.price)}</div>
          </div>
          <button class="panel-confirm" onclick="confirmBurger('${item.id}')">
            🛒 Adicionar ao pedido
          </button>
        </div>
      </div>
    </div>`;
  return c;
}

function toggleBurger(itemId){
  const wasOpen = expandedId === itemId;

  // close previously open card
  if(expandedId){
    const prev = expandedId;
    document.getElementById(`panel-${prev}`).classList.remove('open');
    document.getElementById(`card-${prev}`).classList.remove('expanded');
    document.getElementById(`addbtn-${prev}`).classList.remove('open');
    document.getElementById(`addbtn-${prev}`).textContent = '+';
    addonQtys[prev] = {};
    comboDrink[prev] = {};
    refreshBurgerPanel(prev);
    expandedId = null;
  }

  if(!wasOpen){
    expandedId = itemId;
    addonQtys[itemId] = {};
    renderAddonList(itemId);
    document.getElementById(`panel-${itemId}`).classList.add('open');
    document.getElementById(`card-${itemId}`).classList.add('expanded');
    const btn = document.getElementById(`addbtn-${itemId}`);
    btn.classList.add('open');
    btn.textContent = '✕';
    // smooth scroll card into view
    setTimeout(()=>{
      document.getElementById(`card-${itemId}`).scrollIntoView({behavior:'smooth',block:'nearest'});
    },80);
  }
}

function renderAddonList(itemId){
  const item = findItem(itemId);
  const qtys = addonQtys[itemId];
  const list = document.getElementById(`addonlist-${itemId}`);

  list.innerHTML = ADICIONAIS.map(a => {
    const q = qtys[a.id]||0;
    const ctrl = q === 0
      ? `<button class="a-btn plus" onclick="adAdd('${itemId}','${a.id}')">+</button>`
      : `<div class="addon-ctrl">
           <button class="a-btn" onclick="adSub('${itemId}','${a.id}')">−</button>
           <span class="a-qty">${q}</span>
           <button class="a-btn plus" onclick="adAdd('${itemId}','${a.id}')">+</button>
         </div>`;
    return `<div class="addon-row ${q>0?'on':''}" id="ar-${itemId}-${a.id}">
      <div class="addon-em">${a.img
        ? `<img src="${a.img}" alt="${a.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.innerHTML='${a.emoji}';">`
        : a.emoji}</div>
      <span class="addon-nm">${a.name}</span>
      <span class="addon-pr">+R$ ${fmt(a.price)}</span>
      ${ctrl}
    </div>`;
  }).join('');

  refreshBurgerPanel(itemId);
}

function adAdd(itemId, adId){
  addonQtys[itemId][adId] = (addonQtys[itemId][adId]||0)+1;
  renderAddonList(itemId);
}
function adSub(itemId, adId){
  addonQtys[itemId][adId] = Math.max(0,(addonQtys[itemId][adId]||0)-1);
  renderAddonList(itemId);
}

function refreshBurgerPanel(itemId){
  const item = findItem(itemId);
  const qtys = addonQtys[itemId]||{};
  const extra = ADICIONAIS.reduce((s,a)=>s+(qtys[a.id]||0)*a.price,0);
  const total = item.price+extra;
  const pEl = document.getElementById(`ptotal-${itemId}`);
  const prEl = document.getElementById(`price-${itemId}`);
  if(pEl) pEl.textContent = `R$ ${fmt(total)}`;
  if(prEl) prEl.textContent = `R$ ${fmt(item.price)}${extra>0?` (+R$ ${fmt(extra)})`:''}`;
}

function confirmBurger(itemId){
  // validate combo drink first
  if(!validateComboDrink(itemId)) return;

  const item  = findItem(itemId);
  const qtys  = addonQtys[itemId]||{};
  const adds  = ADICIONAIS.filter(a=>(qtys[a.id]||0)>0);
  const extra = adds.reduce((s,a)=>s+qtys[a.id]*a.price,0);
  const unitPrice = item.price+extra;
  const extrasText = adds.map(a=>qtys[a.id]>1?`${a.name}×${qtys[a.id]}`:a.name).join(', ');

  // build drink note for combos
  const d = comboDrink[itemId];
  const drinkNote = (d && d.flavor) ? d.flavor : '';
  const fullExtras = [drinkNote, extrasText].filter(Boolean).join(' · ');

  const key = `b_${++seq}`;
  cart[key] = {label:item.name, unitPrice, qty:1, emoji:item.emoji, extras:fullExtras};
  updateCartBar();
  toggleBurger(itemId);
  showToast(`✅ ${item.name} adicionado!`);
}

/* ════════════════════════════════
   SIMPLE ADD
════════════════════════════════ */
function addSimple(id){
  const item = findItem(id);
  const key = `s_${id}`;
  if(!cart[key]) cart[key]={label:item.name,unitPrice:item.price,qty:0,emoji:item.emoji,extras:''};
  cart[key].qty++;
  updateCartBar();
  showToast(`✅ ${item.name} adicionado!`);
}

/* ════════════════════════════════
   CART BAR
════════════════════════════════ */
function cartTotal(){ return Object.values(cart).reduce((s,e)=>s+e.unitPrice*e.qty,0); }
function cartCount(){ return Object.values(cart).reduce((s,e)=>s+e.qty,0); }

function updateCartBar(){
  const n = cartCount();
  document.getElementById('cartCount').textContent = `${n} ${n===1?'item':'itens'}`;
  document.getElementById('cartTotal').textContent  = `R$ ${fmt(cartTotal())}`;
  document.getElementById('cartBar').classList.toggle('visible',n>0);
}

/* ════════════════════════════════
   CART MODAL
════════════════════════════════ */
function openCartModal(){ renderCartModal(); openModal(); }

function renderCartModal(){
  const entries = Object.entries(cart).filter(([,v])=>v.qty>0);
  if(!entries.length){
    document.getElementById('modalContent').innerHTML =
      `<div class="modal-title">🛒 Seu Pedido</div><div class="empty-cart"><div class="big">🍔</div>Carrinho vazio.</div>`;
    return;
  }
  const rows = entries.map(([k,e])=>`
    <div class="ci">
      <div class="ci-emoji">${e.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${e.label}</div>
        ${e.extras?`<div class="ci-extras">➕ ${e.extras}</div>`:''}
        <div class="ci-price">R$ ${fmt(e.unitPrice*e.qty)}${e.qty>1?` (${e.qty}×)`:''}</div>
      </div>
      <div class="ci-ctrl">
        <button class="ci-btn" onclick="cSub('${k}')">−</button>
        <span class="ci-qty">${e.qty}</span>
        <button class="ci-btn" onclick="cAdd('${k}')">+</button>
      </div>
    </div>`).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-title">🛒 Seu Pedido</div>
    <div class="cart-list">${rows}</div>
    <div class="cart-divider"></div>
    <div class="tot-row main"><span>Total</span><span>R$ ${fmt(cartTotal())}</span></div>
    <button class="go-checkout-btn" onclick="openCheckoutModal()">Ir para Checkout ✅</button>`;
}

function cSub(k){
  if(!cart[k])return;
  cart[k].qty--;
  if(cart[k].qty<=0) delete cart[k];
  updateCartBar(); renderCartModal();
}
function cAdd(k){
  if(!cart[k])return;
  cart[k].qty++;
  updateCartBar(); renderCartModal();
}

/* ════════════════════════════════
   CHECKOUT MODAL
════════════════════════════════ */
function openCheckoutModal(){ renderCheckoutModal(); openModal(); }

const DELIVERY_FEE = 8;

const PAYMENT_OPTS = [
  {id:'pix',     icon:'💠', name:'Pix',      sub:'Transferência instantânea'},
  {id:'debito',  icon:'💳', name:'Débito',   sub:'Cartão de débito'},
  {id:'credito', icon:'💳', name:'Crédito',  sub:'Cartão de crédito'},
  {id:'dinheiro',icon:'💵', name:'Dinheiro', sub:'Precisa de troco?'},
];

const ORDER_TYPES = [
  {id:'entrega',  icon:'🛵', name:'Entrega',  sub:`+ R$ ${fmt(DELIVERY_FEE)}`,  subClass:''},
  {id:'retirada', icon:'🏃', name:'Retirada', sub:'Sem taxa',                   subClass:'green'},
  {id:'mesa',     icon:'🪑', name:'Mesa',     sub:'No restaurante',             subClass:'green'},
];

let selectedOrderType = null;

function renderCheckoutModal(){
  const entries = Object.entries(cart).filter(([,v])=>v.qty>0);
  if(!entries.length){
    document.getElementById('modalContent').innerHTML =
      `<div class="modal-title">Checkout</div><div class="empty-cart"><div class="big">😅</div>Adicione itens primeiro.</div>`;
    return;
  }
  selectedOrderType = null;

  const subtotal = cartTotal();
  const orderTypeBtns = ORDER_TYPES.map(t=>`
    <div class="ot-btn" id="ot-${t.id}" onclick="selectOrderType('${t.id}')">
      <div class="ot-icon">${t.icon}</div>
      <div class="ot-name">${t.name}</div>
      <div class="ot-sub ${t.subClass}">${t.sub}</div>
    </div>`).join('');

  const payOpts = PAYMENT_OPTS.map(p=>`
    <label class="pay-opt" id="popt-${p.id}" onclick="selectPay('${p.id}')">
      <input type="radio" name="pagamento" value="${p.id}">
      <div class="pay-icon">${p.icon}</div>
      <div class="pay-name">${p.name}</div>
      <div class="pay-sub">${p.sub}</div>
    </label>`).join('');

  const rows = entries.map(([,e])=>
    `<div class="tot-row"><span>${e.label}${e.qty>1?` ×${e.qty}`:''}</span><span>R$ ${fmt(e.unitPrice*e.qty)}</span></div>`
  ).join('');

  document.getElementById('modalContent').innerHTML = `
    <div class="modal-title">✅ Finalizar Pedido</div>

    <div class="form-group">
      <label>Seu nome</label>
      <input type="text" id="cName" placeholder="Ex: João Silva" autocomplete="name">
    </div>

    <div class="form-group">
      <span class="pay-label">Tipo de pedido</span>
      <div class="order-type-grid">${orderTypeBtns}</div>
    </div>

    <!-- Endereço — aparece só na entrega -->
    <div class="order-extra-wrap" id="wrap-entrega">
      <div class="delivery-fee-line">
        <span>🛵 Taxa de entrega</span>
        <span>R$ ${fmt(DELIVERY_FEE)}</span>
      </div>
      <div class="form-group" style="margin-bottom:0;">
        <label>Endereço completo</label>
        <input type="text" id="cAddr" placeholder="Ex: Rua das Flores, 100 — Bairro">
      </div>
    </div>

    <!-- Mesa — aparece só em mesa -->
    <div class="order-extra-wrap" id="wrap-mesa">
      <div class="form-group" style="margin-bottom:0;">
        <label>Número da mesa</label>
        <input type="text" id="cMesa" placeholder="Ex: Mesa 5">
      </div>
    </div>

    <!-- Pagamento — aparece só na entrega -->
    <div class="order-extra-wrap" id="wrap-pagamento">
      <span class="pay-label">Forma de pagamento</span>
      <div class="pay-grid">${payOpts}</div>
      <div class="troco-wrap" id="trocoWrap">
        <label>Troco para quanto?</label>
        <input type="number" id="cTroco" placeholder="Ex: 50.00" min="0" step="0.01" inputmode="decimal" onkeypress="return event.charCode>=48&&event.charCode<=57||event.charCode===46" oninput="this.value=this.value.replace(/[^0-9.]/g,'')">
      </div>
    </div>

    <div class="cart-divider"></div>
    ${rows}
    <div class="tot-row" id="feeRow" style="display:none;color:var(--accent2);">
      <span>Taxa de entrega</span><span>R$ ${fmt(DELIVERY_FEE)}</span>
    </div>
    <div class="tot-row main" style="margin-top:8px;">
      <span>Total</span><span id="checkoutTotal">R$ ${fmt(subtotal)}</span>
    </div>
    <button class="wa-btn" onclick="sendWA()">💬 Enviar pelo WhatsApp</button>`;
}

function selectOrderType(type){
  selectedOrderType = type;
  ORDER_TYPES.forEach(t=>{
    document.getElementById(`ot-${t.id}`)?.classList.toggle('active', t.id===type);
  });

  // show/hide conditional sections
  document.getElementById('wrap-entrega')?.classList.toggle('show', type==='entrega');
  document.getElementById('wrap-mesa')?.classList.toggle('show', type==='mesa');
  document.getElementById('wrap-pagamento')?.classList.toggle('show', type==='entrega');

  // update total line
  const feeRow = document.getElementById('feeRow');
  const totalEl = document.getElementById('checkoutTotal');
  const base = cartTotal();
  if(type==='entrega'){
    if(feeRow) feeRow.style.display='flex';
    if(totalEl) totalEl.textContent = `R$ ${fmt(base + DELIVERY_FEE)}`;
  } else {
    if(feeRow) feeRow.style.display='none';
    if(totalEl) totalEl.textContent = `R$ ${fmt(base)}`;
  }

  // reset payment if switching away from entrega
  if(type !== 'entrega'){
    PAYMENT_OPTS.forEach(p=>document.getElementById(`popt-${p.id}`)?.classList.remove('selected'));
    const tw = document.getElementById('trocoWrap');
    if(tw) tw.classList.remove('show');
  }
}

function selectPay(id){
  PAYMENT_OPTS.forEach(p=>{
    document.getElementById(`popt-${p.id}`)?.classList.toggle('selected', p.id===id);
  });
  const tw = document.getElementById('trocoWrap');
  if(tw) tw.classList.toggle('show', id==='dinheiro');
}

function sendWA(){
  const name = document.getElementById('cName')?.value.trim();
  if(!name){showToast('⚠️ Informe seu nome!');return;}
  if(!selectedOrderType){showToast('⚠️ Escolha o tipo de pedido!');return;}

  const total = selectedOrderType==='entrega' ? cartTotal()+DELIVERY_FEE : cartTotal();

  let localInfo = '';
  let payLabel = '';
  let trocoVal = '';

  if(selectedOrderType==='entrega'){
    const addr = document.getElementById('cAddr')?.value.trim();
    if(!addr){showToast('⚠️ Informe o endereco de entrega!');return;}
    const selPay = document.querySelector('.pay-opt.selected input[type=radio]');
    if(!selPay){showToast('⚠️ Escolha a forma de pagamento!');return;}
    localInfo = `Endereco: ${addr}`;
    var payId = selPay.value;
    payLabel = PAYMENT_OPTS.find(p=>p.id===payId)?.name || payId;
    if(payId==='dinheiro'){
      const trocoInput = document.getElementById('cTroco');
      const trocoNum = parseFloat(trocoInput?.value);
      if(!trocoInput?.value || isNaN(trocoNum)){
        showToast('⚠️ Informe o valor do troco!'); return;
      }
      if(trocoNum <= total){
        showToast(`⚠️ Troco deve ser maior que R$ ${fmt(total)}!`); return;
      }
      trocoVal = fmt(trocoNum);
    }
  } else if(selectedOrderType==='mesa'){
    const mesa = document.getElementById('cMesa')?.value.trim();
    if(!mesa){showToast('⚠️ Informe o numero da mesa!');return;}
    localInfo = `Mesa: ${mesa}`;
  } else {
    localInfo = `Retirada no balcao`;
  }

  const orderName = ORDER_TYPES.find(t=>t.id===selectedOrderType)?.name || '';

  let msg = `*PIT BURGUER - NOVO PEDIDO*\n`;
  msg += `------------------\n`;
  msg += `Cliente: ${name}\n`;
  msg += `Tipo: ${orderName}\n`;
  msg += `${localInfo}\n`;
  msg += `------------------\n`;
  msg += `*ITENS:*\n`;

  Object.values(cart).filter(e=>e.qty>0).forEach(e=>{
    msg += `- ${e.label}${e.qty>1?` x${e.qty}`:''} - R$ ${fmt(e.unitPrice*e.qty)}`;
    if(e.extras) msg += `\n  + ${e.extras}`;
    msg += '\n';
  });

  msg += `------------------\n`;
  if(selectedOrderType==='entrega') msg += `Taxa de entrega: R$ ${fmt(DELIVERY_FEE)}\n`;
  msg += `*TOTAL: R$ ${fmt(total)}*\n`;
  if(selectedOrderType==='entrega'){
    msg += `Pagamento: ${payLabel}`;
    if(trocoVal) msg += `\nTroco para: R$ ${trocoVal}`;
    msg += '\n';
  }
  msg += `\nPedido via cardapio digital`;
  window.location.href = `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
}

/* ════════════════════════════════
   HELPERS
════════════════════════════════ */
function fmt(n){ return Number(n).toFixed(2).replace('.',','); }
function findItem(id){ for(const s of menu){const f=s.items.find(i=>i.id===id);if(f)return f;} return null; }

function openModal(){ document.getElementById('overlay').classList.add('open'); document.body.style.overflow='hidden'; }
function closeModal(){ document.getElementById('overlay').classList.remove('open'); document.body.style.overflow=''; }
function overlayClick(e){ if(e.target===document.getElementById('overlay'))closeModal(); }

let _tt;
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(_tt); _tt=setTimeout(()=>t.classList.remove('show'),2200);
}

/* ════════════════════════════════
   CATEGORY NAV
════════════════════════════════ */
document.querySelectorAll('.cat-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.target)?.scrollIntoView({behavior:'smooth'});
  });
});

const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const id=e.target.id;
      document.querySelectorAll('.cat-btn').forEach(b=>b.classList.toggle('active',b.dataset.target===id));
    }
  });
},{rootMargin:'-50% 0px -50% 0px'});

/* ════════════════════════════════
   INIT
════════════════════════════════ */
renderMenu();
setTimeout(()=>menu.map(s=>document.getElementById(s.anchorId)).filter(Boolean).forEach(s=>obs.observe(s)),100);