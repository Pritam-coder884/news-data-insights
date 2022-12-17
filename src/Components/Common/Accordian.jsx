import React from "react";
import {Accordion} from 'flowbite-react'

function Accordian({ title, callback, subTitle }) {

  //console.log('titl',subTitle)

  return (
    <>
      <Accordion
        alwaysOpen={true}
        style={{ color: "red", marginBottom: "10px", border: 0 }}
        className={"mt-10"}
      
      >
        <Accordion.Panel>
          <Accordion.Title>{title}</Accordion.Title>
          <Accordion.Content>
            {subTitle?.map((i,index) => (
              // if(title==="")
              <div>
                <input type={"checkbox"} id={index} value={i?.code ?? i?.name ?? i?.news_src_name} className="mr-2" onChange={(i)=>callback(i,title)}/>
                
                <label for={index}>{Object.values(i)?.[0]} </label>
              </div>
            ))}
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
}

export default Accordian;
