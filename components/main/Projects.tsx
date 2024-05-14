import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
  className="flex flex-col items-center justify-center py-20"
  id="projects"
>
  <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
    Mes projets
  </h1>
  <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10 "> {/* Added mt-10 for margin-top */}
    <ProjectCard
      src="/AZER (2).png"
      title="howard RP"
      description="
      Découvrez l'expertise immobilière incomparable de notre site web, avec quatre décennies d'expérience dans la vallée de San Gabriel, en Californie du Sud."
      href="https://www.howardrp.com/?fbclid=IwAR1iFDxz78qIodAJK0FwqjPMKHuN_kLQV-S1o0AgMZVsXnM1-rj3pCTr6Aw#/"
    />
    <ProjectCard
      src="/AZER (1).png"
      title="proxyworkers"
      description="Découvrez notre service de proxy offrant des adresses IP de haute qualité des options de remboursement et un contrôle total via notre panneau de contrôle."
    href="https://proxyworkers.com/#/home"
    />
    <ProjectCard
      src="/AZER (3).png"
      title="ticket hub spot"
      description="Laissez la vie s'animer avec votre prochaine meilleure soirée qui vous attend, et nous avons les billets. Nous proposons les prix les plus bas de tous les sites web."
      href="https://www.tickethubspot.com/"
    />
  </div>
  
  <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mt-10"> {/* Added mt-10 for margin-top */}
    <ProjectCard
      src="/AZEAR3.PNG"
      title="Gestion des Stocks"
      description="Révélez le potentiel de vos investissements avec notre application dynamique de point de vente (POS) et de gestion des stocks, révolutionnant la gestion financière avec intégration transparente."
      href="https://www.jemsit.com/#/agence"
    />
    <ProjectCard
      src="/AZER.png"
      title="GAME SPOTTER"
      description="Suivez vos jeux, synchronisez vos bibliothèques de jeux Steam & Blizzard. Suivez votre progression, vos succès et le temps de jeu."
      href="https://www.jemsit.com/"
    />
    <ProjectCard
      src="/AZER1.png"
      title="private property"
      description="Trouvez votre espace idéal parmi des milliers de propriétés à vendre, louez ou vendez votre bien sur notre plateforme pour une visibilité maximale."
      href="https://www.privateproperty.co.za/"
    />
  </div>
</div>

  );
};

export default Projects;
