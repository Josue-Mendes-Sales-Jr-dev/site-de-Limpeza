import { Title } from "../../components/Title"
import { Container,Box,Form } from "./styled"
import React, { useEffect } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Form1 } from "../../components/BudgetComponents/Form";

const containerStyle = {
    width: '100%',
    height: '100%'
  };
  
export const Budget=()=> {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDc28u5mU0MCvXCcf7PVMnvlRqwBxJH6TU"
      })    

    return (
        <Container>
            <Title text1="" text2="Orçamento"/>
            <div className="CBox">
                <div className="P">
                <p>Precisa da nossa ajuda? Se 
                  tem alguma questão não hesite em contactar-nos.
                </p>
                </div>
                <Box>
                   <Form >
                     <Form1 />
                  </Form>
                  <div className="map">
                  { isLoaded&&<GoogleMap
                    mapContainerStyle={containerStyle}
                    center={
                        {lat:-9.752364094492373,
                        lng: -36.66252858725646}
                    }
                   zoom={15}/>}
                  </div>
                </Box>
            </div>
        </Container>
    )
  }