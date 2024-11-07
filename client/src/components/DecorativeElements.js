import React from 'react';
import { FaDice, FaCardsSpading, FaChips } from 'react-icons/fa';

export const CasinoIcons = () => (
  <div className="casino-icons">
    <FaDice className="dice-icon" />
    <FaCardsSpading className="cards-icon" />
    <FaChips className="chips-icon" />
  </div>
);

export const Separator = () => (
  <div className="decorative-separator">
    <span className="separator-line"></span>
    <FaCardsSpading className="separator-icon" />
    <span className="separator-line"></span>
  </div>
);
