# Guia Passo a Passo: Trocar Emojis por Imagens PNG Geradas com IA

Este guia mostra como substituir os emojis do cartão por imagens PNG personalizadas geradas com IA.

---

## 📋 Resumo do Processo

1. **Gerar 4 imagens PNG** com IA (uma para cada página)
2. **Criar pasta de assets** no projeto
3. **Salvar as imagens** na pasta de assets
4. **Modificar o array `cardPages`** para referenciar as imagens
5. **Substituir os emojis** por `<motion.img>` no componente
6. **Testar** as mudanças

---

## PASSO 1: Gerar as 4 Imagens PNG com IA

Você vai gerar 4 imagens PNG (uma para cada página do cartão).

### Imagem 1 - Página "Parabéns!" (Bolo de Aniversário)
**Prompt sugerido:**
```
A beautiful birthday cake with candles, decorated with colorful frosting and sprinkles, 
on a solid white background, anime style, transparent background, high quality, 
professional illustration, pastel colors, cute style
```
**Salve como:** `birthday-cake.png`

### Imagem 2 - Página "Diversão" (Balões e Confete)
**Prompt sugerido:**
```
Colorful balloons and confetti, party celebration theme, floating in the air, 
on a solid white background, anime style, transparent background, high quality, 
professional illustration, vibrant colors, festive mood
```
**Salve como:** `party-balloons.png`

### Imagem 3 - Página "Sucesso" (Estrela Brilhante)
**Prompt sugerido:**
```
A shining golden star with sparkles and light rays, magical glow effect, 
on a solid white background, anime style, transparent background, high quality, 
professional illustration, luminous, mystical
```
**Salve como:** `shining-star.png`

### Imagem 4 - Página "Amor" (Coração com Flores)
**Prompt sugerido:**
```
A beautiful heart surrounded by flowers and rose petals, romantic theme, 
on a solid white background, anime style, transparent background, high quality, 
professional illustration, elegant, love theme
```
**Salve como:** `heart-flowers.png`

---

## PASSO 2: Criar a Pasta de Assets

No seu projeto Next.js, crie uma pasta para armazenar as imagens:

```bash
# No terminal, na raiz do projeto
mkdir -p src/assets
```

**Estrutura esperada:**
```
src/
├── app/
│   ├── page.tsx
│   └── layout.tsx
├── assets/          ← NOVA PASTA
│   ├── birthday-cake.png
│   ├── party-balloons.png
│   ├── shining-star.png
│   └── heart-flowers.png
```

---

## PASSO 3: Salvar as Imagens na Pasta

Depois de gerar as 4 imagens com IA, salve-as na pasta `src/assets/` com os nomes acima.

**Importante:** Certifique-se de que:
- ✅ As imagens têm fundo transparente (PNG com transparência)
- ✅ Os nomes dos arquivos são exatamente como listado acima
- ✅ As imagens estão em formato PNG

---

## PASSO 4: Modificar o Array `cardPages`

Abra o arquivo `src/app/page.tsx` e encontre o array `cardPages` (por volta da linha 20).

### ANTES (com emojis):
```typescript
const cardPages: CardPage[] = [
  {
    id: 1,
    title: 'Parabéns!',
    content: 'Que seu dia seja tão especial quanto você é para todos nós!',
    emoji: '🎂',
    bgGradient: 'linear-gradient(135deg, #C41E3A 0%, #A01830 100%)',
  },
  // ... mais páginas
];
```

### DEPOIS (com imagens):

**Primeiro, adicione as importações no TOPO do arquivo (logo após `'use client';`):**

```typescript
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

// ← ADICIONE ESTAS 4 LINHAS:
import birthdayCakeImg from '@/assets/birthday-cake.png';
import partyBalloonsImg from '@/assets/party-balloons.png';
import shiningStarImg from '@/assets/shining-star.png';
import heartFlowersImg from '@/assets/heart-flowers.png';
```

**Depois, mude a interface `CardPage` para aceitar imagens:**

```typescript
// ANTES:
interface CardPage {
  id: number;
  title: string;
  content: string;
  emoji: string;
  bgGradient: string;
}

// DEPOIS:
interface CardPage {
  id: number;
  title: string;
  content: string;
  image: string;           // ← Mude de 'emoji' para 'image'
  imageAlt: string;        // ← Adicione descrição alternativa
  bgGradient: string;
}
```

**Finalmente, atualize o array `cardPages`:**

