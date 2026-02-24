
import fs from 'fs';
import path from 'path';
import { SITE_CONTENT } from '../lib/content';

const targetFile = path.join(process.cwd(), 'PROPOSAL.md');

function generateMarkdown() {
  const { hero, integrationConcept, painPoints, methodology, services, cta, footer, contactModal, navbar } = SITE_CONTENT;

  let md = `# Proposta de Valor e Conteúdo do Site - Delavia Tech

*Este documento é gerado automaticamente a partir de \`lib/content.ts\`. Não edite este arquivo diretamente.*

---

## 1. Navbar
**Logo:** ${navbar?.logo?.text || 'DELAVIA'}.${navbar?.logo?.highlight || 'TECH'}
**Links:**
- ${navbar?.links?.solutions || 'Soluções'}
- ${navbar?.links?.method || 'Método'}
- ${navbar?.links?.contact || 'Contato'}

## 2. Hero Section
**Badge:** ${hero.badge}
**Título:** ${hero.title.part1} **${hero.title.highlight}**
**Descrição:** ${hero.description}

**CTAs:**
- Primário: ${hero.cta.primary}
- Secundário: ${hero.cta.secondary}

**Destaques (Features):**
${hero.features.map(f => `- **${f.title}**: ${f.description}`).join('\n')}

---

## 3. Conceito de Integração (Caos vs Ordem)
**Título:** ${integrationConcept.title.part1} **${integrationConcept.title.highlight}**, ${integrationConcept.title.part2}
**Descrição:** ${integrationConcept.description}

### Alerta
**Título:** ${integrationConcept.alertBox.title}
**Descrição:** ${integrationConcept.alertBox.description}

### Cenário Caos (Atual)
**Título:** ${integrationConcept.chaos.title}
**Problemas:**
${integrationConcept.chaos.points.map(p => `- **${p.title}**: ${p.description}`).join('\n')}

### Cenário Ordem (Proposta)
**Título:** ${integrationConcept.order.title}
**Benefícios:**
${integrationConcept.order.points.map(p => `- **${p.title}**: ${p.description}`).join('\n')}

---

## 4. Dores do Cliente (Pain Points)
**Título:** ${painPoints.title.part1} **${painPoints.title.highlight}**
**Descrição:** ${painPoints.description}

**Cards:**
${painPoints.cards.map(c => `- **${c.title}**: ${c.description}`).join('\n')}

---

## 5. Metodologia
**Manifesto:**
${methodology.title.line1} **${methodology.title.highlight1}**
${methodology.title.line2} **${methodology.title.highlight2}**
${methodology.title.line3} **${methodology.title.highlight3}**

**Pilares:**
${methodology.cards.map(c => `- **${c.title}**: ${c.description} ${c.badge ? `(Badge: ${c.badge})` : ''}`).join('\n')}

---

## 6. Serviços (Pipeline de Valor)
**Título:** ${services.title}
**Badge:** ${services.badge}
**Descrição Geral:** ${services.description}

**Etapas:**
${services.items.map(s => `
### ${s.title} (${s.shortDesc})
*${s.description}*
**Entregáveis:**
${s.features.map(f => `- ${f}`).join('\n')}
`).join('\n')}

---

## 7. Rodapé & CTA Final
**Título CTA:** ${cta.title}
**Descrição CTA:** ${cta.description}
**Botão:** ${cta.button}

**Copyright:** ${footer.copyright}
**Empresa:** ${footer.company}

---

## 8. Modal de Contato
**Título:** ${contactModal.title}
**Link do Formulário:** ${contactModal.formUrl}
`;

  fs.writeFileSync(targetFile, md);
  console.log(`✅ Documentação atualizada com sucesso em: ${targetFile}`);
}

generateMarkdown();
