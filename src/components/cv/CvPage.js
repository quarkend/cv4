import React from 'react';
import './styles.css'; // Import your CSS file here

function CvPage() {
    return (
        <div>
          <header>
            <div className="photo_hm">
              <p><img src="/assets/kha.JPG" alt=" photo" /></p>
            </div>
            <div className="name">
              <h1><span className="HINAFI">LOUKILIA</span> KHAWLA</h1>
              <h2> <span className="underline">Ifirmiere  </span>auxiliaire </h2>
            </div>
          </header>
          <div className="conteneur_aside_main">
            <aside>
              <section id="contact">
                <h2>Contact</h2>
                <h3>Adresse</h3>
                <p>23 Rue Oran, Oued-Zem</p>
                <h3>Téléphone</h3>
                <p>0644526432</p>
                <h3>E-mail</h3>
                <p><a href="mailto:quarkend@live.fr">loukiliakhawla@gmail.com</a></p>
              </section>
              <section id="apropos">
                <h2>A Propos</h2>
                <p>Compétences :
- Administration de médicaments et de soins de base
- Soins aux patients, y compris la surveillance des signes vitaux
- Communication efficace avec les patients et leurs familles
- Respect strict des protocoles de confidentialité
- Travail d'équipe au sein d'un environnement médical.
                </p>
                <p>Découvrez mon CV sur github en cliquant
                  <a href="https://quarkend.github.io/CV4/">ici</a></p>
             
              </section>
              <section id="zoneloisire">
                <h2>Loisirs</h2>
                <div className="loisirs">
                  <div className="icon"><i className="fas fa-table-tennis"></i></div>
                  <div className="icon"><i className="fas fa-chess"></i></div>
                  <div className="icon"> <i className="fas fa-volleyball-ball"></i></div>
                </div>
              </section>
            </aside>
            <main>
              <section id="education">
                <h2><i className="fas fa-graduation-cap"></i> Formation</h2>
                <div className="colonneprincipale">
                - Institut de Soins Infirmiers de Khouribga, 
Maroc Diplôme d'Infirmière Auxiliaire 2021 -
2023

                </div>
              </section>
              <section id="experience">
                <h2><i className="fas fa-briefcase"></i>Expérience Professionelle</h2>
                <div className="colonneprincipale">
                - Hôpital HASSAN 2 de Khouribga : janvier 
2021 – juillet 2023
                </div>
              </section>
              <section id="references">
                <h2><i className="fas fa-pencil-alt"></i>Centres d'intérêt</h2>
                <div className="colonneprincipale">
                
- Passionnée par la fourniture de soins de haute 
qualité aux patients 
- Lecture d'articles médicaux pour rester à jour sur 
les dernières avancées médicales 
- Bénévolat dans des organisations médicales 
locales

                </div>
              </section>
            </main>
          </div>
        </div>
      );
}

export default CvPage;
