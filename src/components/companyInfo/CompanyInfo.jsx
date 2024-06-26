import React from 'react';
import "./companyInfo.css"
export default function CompanyInfo() {
  return (
    <section className="company-info">
      <div className="company-info__container">
        <div className="company-info__item">
          <h2 className="company-info__title">Missão:</h2>
          <p className="company-info__text">
            A Connect Eco nasce com o anseio de conectar a população que busca na reciclagem uma ferramenta eficaz, através de pontos de coleta parceiros. Promovendo o envolvimento de pequenas e médias empresas, tal como o individual, visamos fortalecer laços com um público engajado, conscientizando cada vez mais a sociedade acerca das imperatividades de implementação de boas práticas de sustentabilidade ambiental.
          </p>
        </div>
        <div className="company-info__item">
          <h2 className="company-info__title">Visão:</h2>
          <p className="company-info__text">
            Connect Eco busca se tornar um ponto em comum de compartilhamento de ideias e informações relevantes sobre a reciclagem, ampliando a nível nacional os pontos de coleta, criando parcerias e ações de marketing para buscar, cada vez mais, elucidar o quão fácil e eficaz se torna uma ação quando é realizada no coletivo. Valorizamos a qualidade de vida das pessoas, assegurando que os resíduos produzidos são encaminhados para os nossos parceiros podendo ter um encaminhamento mais adequado.
          </p>
        </div>
        <div className="company-info__item">
          <h2 className="company-info__title">Valores:</h2>
          <ul className="company-info__list">
            <li className="company-info__value">Responsabilidade e sensibilização ambiental</li>
            <li className="company-info__value">Diálogo social</li>
            <li className="company-info__value">Optimização integral, orientada para a criação de valor</li>
            <li className="company-info__value">Solidariedade</li>
            <li className="company-info__value">Espírito de grupo</li>
            <li className="company-info__value">Ambição</li>
            <li className="company-info__value">Empatia</li>
            <li className="company-info__value">Diversidade</li>
          </ul>
        </div>
        <div className="company-info__item">
          <h2 className="company-info__title">Como nasceu a Connect Eco:</h2>
          <p className="company-info__text">
            A nossa empresa nasceu da observação de uma necessidade crescente por soluções sustentáveis no descarte de materiais. Em um mundo cada vez mais preocupado com o impacto ambiental dos resíduos mal geridos, notamos que muitas pessoas queriam descartar seus resíduos de maneira correta, mas enfrentavam dificuldades em encontrar empresas confiáveis que realizassem a coleta e o processamento adequado desses materiais. A ideia era simples, mas poderosa: criar uma plataforma que conectasse pessoas que precisavam descartar materiais com empresas especializadas em recolhê-los e reciclá-los. Com isso, não só se resolveria um problema logístico, mas também se promoveria um impacto positivo no meio ambiente. Combinando conhecimentos em desenvolvimento de software e gestão de resíduos, a equipe desenvolveu uma plataforma que facilita o processo de descarte. O usuário pode inserir informações sobre os materiais que deseja descartar e, em poucos cliques, encontrar empresas que oferecem os serviços necessários. Além disso, a plataforma proporciona transparência e confiança, exibindo avaliações destas empresas. Acreditamos que, ao facilitar o acesso a serviços de coleta e reciclagem, estamos contribuindo para um futuro mais sustentável e consciente.
          </p>
        </div>
      </div>
    </section>
  );
}
