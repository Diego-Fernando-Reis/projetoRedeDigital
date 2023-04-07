import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

import Link from 'next/link';

const News = () => {
        const [projeto, setProjeto] = useState();
        const [projeto2, setProjeto2] = useState();

        useEffect(() => {
            axios
            .get('http://localhost:3300/causa')
            .then((resposta) => {
                setProjeto(resposta.data)
            })
            .catch((erro) => console.log(erro));
        })
    
        const deleteProjeto = (id, e) =>{
            axios.delete(`http://localhost:3300/causa/${id}`)
            .then(res => console.log('Postado', res)).catch(err => console.log(err))
        }

        const [dados, setdados] = useState(
            {
              nome: '',
              descricao: '',
              cartaz: ''
            }
        );

        function handleChange(event){
            const{name, value} = event.target;
        
            setdados({...dados, [name]: value});
        }

        const [dados2, setdados2] = useState(
            {
                id: '',
              nome: '',
              descricao: '',
              cartaz: ''
            }
        );

        useEffect(() => {
            axios
            .get(`http://localhost:3300/causa/${dados2.id}`)
            .then((resposta) => {
                setProjeto2(resposta.data)
            })
            .catch((erro) => console.log(erro));
        })
    
        function handleChange2(event){
            const{name, value} = event.target;
        
            setdados2({...dados2, [name]: value});
        }

        return (
            <>
            
                <section className="blog-one">
                    <div className="container">
                        <div className="row">
                            {projeto?.map((e) => {
                                return(
                                            <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                                <div onClick={() => setdados2({id: e.id, nome: e.nome, descricao: e.descricao, cartaz: e.cartaz})} className="blog-one__single">
                                                    <div className="blog-one__image">
                                                        <img src={e.cartaz} alt="" />
                                                        <Link href="/news-details">
                                                            <div className="blog-one__more-link"><i
                                                                className="fa fa-link"></i>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="blog-one__content">
                                                        <h2>{e.nome}</h2>
                                                        <h3 className="blog-one__title">
                                                            <Link href="/news-details">
                                                            <div>{e.descricao}</div>
                                                            </Link>
                                                        </h3>
                                                        <Link href="/news-details">
                                                        <div className="blog-one__link">Saiba Mais.</div>
                                                        </Link>
                                                        <h2 onClick={() => deleteProjeto(e.id) }>X</h2>
                                                    </div>
                                                </div>
                                            </div>
                                )
                            })}
                        </div>
                    </div>
                </section>

                
                    
                <form className="formulario" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Dados enviados com sucesso!')
                    axios
                    .put(`http://localhost:3300/causa/${dados2.id}`, {
                        nome: dados2.nome,
                        descricao: dados2.descricao,
                        cartaz: dados2.cartaz
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    }}>
                        <h2>{`Alterar projeto ${dados2.nome}`}</h2>
                    <input  name='nome' placeholder='Insira o nome do Projeto' onChange={handleChange2} value={dados2.nome}/>
                    <input name='descricao' placeholder='Sobre o que é o projeto?' onChange={handleChange2} value={dados2.descricao}/>
                    <input name='cartaz' placeholder='Insira o link da imagem' onChange={handleChange2} value={dados2.cartaz}/>
                    <input type="submit" value="Submit" />
                </form>

                <form className="formulario" onSubmit={(e) => {
                    e.preventDefault();
                    alert('Dados enviados com sucesso!')
                    axios
                    .post('http://localhost:3300/causa', {
                        nome: dados.nome,
                        descricao: dados.descricao,
                        cartaz: dados.cartaz
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    }}>
                        <h2>Cadastrar novo projeto</h2>
                    <input  name='nome' placeholder='Insira o nome do Projeto' onChange={handleChange}/>
                    <input name='descricao' placeholder='Sobre o que é o projeto?' onChange={handleChange}/>
                    <input name='cartaz' placeholder='Insira o link da imagem' onChange={handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </>
            
        )
}
export default News;