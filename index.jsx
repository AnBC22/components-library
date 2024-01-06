import React from 'react';
import ReactDOM from 'react-dom/client';
import Menu from "./components/Menu/index"
import Star from "./components/Star"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import Card from "./components/Card/index"
import TestimonialNoImage from "./components/TestimonialNoImage/TestimonialNoImage"
import flight from "/components/TestimonialNoImage/logos/flight.png"
import workation from "/components/TestimonialNoImage/logos/workation.svg"

import { RiSecurePaymentLine } from "react-icons/ri"
import { FaCloudDownloadAlt } from "react-icons/fa"

function App() {
  return (
    <main>
    
      <br></br>
      
      <Badge text="fruits" color="gray" shape="pill" />
      <Badge text="apple" color="red" />
      <Badge text="banana" color="yellow" shape="pill" />
      <Badge text="lemon" color="green" />
      
      <br></br>
      <br></br>
      
      <Banner status="neutral" title="Update available" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
      <Banner status="success" title="Congratulations!" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."/>
      <Banner status="warning" title="Attention" />
      <Banner status="error" title="There is a problem with your application" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum."/>
      
      <br></br>
      <br></br>
    
      <Card>
        <Card.Icon position="top" color="blue">
        </Card.Icon>
        <Card.Content title="Easy Deployment">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card.Content>
      </Card>
      
      <Card>
        <Card.Icon position="left" color="red">
          <RiSecurePaymentLine />
        </Card.Icon>
        <Card.Content title="Secure Access">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card.Content>
      </Card>
      
      <Card>
        <Card.Icon position="bottom" color="yellow">
          <FaCloudDownloadAlt />
        </Card.Icon>
        <Card.Content title="Download data">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card.Content>
      </Card>
      
      <br></br>
      <br></br>
      <br></br>

      <TestimonialNoImage type="mobile" logo={workation} text="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”" name="May Andersons" company="Workcation, CTO"/>
      
      <TestimonialNoImage type="desktop" logo={workation} text="“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”" name="May Andersons" company="Workcation, CTO"/>
      
      <TestimonialNoImage type="mobile" logo={flight} text="“Nullam non diam eu tortor pulvinar ultrices non ac sapien. Nulla mollis vehicula placerat. In hac habitasse platea dictumst. Nunc sit amet quam id nunc pellentesque interdum.”" name="John Smith" company="Flight CA, CEO"/>
    
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
