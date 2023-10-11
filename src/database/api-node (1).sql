-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11-Out-2023 às 01:58
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `api-node`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `categoria` varchar(256) NOT NULL,
  `preco` float NOT NULL,
  `estoque` int(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `products`
--

INSERT INTO `products` (`id`, `name`, `categoria`, `preco`, `estoque`) VALUES
(1, 'Garrafa Agua', 'Bebida', 3.5, 5),
(2, 'Computador', 'Eletronicos', 4.5, 12),
(3, 'Celular', 'Eletronicos', 2, 20);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(500) NOT NULL,
  `pass` varchar(256) NOT NULL,
  `avatar` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `pass`, `avatar`) VALUES
(6, 'gustavo', 'gustavo@hotmail.com', '20232024', 'https://avatars.githubusercontent.com/u/8683378?v=4'),
(9, 'agatha', 'agatha@gmail.com.br', '789456', 'https://avatars.githubusercontent.com/u/125416909?v=4'),
(11, 'Marcus', 'marcus@gmail.com', '123456', 'https://avatars.githubusercontent.com/u/38301852?v=4'),
(12, 'Marcus', 'marcus@gmail.com', '123456', 'https://avatars.githubusercontent.com/u/38301852?v=4'),
(13, 'hahaah', 'hahah@gmail.com', '54545656', 'https://avatars.githubusercontent.com/u/8683378?v=4'),
(16, 'pessoa', 'vitoria@gmail.com', '789456', 'https://avatars.githubusercontent.com/u/36730967?v=4'),
(19, 'HO', 'vitoria@gmail.com', '789456', 'https://avatars.githubusercontent.com/u/36730967?v=4'),
(20, 'denilson', 'desilson@gmail.com', '7452635', 'https://avatars.githubusercontent.com/u/36730967?v=4');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
