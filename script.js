const MENU = {
    categorias: [
        { id: "burgers", nome: "🍔 LANCHES", itens: [
            { id: "h1", nome: "X-Pit", desc: "Pão brioche, blend bovino 150g e queijo mussarela.", preco: 19.00, img: "" },
            { id: "h2", nome: "Pitizinho Burg", desc: "Pão brioche, blend bovino 150g, cheddar, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e salada.", preco: 25.00, img: "" },
            { id: "h3", nome: "Pig Burg", desc: "Pão brioche, blend suíno 150g, cheddar, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.", preco: 23.00, img: "" },
            { id: "h4", nome: "Pollos Burg", desc: "Pão brioche, blend de frango 150g, cheddar, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.", preco: 23.00, img: "" },
            { id: "h5", nome: "Pit Burg", desc: "Pão brioche, blend bovino 150g, cheddar, ovo, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi.", preco: 27.00, img: "" },
            { id: "h6", nome: "Bull Burg", desc: "Pão brioche, blend bovino 150g, cheddar, bacon, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.", preco: 29.00, img: "" },
            { id: "h7", nome: "Pit Love Burg", desc: "Pão brioche, blend bovino 150g, cheddar, calabresa, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha e abacaxi grelhado.", preco: 29.00, img: "" },
            { id: "h8", nome: "Picanha Burg", desc: "Pão brioche, blend de picanha 150g, cheddar, bacon, maionese caseira, cebola caramelizada, molho barbecue, macaxeira palha, abacaxi e geleia apimentada de abacaxi.", preco: 35.00, img: "" },
            { id: "h9", nome: "Pitbull Burg", desc: "Pão brioche, 2 blends bovino 150g, 2 cheddar, 2 bacon, 2 maionese caseira, 2 cebola caramelizada, molho barbecue, macaxeira palha, 2 abacaxis grelhados e geleia apimentada de abacaxi.", preco: 37.00, img: "" }
        ]},
        { id: "combos", nome: "🍟 COMBOS", itens: [
            { id: "c1", nome: "Combo X-Pit", desc: "Acompanha batata + refri ou suco.", preco: 32.99, img: "", isCombo: true },
            { id: "c2", nome: "Combo Pig Burg", desc: "Acompanha batata + refri ou suco.", preco: 33.99, img: "", isCombo: true },
            { id: "c3", nome: "Combo Pitizinho Burg", desc: "Acompanha batata + refri ou suco.", preco: 36.99, img: "", isCombo: true },
            { id: "c4", nome: "Combo Pitbull Burg", desc: "Acompanha batata + refri ou suco.", preco: 50.99, img: "", isCombo: true }
        ]},
        { id: "caldos", nome: "🍲 CALDOS", itens: [
            { id: "ca1", nome: "Caldo de Frango", desc: "Ovo, azeitona, queijo, torrada e limão.", preco: 20.00, img: "" },
            { id: "ca2", nome: "Caldo de Carne", desc: "Ovo, azeitona, queijo, calabresa, torrada e limão.", preco: 20.00, img: "" },
            { id: "ca3", nome: "Caldo de Feijão", desc: "Ovo, azeitona, couve, queijo, calabresa, bacon, torrada e limão.", preco: 20.00, img: "" }
        ]},
        { id: "porcoes", nome: "🍟 PORÇÕES", itens: [
            { id: "p1", nome: "Batata Simples", desc: "Acompanha catchup.", preco: 14.00, img: "" },
            { id: "p2", nome: "Batata Turbo", desc: "Mussarela, cheddar e bacon.", preco: 22.00, img: "" }
        ]},
        { id: "bebidas", nome: "🥤 BEBIDAS", itens: [
            { id: "be1", nome: "Refrigerante Lata", desc: "Escolha o sabor.", preco: 6.00, img: "", sabores: ["Coca-Cola", "Guaraná Antarctica", "Fanta Laranja", "Sprite"] },
            { id: "be2", nome: "Refrigerante 1l", desc: "Escolha o sabor.", preco: 6.00, img: "", sabores: ["Coca-Cola", "Guaraná Antarctica", "Fanta Laranja", "Sprite"] },
            { id: "be3", nome: "Refrigerante 2", desc: "Escolha o sabor.", preco: 6.00, img: "", sabores: ["Coca-Cola", "Guaraná Antarctica", "Fanta Laranja", "Sprite"] },
            { id: "be4", nome: "Suco (300ml)", desc: "Escolha o sabor.", preco: 6.00, img: "", sabores: ["Acerola", "Maracujá", "Goiaba"] },
            { id: "be5", nome: "Água", desc: "Com ou sem gás.", preco: 3.00, img: "", sabores: [
                { nome: "Sem Gás", preco: 0 }, 
                { nome: "Com Gás", preco: 1.00 }
            ]}
        ]}
    ],
    adicionais: [
        { id: "a1", nome: "Blend 150g", preco: 12.00 },
        { id: "a2", nome: "Bacon", preco: 5.00 },
        { id: "a3", nome: "Calabresa", preco: 6.00 },
        { id: "a4", nome: "Queijo Cheddar", preco: 5.00 },
        { id: "a5", nome: "Macaxeira palha", preco: 4.00 },
        { id: "a6", nome: "Molho caseiro", preco: 4.00 },
        { id: "a7", nome: "Ovo", preco: 4.00 },
        { id: "a8", nome: "Geleia apimentada de abacaxi", preco: 4.00 }
    ]
};

