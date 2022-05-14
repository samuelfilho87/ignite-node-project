# Cadastro de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**Regras de Negócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
Não deve ser possível alterar a placa de um carro já cadastrado.
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
Deve ser possível listar todas as especificações.

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