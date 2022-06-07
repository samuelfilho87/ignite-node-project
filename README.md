# Cadastro de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro.

**Regras de Negócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado como disponível por padrão.
Somente administrador pode cadastrar carros.

# Listagem de carros

**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**Regras de Negócio**
O usuário não precisa estar logado para ver a lista.

# Cadastro de Espcificação do carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro.

**Regras de Negócio**
Não deve ser possível cadastrar uma especificação para um carro sem cadastro.
Não deve ser possível cadastrar uma especificação já existente em um carro.
Somente administrador pode cadastrar uma especificação.

# Cadastro de imagens do carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro.

**Requisitos Não Funcionais**
Utilizar o multer para upload dos arquivos.

**Regras de Negócio**
Deve ser possível cadastrar mais de uma imagem para o mesmo carro.
Somente administrador pode cadastrar uma imagem.

# Aluguel de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel.

**Regras de Negócio**
O aluguel deve ter duração mínima de 24hrs.
Não deve ser possível cadastrar um novo aluguel se o usuário estiver com um aberto.
Não deve ser possível cadastrar um novo aluguel se o carro estiver indisponível.
O usuário deve estar logado.
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução do carro

**Requesitos Funcionais**
Deve ser possível realizar a devolução de um carro.

**Regras de Negócio**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.
O usuário deve estar logado na aplicação.

# Listagem de Alugueis para usuário

**Requisitos Funcionais**

Deve ser possível realizar a busca de todos os alugueis para o usuário.

**Regras de Negócio**

O usuário deve estar logado na aplicação

# Recuperar Senha

**Requisitos Funcionais**
Deve ser possível o usuário recuperar a senha informando o e-mail.
O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.
O usuário deve conseguir inserir uma nova senha.

**Regras de Negócio**
O usuário precisa informar uma nova senha.
O link enviado para a recuperação deve expirar em 3 horas.