let carrinho = [];
let produtoAtual = null;

const formatarMoeda = (v) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function init() {
    const nav = document.getElementById('nav-categorias');
    const main = document.getElementById('menu-container');
    if(!nav || !main) return;
    
    nav.innerHTML = '';
    main.innerHTML = '';
    
    MENU.categorias.forEach(cat => {
        nav.innerHTML += `<a href="#${cat.id}" class="nav-btn">${cat.nome}</a>`;
        let html = `<section id="${cat.id}"><h2>${cat.nome}</h2><div class="grid">`;
        cat.itens.forEach(item => {
            html += `
                <div class="card" onclick='abrirProduto(${JSON.stringify(item)})'>
                    <div class="card-content">
                        <div class="card-info">
                            <div class="card-header"><span class="card-title">${item.nome}</span></div>
                            <div class="card-desc">${item.desc}</div>
                            <span class="card-price">${formatarMoeda(item.preco)}</span>
                        </div>
                        ${item.img ? `<img src="${item.img}" class="card-img" alt="${item.nome}">` : ''}
                    </div>
                </div>`;
        });
        main.innerHTML += html + `</div></section>`;
    });
}

function abrirProduto(item) {
    produtoAtual = { ...item, extras: [] };
    document.getElementById('modal-title').innerText = item.nome;
    document.getElementById('modal-desc').innerText = item.desc;
    document.getElementById('modal-obs').value = '';
    
    const addonsDiv = document.getElementById('modal-addons');
    const sectionAddons = document.getElementById('section-addons');
    const sectionSabores = document.getElementById('section-sabores');
    const divSabores = document.getElementById('modal-sabores');
    
    addonsDiv.innerHTML = '';
    divSabores.innerHTML = '';

    // Lógica para mostrar Adicionais: Lanches e Combos mostram. Bebidas, Caldos e Porções não.
    const permiteExtras = item.id.startsWith('h') || item.isCombo;
    sectionAddons.style.display = permiteExtras ? 'block' : 'none';

    if (permiteExtras) {
        MENU.adicionais.forEach(add => {
            addonsDiv.innerHTML += `
                <div class="addon-line">
                    <span>${add.nome} (+${formatarMoeda(add.preco)})</span>
                    <input type="checkbox" value='${JSON.stringify(add)}' onchange="calcSubtotal()">
                </div>`;
        });
    }

    // Lógica para Bebidas (Combos vs Bebidas Avulsas)
    if (item.isCombo) {
        sectionSabores.style.display = 'block';
        document.querySelector('#section-sabores label').innerText = "🥤 BEBIDA DO COMBO";
        divSabores.innerHTML = `
            <select id="tipo-bebida-combo" onchange="mostrarSaboresCombo()" style="width:100%; padding:12px; border-radius:8px; background:#2a2a2a; color:#fff; border:1px solid #444; font-size:16px;">
                <option value="">Selecione Refri ou Suco...</option>
                <option value="refri">Refrigerante</option>
                <option value="suco">Suco</option>
            </select>
            <div id="lista-sabores-combo" style="margin-top:10px;"></div>
        `;
    } else if (item.sabores && item.sabores.length > 0) {
        sectionSabores.style.display = 'block';
        document.querySelector('#section-sabores label').innerText = "ESCOLHA O SABOR/OPÇÃO";
        item.sabores.forEach((sabor, index) => {
            let nomeSabor = typeof sabor === 'string' ? sabor : sabor.nome;
            let precoExtra = typeof sabor === 'string' ? 0 : sabor.preco;
            let valorInput = typeof sabor === 'object' ? JSON.stringify(sabor) : sabor;
            divSabores.innerHTML += `
                <div class="addon-line">
                    <span>${nomeSabor} ${precoExtra > 0 ? '(+'+formatarMoeda(precoExtra)+')' : ''}</span>
                    <input type="radio" name="sabor-radio" value='${valorInput}' ${index === 0 ? 'checked' : ''} onchange="calcSubtotal()">
                </div>`;
        });
    } else {
        sectionSabores.style.display = 'none';
    }

    calcSubtotal();
    document.getElementById('overlay').classList.add('active');
    document.getElementById('modal-produto').classList.add('active');
}

function mostrarSaboresCombo() {
    const tipo = document.getElementById('tipo-bebida-combo').value;
    const lista = document.getElementById('lista-sabores-combo');
    lista.innerHTML = '';
    if (!tipo) return;

    const sabores = tipo === 'refri' ? 
        MENU.categorias.find(c => c.id === 'bebidas').itens.find(i => i.id === 'be1').sabores : 
        MENU.categorias.find(c => c.id === 'bebidas').itens.find(i => i.id === 'be4').sabores;

    lista.innerHTML = `<label style="font-size: 13px; color: #ffcc00; display:block; margin-bottom:8px;">QUAL O SABOR?</label>`;
    sabores.forEach((s, index) => {
        lista.innerHTML += `
            <div class="addon-line">
                <span>${s}</span>
                <input type="radio" name="sabor-radio" value="${s}" ${index === 0 ? 'checked' : ''} onchange="calcSubtotal()">
            </div>`;
    });
}

