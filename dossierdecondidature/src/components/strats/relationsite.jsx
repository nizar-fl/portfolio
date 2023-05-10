import React from 'react'
import './stratscss.css'
import Linkbutton from '../Linkbutton/Linkbutton'

export default function Relationsite() {
  return (
    <div className='relation-avec-siteContainer'>
        <div className='first-rs-block'>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/1.0/capture_decran_2.0-3362795.png" alt="" />
            <div className="middle-rs-block">
                <h3 className='secondblocktitle'>paiement en ligne</h3>
                <br />
                <br />
                <p >ajouter l'option de paiement en ligne pour les items de boutique interactienne.</p>
            </div>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/paiement_4.0-3364041.png" alt="" />
        </div>
        <div className="second-rs-blockContainer">
          <h3 className='secondblocktitle'>livraison à domicile</h3>
          <div className='second-rs-block'>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/undraw_on_the_way_re_swjt-3374408.svg" alt="" />
            <p style={{marginTop:"70px"}}>-mettre à disposition l'option de livraison à domicile </p>
          </div>
        </div>
        <div style={{textAlign:"center",marginTop:"300px"}} className="third-rs-block">
          <h3 className='secondblocktitle'>Mises à jours du site</h3>
          <img style={{width:"80%",marginTop:"70px"}} src="https://content.app-sources.com/s/59331098935990817/uploads/1.0/site_cnitos_-3317520.png" alt="" />
        </div>
        <div  className="fourth-rs-block">
          <p>-effectuer des mises à jours continues pour le site de la CNIT   pour appliquer le thème de séminaire ou évènement ( Leaders act, Congrés national ,S.F.I) ou des autres évènements (Christmas, Halloween,....) VOIR LES PROTOTYPES DISPONIBLES DANS LE DOSSIER DRIVE </p>
        </div>
        <div className="second-rs-blockContainer">
          <h3 className='secondblocktitle'>virtualisation  des badges et des certificats</h3>
          <div className='second-rs-block'>
            <img src="https://content.app-sources.com/s/59331098935990817/uploads/Images/undraw_on_the_way_re_swjt-3374408.svg" alt="" />
            <p style={{marginTop:"70px",marginLeft:"50px"}}>-créer une version virtuelle des badges des participants qui sera incluse dans le compte interactien.Ainsi qu'une version virtuelle de leurs  certficats .</p>
          </div>
          <br />
          <br /><br />
        </div>
        
    
        <a href="/en-relation-avec-l-application"><Linkbutton title="en relation avec l'application" /></a>
        
      </div>
  )
}
