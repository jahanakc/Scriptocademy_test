import React from 'react'
import './Top.css';
import Popup from '../Popup/Popup';
import hero from './hero.jpg';
import pcbanner from './pc-banner.png';
import work1 from './work1.png'
import work2 from './work2.png'
import work3 from './work3.png'
import pc from './pc.jpg'
import f1 from './f1.png'
import f2 from './f2.png'
import f3 from './f3.png'
import f4 from './f4.png'
import fb from './fb.png'
import instagram1 from './instagram1.png'
import linked from './linkedin1.png'
import twitter from './twitter.png'
import form from './form-img.jpg';
import { GrSearch } from 'react-icons/gr';
import { RiMenu3Fill } from 'react-icons/ri'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row } from 'react-bootstrap';



function Top() {
 const [pop,setPop] = useState(false);
  return (
    <>
    <container>
        <figure className='position-relative'>
            <img
                className='bg-img'
                src={hero}
                width='100%'
                height='900'
                alt='first slide' 
            />
            <figcaption class>
                Newsoft
            </figcaption>
            <h1 className='search-icon'><GrSearch color="white"/></h1>
            <h4 className='login' onClick={() => setPop(true)}>Login</h4>
            <h1 className='menu'><RiMenu3Fill color='white'/></h1>
            <Popup trigger={pop} setTrigger={setPop}>
              <Form className='form'>
                <Form.Label>Email address</Form.Label>
                  <Form.Control  type='email' placeholder='Enter your email'/>
                  <Form.Label>Password</Form.Label>
                  <Form.Control  type='password' placeholder='Enter your password'/>
                  <button className='form-btn' type='Submit'>Submit</button>

              </Form>
            </Popup>
             
            <h3 className='main_text'>PROVIDES TO MAKE BETTER SOFTWARE</h3>
            <h4 className='sub-text'>Marketers/advertisers usually focus their efforts on the people responsible for making the purchase </h4>
            </figure>
            <button className='main-butt'>Download</button>
            <img
              className='img-banner'
              src={pcbanner}
              alt='pcbanner'
            />

    </container>  
        <h1 className='mid-text'>HOW IT WORKS</h1>
    <container>
      <Row md={3}>
        <Col>
      <div className='mid-img-main'>
        <div className='circle-one'>
          <img src={work1}
          alt='work1'
          className='work1-img'
       
          />
        </div>
      </div>
    </Col>

    <Col>
      <div className='mid-img-main-two'>
        <div className='circle-two'>
          <img 
          className='work2-img'
          src={work2}
          alt='work2'
          />
        </div>
      </div>
      </Col>

      <Col>
      <div className='mid-img-main-three'>
        <div className='circle-three'>
          <img 
          className='work3-img'
          src={work3}
          alt='work3'
          />
        </div>
      </div>

      </Col>
      </Row>
    </container>

    <container>
      <Row md={3}>
        <Col className='text-row' >
        <h2>FULLY RESPONSIVE</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        </Col>

        <Col className='text-row'>
             <h2>WELL DOCUMENTED</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        </Col>

        <Col className='text-row'>
        <h2>EASY TO USE</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        </Col>

      </Row>
    </container >

    <container>
    <div className='mid-after'>
      <div className='mid-after-sub'>
        <img className='mid-after-sub-img'
          src={pc}
          alt='pc'
          width='50%'
          height='50%'
        />
      </div>

      <div className='mid-after-sub-txt'>
        <h2>Who is Newsoft</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        <button className='mid-btn'>Read More</button>
      </div>

    </div>
    </container>

    <container>
      <h1 className='la-con-text'>NEW FEATURES</h1>
      <Row md={4}>
        <Col>
        <div  className='la-con-a'>
        <img className='img-a' src={f1} alt='f1'
        />
        </div>
        </Col>

        <Col>
        <div  className='la-con-b'>
        <img className='img-b' src={f2} alt='f2'
        />
        </div>
        </Col>

        <Col>
        <div  className='la-con-c'>
        <img className='img-c' src={f3} alt='f3'
        />
        </div>
        </Col>

        <Col>
        <div  className='la-con-d'>
        <img className='img-d' src={f4} alt='f4'
        />
        </div>
        </Col>
      </Row>
    </container>

    <container>
      <Row md={4}>
        <Col className='text-la' >
        <h2>CLEAN CODES</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        </Col>

        <Col className='text-la'>
             <h2>PERFECT SHOWCASE</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        </Col>

        <Col className='text-la'>
        <h2>FREE FONT</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        </Col>

        <Col className='text-la'>
        <h2>HIGH RESOLUTION</h2>
        <h5>Lorem ipsum dolor sit amet,consecteture adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venuam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</h5>
        </Col>

      </Row>
    </container >

    <container>
      <h1 className='la-head'>GET IN TOUCH</h1>
      <Row md={2}>
        <Col>
          <img className='la-head-img' src={form} />
        </Col>
        <Col className='la-head-form'>
          <form className='las-for'>
            <Col md={4}>
            <Row className='na' ><input className='name' type='text' placeholder='Name' /></Row>
            <Row className='e'><input className='email' type='email' placeholder='Email' /></Row>
            <Row className='pa'><input className='password' type='password' placeholder='Password' /></Row>
            <Row className='mas'><textarea className='massage' placeholder='Massage' /></Row>
            <Row className='b'><Button className='btn'>Send</Button></Row>
            </Col>
          </form>
        </Col>
      </Row>
    </container>

    <container>
      <div className='footer'>
        <Row md={4}>
          <Col className='lis-a'><ul>NEW SOFTWARE
            <li>About us</li>
            <li>About department</li>
            <li>About service</li>
            <li>service</li>
            <li>Contact us</li>
            </ul></Col>

            <Col className='lis-a'><ul>THE SERVICE
            <li>About us</li>
            <li>About department</li>
            <li>About service</li>
            <li>service</li>
            <li>Contact us</li>
            </ul></Col>

            <Col className='lis-a'><ul>CONTACT US
            <li>About us</li>
            <li>About department</li>
            <li>About service</li>
            <li>service</li>
            <li>Contact us</li>
            </ul></Col>
        </Row>

        <Row md={2}>
          <Col ><img className='fb' src={fb} />
            <img className='twitter' src={twitter} />
            <img className='linked' src={linked} />
            <img className='insta' src={instagram1} />

          </Col>
          <Col><h3 style={{color:"white"}}>NEWSLETTER</h3><input className='text-box' type='text' placeholder='Enter your Email'></input></Col>
        </Row>
      </div>

    </container>
    
    </>
  )
}

export default Top
