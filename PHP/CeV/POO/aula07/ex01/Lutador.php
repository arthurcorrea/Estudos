<?php
    class Lutador {
        // atributos
        private $nome, $nacionalidade;
        private $idade, $altura, $peso;
        private $categoria, $vitorias, $derrotas, $empates;

        // métodos especiais
        public function __construct($no, $na, $id, $al, $pe, $vi, $de, $em) {
            $this->nome = $no;
            $this->nacionalidade = $na;
            $this->idade = $id;
            $this->altura = $al;
            $this->setPeso($pe);
            $this->vitorias = $vi;
            $this->derrotas = $de;
            $this->empates = $em;
        }

        public function getNome() {
            return $this->nome;
        }

        public function setNome($no) {
            $this->nome = $no;
        }


        public function getNacionalidade() {
            return $this->nacionalidade;
        }

        public function setNacionalidade($na) {
            $this->nacionalidade = $na;
        }


        public function getIdade() {
            return $this->idade;
        }

        public function setIdade($id) {
            $this->idade = $id;
        }


        public function getAltura() {
            return $this->altura;
        }

        public function setAltura($al) {
            $this->altura = $al;
        }


        public function getPeso() {
            return $this->peso;
        }

        public function setPeso($pe) {
            $this->peso = $pe;
            $this->setCategoria();
        }


        public function getVitorias() {
            return $this->vitorias;
        }

        public function setVitorias($vi) {
            $this->vitorias = $vi;
        }


        public function getDerrotas() {
            return $this->derrotas;
        }

        public function setDerrotas($de) {
            $this->derrotas = $de;
        }


        public function getEmpates() {
            return $this->empates;
        }

        public function setEmpates($em) {
            $this->empates = $em;
        }


        public function getCategoria() {
            return $this->categoria;
        }

        private function setCategoria() {
            if($this->getPeso() < 52.2) {
                $this->categoria = "Inválido";
            } else if($this->getPeso() <= 70.3) {
                $this->categoria = "Leve";
            } else if($this->getPeso() <= 83.9) {
                $this->categoria = "Médio";
            } else if($this->getPeso() <= 120.2) {
                $this->categoria = "Pesado";
            } else {
                $this->categoria = "Inválido";
            }
        }

        
        // métodos específicos
        public function apresentar() {
            echo "<hr>";
            echo "Lutador: {$this->getNome()} <br>
            Origem: {$this->getNacionalidade()} <br>
            {$this->getIdade()} anos <br>
            {$this->getAltura()} m de altura <br>
            Pesando: {$this->getPeso()} kg <br>
            Ganhou: {$this->getVitorias()} <br>
            Perdeu: {$this->getDerrotas()} <br>
            Empatou {$this->getEmpates()} <br>";
            echo "<hr>";
        }

        public function status() {
            echo "{$this->getNome()} é um peso {$this->getCategoria()} que ganhou {$this->getVitorias()} lutas, perdeu {$this->getDerrotas()} e empatou {$this->getEmpates()}. <br>";
        }
        
        public function ganharLuta() {
            $this->setVitorias($this->getVitorias() + 1);
        }

        public function perderLuta() {
            $this->setDerrotas($this->getDerrotas() + 1);
        }

        public function empatarLuta() {
            $this->setEmpates($this->getEmpates() + 1);
        }
    }
?>