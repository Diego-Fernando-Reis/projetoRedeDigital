import React from 'react';
import Link from 'next/link';

const NewsHome = () => {
        return (

            <section className="blog-one blog-one__home thm-gray-bg" id="news">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Veja nossos últimos <span>projetos sociais</span> <br /> impulsionados:
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
                                    <Link href="/news-details">
                                        <div className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">22 Oct, 2019</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href="/news-details">
                                        Prefeitura do Rio lança Programadores Cariocas, curso voltado para formação de jovens vulneráveis.
                                        </Link>
                                    </h3>
                                    <Link href="/news-details">
                                    <div className="blog-one__link">Ler mais</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/blog/blog-1-2.jpg" alt="" />
                                    <Link href="/news-details">
                                        <div className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">22 Oct, 2019</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href="/news-details">
                                        As Naves do Conhecimento democratizam o acesso ao universo digital em ambientes colaborativos e criativos.
                                        </Link>
                                    </h3>
                                    <Link href="/news-details">
                                    <div className="blog-one__link">Ler mais</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/blog/blog-1-3.jpg" alt="" />
                                    <Link href="/news-details">
                                        <div className="blog-one__more-link"><i
                                            className="fa fa-link"></i>
                                        </div>
                                    </Link>
                                </div>
                                <div className="blog-one__content">
                                    <ul className="list-unstyled blog-one__meta">
                                        <li><a href="#">22 Oct, 2019</a></li>
                                        <li><a href="#">2 Comments</a></li>
                                    </ul>
                                    <h3 className="blog-one__title">
                                        <Link href="/news-details">
                                        Primeiro Espaço da Juventude, voltado à formação e inclusão de jovens na tecnologia 4.0, é inaugurado na cidade do Rio.
                                        </Link>
                                    </h3>
                                    <Link href="/news-details">
                                    <div className="blog-one__link">Ler mais</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default NewsHome;