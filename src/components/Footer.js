import React from 'react';
import { useNavigate } from 'react-router-dom';
import RoutesConfig from '../constants/Routes';

export default function Footer() {
  const currentYear = new Date().getFullYear(); 
  const nav = useNavigate();

  return (
    <footer>
      <div className="footer-content">
        <p className='logo' onClick={() => nav(RoutesConfig.Main.path)}>Tasty</p> 
        <div className="footer-contact" style={{ marginLeft: '20px', marginRight: '20px' }}> 
          <div>Електронна пошта: pasvadym777@gmail.com</div>
          <div>Телефон: +38 (096) 745 8778</div>
        </div>
        <div className="footer-social-icons" style={{ marginLeft: '20px', marginRight: '20px' }}> 
          <a href="https://t.me/krat0s107" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://www.instagram.com/7igma7" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className="footer-rights" style={{ marginRight: '20px' }}>Всі права захищені &copy; {currentYear}</div> 
      </div>
    </footer>
  );
}