import './Bg.css'
import React from 'react';

interface BgProps {
  style?: React.CSSProperties; // Add this line to accept style props
}

const Bg: React.FC<BgProps> = ({ style }) => {
  return (
    <div style={style} className="bg-component">
      <div className="area">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
    </div>
  );
};

export default Bg;
