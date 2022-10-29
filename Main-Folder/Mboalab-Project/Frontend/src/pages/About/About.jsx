import React from "react";
import AboutImg1 from "../../asset/image/about-img-1.png";
import AboutImg2 from "../../asset/image/about-img-2.png";
import Thomas from "../../asset/image/thomas-mboa.png";
import Stephane from "../../asset/image/stephane-fadanka.png";
import Nadine from "../../asset/image/mowoh-nadine.png";
import TeamMember from "../../asset/image/team-member.png";
import PartnerImg from "../../asset/image/partner-img.png";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <section className="about__section">
      <div className="about__section-hero">
        <h1>
          We’re on a <span className="underline">mission</span> to catalyse
          sustainable local development and improve people’s living conditions
          through open science.
        </h1>

        <p>
          MboaLab is an open and collaborative space located in the village of
          Mefou-Assi, Yaoundé, Cameroon. The word “Mboa'' has different meanings
          in native Cameroonian languages: in Matakam, it means “new”; in
          Ewondo, it means “unique”; in Duala, it means “village”. Literally
          translated, MboaLab is a unifying village dedicated to creation; even
          better, it is a laboratory for social innovation, community education,
          collaboration and mediation at the service of the community.
        </p>
      </div>

      <div className="about__section-images">
        <img
          src={AboutImg1}
          alt="local medical professional treating a child in his mother's arms"
          className="about__section-images--p1"
        />
        <img
          src={AboutImg2}
          alt="medical professional looking through a microscope"
        />
        <div className="about__section-stats">
          <div>
            <p>2020</p>
            <span>company founded</span>
          </div>

          <div>
            <p>31</p>
            <span>contributors</span>
          </div>
          <div>
            <p>300k</p>
            <span>users</span>
          </div>
          <div>
            <p>100k+</p>
            <span>github stars</span>
          </div>
        </div>
      </div>

      <div className="about__section-mission">
        <h2>Our Aims and Missions</h2>
        <p>
          The aim of MboaLab is to catalyse sustainable local development and
          improve people’s living conditions through open science. To this end,
          the main missions of Mboalab are as follows:
        </p>
        <ul>
          <li>
            Provide community and lifelong education for the population, as well
            as formal education for the younger generations.
          </li>
          <li>
            Serve as a platform for exchanges on issues related to local
            context.
          </li>
          <li>Mediate between local communities and academia.</li>
          <li>
            Propose solutions that meet the needs of communities, using local
            knowledge and open digital technologies.
          </li>
          <li>Raise public awareness of environmental issues.</li>
          <li>Facilitate access to basic health care.</li>
        </ul>
      </div>

      <div className="about__section-vision">
        <h2>Our Vision</h2>
        <p>
          We advocate for the character of a local development, which is
          conferred by the imperative to have it emerge from the communities
          themselves; this is what ensures its relevance and sustainability. In
          other words, sustainable local development needs to be thought of by
          and for the members of a given community. To do so, it is important to
          break the unenthusiastic spirit that exists among many Cameroonians,
          by training healthy, educated citizens capable of critical thinking on
          issues related to their immediate environment. By choosing education
          and health as priority axes, associated with its role as a mediator
          between Science-Technologies-Societies; we can say clearly that
          Mboalab could be a powerful catalyst for local sustainable
          development.
        </p>
      </div>

      <div className="about__section-founders">
        <h2>Our Founders</h2>
        <div>
          <div className="founder">
            <img src={Thomas} alt="Thomas Mboa" />
            <h4>Thomas Mboa</h4>
            <h6>Managing Director</h6>
            <p>
              Thomas Mboa is currently Lecturer at the Advanced School of Mass
              Communication, University of Yaoundé II, Cameroon.
            </p>
          </div>
          <div className="founder">
            <img src={Stephane} alt="Stephane Fadanka" />
            <h4>Stephane Fadanka</h4>
            <h6>Product Manager</h6>
            <p>
              Stephane is an early career researcher based at the MboaLab with
              an MSc in Molecular Biotechnology.
            </p>
          </div>
          <div className="founder">
            <img src={Nadine} alt="Mowoh Nadine" />
            <h4>Mowoh Nadine</h4>
            <h6>Quality Manager</h6>
            <p>
              Nadine has a background in Microbiology and Medical Laboratory
              Technology (BSc).
            </p>
          </div>
        </div>
      </div>

      <div className="about__section-team">
        <h2>Our Team</h2>

        <div>
          <div className="team-member">
            <img src={TeamMember} alt="Jane Doe" />
            <h4>Jane Doe</h4>
          </div>
          <div className="team-member">
            <img src={TeamMember} alt="Jane Doe" />
            <h4>Jane Doe</h4>
          </div>
          <div className="team-member">
            <img src={TeamMember} alt="Jane Doe" />
            <h4>Jane Doe</h4>
          </div>
          <div className="team-member">
            <img src={TeamMember} alt="Jane Doe" />
            <h4>Jane Doe</h4>
          </div>
          <div className="team-member">
            <img src={TeamMember} alt="Jane Doe" />
            <h4>Jane Doe</h4>
          </div>
          <div className="team-member">
            <img src={TeamMember} alt="Jane Doe" />
            <h4>Jane Doe</h4>
          </div>
          <div className="team-member">
            <img src={TeamMember} alt="Jane Doe" />
            <h4>Jane Doe</h4>
          </div>
        </div>
      </div>

      <div className="about__section-partners">
        <h2>Our Partners</h2>

        <div>
          <div className="partner">
            <img src={PartnerImg} alt="beneficial bio" />
            <div className="partner-text">
              <h4>Beneficial Bio</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
                ut amet sit a mi mauris neque, suspendisse viverra. Ultrices a
                tellus eget id. Eu sollicitudin eleifend tellus egestas ac sed
                et. Nec malesuada at enim in sodales nunc quam neque.
              </p>
            </div>
          </div>

          <div className="partner">
            <img src={PartnerImg} alt="beneficial bio" />
            <div className="partner-text">
              <h4>Beneficial Bio</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
                ut amet sit a mi mauris neque, suspendisse viverra. Ultrices a
                tellus eget id. Eu sollicitudin eleifend tellus egestas ac sed
                et. Nec malesuada at enim in sodales nunc quam neque.
              </p>
            </div>
          </div>

          <div className="partner">
            <img src={PartnerImg} alt="beneficial bio" />
            <div className="partner-text">
              <h4>Beneficial Bio</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ligula
                ut amet sit a mi mauris neque, suspendisse viverra. Ultrices a
                tellus eget id. Eu sollicitudin eleifend tellus egestas ac sed
                et. Nec malesuada at enim in sodales nunc quam neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
