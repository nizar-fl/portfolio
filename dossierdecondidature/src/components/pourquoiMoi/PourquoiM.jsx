import React from 'react'
import "./PourquoiMcss.css"
import TitleAftetNav from '../title/titleAftetNav'
import Linkbutton from '../Linkbutton/Linkbutton'
import { Link, useNavigate } from 'react-router-dom'

export default function PourquoiM() {
  const navigate = useNavigate();
  return (
    <div className=''>
      <TitleAftetNav title="Pourquoi Moi ?"/>
      <div className="PM-container">
        <div className='SBContainer'>
          
          <img src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?cs=srgb&dl=pexels-leah-kelley-5091121.jpg&fm=jpg" alt="" />
          <div className="speech">
            <h3>nameeeee lastneamee :</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime odit corrupti aut sit error beatae! Eligendi at vitae rerum? Error, non? Sed voluptatum commodi cumque, quaerat repellendus odit, harum nihil aspernatur sequi quia sunt? Voluptatibus placeat hic odit maiores voluptates quaerat a explicabo provident nobis, sint dolores quidem, aperiam eius repudiandae reiciendis accusantium quibusdam. Inventore harum quod commodi natus consequuntur error repellat, fugiat temporibus hic facilis repellendus velit? Sequi, eos perspiciatis vel amet placeat rerum, odit facilis id quos nesciunt fuga necessitatibus ipsam a incidunt porro voluptatum eaque ex eligendi at molestiae magnam. Sint quam adipisci iusto distinctio alias.</p>
          </div>

        </div>
        <div className='SBContainer'>
          <img src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?cs=srgb&dl=pexels-leah-kelley-5091121.jpg&fm=jpg" alt="" />
          <div className="speech">
            <h3>nameeeee lastneamee :</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime odit corrupti aut sit error beatae! Eligendi at vitae rerum? Error, non? Sed voluptatum commodi cumque, quaerat repellendus odit, harum nihil aspernatur sequi quia sunt? Voluptatibus placeat hic odit maiores voluptates quaerat a explicabo provident nobis, sint dolores quidem, aperiam eius repudiandae reiciendis accusantium quibusdam. Inventore harum quod commodi natus consequuntur error repellat, fugiat temporibus hic facilis repellendus velit? Sequi, eos perspiciatis vel amet placeat rerum, odit facilis id quos nesciunt fuga necessitatibus ipsam a incidunt porro voluptatum eaque ex eligendi at molestiae magnam. Sint quam adipisci iusto distinctio alias.</p>
            
          </div>

        </div>
        <div className='SBContainer'>
          <img src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?cs=srgb&dl=pexels-leah-kelley-5091121.jpg&fm=jpg" alt="" />
          <div className="speech">
            <h3>nameeeee lastneamee :</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime odit corrupti aut sit error beatae! Eligendi at vitae rerum? Error, non? Sed voluptatum commodi cumque, quaerat repellendus odit, harum nihil aspernatur sequi quia sunt? Voluptatibus placeat hic odit maiores voluptates quaerat a explicabo provident nobis, sint dolores quidem, aperiam eius repudiandae reiciendis accusantium quibusdam. Inventore harum quod commodi natus consequuntur error repellat, fugiat temporibus hic facilis repellendus velit? Sequi, eos perspiciatis vel amet placeat rerum, odit facilis id quos nesciunt fuga necessitatibus ipsam a incidunt porro voluptatum eaque ex eligendi at molestiae magnam. Sint quam adipisci iusto distinctio alias.</p>
          </div>

        </div>
        <div className='SBContainer'>
          <img src="https://images.pexels.com/photos/5091121/pexels-photo-5091121.jpeg?cs=srgb&dl=pexels-leah-kelley-5091121.jpg&fm=jpg" alt="" />
          <div className="speech">
            <h3>nameeeee lastneamee :</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maxime odit corrupti aut sit error beatae! Eligendi at vitae rerum? Error, non? Sed voluptatum commodi cumque, quaerat repellendus odit, harum nihil aspernatur sequi quia sunt? Voluptatibus placeat hic odit maiores voluptates quaerat a explicabo provident nobis, sint dolores quidem, aperiam eius repudiandae reiciendis accusantium quibusdam. Inventore harum quod commodi natus consequuntur error repellat, fugiat temporibus hic facilis repellendus velit? Sequi, eos perspiciatis vel amet placeat rerum, odit facilis id quos nesciunt fuga necessitatibus ipsam a incidunt porro voluptatum eaque ex eligendi at molestiae magnam. Sint quam adipisci iusto distinctio alias.</p>
          </div>

        </div>


      </div>
      <div onClick={()=>{navigate("/votre-avis")}}><Linkbutton title='vote avis'  /></div>      
    </div>
  )
}
