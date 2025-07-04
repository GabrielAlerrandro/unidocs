# 📘 Plano de Requisitos — Sistema de Atas com Aprovação

## 1. Visão Geral

Sistema web para criação, edição, aprovação e consulta de atas de reunião. Usuários com diferentes cargos (professor, coordenador) possuem permissões específicas. Professores podem sugerir edições que serão aprovadas ou rejeitadas por coordenadores. As atas podem ser exportadas como arquivos PDF.

---

## 2. Perfis de Usuário

| Cargo       | Permissões                                                                 |
|-------------|----------------------------------------------------------------------------|
| Professor   | Ver atas, sugerir edições, gerar PDF                                       |
| Coordenador | Criar, editar, aprovar sugestões, gerar PDF                                |

---

## 3. Requisitos Funcionais (RF)

| Código | Requisito                                                                                  |
|--------|---------------------------------------------------------------------------------------------|
| RF01   | O sistema deve permitir o cadastro e login de usuários com autenticação via JWT            |
| RF02   | O sistema deve permitir que coordenadores criem novas atas com título, data e participantes|
| RF03   | O sistema deve permitir a associação de temas a uma ata                                     |
| RF04   | Professores podem sugerir edições em atas existentes                                        |
| RF05   | O sistema deve notificar coordenadores por e-mail ao receber uma sugestão de edição        |
| RF06   | Coordenadores devem aprovar ou rejeitar sugestões                                           |
| RF07   | Ao aprovar uma sugestão, o conteúdo da ata deve ser atualizado                             |
| RF08   | O sistema deve registrar a data da última edição aprovada em cada ata                      |
| RF09   | O sistema deve permitir a geração e download do PDF da ata                                 |
| RF10   | Professores e coordenadores podem visualizar atas aprovadas                                |
| RF11   | O sistema deve manter um histórico de sugestões de edição com seus status                  |
| RF12   | O sistema deve permitir a alteração de senha e gerenciamento básico de perfil              |

---

## 4. Requisitos Não Funcionais (RNF)

| Código | Requisito                                                                 |
|--------|--------------------------------------------------------------------------|
| RNF01  | O sistema deve ser acessado via navegador (frontend em React.js)         |
| RNF02  | O backend deve ser implementado em Java com Spring Boot                  |
| RNF03  | A comunicação entre frontend e backend deve ser feita via REST API       |
| RNF04  | O sistema deve usar banco de dados relacional (PostgreSQL)               |
| RNF05  | As senhas devem ser armazenadas de forma segura com hash                 |
| RNF06  | As operações devem ser protegidas por autenticação e autorização JWT     |
| RNF07  | O PDF gerado deve conter todas as informações da ata, com layout formal  |
| RNF08  | As ações do sistema devem ser logadas para futura auditoria              |
| RNF09  | O sistema deve suportar múltiplos usuários simultaneamente               |
| RNF10  | Toda sugestão rejeitada ou aprovada deve permanecer registrada           |

---

## 5. Modelo Inicial de Dados (Simplificado)

**Tabelas principais:**

- `Usuario`  
- `Ata`  
- `Tema`  
- `Participante`  
- `SugestaoEdicao`  
- `Notificacao`
- `LogSistema`

---

## 6. Casos de Uso (Resumo)

1. Login e autenticação
2. Cadastro de atas
3. Adição de temas e participantes
4. Sugestão de edição (professor)
5. Aprovação ou rejeição (coordenador)
6. Geração de PDF
7. Consulta de atas
8. Notificações por e-mail

---

## 7. Telas do Sistema

- Tela de Login
- Dashboard com atas
- Formulário de criação/edição de atas
- Visualização de ata (com temas e participantes)
- Painel de sugestões de edição (coordenador)
- Histórico de edições
- Geração e download de PDF

---

## 8. Priorização (MVP vs Pós-MVP)

### MVP (versão inicial):
- Cadastro/login
- CRUD de atas
- Sugestão de edição
- Aprovação de edição
- Geração de PDF simples

### Pós-MVP (melhorias futuras):
- Histórico completo de versões
- Upload de arquivos anexos
- Comentários entre usuários
- Integração com Google Calendar

---

## 9. Observação Final

> Este sistema será utilizado **exclusivamente em ambiente de intranet**.  
> Contudo, **nenhuma medida técnica de restrição à rede interna foi implementada** até o momento deste documento.

---

