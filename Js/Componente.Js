function Header(props){
    return (
        <header class="pb-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <img src="Imagens/lampada.webp" alt="Lâmpada" width="40" height="32" className="me-2" />
            <span class="fs-4">Code Master</span>
            </a>
        </header>
    )
}

function Destaque(props){
    return (
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">Aprenda Programação do Zero</h1>
            <p class="col-md-8 fs-4">Nosso curso online é ideal para iniciantes que querem entrar no mundo da tecnologia. Acesse conteúdos atualizados, projetos práticos e uma comunidade ativa.</p>
            <button class="btn btn-success btn-lg" type="button">Matricule-se Agora</button>
        </div>
    )
}

function Principal(props){
    return (
        <div class="row align-items-md-stretch gp-2">
            <div class="col-md-6">
                 <div class="h-100 p-5 text-bg-dark rounded-3">
                    <h2>Conteúdo Atualizado</h2>
                    <p>aprenda com vídeos, desafios e projetos práticos do básico ao avançado.</p>
                    <button class="btn btn-outline-light" type="button">Saiba mais</button>
                 </div>
            </div>
            <div class="col-md-6">
                 <div class="h-100 p-5 text-bg-info rounded-3">
                    <h2>Comunidade Ativa</h2>
                    <p>Participe de fóruns, eventos ao vivo e grupos de estudo colaborativo.</p>
                    <button class="btn btn-outline-light" type="button">Entrar na Comunidade</button>
        </div>
            </div>
        </div>
    )
}

function Footer(props){
    return (
        <footer class="pt-3 mt-4 text-muted border-top">
            &copy; 2025 CodeMaster. Todos os direitos reservados.
        </footer>
    )
}
