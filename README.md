# integracao-servicenow-teams-call

Integração entre o ServiceNow e o Microsoft Teams para que automaticamente sejam criadas salas de ligação com os envolvidos em determinado incidente, visando agilizar a comunicação dos membros.

## Requisitos:
- Emails cadastrados no Microsoft Teams
- Organização ativa no Service Now

## Estrutura do projeto:
- IntegracaoTeams.js: arquivo com o script para integrar o Service Now com o Microsoft Teams

## Variáveis:
- user = dados de email e nome para cada usuário que vai ser criado, aumentando sucessivamente o número caso seja necessário
