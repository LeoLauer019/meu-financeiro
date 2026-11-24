// Dados do seu projeto Supabase: Project Settings → API Keys (e Data API para o endereço).
// Use a chave "publishable" (sb_publishable_...) ou a antiga "anon". Ela é feita para ficar no navegador:
// as regras em supabase/schema.sql garantem que cada pessoa só veja e altere os próprios dados.
// NUNCA coloque aqui a chave "secret" (sb_secret_...) nem a "service_role".
// Com os campos vazios, o app funciona só no aparelho, sem login.
window.MF_CONFIG = {
  supabaseUrl: "https://mhfmyljsjuumipgzubvl.supabase.co",   // ex.: https://abcdefghijklmnop.supabase.co
  supabaseKey: "sb_publishable_DR9eZK-pqNNqot_5DL2qiw_akNGx1Nu"    // ex.: sb_publishable_xxxxxxxxxxxxxxxx
};