```typescript
const cardPages: CardPage[] = [
  {
    id: 1,
    title: 'Parabéns!',
    content: 'Que seu dia seja tão especial quanto você é para todos nós!',
    image: birthdayCakeImg,           // ← Imagem importada
    imageAlt: 'Bolo de aniversário',  // ← Descrição
    bgGradient: 'linear-gradient(135deg, #C41E3A 0%, #A01830 100%)',
  },
  {
    id: 2,
    title: 'Diversão',
    content: 'Que este ano traga muitas risadas, aventuras e momentos inesquecíveis!',
    image: partyBalloonsImg,
    imageAlt: 'Balões e confete',
    bgGradient: 'linear-gradient(135deg, #9B4D96 0%, #7A3A75 100%)',
  },
  {
    id: 3,
    title: 'Sucesso',
    content: 'Que todos os seus sonhos se tornem realidade e seus objetivos sejam alcançados!',
    image: shiningStarImg,
    imageAlt: 'Estrela brilhante',
    bgGradient: 'linear-gradient(135deg, #1B1B3A 0%, #0F0F1E 100%)',
  },
  {
    id: 4,
    title: 'Amor',
    content: 'Cercado de pessoas que te amam e de momentos que valem a pena viver!',
    image: heartFlowersImg,
    imageAlt: 'Coração com flores',
    bgGradient: 'linear-gradient(135deg, #C41E3A 0%, #A01830 100%)',
  },
];
```

---

## PASSO 5: Substituir os Emojis por `<motion.img>`

Agora você precisa encontrar onde os emojis são renderizados e substituir por imagens.

### Encontre esta seção no arquivo (por volta da linha 200):

```typescript
// ANTES (com emoji):
<motion.div
  className="text-6xl"
  animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
  {currentCardPage.emoji}  {/* ← EMOJI AQUI */}
</motion.div>
```

### Substitua por (com imagem):

```typescript
// DEPOIS (com imagem):
<motion.img
  src={currentCardPage.image}
  alt={currentCardPage.imageAlt}
  className="w-28 h-28 object-contain mb-4"
  animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}
  transition={{ duration: 3, repeat: Infinity }}
/>
```

**Explicação de cada propriedade:**
- `src={currentCardPage.image}` — URL da imagem importada
- `alt={currentCardPage.imageAlt}` — Texto alternativo para acessibilidade
- `className="w-28 h-28 object-contain mb-4"` — Tamanho fixo (112px × 112px) e `object-contain` garante que não distorça
- `animate={{ scale: [1, 1.08, 1], rotate: [0, 3, -3, 0] }}` — Pulsação suave + rotação leve
- `transition={{ duration: 3, repeat: Infinity }}` — Animação infinita em 3 segundos

---

## PASSO 6: Testar as Mudanças

1. **Salve o arquivo** `src/app/page.tsx`
2. **O servidor Next.js vai recarregar automaticamente**
3. **Abra o navegador** e veja as imagens no lugar dos emojis
4. **Teste a interação:**
   - Clique para abrir o cartão
   - Navegue entre as páginas
   - Verifique se as imagens aparecem corretamente

---

## 🎨 Dicas Importantes

### Tamanhos de Imagem
Se as imagens ficarem muito pequenas ou grandes, ajuste a classe:
- `w-28 h-28` = 112px × 112px (padrão)
- `w-32 h-32` = 128px × 128px (maior)
- `w-24 h-24` = 96px × 96px (menor)

### Animação
Se quiser mudar a velocidade da animação:
```typescript
transition={{ duration: 2, repeat: Infinity }}  // Mais rápido (2 segundos)
transition={{ duration: 4, repeat: Infinity }}  // Mais lento (4 segundos)
```

### Fundo Transparente
Certifique-se de que as imagens PNG têm fundo transparente. Se não tiverem:
- Use um editor online como [remove.bg](https://remove.bg)
- Ou regenere as imagens com o prompt incluindo "transparent background"

---

## 📍 Localização Exata das Mudanças

| Mudança | Arquivo | Linha Aproximada |
|---------|---------|------------------|
| Importações | `src/app/page.tsx` | 5-8 |
| Interface `CardPage` | `src/app/page.tsx` | 20-27 |
| Array `cardPages` | `src/app/page.tsx` | 30-60 |
| Renderização da imagem | `src/app/page.tsx` | 200-210 |

---

## ✅ Checklist Final

- [ ] Gerei 4 imagens PNG com IA
- [ ] Criei a pasta `src/assets/`
- [ ] Salvei as 4 imagens na pasta
- [ ] Adicionei as 4 importações no topo do `page.tsx`
- [ ] Modifiquei a interface `CardPage`
- [ ] Atualizei o array `cardPages`
- [ ] Substituí o emoji pela `<motion.img>`
- [ ] Testei no navegador
- [ ] As imagens aparecem corretamente
- [ ] As animações funcionam

---

## 🆘 Troubleshooting

### As imagens não aparecem
- Verifique se os nomes dos arquivos estão corretos
- Certifique-se de que estão em `src/assets/`
- Recarregue a página (Ctrl+F5 ou Cmd+Shift+R)

### As imagens aparecem distorcidas
- Adicione `object-contain` na classe
- Ajuste os tamanhos `w-28 h-28`

### Erro de import
- Verifique se o caminho `@/assets/...` está correto
- Certifique-se de que os nomes dos arquivos correspondem exatamente

---

**Pronto! Agora você tem um guia completo para trocar emojis por imagens PNG! 🎉**