function calcSubtotal() {
    let total = produtoAtual.preco;
    
    // Extras (Checkbox)
    const checks = document.querySelectorAll('#modal-addons input:checked');
    produtoAtual.extras = Array.from(checks).map(c => JSON.parse(c.value));
    produtoAtual.extras.forEach(e => total += e.preco);

    // Sabores com preço (ex: Água com Gás)
    const saborSelecionado = document.querySelector('input[name="sabor-radio"]:checked');
    if (saborSelecionado) {
        try {
            let saborObj = JSON.parse(saborSelecionado.value);
            if (saborObj.preco) total += saborObj.preco;
        } catch(e) {}
    }

    produtoAtual.precoFinal = total;
    document.getElementById('modal-btn-price').innerText = formatarMoeda(total);
}

function adicionarAoCarrinho() {
    const comboBebida = document.getElementById('tipo-bebida-combo');
    if (comboBebida && comboBebida.value === "") return alert("Por favor, escolha a bebida do combo!");

    produtoAtual.obs = document.getElementById('modal-obs').value;
    const saborInput = document.querySelector('input[name="sabor-radio"]:checked');
    
    if (saborInput) {
        let nomeSabor = "";
        try {
            nomeSabor = JSON.parse(saborInput.value).nome;
        } catch(e) { nomeSabor = saborInput.value; }
        
        const prefixo = comboBebida ? (comboBebida.value === 'refri' ? 'Refri: ' : 'Suco: ') : 'Sabor: ';
        produtoAtual.obs = `[${prefixo}${nomeSabor}] ` + produtoAtual.obs;
    }

    carrinho.push({ ...produtoAtual, tempId: Date.now() });
    fecharModais();
    atualizarCarrinho();
}

function fecharModais() {
    document.querySelectorAll('.bottom-sheet, .overlay').forEach(el => el.classList.remove('active'));
}

function atualizarCarrinho() {
    const btn = document.getElementById('floating-cart');
    const total = carrinho.reduce((acc, i) => acc + i.precoFinal, 0);
    document.getElementById('cart-count').innerText = carrinho.length;
    document.getElementById('cart-total').innerText = formatarMoeda(total);
    carrinho.length > 0 ? btn.classList.add('active') : btn.classList.remove('active');
}

function abrirCheckout() {
    const resumo = document.getElementById('checkout-resumo');
    resumo.innerHTML = '';
    carrinho.forEach(item => {
        resumo.innerHTML += `
            <div class="cart-item-row" style="border-bottom: 1px solid #333; padding: 10px 0;">
                <div style="display:flex; justify-content:space-between;">
                    <b>${item.nome}</b>
                    <span>${formatarMoeda(item.precoFinal)}</span>
                </div>
                ${item.extras.map(e => `<small style="display:block; color:#aaa;">+ ${e.nome}</small>`).join('')}
                ${item.obs ? `<small style="display:block; color:#ffcc00; margin-top:4px;">📝 ${item.obs}</small>` : ''}
                <button class="remove-btn" onclick="removerDoCarrinho(${item.tempId})" style="background:none; border:none; color:#ff4444; cursor:pointer; padding:5px 0; font-size:12px;">🗑 REMOVER</button>
            </div>`;
    });
    document.getElementById('overlay').classList.add('active');
    document.getElementById('modal-checkout').classList.add('active');
}

function removerDoCarrinho(tempId) {
    carrinho = carrinho.filter(i => i.tempId !== tempId);
    atualizarCarrinho();
    if(carrinho.length > 0) abrirCheckout(); else fecharModais();
}

function enviarWhatsApp() {
    const nome = document.getElementById('cliente-nome').value;
    const endereco = document.getElementById('cliente-endereco').value;
    const pagamento = document.getElementById('cliente-pagamento').value;
    if (!nome || !endereco) return alert("Preencha seu nome e endereço para entrega!");

    let msg = `*NOVO PEDIDO - PIT BURGUER*\n\n`;
    carrinho.forEach(i => {
        msg += `*1x ${i.nome}* (${formatarMoeda(i.precoFinal)})\n`;
        i.extras.forEach(e => msg += `  └ + ${e.nome}\n`);
        if(i.obs) msg += `   *Obs*: ${i.obs}\n`;
        msg += `\n`;
    });
    const total = carrinho.reduce((acc, i) => acc + i.precoFinal, 0);
    msg += `*TOTAL: ${formatarMoeda(total)}*\n\n`;
    msg += `*CLIENTE:* ${nome}\n*ENDEREÇO:* ${endereco}\n*PAGAMENTO:* ${pagamento}`;
    window.open(`https://wa.me/5591982386167?text=${encodeURIComponent(msg)}`);
}

init();