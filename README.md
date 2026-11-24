# Meu Financeiro

Controle do mês: ganhos, gastos, cartão, dinheiro guardado e leitura automática de extratos
(PDF, OFX/OFC, CSV, TXT e Excel de Itaú, Caixa, Nubank, Bradesco, Santander, Inter, BB, PayPal, Mercado Pago e outros).

O app é um único arquivo (`index.html`). Com o Supabase ligado, cada pessoa entra com e-mail e senha
e os dados ficam salvos na conta, iguais no celular e no computador. Sem o Supabase, funciona só no aparelho.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app |
| `config.js` | Endereço e chave pública do seu projeto Supabase |
| `supabase/schema.sql` | Cria a tabela e as regras de acesso (cada pessoa só vê os próprios dados) |

## 1. Supabase

1. Em [supabase.com](https://supabase.com), crie um projeto novo na sua organização pessoal (plano gratuito serve).
2. **SQL Editor → New query**: cole o conteúdo de `supabase/schema.sql` e clique em **Run**.
3. **Authentication → Sign In / Providers → Email**: deixe ligado e **desligue "Confirm email"**.
   O e-mail padrão do Supabase só entrega para membros da sua equipe no Supabase (e no máximo poucas mensagens por hora),
   então outras pessoas não receberiam o link de confirmação. Se quiser confirmação de e-mail e "Esqueci a senha"
   funcionando para qualquer pessoa, configure um SMTP próprio em **Authentication → Emails → SMTP Settings**
   (Resend, Brevo e similares têm plano gratuito).
4. **Project Settings → API Keys**: copie a chave **publishable** (`sb_publishable_...`; em projetos antigos, a `anon`).
   Em **Project Settings → Data API**, copie o **Project URL** (`https://xxxx.supabase.co`).
5. Cole os dois em `config.js`.

> A chave publishable é feita para ficar no navegador, mesmo num repositório público: quem garante a privacidade são as regras do `schema.sql`.
> Nunca coloque no `config.js` a chave **secret** / **service_role** (o app recusa e avisa).

## 2. GitHub Pages

1. Crie um repositório **público** chamado `meu-financeiro`.
2. **Add file → Upload files**: envie `index.html`, `config.js`, `README.md` e a pasta `supabase`.
3. **Settings → Pages → Build and deployment**: Source **Deploy from a branch**, branch **main**, pasta **/ (root)**, **Save**.
4. Em um ou dois minutos o app fica em `https://SEU-USUARIO.github.io/meu-financeiro/`.

## 3. Ligar os dois

No Supabase, **Authentication → URL Configuration**:

- **Site URL**: `https://SEU-USUARIO.github.io/meu-financeiro/`
- **Redirect URLs**: adicione `https://SEU-USUARIO.github.io/meu-financeiro/**`

Isso faz os links de e-mail (confirmação e nova senha) voltarem para o app.

## Levar os dados que você já tem para a conta

Os dados de hoje estão guardados no navegador onde você usa o arquivo HTML. Para enviá-los:

1. No mesmo computador e navegador, abra o `index.html` desta pasta (com o `config.js` já preenchido ao lado).
2. Clique em **Criar conta**. O app pergunta se deve enviar os lançamentos que já estão no aparelho: responda **OK**.
3. Pronto: abra o endereço do GitHub Pages em qualquer aparelho, entre com o mesmo e-mail e senha.

Se preferir, em **Conta → Baixar cópia** você salva tudo num arquivo `.json`, e em **Conta → Restaurar cópia** carrega de volta.

## Como a sincronização funciona

- Cada mudança é salva no aparelho na hora e enviada para a nuvem cerca de um segundo depois.
  A bolinha ao lado de **Conta** mostra o estado: verde (salvo na nuvem), amarela (salvando), vermelha (sem internet).
- Sem internet, o app continua funcionando e envia tudo quando a conexão volta.
- Se o mesmo dado for mudado em dois aparelhos ao mesmo tempo, vale o que chegou primeiro na nuvem;
  o outro aparelho recarrega e avisa, em vez de apagar sem dizer nada.
- **Sair** apaga os dados do aparelho (eles continuam na conta). Útil em computador compartilhado.
