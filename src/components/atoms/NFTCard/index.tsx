/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { MainCard, NFTDescription, NFTId, NFTName } from './styles';
import { INFTCard } from '@atoms/NFTCard/types';

const NFTCard: React.FC<INFTCard> = ({ ...props }) => {
  AOS.init();
  return (
    <>
      {props && (
        <MainCard data-aos="zoom-in" data-aos-duration="700">
          <img src={props.file_url} alt={props.name} />
          <NFTName>{props.name}</NFTName>
          <NFTDescription>{props.description}</NFTDescription>
          {props.token_id && <NFTId>ID: {props.token_id}</NFTId>}
        </MainCard>
      )}
    </>
  );
};

export { NFTCard };