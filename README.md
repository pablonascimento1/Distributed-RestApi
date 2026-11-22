# 🌐 Aplicação Distribuída em Duas Camadas (React + REST API)

Este repositório contém a aplicação web desenvolvida para a prática da disciplina de **Sistemas Distribuídos**, do curso de **Engenharia de Computação** na **Universidade Federal Rural do Semi-Árido (UFERSA) — Campus Pau dos Ferros/RN**.

---

## 👨‍🎓 Autor
* **Aluno:** Pablo Nascimento (pablo.leite@alunos.ufersa.edu.br)
* **Curso:** Engenharia de Computação — UFERSA (Pau dos Ferros-RN)
* **Semestre:** 2026.2

---

## 📌 Sobre o Projeto

O objetivo do projeto é demonstrar o funcionamento de uma **arquitetura distribuída de duas camadas (*Two-Tier Architecture*)** baseada em microsserviços e consumo de APIs REST públicas.

A aplicação foi desenvolvida em **React.js** e hospedada utilizando o serviço **AWS Amplify**, integrando integração e implantação contínuas (CI/CD) diretamente com o GitHub.

### 🏛️ Arquitetura do Sistema
1. **Camada de Apresentação (Frontend / PaaS):** Aplicação Single Page Application (SPA) construída em React/Vite, implantada na nuvem através do AWS Amplify.
2. **Camada de Dados e Serviços (Backend / External REST API):** Consumo assíncrono de dados da [PokeAPI](https://pokeapi.co/) via requisições HTTP (`GET`), demonstrando o desacoplamento entre a interface do usuário e os serviços de dados.

---

## 🛠️ Tecnologias Utilizadas

* **Frontend:** React.js, HTML5, CSS3, JavaScript (ES6+)
* **Build Tool:** Vite
* **Hospedagem & CI/CD:** AWS Amplify (PaaS)
* **Protocolo de Comunicação:** HTTP/HTTPS (REST API)
* **Versionamento:** Git & GitHub