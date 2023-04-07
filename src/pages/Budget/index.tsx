import { Title } from "../../components/Title"
import { Container,Box,Form } from "./styled"
import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Form1 } from "../../components/BudgetComponents/Form";

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
export const Budget=()=> {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDc28u5mU0MCvXCcf7PVMnvlRqwBxJH6TU"
      })
    
      const [map, setMap] = React.useState(null)
    

    
    return(
        <Container>
            <Title text1="" text2="Orçamento"/>
            <div className="CBox">
                <div className="b">
                <p>Precisa da nossa ajuda? Se tem alguma questão não hesite em contactar-nos.
                </p>
                </div>
                <Box>
                   <Form >
                     <Form1 />
                  </Form>
                  <div className="map">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={
                        {lat:-9.752364094492373,
                        lng: -36.66252858725646}
                    }
                   zoom={15}/>
                  </div>
                </Box>
            </div>
        </Container>
    )}